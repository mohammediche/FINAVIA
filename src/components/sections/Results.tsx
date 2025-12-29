"use client";

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';
import FloatingStars from '@/components/ui/FloatingStars';
import Image from 'next/image';
import { TESTIMONIALS } from '@/lib/data';

const Results = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-50px' });

    return (
        <section className="py-24 px-6 bg-white relative overflow-hidden" ref={ref}>
            <FloatingStars color="pink" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
           <span className="text-[#e51990] font-bold text-sm uppercase tracking-wider bg-[#e51990]/5 px-4 py-1.5 rounded-full inline-block">
             Témoignages
           </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mt-4 text-[#07036e]">
                        Ce que disent nos clients
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {TESTIMONIALS.map((t, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                            transition={{ delay: i * 0.1 }}
                            className="bg-gray-50 p-8 rounded-[2rem] relative z-20 border border-gray-100 hover:shadow-xl hover:bg-white transition-all duration-300 group"
                        >
                            <Quote className="text-[#e51990]/10 w-12 h-12 absolute top-6 right-6 transition-colors group-hover:text-[#e51990]/20" />

                            <p className="text-lg text-gray-700 italic mb-8 relative z-10 leading-relaxed pr-4">
                                &ldquo;{t.text}&rdquo;
                            </p>

                            <div className="flex items-center gap-4 border-t border-gray-100 pt-6">
                                <div className="relative w-12 h-12 shrink-0">
                                    <Image
                                        src={t.image}
                                        alt={t.author}
                                        fill
                                        className="rounded-full object-cover ring-2 ring-white shadow-sm"
                                        sizes="48px"
                                    />
                                </div>
                                <div>
                                    <p className="font-bold text-[#07036e] leading-tight">{t.author}</p>
                                    <p className="text-xs text-gray-500 font-medium uppercase tracking-wide mt-1">
                                        {t.role}
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Results;