"use client";

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus, ChevronDown } from 'lucide-react';

interface AccordionItemProps {
    title: string;
    isOpen: boolean;
    onToggle: () => void;
    variant?: 'service' | 'faq';
    icon?: React.ReactNode; // Optional Icon for Expertise/Home
    children: React.ReactNode;
}

export const AccordionItem = ({
                                  title,
                                  isOpen,
                                  onToggle,
                                  variant = 'service',
                                  icon,
                                  children
                              }: AccordionItemProps) => {

    const styles = {
        service: {
            container: `rounded-3xl border transition-all duration-500 ${isOpen ? 'bg-white border-[#e51990] shadow-xl ring-1 ring-[#e51990]' : 'bg-gray-50 border-transparent hover:bg-white hover:border-gray-200'}`,
            title: `text-xl font-bold ${isOpen ? 'text-[#07036e]' : 'text-gray-800'}`,
            iconType: 'plus-minus'
        },
        faq: {
            container: `rounded-2xl border transition-all duration-300 ${isOpen ? 'bg-white border-[#e51990] shadow-md' : 'bg-white border-gray-100 hover:border-gray-200 shadow-sm'}`,
            title: `font-bold text-lg ${isOpen ? 'text-[#e51990]' : 'text-[#07036e]'}`,
            iconType: 'chevron'
        }
    };

    const currentStyle = styles[variant];

    return (
        <motion.div layout className={`overflow-hidden w-full ${currentStyle.container}`}>
            <button onClick={onToggle} className="w-full px-8 py-6 flex items-center justify-between text-left focus:outline-none">
                <div className="flex items-center gap-6">
                    {/* Only show icon if provided */}
                    {icon && (
                        <div className={`shrink-0 transition-colors ${isOpen ? 'text-[#e51990]' : 'text-[#07036e]'}`}>
                            {icon}
                        </div>
                    )}
                    <h3 className={currentStyle.title}>{title}</h3>
                </div>

                <div className="shrink-0">
                    {currentStyle.iconType === "chevron" ? (
                        <ChevronDown className={`w-5 h-5 transition-transform duration-300 ${isOpen ? 'rotate-180 text-[#e51990]' : 'text-gray-400'}`} />
                    ) : (
                        <div className={`w-10 h-10 rounded-full flex items-center justify-center transition-all ${isOpen ? 'bg-[#e51990] text-white' : 'bg-white border border-gray-200 text-gray-400'}`}>
                            {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                        </div>
                    )}
                </div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                    >
                        <div className="px-8 pb-8">
                            {/* Visual separator for FAQ variant */}
                            {variant === 'faq' && <div className="h-px w-full bg-gray-100 mb-4" />}
                            {children}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};