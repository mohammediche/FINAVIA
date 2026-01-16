"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { AlertCircle, Search} from 'lucide-react';
import FloatingStars from '@/components/ui/FloatingStars';
import {
    CHALLENGES_DATA,
    PROBLEMS_DATA,
    BENEFITS_DATA,
    FAQ_SECTORS,
    FAQ_CONTENT
} from '@/lib/data';
import {AccordionItem} from "@/components/ui/AccordionItem";
import StandardCTA from "@/components/sections/StandardCTA";
import symptomesImg from '../../../public/images/enjeuxClientsPage/symptomesFinance.jpg'
import heroBgImg from '@/../public/images/enjeuxClientsPage/heroBackground.png'

export default function ClientChallengesPage() {
    const [activeSector, setActiveSector] = useState('Direction Financière / DAF');
    const [openQuestion, setOpenQuestion] = useState<number | null>(null);
    const [searchQuery, setSearchQuery] = useState('');

    const filteredQuestions = FAQ_CONTENT[activeSector].filter(
        item =>
            item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
            item.a.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div className="min-h-screen bg-white ">
            {/* 1. Hero Section */}
            <section className="relative bg-[#07036e] text-white pt-48 pb-24 px-6 overflow-hidden rounded-b-[3rem]">
                <FloatingStars color="white" />
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image alt="Équipe financière concentrée en réunion stratégique" fill className="object-cover" src={heroBgImg}/>
                </div>
                <div className="absolute inset-0 bg-gradient-to-r from-[#07036e] via-[#07036e]/90 to-transparent z-0"></div>

                <div className="max-w-7xl mx-auto relative z-10">
                    <motion.div initial={{ opacity: 0, x: -50 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[#e51990] font-bold text-sm uppercase tracking-wider bg-white/10 px-4 py-1 rounded-full mb-6 inline-block">
              Vos Réalités
            </span>
                        <h1 className="text-4xl md:text-6xl font-extrabold mb-6 leading-tight">
                            Vos Enjeux,<br /> Notre Priorité
                        </h1>
                        <p className="text-xl text-white/80 leading-relaxed font-light mb-8 max-w-xl">
                            Les directions financières font face à une pression inédite. <br/>
                            Nous transformons ces contraintes en leviers de performance.
                        </p>
                    </motion.div>
                </div>
            </section>

            {/* 2. Key Challenges Grid */}
            <section className="py-24 px-6 bg-white relative">
                <FloatingStars color="pink" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#07036e] mb-4">5 Défis Majeurs</h2>
                        <p className="text-gray-500 max-w-2xl mx-auto">Les obstacles qui freinent aujourd'hui votre croissance.</p>
                    </div>
                    <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
                        {CHALLENGES_DATA.map((challenge, idx) => (
                            <motion.div key={idx} whileHover={{ y: -5 }} className="bg-blue-50/50 p-6 rounded-2xl border border-blue-100 text-center group transition-all hover:shadow-lg hover:border-[#e51990]/30">
                                <div className="w-14 h-14 mx-auto bg-white rounded-full flex items-center justify-center text-[#e51990] shadow-sm mb-4 border border-blue-100 group-hover:bg-[#e51990] group-hover:text-white transition-colors">
                                    <challenge.icon size={24} />
                                </div>
                                <h3 className="font-bold text-[#07036e] mb-2">{challenge.title}</h3>
                                <p className="text-xs text-gray-500 leading-relaxed">{challenge.desc}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 3. Problems & Pain Points */}
            <section className="py-24 px-6 bg-blue-50/30 border-y border-blue-100 relative">
                <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#07036e] mb-8">
                            Les symptômes d'une finance <br/> <span className="text-[#e51990]">sous tension</span>
                        </h2>
                        <p className="text-gray-600 mb-8 text-lg">
                            Reconnaissez-vous ces situations dans votre quotidien ? Ces frictions sont les signaux d'alarme d'une structure qui a besoin d'évoluer.
                        </p>
                        <div className="relative rounded-2xl overflow-hidden shadow-xl aspect-video border-4 border-white">
                            <Image alt="Stress en entreprise" fill className="object-cover" src={symptomesImg} />
                            <div className="absolute inset-0 bg-[#07036e]/20"></div>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        {PROBLEMS_DATA.map((prob, idx) => (
                            <motion.div key={idx} initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} transition={{ delay: idx * 0.1 }} className="bg-white p-5 rounded-xl border-l-4 border-[#e51990] shadow-sm flex items-start gap-4 hover:bg-blue-50 transition-colors">
                                <AlertCircle className="text-[#e51990] shrink-0 mt-1" size={20} />
                                <div>
                                    <h4 className="font-bold text-[#07036e]">{prob.title}</h4>
                                    <p className="text-sm text-gray-500 mt-1">{prob.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. Concrete Benefits */}
            <section className="py-24 px-6 relative bg-[#07036e] text-white">
                <FloatingStars color="white" />
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-white">Ce que vous y gagnez</h2>
                        <p className="text-blue-200 mt-4">Des résultats mesurables et durables.</p>
                    </div>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                        {BENEFITS_DATA.map((benefit, idx) => (
                            <div key={idx} className="bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 shadow-xl hover:bg-white/15 transition-all text-center group">
                                <div className="w-16 h-16 mx-auto bg-white/20 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform">
                                    <benefit.icon size={32} />
                                </div>
                                <h3 className="text-xl font-bold text-white mb-3">{benefit.title}</h3>
                                <p className="text-blue-100 text-sm leading-relaxed">{benefit.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Accordion FAQ by Sector */}
            <section className="py-24 px-6 bg-white relative">
                <FloatingStars color="pink" />
                <div className="max-w-6xl mx-auto relative z-10">
                    <div className="text-center mb-12">
                        <span className="text-[#e51990] font-bold text-sm uppercase tracking-wider">Expertise Sectorielle</span>
                        <h2 className="text-3xl md:text-4xl font-bold text-[#07036e] mt-2 mb-6">Questions Fréquentes par Métier</h2>
                        <div className="max-w-md mx-auto relative">
                            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                            <input
                                type="text" placeholder="Rechercher une problématique..."
                                className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-200 focus:border-[#e51990] focus:ring-2 focus:ring-[#e51990]/20 outline-none transition-all shadow-sm bg-blue-50/30"
                                value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 mb-10">
                        {FAQ_SECTORS.map((sector) => (
                            <button key={sector.id} onClick={() => { setActiveSector(sector.label); setOpenQuestion(null); }}
                                    className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                                        activeSector === sector.label ? 'bg-[#07036e] text-white shadow-lg' : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                                    }`}
                            >
                                <sector.icon size={16} /> {sector.label}
                            </button>
                        ))}
                    </div>

                    <div className="bg-white rounded-3xl shadow-xl border border-gray-100 overflow-hidden min-h-[400px]">
                        <div className="p-8">
                            <h3 className="text-xl font-bold text-[#07036e] mb-6 border-b border-gray-100 pb-4">{activeSector}</h3>
                            {filteredQuestions.length === 0 ? (
                                <div className="text-center py-10 text-gray-400">Aucune question ne correspond à votre recherche dans cette catégorie.</div>
                            ) : (
                                <div className="space-y-4">
                                    {filteredQuestions.map((item, idx) => (
                                        <AccordionItem
                                            key={idx}
                                            title={item.q}
                                            isOpen={openQuestion === idx}
                                            onToggle={() => setOpenQuestion(openQuestion === idx ? null : idx)}
                                        >
                                            {/* The content of the FAQ */}
                                            <div className="text-gray-600 text-sm leading-relaxed">
                                                {item.a}
                                            </div>
                                        </AccordionItem>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Final CTA */}
            <StandardCTA
                variant="enjeux"
                title={<>Découvrez notre réponse concrète <br/> à vos enjeux</>}
                description="Ne laissez plus ces défis freiner votre développement. Nos experts ont les solutions pour structurer et accélérer votre finance."
                buttonText="Contactez-nous maintenant"
                buttonHref="/contact"
            />
        </div>
    );
}