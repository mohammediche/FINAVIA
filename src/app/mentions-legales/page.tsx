import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Mentions Légales - FINAVIA',
    description: 'Mentions légales et politique de confidentialité (RGPD) de FINAVIA.',
};

const LegalPage = () => {
    return (
        <main className="min-h-screen bg-white pt-32 pb-20 font-sans">
            <div className="max-w-4xl mx-auto px-6">
                <h1 className="text-4xl md:text-5xl font-bold text-[#07036e] mb-12">
                    Mentions Légales & RGPD
                </h1>

                <div className="space-y-10 text-gray-600 leading-relaxed">
                    <section>
                        <h3 className="text-xl font-bold text-[#07036e] mb-4 uppercase tracking-wide">
                            Éditeur du site
                        </h3>
                        <p className="bg-gray-50 p-6 rounded-2xl border border-gray-100">
                            <span className="font-bold text-gray-800">FINAVIA</span><br/>
                            SAS au capital de 10 000 €<br/>
                            RCS Paris B 123 456 789<br/>
                            Siège social : 12 Avenue de la Grande Armée, 75017 Paris
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#07036e] mb-4 uppercase tracking-wide">
                            Hébergement
                        </h3>
                        <p>
                            Le site est hébergé par <span className="font-semibold">Vercel Inc.</span><br/>
                            340 S Lemon Ave #4133<br/>
                            Walnut, CA 91789, USA
                        </p>
                    </section>

                    <section>
                        <h3 className="text-xl font-bold text-[#07036e] mb-4 uppercase tracking-wide">
                            Propriété intellectuelle
                        </h3>
                        <p>
                            L'ensemble de ce site relève de la législation française et internationale sur le droit d'auteur et la propriété intellectuelle. Tous les droits de reproduction sont réservés, y compris pour les documents téléchargeables et les représentations iconographiques et photographiques.
                        </p>
                    </section>

                    <section className="bg-[#07036e]/5 p-8 rounded-3xl border border-[#07036e]/10">
                        <h3 className="text-xl font-bold text-[#07036e] mb-4 uppercase tracking-wide">
                            Données personnelles (RGPD)
                        </h3>
                        <p className="mb-4">
                            Les informations recueillies via les formulaires de contact, d'audit et de téléchargement de ressources sont enregistrées dans un fichier informatisé par <span className="font-semibold text-gray-800">FINAVIA</span> pour la gestion de notre clientèle et l'envoi de documents demandés.
                        </p>
                        <p className="mb-4">
                            Elles sont conservées pendant une durée de <span className="font-semibold text-gray-800">3 ans</span> à compter du dernier contact.
                        </p>
                        <p>
                            Conformément à la loi « informatique et libertés », vous pouvez exercer votre droit d'accès aux données vous concernant, les faire rectifier ou demander leur suppression en contactant :
                            <a href="mailto:contact@finavia.fr" className="text-[#e51990] font-bold ml-1 hover:underline">
                                contact@finavia.fr
                            </a>
                        </p>
                    </section>
                </div>
            </div>
        </main>
    );
};

export default LegalPage;