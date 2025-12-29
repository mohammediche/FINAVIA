"use client";

import React, {useState} from 'react';
import { useParams, notFound } from 'next/navigation';
import Link from 'next/link';
import { motion } from 'framer-motion';
import {
    ArrowRight, CheckCircle2, ChevronRight, Home, Calendar
} from 'lucide-react';
import FloatingStars from '@/components/ui/FloatingStars';
import { EXPERTISE_DETAIL_DATA, ALL_EXPERTISES_NAV } from '@/lib/data';
import {ActionModal} from "@/components/modals/ActionModal";
import {ResourceForm} from "@/components/sections/ResourceForm";
import {AuditForm} from "@/components/sections/AuditForm";

export default function ExpertiseDetailPage() {

    const [modalConfig, setModalConfig] = useState<{
        isOpen: boolean;
        view: 'audit' | 'resource'
    }>({
        isOpen: false,
        view: 'audit'
    });

    const params = useParams();
    const slug = params.slug as string;
    const data = EXPERTISE_DETAIL_DATA[slug];

    if (!data) {
        notFound();
    }

    const Icon = data.icon;

    const openModal = (view: 'audit' | 'resource') => {
        setModalConfig({ isOpen: true, view });
    };

    const closeModal = () => {
        setModalConfig(prev => ({ ...prev, isOpen: false }));
    };

    return (
        <div className="min-h-screen bg-white">
            {/* 1. Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-100 pt-24">
                <div className="max-w-7xl mx-auto px-6 py-4 text-sm text-gray-500 flex items-center gap-2">
                    <Link href="/" className="hover:text-[#07036e] flex items-center gap-1">
                        <Home size={14} /> Accueil
                    </Link>
                    <ChevronRight size={14} />
                    <span className="text-gray-400">Expertises</span>
                    <ChevronRight size={14} />
                    <span className="text-[#e51990] font-medium">{data.title}</span>
                </div>
            </div>

            {/* 2. Hero Section */}
            <section className="bg-[#07036e] text-white py-20 px-6 relative overflow-hidden">
                <FloatingStars color="white" />
                <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e51990] rounded-full filter blur-[100px] opacity-20 translate-x-1/3 -translate-y-1/3" />
                <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#00c2ff] rounded-full filter blur-[100px] opacity-10 -translate-x-1/3 translate-y-1/3" />

                <div className="max-w-7xl mx-auto relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
                        <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-1.5 rounded-full text-[#e51990] font-bold text-sm uppercase tracking-wider mb-6">
                            <Icon size={16} /> Expertise
                        </div>
                        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-6 leading-tight">
                            {data.title}
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed font-light mb-8">
                            {data.description}
                        </p>
                    </motion.div>

                    <div className="relative">
                        <div className="absolute -inset-4 bg-gradient-to-r from-[#e51990] to-[#00c2ff] rounded-[2rem] opacity-30 blur-lg transform rotate-2"></div>
                        <div className="relative rounded-[2rem] overflow-hidden aspect-[4/3] shadow-2xl border border-white/10 group">
                            <img
                                src={data.heroImage}
                                alt={`${data.title} Illustration`}
                                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                            />
                            <div className="absolute inset-0 bg-[#07036e]/20 mix-blend-multiply"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Content Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <FloatingStars color="pink" />
                <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-16 relative z-10">
                    <div className="lg:col-span-2 space-y-16">
                        {/* Objectives */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8">
                            <h2 className="text-3xl font-bold text-[#07036e] mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-[#e51990]/10 text-[#e51990] flex items-center justify-center text-sm font-bold">01</span>
                                Caractéristiques Clés
                            </h2>
                            <div className="grid md:grid-cols-2 gap-6">
                                {data.objectives.map((obj: string, i: number) => (
                                    <div key={i} className="flex items-start gap-3 bg-gray-50 p-5 rounded-xl border border-gray-100 hover:shadow-md transition-shadow relative z-20">
                                        <CheckCircle2 className="text-[#e51990] shrink-0 mt-1" size={20} />
                                        <p className="text-gray-700 font-medium">{obj}</p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Deliverables */}
                        <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-6 md:p-8">
                            <h2 className="text-3xl font-bold text-[#07036e] mb-8 flex items-center gap-3">
                                <span className="w-8 h-8 rounded-lg bg-[#07036e]/10 text-[#07036e] flex items-center justify-center text-sm font-bold">02</span>
                                Nos Livrables Concrets
                            </h2>
                            <ul className="space-y-4">
                                {data.deliverables.map((del: string, i: number) => (
                                    <li key={i} className="flex items-center gap-4 border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                                        <div className="w-2 h-2 rounded-full bg-[#07036e]" />
                                        <span className="text-lg text-gray-700">{del}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* Benefits */}
                        <div className="bg-[#07036e] text-white p-10 rounded-[2.5rem] relative overflow-hidden">
                            <FloatingStars color="white" />
                            <div className="absolute top-0 right-0 w-64 h-64 bg-[#e51990] rounded-full blur-[80px] opacity-20 pointer-events-none" />
                            <h2 className="text-2xl font-bold mb-8 relative z-10">Bénéfices clés</h2>
                            <div className="grid md:grid-cols-2 gap-8 relative z-10">
                                {data.benefits.map((ben: string, i: number) => (
                                    <div key={i} className="flex gap-4">
                                        <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0 font-bold text-[#e51990]">
                                            {i + 1}
                                        </div>
                                        <p className="text-white/90 font-medium pt-2">{ben}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl relative z-20 text-center">
                                <h3 className="text-2xl font-bold text-[#07036e] mb-4">
                                    Vous ne savez pas par où commencer ?
                                </h3>
                                <p className="text-gray-600 mb-8">
                                    Nos experts sont là pour vous guider vers la solution la plus adaptée à votre situation.
                                </p>
                                {/* Button 1: Formulaire Audit */}
                                <motion.button
                                    onClick={() => openModal('audit')}
                                    whileHover={{ scale: 1.05 }}
                                    className="w-full bg-[#e51990] text-white text-lg font-bold py-4 rounded-full shadow-xl flex items-center justify-center gap-3 group"
                                >
                                    <span>Parler à un expert</span>
                                    <ArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                                </motion.button>
                                <div className="mt-6 flex items-center justify-center gap-4 text-sm text-gray-500">
                     <span className="flex items-center gap-2">
                       <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                       3 experts disponibles
                     </span>
                                    <span className="flex items-center gap-2">
                       <Calendar size={14} />
                       RDV possible dès demain
                     </span>
                                </div>
                            </div>

                            <div className="p-6 border border-gray-100 rounded-3xl bg-white relative z-20">
                                <h4 className="font-bold text-[#07036e] mb-4 text-sm uppercase tracking-wide">Pourquoi Finavia ?</h4>
                                <ul className="space-y-3 text-sm text-gray-600">
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#e51990]" /> Expertise Senior</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#e51990]" /> Approche terrain</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#e51990]" /> Outils digitaux</li>
                                    <li className="flex items-center gap-2"><CheckCircle2 size={16} className="text-[#e51990]" /> Réactivité totale</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Besoin d'un accompagnement Section */}
            <section className="py-16 px-6 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="bg-white rounded-[2.5rem] overflow-hidden border border-gray-100 shadow-2xl flex flex-col md:flex-row">
                        <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center flex-1 order-2 md:order-1">
               <span className="inline-block px-4 py-1.5 rounded-full bg-[#07036e]/10 text-[#07036e] font-bold text-sm tracking-wide mb-6 w-fit">
                 Accompagnement Sur Mesure
               </span>
                            <h3 className="text-3xl md:text-4xl font-bold text-[#07036e] mb-6">
                                Besoin d'un accompagnement ?
                            </h3>
                            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                                Transformez ce défi en opportunité de croissance. Obtenez une estimation précise et découvrez comment nous pouvons structurer votre réussite.
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4 items-start">
                                {/* Button 2: Formulaire Lead Magnet (PDF) */}
                                <motion.button
                                    onClick={() => openModal('resource')}
                                    whileHover={{ scale: 1.05 }}
                                    className="bg-[#e51990] text-white text-lg font-bold py-4 px-8 rounded-full shadow-lg shadow-[#e51990]/30 flex items-center gap-3 group"
                                >
                                    Obtenez une estimation <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
                                </motion.button>
                                <div className="flex items-center gap-2 text-gray-500 py-4 px-2">
                                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                                    <span className="text-sm font-medium">Réponse sous 24h</span>
                                </div>
                            </div>
                        </div>
                        <div className="h-64 md:h-auto md:w-[45%] lg:w-[40%] relative order-1 md:order-2">
                            <img src={data.ctaImage} alt="Consultation Finance" className="w-full h-full object-cover" />
                            <div className="absolute inset-0 bg-gradient-to-r from-[#07036e]/40 to-transparent mix-blend-multiply md:bg-gradient-to-l"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Explorez toutes nos expertises Section */}
            <section className="bg-white border-t border-gray-100 py-16 px-6 relative overflow-hidden">
                <FloatingStars color="pink" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <h3 className="text-2xl font-bold text-[#07036e]">Explorez toutes nos expertises</h3>
                        <p className="text-gray-500 mt-2">Une approche 360° pour couvrir l'ensemble de vos besoins financiers</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {ALL_EXPERTISES_NAV.map((item, idx) => (
                            <Link key={idx} href={item.path} className={`group flex items-start gap-4 p-6 rounded-2xl border transition-all duration-300 relative z-20 ${item.path.includes(slug) ? 'bg-[#07036e]/5 border-[#07036e]' : 'bg-white border-gray-100 hover:border-[#e51990]/30 hover:shadow-lg'}`}>
                                <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 transition-colors ${item.path.includes(slug) ? 'bg-[#07036e] text-white' : 'bg-[#e51990]/10 text-[#e51990] group-hover:bg-[#e51990] group-hover:text-white'}`}>
                                    <item.icon size={24} />
                                </div>
                                <div>
                                    <h4 className={`font-bold mb-1 transition-colors ${item.path.includes(slug) ? 'text-[#07036e]' : 'text-gray-800 group-hover:text-[#e51990]'}`}>{item.title}</h4>
                                    <span className="text-xs text-gray-400 font-medium uppercase tracking-wide group-hover:underline">Découvrir</span>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            <ActionModal
                isOpen={modalConfig.isOpen}
                onClose={closeModal}
                title={modalConfig.view === 'audit' ? "Diagnostic de positionnement (flash / express) " : "Formulaire Lead magnet"}
                description={
                    modalConfig.view === 'audit'
                        ? "Diagnostic court, sans engagement, destiné à être intégré directement sur le site internet."
                        : "Saisissez vos coordonnées pour recevoir votre document PDG ."
                }
            >
                {modalConfig.view === 'audit' ? (
                    <AuditForm onSuccess={closeModal} />
                ) : (
                    <ResourceForm onSuccess={closeModal} />
                )}
            </ActionModal>
        </div>
    );
}