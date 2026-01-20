"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { NAVIGATION_LINKS } from "@/lib/data";
import blackLogo from '@/../public/images/homePage/logoBlack.png';
import whiteLogo from '@/../public/images/homePage/logoWhite.png';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const pathname = usePathname();

    const isHomePage = pathname === '/';

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    useEffect(() => {
        setIsMobileMenuOpen(false);
        window.scrollTo({ top: 0, left: 0, behavior: "instant" });
    }, [pathname]);

    // LOGIC:
    // 1. Navbar background: transparent until scroll (or mobile menu open)
    const showWhiteBg = isScrolled || isMobileMenuOpen;

    // 2. Logo Color:
    // - If it's the home page, it's ALWAYS black (because hero is white)
    // - If it's other pages, it's white until scroll, then becomes black.
    const useBlackLogo = isHomePage || isScrolled || isMobileMenuOpen;

    return (
        <motion.nav
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300
            ${
                showWhiteBg
                    ? 'bg-white shadow-md py-4 xl:bg-white/95 xl:backdrop-blur-lg'
                    : 'bg-transparent py-6'
            }
          `}
        >
            <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
                <Link href="/" className="z-[60] relative hover:scale-105 transition-transform">
                    <Image
                        src={useBlackLogo ? blackLogo : whiteLogo}
                        alt="FINAVIA Logo"
                        width={180}
                        height={90}
                        className="h-24 w-auto object-contain transition-opacity duration-300"
                        priority
                    />
                </Link>

                {/* DESKTOP MENU */}
                <div className="hidden xl:flex items-center absolute left-1/2 transform -translate-x-1/2 z-20">
                    <div className={`flex items-center gap-1 px-2 py-2 rounded-full border transition-all duration-300 ${
                        showWhiteBg
                            ? 'border-[#07036e]/10 bg-white/80 backdrop-blur-md shadow-sm'
                            : 'border-white/20 bg-white/10 backdrop-blur-sm'
                    }`}>
                        {NAVIGATION_LINKS.map((link) => {
                            const isActive = pathname === link?.href;
                            return (
                                <Link
                                    key={link?.href}
                                    href={link?.href}
                                    className={`px-4 py-2 rounded-full font-medium text-sm transition-all duration-300 whitespace-nowrap ${
                                        isActive
                                            ? 'bg-[#07036e] text-white shadow-sm'
                                            : useBlackLogo
                                                ? 'text-[#07036e] hover:bg-gray-100'
                                                : 'text-white hover:bg-white/20'
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
                    className={`xl:hidden p-2 z-[60] rounded-full shadow-sm transition-colors ${
                        useBlackLogo ? 'text-[#07036e] bg-gray-50' : 'text-white bg-white/10'
                    }`}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE MENU OVERLAY */}
            <AnimatePresence>
                {isMobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, x: "100%" }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: "100%" }}
                        className="fixed inset-0 bg-white z-[50] flex flex-col p-6 pt-32"
                    >
                        <div className="flex flex-col gap-3">
                            {NAVIGATION_LINKS.map((link) => (
                                <Link
                                    key={link?.href}
                                    href={link?.href}
                                    className={`text-xl font-medium px-6 py-4 rounded-2xl transition-colors ${
                                        pathname === link?.href
                                            ? 'bg-[#07036e] text-white'
                                            : 'bg-gray-50 text-[#07036e]'
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