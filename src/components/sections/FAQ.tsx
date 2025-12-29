"use client";

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { FAQ_DATA, FAQ_DOMAINS } from '@/lib/data';

// Import your shared atom
import { AccordionItem } from '@/components/ui/AccordionItem';

const FAQ = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });

    const [activeDomain, setActiveDomain] = useState(FAQ_DOMAINS[0]);
    const [openQuestionIndex, setOpenQuestionIndex] = useState<number | null>(null);

    const toggleQuestion = (index: number) => {
        setOpenQuestionIndex(openQuestionIndex === index ? null : index);
    };

    return (
        <section id="faq" className="py-24 px-6 bg-gray-50" ref={ref}>
            <div className="max-w-5xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-16"
                >
                    <span className="text-[#e51990] font-semibold text-sm uppercase tracking-wider bg-[#e51990]/5 px-4 py-1.5 rounded-full inline-block">
                        FAQ Intelligente
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold mt-6 text-[#07036e]">
                        Vos questions, nos réponses
                    </h2>
                </motion.div>

                {/* Domain Selection Tabs */}
                <div className="flex flex-wrap justify-center gap-4 mb-12">
                    {FAQ_DOMAINS.map((domain) => (
                        <button
                            key={domain}
                            onClick={() => {
                                setActiveDomain(domain);
                                setOpenQuestionIndex(null);
                            }}
                            className={`px-6 py-3 rounded-full text-sm font-semibold transition-all shadow-sm ${
                                activeDomain === domain
                                    ? 'bg-[#e51990] text-white shadow-[#e51990]/30 shadow-lg'
                                    : 'bg-white text-gray-600 hover:bg-gray-100 border border-gray-200'
                            }`}
                        >
                            {domain}
                        </button>
                    ))}
                </div>

                {/* Unified Accordion List */}
                <div className="space-y-4">
                    <AnimatePresence mode='wait'>
                        <motion.div
                            key={activeDomain}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-4"
                        >
                            {FAQ_DATA[activeDomain]?.map((item, index) => (
                                <AccordionItem
                                    key={index}
                                    title={item.q}
                                    isOpen={openQuestionIndex === index}
                                    onToggle={() => toggleQuestion(index)}
                                    variant="faq"
                                >

                                    <div className="text-gray-600 leading-relaxed border-t border-gray-50 pt-4">
                                        {item.a}
                                    </div>
                                </AccordionItem>
                            ))}
                        </motion.div>
                    </AnimatePresence>
                </div>

                {/* Fallback CTA */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={isInView ? { opacity: 1 } : {}}
                    transition={{ delay: 0.5 }}
                    className="mt-12 text-center"
                >
                    <p className="text-gray-500 mb-4">Vous ne trouvez pas votre réponse ?</p>
                    <a href="#contact" className="inline-flex items-center gap-2 text-[#07036e] font-bold hover:text-[#e51990] transition-colors group">
                        <MessageCircle size={20} className="group-hover:scale-110 transition-transform" />
                        Contactez notre équipe support
                    </a>
                </motion.div>
            </div>
        </section>
    );
};

export default FAQ;