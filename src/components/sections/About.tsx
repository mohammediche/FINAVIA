"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, Award, Users, Rocket } from 'lucide-react';
import FloatingStars from '@/components/ui/FloatingStars';
import Link from 'next/link';
import Image from 'next/image';
import decouvrezFinaviaImg from '@/../public/images/homePage/decouvrezFinavia.png'

const About = () => {
    return (
        <section className="py-24 px-6 bg-[#07036e] text-white relative overflow-hidden">
            <FloatingStars color="white" />

            {/* Decorative Blur Circle */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e51990] rounded-full blur-[120px] opacity-20 translate-x-1/2 -translate-y-1/2 pointer-events-none" />

            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center relative z-10">

                {/* Left Column: Image with Subtle Badges */}
                <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Main Portrait Image */}
                    <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-4 border-white/10 shadow-2xl">
                        <Image
                            src={decouvrezFinaviaImg}
                            alt="Portrait of a friendly financial consultant"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#07036e]/80 to-transparent" />
                    </div>

                    {/* Subtle floating badges */}
                    <motion.div
                        initial={{ y: 20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                        className="absolute -bottom-6 -right-6 bg-white text-[#07036e] p-6 rounded-2xl shadow-xl max-w-xs hidden md:block"
                    >
                        <div className="flex items-center gap-3 mb-2">
                            <Users className="text-[#e51990]" />
                            <span className="font-bold text-lg">Équipe Expert</span>
                        </div>
                        <p className="text-sm text-gray-600">Des consultants issus des meilleures directions financières.</p>
                    </motion.div>

                    <motion.div
                        initial={{ y: -20, opacity: 0 }}
                        whileInView={{ y: 0, opacity: 1 }}
                        transition={{ delay: 0.4 }}
                        className="absolute -top-6 -left-6 bg-[#e51990] text-white p-4 rounded-2xl shadow-xl hidden md:block"
                    >
                        <div className="flex items-center gap-2">
                            <Award size={20} />
                            <span className="font-bold">Excellence</span>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Right Column: Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
          <span className="text-[#e51990] font-bold text-sm uppercase tracking-wider bg-white/10 px-4 py-1 rounded-full mb-6 inline-block">
            Découvrez Finavia
          </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
                        Le partenaire de votre <br/> transformation finance
                    </h2>
                    <p className="text-white/80 text-lg leading-relaxed mb-8 font-light">
                        Finavia n’est pas qu’un cabinet de conseil classique, nous intervenons sur les process, les outils et le pilotage pour construire une finance fiable, efficace et au service de la croissance.                    </p>

                    {/* Feature List */}
                    <div className="space-y-4 mb-8">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#e51990]/20 flex items-center justify-center">
                                <CheckCircle2 className="text-[#e51990] w-5 h-5" />
                            </div>
                            <span className="font-medium">Une approche opérationnelle, orientée terrain</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#e51990]/20 flex items-center justify-center">
                                <Rocket className="text-[#e51990] w-5 h-5" />
                            </div>
                            <span className="font-medium">Des experts issus de directions financières</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-[#e51990]/20 flex items-center justify-center">
                                <Users className="text-[#e51990] w-5 h-5" />
                            </div>
                            <span className="font-medium">Une maîtrise des outils et de l’écosystème finance</span>
                        </div>
                    </div>

                    {/* Stats Badges */}
                    <div className="flex gap-4 mb-8">
                        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm">
                            <span className="font-bold text-[#e51990]">+15</span> années d’expérience
                        </div>
                        <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-sm">
                            <span className="font-bold text-[#e51990]">98%</span> Satisfaction clients
                        </div>
                    </div>

                    <Link
                        href="/about"
                        className="inline-flex h-12 items-center justify-center rounded-full bg-white px-8 font-bold text-[#07036e] transition-colors hover:bg-gray-100 shadow-lg"
                    >
                        En savoir plus sur nous
                    </Link>
                </motion.div>

            </div>
        </section>
    );
};

export default About;