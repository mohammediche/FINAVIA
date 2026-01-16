"use client";

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight, CheckCircle2, Settings, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';
import FloatingStars from '@/components/ui/FloatingStars';
import {
    PARTNER_LOGOS,
    TRANSFORMATION_OBJECTIVES,
    INTEGRATION_STEPS,
    INTEGRATION_BLOCKS,
    TECH_PARTNERS_LIST
} from '@/lib/data';
import StandardCTA from "@/components/sections/StandardCTA";
import partenairesHeroImg from '@/../public/images/partenairesPage/partenairesHero.jpeg'
import bgHeroImg from '@/../public/images/partenairesPage/backgroundHeroSection.jpeg'

export default function PartnersPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* 1. Hero Section */}
            <section className="relative bg-[#07036e] text-white pt-48 pb-24 px-6 overflow-hidden rounded-b-[3rem]">
                <FloatingStars color="white" />
                <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
                    <Image alt="Modern financial software" fill className="object-cover" src={bgHeroImg} />
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#07036e] via-[#07036e]/90 to-transparent z-0 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#e51990] font-bold text-sm uppercase tracking-wider bg-white/10 px-4 py-1 rounded-full mb-6 inline-block">
              Écosystème & Innovation
            </span>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                            Accélérez votre transformation financière avec nos partenaires technologiques
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed font-light mb-8 max-w-xl">
                            Nous sélectionnons et intégrons les meilleures solutions du marché (IA, Compta, Tréso) pour automatiser vos processus et fiabiliser votre pilotage.
                        </p>
                        <Button asChild className="bg-[#e51990] hover:bg-[#c01478] text-white text-lg px-8 py-6 rounded-full shadow-lg">
                            <Link href="/contact">Demander une démo <ArrowRight className="ml-2" /></Link>
                        </Button>
                    </motion.div>

                    <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }} className="relative hidden lg:block">
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10 transform rotate-2 hover:rotate-0 transition-transform duration-500 aspect-[4/3]">
                            <Image src={partenairesHeroImg} alt="Dashboard" fill className="object-cover" />
                            <div className="absolute inset-0 bg-[#07036e]/20"></div>
                        </div>
                    </motion.div>
                </div>
            </section>

            {/* 2. Objectifs Section */}
            <section className="py-24 px-6 bg-white relative">
                <FloatingStars color="pink" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#07036e]">Objectifs de Transformation</h2>
                        <p className="text-gray-500 mt-4">Une stack technologique adaptée à chaque enjeu stratégique.</p>
                    </div>
                    <div className="grid md:grid-cols-2 gap-8">
                        {TRANSFORMATION_OBJECTIVES.map((obj, idx) => (
                            <motion.div key={idx} whileHover={{ y: -5 }} className="bg-white p-8 rounded-3xl border border-gray-100 shadow-xl group transition-all">
                                <div className="w-12 h-12 bg-[#e51990]/10 rounded-xl flex items-center justify-center text-[#e51990] mb-6">
                                    <obj.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold text-[#07036e] mb-4">{obj.title}</h3>
                                <p className="text-gray-600 mb-6 text-sm">{obj.desc}</p>
                                <div className="flex flex-wrap gap-4 items-center opacity-70 grayscale group-hover:grayscale-0 transition-all">
                                    {obj.logos.map((logo, lIdx) => (
                                        <div key={lIdx} className="relative h-6 w-[100px]">
                                            <Image src={logo} alt="Partner" fill className="object-contain" />
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Thematic Blocks */}
            <section className="py-24 px-6 bg-gradient-to-b from-gray-50 to-white relative">
                <div className="max-w-7xl mx-auto space-y-20 relative z-10">
                    {INTEGRATION_BLOCKS.map((block, idx) => (
                        <div key={idx} className="grid md:grid-cols-2 gap-12 items-center">
                            <div className={`${idx % 2 !== 0 ? 'md:order-2' : ''}`}>
                                <span className="text-[#e51990] font-bold text-sm uppercase tracking-wider mb-2 block">{block.id}. {block.tag}</span>
                                <h3 className="text-3xl font-bold text-[#07036e] mb-6">{block.title}</h3>
                                <div className="space-y-6">
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <h4 className="font-bold text-[#07036e] mb-2 flex items-center gap-2"><Settings size={18} className="text-[#e51990]" /> Actions Clés</h4>
                                        <p className="text-sm text-gray-600">{block.actions}</p>
                                    </div>
                                    <div className="bg-white p-5 rounded-xl border border-gray-100 shadow-sm">
                                        <h4 className="font-bold text-[#07036e] mb-2 flex items-center gap-2"><CheckCircle2 size={18} className="text-[#e51990]" /> Bénéfices</h4>
                                        <p className="text-sm text-gray-600">{block.benefits}</p>
                                    </div>
                                </div>
                                <Button asChild variant="outline" className="mt-8 border-[#07036e] text-[#07036e] hover:bg-[#07036e] hover:text-white transition-all">
                                    <Link href="/contact">Demander une démo</Link>
                                </Button>
                            </div>
                            <div className={`h-80 rounded-3xl overflow-hidden shadow-2xl relative ${idx % 2 !== 0 ? 'md:order-1' : ''}`}>
                                <Image alt={block.title} fill className="object-cover" src={block.image} />
                                <div className={`absolute inset-0 ${block.color}`}></div>
                            </div>
                        </div>
                    ))}
                </div>
            </section>

            {/* 4. Integration Process */}
            <section className="py-24 px-6 bg-[#07036e] relative overflow-hidden">
                <FloatingStars color="white" />
                <div className="max-w-7xl mx-auto relative z-10 text-white">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold">Notre Processus d'Intégration</h2>
                        <p className="text-blue-200 mt-4">Une méthodologie éprouvée pour une transition sans rupture.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                        {INTEGRATION_STEPS.map((item, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.1 }} className="relative z-10 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center group hover:-translate-y-2 transition-all">
                                <div className="w-10 h-10 mx-auto bg-[#e51990] text-white rounded-full flex items-center justify-center font-bold mb-4 shadow-md group-hover:scale-110">
                                    {item.step}
                                </div>
                                <h3 className="font-bold text-white text-sm leading-tight">{item.title}</h3>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Partenaires List Full */}
            <section className="py-24 px-6 bg-white relative">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
                        {TECH_PARTNERS_LIST.map((cat, idx) => (
                            <div key={idx} className="border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all bg-white">
                                <h3 className="font-bold text-[#07036e] mb-6 flex items-center gap-2">
                                    <cat.icon size={20} className="text-[#e51990]" /> {cat.category}
                                </h3>
                                <div className="space-y-6">
                                    {cat.partners.map((p, pIdx) => (
                                        <div key={pIdx} className="flex items-center gap-4">
                                            <div className="w-12 h-12 bg-gray-50 rounded-lg p-2 flex items-center justify-center relative">
                                                <Image src={p.logo} alt={p.name} fill className="object-contain p-1" />
                                            </div>
                                            <span className="font-medium text-gray-700">{p.name}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}

                        {/* Outils Automation & IA - Special Wide Card */}
                        {/*<div className="border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all bg-white lg:col-span-2">*/}
                        {/*    <h3 className="font-bold text-[#07036e] mb-6 flex items-center gap-2">*/}
                        {/*        <Zap size={20} className="text-[#e51990]" /> Automation & IA*/}
                        {/*    </h3>*/}
                        {/*    <div className="grid md:grid-cols-3 gap-6">*/}
                        {/*        {[*/}
                        {/*            { name: "Microsoft Copilot", logo: PARTNER_LOGOS.copilot },*/}
                        {/*           { name: "Open AI", logo: PARTNER_LOGOS.openai }*/}
                        {/*        ].map((p, idx) => (*/}
                        {/*            <div key={idx} className="flex items-center gap-4">*/}
                        {/*                <div className="w-12 h-12 bg-gray-50 rounded-lg p-2 flex items-center justify-center relative">*/}
                        {/*                    <Image src={p.logo} alt={p.name} fill className="object-contain p-1" />*/}
                        {/*                </div>*/}
                        {/*                <span className="font-medium text-gray-700">{p.name}</span>*/}
                        {/*            </div>*/}
                        {/*        ))}*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                    </div>
                </div>
            </section>

            {/* 6. Final CTA */}
            <StandardCTA
                variant="enjeux"
                title="Prêt à moderniser votre finance ?"
                description="Prenez rendez-vous pour une démonstration personnalisée de nos outils partenaires."
                buttonText="Prendre rendez-vous"
                buttonHref="/contact"
            />
        </div>
    );
}