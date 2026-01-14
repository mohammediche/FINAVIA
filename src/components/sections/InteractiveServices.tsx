"use client";
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2, ChevronDown, ChevronUp } from 'lucide-react';
import FloatingStars from '@/components/ui/FloatingStars';
import Link from 'next/link';
import { SERVICES } from '@/lib/data';
import { AccordionItem } from '@/components/ui/AccordionItem';

const InteractiveServices = ({
                                 showHeader = false,
                                 badge = "Nos Domaines d'Intervention",
                                 title = <>Solutions sur-mesure pour la transformation <br/> de votre service financier</>,
                                 description = "Nous intervenons à chaque étape clé de votre développement financier, de la structuration initiale aux opérations complexes."
                             }) => {

    const [openServiceIds, setOpenServiceIds] = useState<number[]>([1]);

    const handleOpenAll = () => {
        const allIds = SERVICES.map(s => s.id);
        setOpenServiceIds(allIds);
    };

    const handleCloseAll = () => {
        setOpenServiceIds([]);
    };

    const toggleService = (id: number) => {
        setOpenServiceIds(prev =>
            prev.includes(id)
                ? prev.filter(item => item !== id)
                : [...prev, id]
        );
    };

    return (
        <section className="bg-white py-24 px-6 relative overflow-hidden">
            <FloatingStars color="pink" />

            {/* Restored Header Section */}
            {showHeader && (
                <div className="text-center mb-16 relative z-10">
                    <motion.span
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-[#e51990] font-bold text-sm uppercase tracking-wider bg-[#e51990]/5 px-4 py-1.5 rounded-full inline-block mb-4"
                    >
                        {badge}
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-extrabold text-[#07036e] mb-4"
                    >
                        {title}
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 10 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-500 max-w-2xl mx-auto text-lg"
                    >
                        {description}
                    </motion.p>
                </div>
            )}

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Toggle Controls */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-4 mb-12"
                >
                    <button
                        onClick={handleOpenAll}
                        className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 bg-[#07036e] text-white shadow-lg shadow-[#07036e]/20 hover:bg-[#07036e]/90 hover:scale-105 active:scale-95"
                    >
                        <ChevronDown size={18} />
                        Tout voir
                    </button>

                    <button
                        onClick={handleCloseAll}
                        className="flex items-center gap-2 px-8 py-3 rounded-full text-sm font-bold transition-all duration-300 border border-gray-200 text-gray-600 bg-white hover:border-[#e51990] hover:text-[#e51990] hover:scale-105 active:scale-95"
                    >
                        <ChevronUp size={18} />
                        Tout réduire
                    </button>
                </motion.div>

                <div className="space-y-4">
                    <AnimatePresence mode='wait'>
                        {SERVICES.map((service) => (
                            <AccordionItem
                                key={service.id}
                                title={service.title}
                                icon={<service.icon size={28} />}
                                isOpen={openServiceIds.includes(service.id)}
                                onToggle={() => toggleService(service.id)}
                                variant="service"
                            >
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <Link
                                            href={service.link || "#"}
                                            className="inline-flex items-center gap-2 text-[#e51990] font-bold hover:gap-3 transition-all group/link"
                                        >
                                            Découvrir cette expertise <ArrowRight size={18} className="group-hover/link:translate-x-1 transition-transform" />
                                        </Link>
                                    </div>
                                    <div className="bg-gray-50 rounded-2xl p-6">
                                        <h4 className="text-[#07036e] font-bold mb-4 text-sm uppercase tracking-wide">Bénéfices clés</h4>
                                        <ul className="space-y-3">
                                            {service.benefits.map((benefit, index) => (
                                                <li key={index} className="flex items-start gap-3 text-gray-600 text-sm">
                                                    <CheckCircle2 size={16} className="text-[#e51990] mt-0.5 shrink-0" />
                                                    <span>{benefit}</span>
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </AccordionItem>
                        ))}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

export default InteractiveServices;