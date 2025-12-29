"use client";

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Link from 'next/link';
import {
    ArrowRight, Plus, Minus, CheckCircle2
} from 'lucide-react';
import FloatingStars from '@/components/ui/FloatingStars';
import { Button } from '@/components/ui/button';
import InteractiveServices from "@/components/sections/InteractiveServices";
import StandardCTA from "@/components/sections/StandardCTA";

export default function ExpertiseSelectionPage() {



    return (
        <div className="min-h-screen bg-white">
            {/* 1. Header Section */}
            <section className="bg-[#07036e] text-white pt-40 pb-20 px-6 mb-20 relative overflow-hidden">
                <FloatingStars color="white" />
                <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e51990] rounded-full blur-[150px] opacity-20 pointer-events-none" />

                <div className="max-w-7xl mx-auto text-center relative z-10">
                    <motion.span
                        initial={{ opacity: 0 }} animate={{ opacity: 1 }}
                        className="text-[#e51990] font-bold text-sm uppercase tracking-wider bg-white/10 px-4 py-1 rounded-full mb-6 inline-block"
                    >
                        Savoir-Faire
                    </motion.span>
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
                        className="text-4xl md:text-6xl font-extrabold mb-8"
                    >
                        Choisissez votre levier <br/> de performance
                    </motion.h1>
                    <p className="text-xl text-white/80 max-w-3xl mx-auto font-light leading-relaxed">
                        Une offre structurée pour répondre à chaque étape de votre développement financier.
                    </p>
                </div>
            </section>

            {/* 2. Accordion Selection Section */}
            <InteractiveServices showHeader={false}/>

            {/* 3. CTA Section */}
            <StandardCTA
                variant="light"
                title="Besoin d'une estimation financière ?"
                description="Nos experts peuvent réaliser un diagnostic rapide pour identifier vos priorités."
                buttonText="Demander conseil"
                buttonHref="/contact"
            />
        </div>
    );
}