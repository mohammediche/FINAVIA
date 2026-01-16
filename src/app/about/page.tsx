"use client";

import React from 'react';
import Image from 'next/image';
import { Linkedin, MapPin, Mail, Phone, ExternalLink } from 'lucide-react';
import FloatingStars from '@/components/ui/FloatingStars';
import { ABOUT_PAGE_DATA } from '@/lib/data';
import StandardCTA from "@/components/sections/StandardCTA";
import engagementsBgImg from '@/../public/images/aboutPage/EngagementsBaground.jpeg'

export default function AboutPage() {
    return (
        <div className="min-h-screen bg-white">
            {/* 1. Header Section */}
            <section className="bg-gradient-to-b from-[#00114d] to-[#000b33] text-white pt-40 pb-24 px-6 relative overflow-hidden">
                <FloatingStars color="white" />
                <div className="absolute inset-0 opacity-10 pointer-events-none">
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e51990] rounded-full filter blur-[100px] opacity-40" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#07036e] rounded-full filter blur-[100px] opacity-40" />
                </div>

                <div className="max-w-7xl mx-auto text-center relative z-10">
          <span className="text-[#e51990] font-bold text-sm uppercase tracking-wider bg-white/10 px-4 py-1 rounded-full mb-6 inline-block">
            Notre Identité
          </span>
                    <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight">
                        Transformer la finance<br />pour libérer la croissance
                    </h1>
                    <p className="text-xl md:text-2xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                        Nés de la conviction que la direction financière doit être un moteur de stratégie et non un simple centre de coûts, nous accompagnons les entreprises vers l'excellence opérationnelle.
                    </p>
                </div>
            </section>

            {/* 2. Mission / Vision Section */}
            <section className="py-24 px-6 bg-white relative overflow-hidden">
                <FloatingStars color="pink" />
                <div className="absolute top-0 right-0 w-20 h-full bg-blue-50/50 skew-x-12 opacity-50"></div>
                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <h2 className="text-4xl font-bold text-[#07036e]">Notre Mission</h2>
                            <p className="text-lg text-gray-600 leading-relaxed">
                                Chez FINAVIA, notre mission est claire : <span className="font-bold text-[#07036e]">accompagner les entreprises à bâtir une direction finance moderne</span> efficace et alignée sur leurs ambitions.
                                <br /><br />
                                Du diagnostic à l'implémentation d'outils digitaux, nous pilotons l’évolution des dispositifs finance pour automatiser, sécuriser et fiabiliser leur gestion financière.
                            </p>

                            <div className="bg-blue-50 rounded-2xl p-8 border-l-4 border-[#e51990]">
                                <h3 className="text-2xl font-bold text-[#07036e] mb-4">Notre Vision</h3>
                                <p className="text-gray-600 font-medium italic">
                                    "Devenir le partenaire de référence pour la transformation digitale des directions financières en France, en alliant expertise humaine et puissance technologique."
                                </p>
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            {ABOUT_PAGE_DATA.values.map((val, idx) => (
                                <div key={idx} className="bg-white rounded-2xl p-6 shadow-lg border border-blue-100 hover:shadow-xl transition-shadow group">
                                    <div className="text-4xl mb-4 transform group-hover:scale-110 transition-transform">{val.icon}</div>
                                    <h4 className="text-xl font-bold text-[#07036e] mb-2">{val.title}</h4>
                                    <p className="text-sm text-gray-600 leading-relaxed">{val.text}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* 3. Founders Section */}
            <section className="py-24 px-6 bg-[#07036e] relative overflow-hidden">
                <FloatingStars color="white" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-[#e51990]/20 rounded-full filter blur-[80px] -translate-y-1/2 translate-x-1/2" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00c2ff]/10 rounded-full filter blur-[80px] translate-y-1/2 -translate-x-1/2" />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
            <span className="text-[#e51990] font-bold text-sm uppercase tracking-wider bg-white/10 px-4 py-1 rounded-full backdrop-blur-sm">
              Leadership
            </span>
                        <h2 className="text-4xl md:text-5xl font-bold mt-6 text-white">
                            Rencontrez nos fondatrices
                        </h2>
                        <p className="mt-4 text-lg text-white/80 font-light">
                            40 ans d'expérience cumulée au service de votre performance
                        </p>
                    </div>

                    <div className="grid md:grid-cols-2 gap-12">
                        {ABOUT_PAGE_DATA.founders.map((founder, idx) => (
                            <div key={idx} className="bg-white/5 backdrop-blur-md rounded-[2rem] overflow-hidden border border-white/10 flex flex-col md:flex-row group hover:bg-white/10 transition-colors duration-300">
                                <div className="md:w-2/5 relative overflow-hidden h-80 md:h-auto">
                                    <Image
                                        src={founder.image}
                                        alt={founder.name}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-105"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#07036e]/90 to-transparent md:hidden" />
                                </div>
                                <div className="md:w-3/5 p-8 flex flex-col justify-center">
                                    <h3 className="text-2xl font-bold text-white mb-1">{founder.name}</h3>
                                    <p className="text-[#e51990] font-bold text-sm mb-4 uppercase tracking-wide">{founder.role}</p>
                                    <p className="text-white/80 mb-6 leading-relaxed font-light text-sm">
                                        {founder.desc}
                                    </p>
                                    <a
                                        href={founder.linkedin}
                                        className="inline-flex items-center gap-2 text-white font-semibold hover:text-[#e51990] transition-colors mt-auto group/link"
                                    >
                                        <Linkedin size={20} />
                                        Suivre sur LinkedIn
                                        <ExternalLink size={16} className="opacity-0 -translate-x-2 group-hover/link:opacity-100 group-hover/link:translate-x-0 transition-all" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 4. CSR & Commitments Section */}
            <section className="py-24 px-6 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <Image
                        alt="Lush green forest background representing ecology"
                        fill
                        className="object-cover"
                        src={engagementsBgImg}
                    />
                    <div className="absolute inset-0 bg-green-900/40 mix-blend-multiply"></div>
                    <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/40"></div>
                </div>

                <div className="max-w-7xl mx-auto relative z-10 text-center text-white">
          <span className="text-green-300 font-bold text-sm uppercase tracking-wider bg-white/10 px-4 py-1 rounded-full mb-6 inline-block backdrop-blur-sm border border-green-400/30">
            Responsabilité Sociétale
          </span>
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">Nos Engagements RSE</h2>
                    <p className="text-lg text-green-50 font-medium mb-12 leading-relaxed max-w-3xl mx-auto">
                        Au-delà de la performance financière, nous nous engageons pour un impact positif.
                        FINAVIA intègre les critères ESG au cœur de sa stratégie.
                    </p>

                    <div className="grid md:grid-cols-3 gap-8 text-left">
                        {ABOUT_PAGE_DATA.commitments.map((item, idx) => (
                            <div key={idx} className="p-8 rounded-2xl bg-white/95 backdrop-blur-sm border border-white/20 shadow-xl hover:-translate-y-1 transition-transform duration-300">
                                <div className={`w-14 h-14 rounded-full flex items-center justify-center mb-6 ${item.bgClass} ${item.iconClass}`}>
                                    <item.icon size={28} />
                                </div>
                                <h4 className="text-xl font-bold text-[#07036e] mb-3">{item.title}</h4>
                                <p className="text-gray-700 leading-relaxed text-sm">{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* 5. Location Section */}
            <section className="py-24 bg-white border-b border-gray-100 relative overflow-hidden">
                <FloatingStars color="pink" />
                <div className="max-w-7xl mx-auto px-6 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl md:text-4xl font-bold text-[#07036e] mb-4">Où nous trouver</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">
                            Basés au cœur de Paris, nous intervenons dans toute la France pour accompagner votre transformation.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-5 gap-8 items-stretch h-full">
                        <div className="lg:col-span-3 min-h-[400px] rounded-3xl overflow-hidden shadow-lg border border-gray-200 relative group">
                            <iframe
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2624.084196160359!2d2.288289776856525!3d48.875661600185994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66f8da7582b13%3A0x6b907c6f0d14b1c7!2s12%20Av.%20de%20la%20Grande%20Arm%C3%A9e%2C%2075017%20Paris!5e0!3m2!1sen!2sfr!4v1710000000000!5m2!1sen!2sfr"
                                width="100%"
                                height="100%"
                                style={{ border: 0, minHeight: '100%' }}
                                allowFullScreen={true}
                                loading="lazy"
                                title="Finavia Office Location"
                                className="grayscale opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500"
                            ></iframe>
                        </div>

                        <div className="lg:col-span-2 flex flex-col gap-6">
                            <div className="bg-blue-50/50 rounded-3xl p-8 border border-blue-100 flex-grow flex flex-col justify-center hover:shadow-lg transition-shadow duration-300">
                                <ContactInfoItem icon={MapPin} title="Siège Social" detail={<>12 Avenue de la Grande Armée<br />75017 Paris, France</>} />
                                <ContactInfoItem icon={Mail} title="Email" detail={<a href="mailto:contact@finavia.fr" className="hover:text-[#e51990] transition-colors">contact@finavia.fr</a>} />
                                <ContactInfoItem icon={Phone} title="Téléphone" detail={<a href="tel:+33123456789" className="hover:text-[#e51990] transition-colors">+33 1 23 45 67 89</a>} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 6. Dedicated CTA Section */}
            <StandardCTA
                variant="navy"
                isGradientTitle={true}
                title="transformation finance"
                description="Chaque entreprise est unique. Prenons 30 minutes pour analyser vos enjeux et identifier les leviers de croissance immédiats."
                showSecondaryButton={true}
                showStatus={true}
            />
        </div>
    );
}

function ContactInfoItem({ icon: Icon, title, detail }: any) {
    return (
        <div className="flex items-start gap-4 mb-6 last:mb-0">
            <div className="w-12 h-12 bg-[#07036e]/10 text-[#07036e] rounded-full flex items-center justify-center shrink-0">
                <Icon size={24} />
            </div>
            <div>
                <h4 className="font-bold text-[#07036e] text-lg mb-1">{title}</h4>
                <div className="text-gray-600 leading-relaxed text-sm">
                    {detail}
                </div>
            </div>
        </div>
    );
}