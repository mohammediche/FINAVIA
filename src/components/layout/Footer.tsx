"use client";

import React from 'react';
import { Linkedin } from 'lucide-react';
import Link from 'next/link';
import FloatingStars from '@/components/ui/FloatingStars';
import { NAVIGATION_LINKS, EXPERTISE_LINKS, LEGAL_LINKS } from '@/lib/data';


const Footer = () => {
    return (
        <footer id="contact-footer" className="bg-[#07036e] text-white pt-16 pb-12 relative overflow-hidden">
            <FloatingStars />

            <div className="max-w-7xl mx-auto px-6 relative z-10">

                {/* Main Footer Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 mb-16 pt-8 border-t border-white/10">

                    {/* Column 1: Navigation */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Navigation</h3>
                        <ul className="space-y-3">
                            {NAVIGATION_LINKS.map((link) => (
                                <li key={link.name}>
                                    <Link href={link.href} className="text-white/80 hover:text-[#e51990] transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 2 & 3: Expertises */}
                    <div className="md:col-span-2 lg:col-span-2">
                        <h3 className="font-bold text-lg mb-6 text-white">Nos Expertises</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-3 gap-x-6">
                            {EXPERTISE_LINKS.map((link) => (
                                <li key={link.href} className="list-none">
                                    <Link href={link.href} className="text-white/80 hover:text-[#e51990] transition-colors text-sm">
                                        {link.name}
                                    </Link>
                                </li>
                            ))}
                        </div>
                    </div>

                    {/* Column 4: Resources */}
                    <div>
                        <h3 className="font-bold text-lg mb-6 text-white">Ressources</h3>
                        <ul className="space-y-3">
                            <li><Link href="/mentions-legales" className="text-white/80 hover:text-[#e51990] transition-colors text-sm">Mentions légales</Link></li>
                            <li><Link href="/expertises" className="text-white/80 hover:text-[#e51990] transition-colors text-sm">Toutes nos expertises</Link></li>
                            <li>
                                <a
                                    href="https://linkedin.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-2 text-white/80 hover:text-[#e51990] transition-colors text-sm"
                                >
                                    <Linkedin size={16} /> LinkedIn
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm text-white/60 border-t border-white/5 pt-8">
                    <p>Finavia © {new Date().getFullYear()}. Tous droits réservés.</p>
                    <div className="flex flex-wrap justify-center gap-6">
                        {LEGAL_LINKS.map((link) => (
                            <Link key={link.name} href={link.href} className="hover:text-white transition-colors">
                                {link.name}
                            </Link>
                        ))}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;