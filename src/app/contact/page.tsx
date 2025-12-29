"use client";

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Phone, Mail, MapPin, CheckCircle2, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';
import FloatingStars from '@/components/ui/FloatingStars';
import { ContactField } from '@/components/ui/ContactField';
import { ContactInfoItem } from '@/components/ui/ContactInfoItem';
import { CONTACT_INFO, CONTACT_SERVICES } from '@/lib/data';
import { contactService } from '@/services/contactService';
import { ContactFormData } from '@/types';

export default function ContactPage() {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [formData, setFormData] = useState<ContactFormData>({
        name: '',
        email: '',
        phone: '',
        company: '',
        service: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        try {
            await contactService.sendMessage(formData);
            toast({
                title: "Demande envoyée !",
                description: "Un expert Finavia vous recontactera sous 24h.",
            });

            setFormData({ name: '', email: '', phone: '', company: '', service: '', message: '' });

        } catch (error: any) {
            // 4. Error Feedback
            toast({
                variant: "destructive",
                title: "Échec de l'envoi",
                description: error.message || "Une erreur est survenue, veuillez réessayer.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div className="min-h-screen bg-[#07036e] pt-32 pb-20 px-6 relative overflow-hidden">
            <FloatingStars color="white" />

            {/* Decorative Gradient Blurs */}
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#e51990] rounded-full blur-[120px] opacity-20 pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-[#00c2ff] rounded-full blur-[120px] opacity-10 pointer-events-none" />

            <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-5 gap-12 relative z-10">

                {/* Left Column: Contact Details */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="lg:col-span-2 space-y-8"
                >
                    <div>
            <span className="text-[#e51990] font-bold text-sm uppercase tracking-wider bg-white/10 px-4 py-1 rounded-full mb-6 inline-block">
              Contact
            </span>
                        <h1 className="text-5xl font-extrabold text-white leading-tight">
                            Discutons de <br />votre projet
                        </h1>
                    </div>

                    <div className="space-y-6 bg-white/5 backdrop-blur-md p-8 rounded-[2rem] border border-white/10">
                        <ContactInfoItem icon={Phone} label="Téléphone" value={CONTACT_INFO.phone} light />
                        <ContactInfoItem icon={Mail} label="Email" value={CONTACT_INFO.email} light />
                        <ContactInfoItem icon={MapPin} label="Bureau" value={CONTACT_INFO.address} light />
                    </div>

                    <div className="bg-[#e51990] p-8 rounded-[2rem] shadow-xl text-white">
                        <h3 className="font-bold flex items-center gap-2 mb-4 text-lg">
                            <CheckCircle2 size={22} /> Pourquoi nous ?
                        </h3>
                        <ul className="space-y-3 opacity-90 text-sm md:text-base">
                            <li>• Réponse garantie en moins de 24h</li>
                            <li>• Confidentialité et sécurité des données</li>
                            <li>• Expertise technique et métier combinée</li>
                        </ul>
                    </div>
                </motion.div>

                {/* Right Column: The Form */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="lg:col-span-3"
                >
                    <form onSubmit={handleSubmit} className="bg-white rounded-[3rem] p-8 md:p-12 shadow-2xl space-y-6">
                        <div className="grid md:grid-cols-2 gap-6">
                            <ContactField label="Nom complet *" name="name" value={formData.name} onChange={handleChange} placeholder="Jean Dupont" required />
                            <ContactField label="Société *" name="company" value={formData.company} onChange={handleChange} placeholder="Ma Société SAS" required />
                        </div>

                        <div className="grid md:grid-cols-2 gap-6">
                            <ContactField label="Email professionnel *" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="jean@entreprise.com" required />
                            <ContactField label="Téléphone" name="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+33..." />
                        </div>

                        {/* Custom Select for Service */}
                        <div className="w-full">
                            <label className="block text-sm font-semibold text-[#07036e] mb-2">Service souhaité *</label>
                            <div className="relative">
                                <select
                                    name="service"
                                    required
                                    value={formData.service}
                                    onChange={handleChange}
                                    className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e51990] focus:ring-2 focus:ring-[#e51990]/20 outline-none bg-gray-50/50 appearance-none text-[#07036e] cursor-pointer"
                                >
                                    <option value="" disabled>Choisir une expertise...</option>
                                    {CONTACT_SERVICES.map(s => <option key={s} value={s}>{s}</option>)}
                                </select>
                                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" size={18} />
                            </div>
                        </div>

                        <ContactField label="Votre message" name="message" isTextArea value={formData.message} onChange={handleChange} placeholder="Expliquez-nous brièvement votre besoin..." />

                        <div className="pt-4">
                            <Button
                                type="submit"
                                disabled={isSubmitting}
                                className="w-full bg-[#07036e] hover:bg-[#e51990] text-white py-8 text-lg rounded-2xl shadow-lg transition-all flex items-center justify-center gap-3 font-bold"
                            >
                                {isSubmitting ? (
                                    <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                                ) : (
                                    <>Envoyer la demande <Send size={20} /></>
                                )}
                            </Button>
                        </div>
                    </form>
                </motion.div>
            </div>
        </div>
    );
}