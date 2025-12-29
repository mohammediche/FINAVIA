"use client";
import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Send } from 'lucide-react';
import {contactService} from "@/services/contactService";
import {toast} from "@/hooks/use-toast";

export const AuditForm = ({ onSuccess }: { onSuccess: () => void }) => {
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries());

        try {
            await contactService.sendAudit(data);

            toast({ variant: "success", title: "Audit Envoyé !" });
            onSuccess();
        } catch (error: any) {
            toast({ variant: "destructive", title: "Erreur", description: error.message });
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <input name="company" className="w-full p-4 rounded-xl border bg-gray-50 outline-none focus:border-[#e51990]" placeholder="Nom de l'entreprise" required />

            <div className="grid grid-cols-2 gap-4">
                <input name="lastName" className="w-full p-4 rounded-xl border bg-gray-50 outline-none focus:border-[#e51990]" placeholder="Nom" required />
                <input name="firstName" className="w-full p-4 rounded-xl border bg-gray-50 outline-none focus:border-[#e51990]" placeholder="Prénom" required />
            </div>

            <input name="email" className="w-full p-4 rounded-xl border bg-gray-50 outline-none focus:border-[#e51990]" placeholder="Email professionnel" type="email" required />

            <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#07036e]/50 uppercase ml-1">Diagnostic de positionnement</label>
                <select name="step1" className="w-full p-4 rounded-xl border bg-gray-50 outline-none cursor-pointer focus:border-[#e51990]" required>
                    <option value="">Où en êtes-vous ?</option>
                    <option value="Structuration">Phase de lancement / Structuration</option>
                    <option value="Croissance">Forte croissance / Automatisation</option>
                    <option value="Optimisation">Activité stable / Optimisation</option>
                </select>
            </div>

            <div className="space-y-1">
                <label className="text-[10px] font-bold text-[#07036e]/50 uppercase ml-1">Diagnostic de causalité</label>
                <select name="step2" className="w-full p-4 rounded-xl border bg-gray-50 outline-none cursor-pointer focus:border-[#e51990]" required>
                    <option value="">Quelle est votre priorité ?</option>
                    <option value="Visibilité Data">Manque de visibilité data</option>
                    <option value="Processus">Processus trop manuels</option>
                    <option value="Coûts">Réduction des coûts opérationnels</option>
                </select>
            </div>

            <Button type="submit" disabled={isSubmitting} className="w-full bg-[#07036e] hover:bg-[#e51990] py-7 rounded-2xl font-bold text-lg transition-all">
                {isSubmitting ? "Envoi..." : "Lancer l'Audit"}
            </Button>
        </form>
    );
};