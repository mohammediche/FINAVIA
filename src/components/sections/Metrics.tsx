"use client";

import React, { useRef, useEffect, useState } from 'react';
import { motion, useInView, useMotionValue, useTransform, animate } from 'framer-motion';
import FloatingStars from '@/components/ui/FloatingStars';
import { CheckCircle2 } from 'lucide-react';
import { METRICS } from '@/lib/data';


const SmoothCounter = ({ value, suffix, isInView }: { value: number; suffix: string; isInView: boolean }) => {
    const count = useMotionValue(0);
    const rounded = useTransform(count, (latest) => Math.round(latest));
    const [displayValue, setDisplayValue] = useState(0);

    useEffect(() => {
        if (isInView) {
            const controls = animate(count, value, {
                duration: 2,
                ease: "easeOut"
            });
            // Update local state for display
            const unsubscribe = rounded.on("change", (v) => setDisplayValue(v));
            return () => {
                controls.stop();
                unsubscribe();
            };
        }
    }, [isInView, value, count, rounded]);

    return <span>{displayValue}{suffix}</span>;
};


const Metrics = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    return (
        <section className="py-24 px-6 bg-[#07036e] relative overflow-hidden" ref={ref}>
            <FloatingStars color="white" />

            {/* Glow Effects */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e51990]/20 rounded-full blur-[100px] opacity-40 translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00c2ff]/10 rounded-full blur-[100px] opacity-40 -translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
          <span className="text-[#e51990] font-bold text-sm uppercase tracking-wider bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm">
            Performance
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-6 text-white">
                        L'impact FINAVIA en chiffres
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {METRICS.map((metric, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            className="bg-white rounded-[1.5rem] p-8 text-center shadow-xl hover:-translate-y-1 transition-transform duration-300 relative overflow-hidden group"
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-gray-50 opacity-0 group-hover:opacity-100 transition-opacity" />

                            <div className="relative z-10 flex flex-col h-full">
                                <div className={`text-5xl md:text-6xl font-extrabold ${metric.color} mb-3 tracking-tight`}>
                                    <SmoothCounter value={metric.value} suffix={metric.suffix} isInView={isInView} />
                                </div>

                                <p className="text-[#07036e] font-bold uppercase tracking-wider text-sm mb-6 border-b border-gray-100 pb-4 mx-8">
                                    {metric.label}
                                </p>

                                <div className="space-y-2 mt-auto text-left mx-auto">
                                    {metric.details.map((detail, i) => (
                                        <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                            <CheckCircle2 size={14} className="text-[#e51990]" />
                                            <span>{detail}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Metrics;