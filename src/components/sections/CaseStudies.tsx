"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import FloatingStars from '@/components/ui/FloatingStars';
import Image from 'next/image';
import Link from 'next/link';
import { CASE_STUDIES } from '@/lib/data';

const CaseStudies = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const [currentIndex, setCurrentIndex] = useState(0);
    const [itemsPerView, setItemsPerView] = useState(1);

    // Safe window resizing logic
    useEffect(() => {
        const handleResize = () => {
            setItemsPerView(window.innerWidth >= 1024 ? 2 : 1);
        };

        // Set initial value safely only on client
        handleResize();

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const maxIndex = Math.max(0, CASE_STUDIES.length - itemsPerView);

    const handleDotClick = (index: number) => {
        const safeIndex = Math.min(index, maxIndex);
        setCurrentIndex(safeIndex);
    };

    const handlePrev = () => {
        setCurrentIndex((prev) => Math.max(0, prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => Math.min(maxIndex, prev + 1));
    };

    return (
        <section id="concrete-results" className="py-24 px-6 bg-[#07036e] relative overflow-hidden" ref={ref}>
            <FloatingStars color="white" />
            <div className="max-w-7xl mx-auto relative z-10">

                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-20"
                >
          <span className="text-[#e51990] font-bold text-sm uppercase tracking-wider bg-white/10 px-4 py-1 rounded-full">
            Nos résultats concrets
          </span>
                    <h2 className="text-4xl md:text-5xl font-bold mt-6 text-white leading-tight">
                        Des impacts mesurables<br />sur votre business
                    </h2>
                </motion.div>

                {/* Carousel Container */}
                <div className="relative max-w-6xl mx-auto">

                    {/* Desktop Navigation Arrows */}
                    <div className="hidden lg:flex justify-end gap-3 mb-6 pr-4">
                        <button
                            onClick={handlePrev}
                            disabled={currentIndex === 0}
                            className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all ${
                                currentIndex === 0 ? 'opacity-30 cursor-not-allowed text-white' : 'hover:bg-[#e51990] hover:border-[#e51990] text-white cursor-pointer'
                            }`}
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={handleNext}
                            disabled={currentIndex >= maxIndex}
                            className={`w-12 h-12 rounded-full border border-white/20 flex items-center justify-center transition-all ${
                                currentIndex >= maxIndex ? 'opacity-30 cursor-not-allowed text-white' : 'hover:bg-[#e51990] hover:border-[#e51990] text-white cursor-pointer'
                            }`}
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>

                    <div className="overflow-hidden py-8 px-4 -mx-4">
                        {/* Slider Track */}
                        <motion.div
                            className="flex"
                            // Calculate percentage movement based on items per view
                            animate={{ x: `-${currentIndex * (100 / itemsPerView)}%` }}
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        >
                            {CASE_STUDIES.map((study, index) => (
                                <div
                                    key={index}
                                    className="w-full lg:w-1/2 flex-shrink-0 px-4"
                                >
                                    <motion.div
                                        whileHover={{ y: -10 }}
                                        className="bg-white rounded-[2rem] overflow-hidden shadow-2xl h-full flex flex-col"
                                    >
                                        {/* Image Top */}
                                        <div className="h-64 overflow-hidden relative">
                                            <Image
                                                src={study.image}
                                                alt={study.title}
                                                fill
                                                className="object-cover transition-transform duration-700 hover:scale-110"
                                                sizes="(max-width: 1024px) 100vw, 50vw"
                                            />
                                            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                                        </div>

                                        {/* Content Block */}
                                        <div className="p-8 flex-grow flex flex-col">
                                            <h3 className="text-2xl font-bold text-[#07036e] mb-6">{study.title}</h3>

                                            <ul className="space-y-3 mb-8 flex-grow">
                                                {study.points.map((point, idx) => (
                                                    <li key={idx} className="flex items-start text-gray-600 font-medium">
                                                        <span className="text-[#e51990] text-xl font-bold mr-3 leading-none">›</span>
                                                        {point}
                                                    </li>
                                                ))}
                                            </ul>

                                            <div className="pt-4 border-t border-gray-100">
                                                <Link href="#contact" className="text-[#e51990] font-bold flex items-center gap-2 hover:gap-3 transition-all uppercase text-sm tracking-wide">
                                                    Demander un devis
                                                    <ArrowRight size={18} />
                                                </Link>
                                            </div>
                                        </div>
                                    </motion.div>
                                </div>
                            ))}
                        </motion.div>
                    </div>

                    {/* Dot Navigation */}
                    <div className="flex justify-center gap-3 mt-8">
                        {CASE_STUDIES.map((_, index) => {
                            // Only show dots for valid pages
                            if (index > maxIndex) return null;

                            return (
                                <button
                                    key={index}
                                    onClick={() => handleDotClick(index)}
                                    className={`transition-all duration-300 rounded-full ${
                                        currentIndex === index
                                            ? 'w-12 h-3 bg-[#e51990]'
                                            : 'w-3 h-3 bg-white/30 hover:bg-white/50'
                                    }`}
                                    aria-label={`Go to slide ${index + 1}`}
                                />
                            )})}
                    </div>
                </div>

            </div>
        </section>
    );
};

export default CaseStudies;