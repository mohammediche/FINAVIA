"use client";

import React from 'react';
import { ArrowRight, Mail, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import FloatingStars from '@/components/ui/FloatingStars';

interface CTAProps {
    title: React.ReactNode;
    description: string;
    buttonText?: string;
    buttonHref?: string;
    variant?: 'navy' | 'pink' | 'light' | 'enjeux';
    showSecondaryButton?: boolean;
    showStatus?: boolean;
    isGradientTitle?: boolean;
}

export default function StandardCTA({
                                        title,
                                        description,
                                        buttonText = "Prendre rendez-vous",
                                        buttonHref = "/contact",
                                        variant = 'navy',
                                        showSecondaryButton = false,
                                        showStatus = false,
                                        isGradientTitle = false
                                    }: CTAProps) {

    const styles = {
        navy: {
            section: "bg-[#07036e] py-20",
            title: "text-white text-3xl md:text-5xl",
            desc: "text-white/80",
            btn: "bg-[#e51990] hover:bg-[#c01478] text-white",
            secondary: "bg-transparent border-white/20 text-white hover:bg-white/10"
        },
        pink: {
            section: "bg-gradient-to-br from-[#e51990] to-[#b0106d] py-24",
            title: "text-4xl text-white",
            desc: "text-white/90",
            btn: "bg-white text-[#e51990] hover:bg-gray-100",
            secondary: ""
        },
        light: {
            section: "bg-blue-50 py-24",
            title: "text-3xl text-[#07036e]",
            desc: "text-gray-600",
            btn: "bg-[#07036e] hover:bg-[#052280] text-white",
            secondary: ""
        },
        enjeux: {
            section: "bg-[#07036e] py-20",
            title: "text-3xl md:text-5xl text-white",
            desc: "text-white/80",
            btn: "bg-[#e51990] hover:bg-[#c01478] text-white",
            secondary: ""
        }
    };

    const s = styles[variant];

    return (
        <section className={`px-6 relative overflow-hidden text-center ${s.section}`}>
            {(variant === 'navy' || variant === 'enjeux') && <FloatingStars color="white" />}

            {/* Specific decorative orbs for the "About" style (Navy) */}
            {variant === 'navy' && (
                <>
                    <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#e51990]/20 rounded-full blur-[120px] translate-x-1/3 -translate-y-1/2 pointer-events-none" />
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-[#00c2ff]/10 rounded-full blur-[100px] -translate-x-1/3 translate-y-1/3 pointer-events-none" />
                </>
            )}

            <div className="max-w-4xl mx-auto relative z-10">
                <h2 className={`font-bold mb-8 leading-tight ${s.title}`}>
                    {isGradientTitle ? (
                        <>
                            Discutons de votre <br/>
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#e51990] to-white">
                                {title}
                            </span>
                        </>
                    ) : title}
                </h2>

                <p className={`mb-10 mx-auto font-light leading-relaxed max-w-2xl ${s.desc} ${variant === 'pink' ? 'text-xl' : 'text-lg'}`}>
                    {description}
                </p>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <Button asChild className={`rounded-full px-10 font-bold transition-all shadow-xl ${s.btn} ${variant === 'light' ? 'h-16' : 'py-7 text-lg'}`}>
                        <Link href={buttonHref}>
                            {buttonText} <ArrowRight className="ml-2" size={20} />
                        </Link>
                    </Button>

                    {showSecondaryButton && (
                        <Button variant="outline" className={`rounded-full px-8 py-7 text-lg backdrop-blur-sm ${s.secondary}`}>
                            <Mail className="mr-2 h-5 w-5" /> Nous écrire
                        </Button>
                    )}
                </div>

                {showStatus && (
                    <div className="mt-12 flex items-center justify-center gap-8 text-white/60 text-sm">
                        <div className="flex items-center gap-2">
                            <div className="w-2 h-2 rounded-full bg-[#00ff9d] animate-pulse" />
                            Réponse sous 24h
                        </div>
                        <div className="flex items-center gap-2">
                            <Calendar size={14} />
                            Créneaux disponibles cette semaine
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}