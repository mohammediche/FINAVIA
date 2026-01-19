"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {NAVIGATION_LINKS} from "@/lib/data"
import blackLogo from '@/../public/images/homePage/logoBlack.png'
import whiteLogo from '@/../public/images/homePage/logoWhite.png'

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    // Handle scroll effect
    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        window.scrollTo({ top: 0, left: 0, behavior: "instant" as ScrollBehavior });
    }, [pathname]);


    useEffect(() => {
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, left: 0 });
    }, [pathname]);

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
            ${
            isScrolled || isMobileMenuOpen
                ? 'bg-white shadow-md py-4 xl:bg-white/95 xl:backdrop-blur-lg'
                : 'bg-transparent py-6'
             }
          `}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="z-2000 relative hover:scale-105 transition-transform">
                    <Image
                        src={isScrolled || isMobileMenuOpen ? blackLogo : whiteLogo}
                        alt="FINAVIA Logo"
                        width={140}
                        height={70}
                        className="h-28 w-auto object-contain transition-opacity duration-300"
                        priority
                    />
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden xl:flex items-center absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className="flex items-center gap-1 px-2 py-2 rounded-full border border-[#07036e]/10 bg-white/80 backdrop-blur-md shadow-sm">
                        {NAVIGATION_LINKS.map((link) => {
                            const isActive = pathname === link?.href;
                            return (
                                <Link
                                    key={link?.href}
                                    href={link?.href}
                                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                                        isActive
                                            ? 'bg-[#07036e] text-white shadow-sm'
                                            : 'text-[#07036e] hover:bg-gray-100'
                                    }`}
                                >
                                    {link?.name}
                                </Link>
                            );
                        })}
                    </div>
                </div>

                <div className="hidden xl:flex items-center z-20">
                    <Link
                        href="/contact"
                        className="px-6 py-2.5 bg-[#07036e] text-white rounded-full font-semibold hover:bg-[#052280] transition-all shadow-lg hover:shadow-xl text-sm"
                    >
                        Contact
                    </Link>
                </div>

                {/* MOBILE MENU TOGGLE */}
                <button
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    className="xl:hidden text-[#07036e] p-2 z-50 bg-white/80 rounded-full shadow-sm"
                    aria-label="Toggle Menu"
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        className="fixed inset-0 bg-white z-40 flex flex-col p-6 pt-24"
                    >
                        <div className="flex flex-col gap-3">
                            {NAVIGATION_LINKS.map((link) => (
                                <Link
                                    key={link?.href}
                                    href={link?.href}
                                    className={`text-xl font-medium px-6 py-4 rounded-2xl transition-colors ${
                                        pathname === link?.href ? 'bg-[#07036e] text-white' : 'bg-gray-50 text-[#07036e]'
                                    }`}
                                >
                                    {link?.name}
                                </Link>
                            ))}
                            <Link
                                href="/contact"
                                className="text-xl font-bold px-6 py-4 rounded-2xl bg-[#e51990] text-white text-center mt-4"
                            >
                                Contactez-nous
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
};

export default Navbar;