"use client";

import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Send, Mail, Phone, MapPin, Clock, ShieldCheck } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';
import FloatingStars from '@/components/ui/FloatingStars';
import { contactService } from '@/services/contactService';
import { ContactFormData } from '@/types';

// Using our shared Atomic UI atoms
import { ContactField } from '@/components/ui/ContactField';
import { ContactInfoItem } from '@/components/ui/ContactInfoItem';
import { CONTACT_INFO } from '@/lib/data';

const Contact = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-100px' });
    const { toast } = useToast();

    const [isSubmitting, setIsSubmitting] = React.useState(false);
    const [formData, setFormData] = React.useState<ContactFormData>({
        name: '', email: '', company: '', message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            const response = await contactService.sendMessage(formData);
            if (response.success) {
                toast({
                    title: "Message envoyé !",
                    description: "Nous vous recontacterons sous 24h ouvrées.",
                });
                setFormData({ name: '', email: '', company: '', message: '' });
            }
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Erreur",
                description: error.message || "L'envoi a échoué.",
            });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <section id="contact" className="py-24 px-6 bg-[#07036e] relative overflow-hidden" ref={ref}>
            <FloatingStars color="white" />

            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#e51990]/10 rounded-full blur-[120px] pointer-events-none" />

            <div className="max-w-7xl mx-auto relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    className="text-center mb-16"
                >
                    <span className="text-[#e51990] font-bold text-sm uppercase tracking-wider bg-white/10 px-4 py-1.5 rounded-full inline-block mb-4">
                        Contactez-nous
                    </span>
                    <h2 className="text-4xl md:text-5xl font-extrabold text-white">
                        Discutons de votre projet
                    </h2>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-stretch">
                    {/* Info Side */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.2 }}
                        className="flex flex-col gap-6"
                    >
                        <div className="bg-white/5 backdrop-blur-md rounded-3xl p-8 border border-white/10 text-white h-full">
                            <h3 className="text-2xl font-bold mb-8 text-white">Informations de contact</h3>

                            <div className="grid sm:grid-cols-2 gap-8">
                                <ContactInfoItem icon={Mail} label="Email" value={CONTACT_INFO.email} light />
                                <ContactInfoItem icon={Phone} label="Téléphone" value={CONTACT_INFO.phone} light />
                                <ContactInfoItem icon={MapPin} label="Adresse" value={CONTACT_INFO.address} light />
                                <ContactInfoItem icon={Clock} label="Horaires" value="Lun - Ven: 9h - 18h" light />
                            </div>
                        </div>

                        {/* Reassurance Card */}
                        <div className="bg-gradient-to-br from-[#e51990] to-[#c01478] rounded-3xl p-8 text-white shadow-xl flex items-center gap-6">
                            <ShieldCheck size={48} className="shrink-0 opacity-80" />
                            <div>
                                <h4 className="font-bold text-lg">Confidentialité Garantie</h4>
                                <p className="text-white/80 text-sm mt-1">Vos données sont protégées par le secret professionnel et traitées selon les normes RGPD strictes.</p>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form Side */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: 0.4 }}
                    >
                        <form onSubmit={handleSubmit} className="bg-white rounded-[2.5rem] p-8 md:p-10 shadow-2xl space-y-5">
                            <ContactField label="Nom complet" name="name" value={formData.name} onChange={handleChange} required placeholder="John Doe" />
                            <ContactField label="Email" name="email" type="email" value={formData.email} onChange={handleChange} required placeholder="john@example.com" />
                            <ContactField label="Entreprise" name="company" value={formData.company} onChange={handleChange} placeholder="Votre entreprise" />
                            <ContactField label="Message" name="message" value={formData.message} onChange={handleChange} isTextArea placeholder="Parlez-nous de votre projet..." required />

                            <motion.button
                                type="submit"
                                disabled={isSubmitting}
                                whileHover={{ scale: 1.01 }}
                                whileTap={{ scale: 0.99 }}
                                className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-3 transition-all ${
                                    isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#e51990] hover:bg-[#c01478] text-white shadow-lg hover:shadow-[#e51990]/20'
                                }`}
                            >
                                {isSubmitting ? "Envoi en cours..." : "Envoyer le message"}
                                <Send size={18} />
                            </motion.button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;