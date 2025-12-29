"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import FloatingStars from '@/components/ui/FloatingStars';
import Link from 'next/link';
import { SERVICE_CATEGORIES, SERVICES } from '@/lib/data';
import { AccordionItem } from '@/components/ui/AccordionItem';

interface InteractiveServicesProps {
    showHeader?: boolean;
    badge?: string;
    title?: React.ReactNode;
    description?: string;
}

const InteractiveServices = ({
                                 showHeader = false,
                                 badge = "Nos Domaines d'Intervention",
                                 title = <>Solutions sur-mesure <br/> pour votre croissance</>,
                                 description = "Nous intervenons à chaque étape clé de votre développement financier, de la structuration initiale aux opérations complexes."
                             }: InteractiveServicesProps) => {
    const [activeCategory, setActiveCategory] = useState('all');
    const [openServiceId, setOpenServiceId] = useState<number | null>(1);

    const filteredServices = activeCategory === 'all'
        ? SERVICES
        : SERVICES.filter(service => service.category === activeCategory);

    return (
        <section className=" bg-white py-24 px-6 relative overflow-hidden">
            <FloatingStars color="pink" />
            {showHeader && (
                <div className="text-center mb-16">
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
            {/* Decorative Background Elements */}
            <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#07036e] rounded-full blur-[120px] opacity-5 -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-[#e51990] rounded-full blur-[120px] opacity-5 translate-x-1/2 translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                {/* Filter Buttons */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-wrap justify-center gap-3 mb-12"
                >
                    {SERVICE_CATEGORIES.map((cat) => (
                        <button
                            key={cat.id}
                            onClick={() => { setActiveCategory(cat.id); setOpenServiceId(null); }}
                            className={`px-6 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 border ${
                                activeCategory === cat.id
                                    ? 'bg-[#07036e] text-white border-[#07036e] shadow-lg shadow-[#07036e]/20 scale-105'
                                    : 'bg-white text-gray-600 border-gray-200 hover:border-[#e51990] hover:text-[#e51990]'
                            }`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </motion.div>

                {/* Accordion Service List using the Shared Atom */}
                <div className="space-y-4">
                    <AnimatePresence mode='wait'>
                        {filteredServices.map((service) => (
                            <AccordionItem
                                key={service.id}
                                title={service.title}
                                icon={<service.icon size={28} />}
                                isOpen={openServiceId === service.id}
                                onToggle={() => setOpenServiceId(service.id)}
                                variant="service"
                            >
                                {/* Internal content remains specific to Services */}
                                <div className="grid md:grid-cols-2 gap-8">
                                    <div>
                                        <p className="text-gray-600 leading-relaxed mb-6">
                                            {service.description}
                                        </p>
                                        <Link
                                            href={service.link  || "#"}
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