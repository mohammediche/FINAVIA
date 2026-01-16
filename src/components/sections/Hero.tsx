"use client";

import { motion } from 'framer-motion';
import { ArrowRight, Play } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import mainHeroImg from '@/../public/images/homePage/homeMainHero.png'

const Hero = () => {
    return (
        <section className="relative min-h-screen flex items-center justify-center pt-32 pb-32 px-6 overflow-hidden bg-white">

            {/* 1. Concentric Circles Background */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0">
                <div className="relative flex items-center justify-center">
                    <div className="absolute w-[600px] h-[600px] rounded-full border border-[#0b1a9c]/10 bg-transparent" />
                    <div className="absolute w-[900px] h-[900px] rounded-full border border-[#e51990]/10 bg-transparent" />
                    <div className="absolute w-[1200px] h-[1200px] rounded-full border border-[#0b1a9c]/10 bg-transparent" />
                </div>
            </div>

            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <motion.div
                    animate={{ x: ['-20%', '20%', '-20%'], y: ['0%', '10%', '0%'] }}
                    transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-1/4 -left-20 w-[600px] h-[600px] bg-[#e51990]/5 rounded-full blur-[100px] opacity-70"
                />
                <motion.div
                    animate={{ x: ['20%', '-20%', '20%'], y: ['0%', '-10%', '0%'] }}
                    transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute bottom-1/4 -right-20 w-[700px] h-[700px] bg-[#0b1a9c]/5 rounded-full blur-[100px] opacity-70"
                />
            </div>

            <div className="max-w-7xl mx-auto relative z-10 w-full">
                <div className="grid lg:grid-cols-12 gap-12 items-center">

                    {/* Text Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:col-span-5 space-y-8 relative"
                    >
                        <motion.div
                            animate={{ y: [0, -15, 0], scale: [1, 1.1, 1] }}
                            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                            className="absolute -top-12 -left-12 w-24 h-24 bg-[#e51990]/10 rounded-full blur-xl pointer-events-none z-0"
                        />

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                            className="inline-block px-4 py-2 bg-white/80 backdrop-blur-sm rounded-full border border-[#e51990]/20 shadow-sm relative z-10"
                        >
              <span className="text-[#e51990] font-semibold text-sm">
               Votre partenaire de transformation financière
              </span>
                        </motion.div>

                        <h1 className="relative z-10 text-5xl md:text-6xl font-bold leading-[0.95] md:leading-[1.05] ">
              <span className="bg-gradient-to-r from-[#0b1a9c] to-[#07036e] bg-clip-text text-transparent">
                Structurer.
              </span>
                            <br />
                            <span className="bg-gradient-to-r from-[#07036e] to-[#0b1a9c] bg-clip-text text-transparent">
                Digitaliser.
              </span>
                            <br />
                            <span className="text-[#e51990]">
                Automatiser.
              </span>
                        </h1>

                        <p className="text-lg md:text-xl text-gray-600 relative z-10 leading-[1.4]">
                            Finavia accompagne les dirigeants et directions financières des PME et ETI dans la structuration de leur fonction finance.
                            Nous mettons en place des process clairs, des outils adaptés et une automatisation pertinente pour une gestion financière fiable et alignée avec vos enjeux business.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 relative z-10">
                            <Link href="/contact">
                                <motion.div
                                    whileHover={{ scale: 1.05, boxShadow: '0 20px 40px rgba(229, 25, 144, 0.3)' }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-4 bg-[#e51990] text-white rounded-full font-semibold flex items-center justify-center gap-2 shadow-lg transition-all duration-300 cursor-pointer"
                                >
                                    Réservez votre appel gratuit
                                    <ArrowRight size={20} />
                                </motion.div>
                            </Link>

                            {/*<motion.button*/}
                            {/*    whileHover={{ scale: 1.05 }}*/}
                            {/*    whileTap={{ scale: 0.95 }}*/}
                            {/*    className="px-8 py-4 bg-white text-[#07036e] rounded-full font-semibold flex items-center justify-center gap-2 border-2 border-[#07036e] hover:bg-[#07036e] hover:text-white transition-all duration-300"*/}
                            {/*>*/}
                            {/*    <Play size={20} />*/}
                            {/*    Voir la démo*/}
                            {/*</motion.button>*/}
                        </div>
                    </motion.div>

                    {/* Image Content - Using Next.js Image for LCP Optimization */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="lg:col-span-7 relative h-full flex items-center"
                    >
                        <div className="relative w-full aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl border-4 border-white">
                            <Image
                                src={mainHeroImg}
                                alt="Financial consulting dashboard analysis by team"
                                fill
                                className="object-cover"
                                priority // Critical for LCP
                                sizes="(max-width: 1024px) 100vw, 58vw"
                            />
                            <div className="absolute inset-0 bg-gradient-to-tr from-[#0b1a9c]/20 to-[#e51990]/20" />
                        </div>

                        {/* Floating Card */}
                        <motion.div
                            animate={{ y: [0, -10, 0] }}
                            transition={{ duration: 3, repeat: Infinity }}
                            className="absolute -bottom-8 -left-8 bg-white/90 backdrop-blur-lg rounded-2xl p-6 shadow-2xl border border-gray-100 z-20"
                        >
                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 bg-gradient-to-br from-[#e51990] to-[#c01478] rounded-full flex items-center justify-center text-white font-bold text-xl">
                                    ✓
                                </div>
                                <div>
                                    <p className="font-bold text-[#07036e]">+250%</p>
                                    <p className="text-sm text-gray-600">Croissance moyenne</p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;