"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';
import FloatingStars from '@/components/ui/FloatingStars';
import { METHODOLOGY_PAGE_DATA } from '@/lib/data';
import StandardCTA from "@/components/sections/StandardCTA";

export default function MethodPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <section className="bg-[#07036e] text-white py-24 px-6 relative overflow-hidden pt-40">
                <FloatingStars color="white" />
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center relative z-10">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                    >
            <span className="text-[#e51990] font-bold text-sm uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full mb-6 inline-block">
              Notre Approche
            </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                            Notre méthode : fiabiliser vos chiffres en 90 jours
                        </h1>
                        <p className="text-xl text-white/80 font-light leading-relaxed mb-8">
                            Une méthodologie éprouvée pour transformer votre direction financière en véritable partenaire stratégique.
                        </p>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="absolute inset-0 bg-[#e51990] rounded-[2rem] transform rotate-3 blur-lg opacity-30"></div>
                        <img
                            src="https://horizons-cdn.hostinger.com/c4931007-62f8-47ef-9dbf-72bcd125e057/4341c9f82ada204c555e63399ddc6dbe.jpg"
                            alt="Méthodologie Finavia"
                            className="relative rounded-[2rem] shadow-2xl border-4 border-white/10 w-full object-cover h-[450px]"
                        />
                    </motion.div>
                </div>
            </section>

            {/* 2. Step-by-Step Methodology Section */}
            <section className="py-32 px-6 bg-gray-50 relative overflow-hidden">
                <div className="max-w-[1400px] mx-auto">
                    <div className="text-center mb-20 max-w-3xl mx-auto">
                        <h2 className="text-3xl md:text-5xl font-bold text-[#07036e] mb-6">Notre Méthode en 5 Étapes</h2>
                        <p className="text-xl text-gray-500 font-light">
                            Un parcours structuré pour passer de l'audit à la performance, sans perturber votre activité.
                        </p>
                    </div>

                    <div className="space-y-24 relative">
                        {/* Vertical connecting line for desktop */}
                        <div className="absolute left-[50%] top-0 bottom-0 w-px bg-gray-200 hidden lg:block transform -translate-x-1/2"></div>

                        {METHODOLOGY_PAGE_DATA.steps.map((step, index) => (
                            <motion.div
                                key={step.id}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{ duration: 0.7 }}
                                className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
                            >
                                {/* Visual Image Side */}
                                <div className="flex-1 w-full lg:w-1/2 relative group">
                                    <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-100 aspect-[4/3] bg-white">
                                        <img
                                            src={step.imgSrc}
                                            alt={step.title}
                                            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                                        />
                                        <div className="absolute top-6 left-6 w-16 h-16 bg-white rounded-2xl flex items-center justify-center shadow-lg text-2xl font-bold text-[#e51990]">
                                            0{step.id}
                                        </div>
                                    </div>
                                </div>

                                {/* Text Content Side */}
                                <div className="flex-1 w-full lg:w-1/2 relative">
                                    {/* Connector Dot */}
                                    <div className={`hidden lg:flex absolute top-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-[#e51990] border-4 border-white shadow-md z-10 ${index % 2 === 1 ? '-left-[49px]' : '-right-[51px]'}`}></div>

                                    <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-gray-100 relative hover:shadow-2xl transition-shadow duration-300">
                                        <span className="text-[#e51990] font-bold text-sm uppercase tracking-wide mb-2 block">{step.subtitle}</span>
                                        <h3 className="text-3xl font-bold text-[#07036e] mb-6">{step.title}</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed mb-8">
                                            {step.description}
                                        </p>

                                        <div className="space-y-3 pt-6 border-t border-gray-100">
                                            {step.benefits.map((benefit, i) => (
                                                <div key={i} className="flex items-center gap-3">
                                                    <CheckCircle2 size={20} className="text-[#00c2ff] shrink-0" />
                                                    <span className="text-gray-700 font-medium">{benefit}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Advantages Grid */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                <FloatingStars color="pink" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#07036e] mb-4">Avantages</h2>
                        <p className="text-gray-600">Pourquoi nous faire confiance ?</p>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6">
                        {METHODOLOGY_PAGE_DATA.advantages.map((adv, idx) => (
                            <div key={idx} className="bg-white p-6 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-center group">
                                <div className="w-14 h-14 mx-auto bg-[#07036e]/5 text-[#07036e] rounded-xl flex items-center justify-center mb-4 group-hover:bg-[#e51990] group-hover:text-white transition-colors">
                                    <adv.icon size={28} />
                                </div>
                                <h4 className="font-bold text-[#07036e] mb-2">{adv.title}</h4>
                                <p className="text-sm text-gray-500">{adv.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. The 5 Expertise Poles */}
            <section className="py-20 px-6 bg-[#07036e] text-white">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-3xl font-bold mb-12">Nos 5 Pôles d'Expertise</h2>
                    <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
                        {METHODOLOGY_PAGE_DATA.poles.map((pole, idx) => (
                            <Link href={pole.path} key={idx} className="group">
                                <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 hover:bg-white hover:text-[#07036e] transition-all duration-300 border border-white/10 h-full flex flex-col items-center justify-center gap-4">
                                    <pole.icon size={32} className="text-[#e51990] group-hover:scale-110 transition-transform" />
                                    <span className="font-bold text-sm md:text-base">{pole.title}</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. CTA Section */}
            <StandardCTA
                variant="pink"
                title="Planifiez un diagnostic gratuit"
                description="30 minutes pour échanger sur vos enjeux et identifier les leviers de performance."
                buttonHref="#contact-footer"
            />
        </div>
    );
}