"use client";
import React, {useState} from 'react';
import { Button } from '@/components/ui/button';
import { Download } from 'lucide-react';
import {contactService} from "@/services/contactService";
import {toast} from "@/hooks/use-toast";

export const ResourceForm = ({ onSuccess }: { onSuccess: () => void }) => {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setIsSubmitting(true);

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData.entries()) as any;

        try {
            await contactService.sendResourceRequest(data);
            toast({
                variant: "success",
                title: "Guide envoyé !",
                description: "Vérifiez votre boîte mail pour télécharger le PDF.",
            });
            onSuccess();
        } catch (error: any) {
            toast({
                variant: "destructive",
                title: "Erreur",
                description: "Impossible d'envoyer le guide.",
            });
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

            <Button type="submit" disabled={isSubmitting} className="w-full bg-[#e51990] py-7 rounded-2xl font-bold text-lg shadow-lg shadow-[#e51990]/20 flex items-center justify-center gap-2">
                {isSubmitting ? "Envoi..." : <>Recevoir mon Guide PDF <Download size={18} /></>}
            </Button>
        </form>
    );
};