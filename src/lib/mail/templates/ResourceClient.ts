import {ResourceFormData} from "@/types";

export const ResourceClientTemplate = (data: ResourceFormData, pdfUrl: string) =>
    `
                    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 20px; overflow: hidden; text-align: center;">
                        <div style="background-color: #07036e; padding: 30px;">
                            <h1 style="color: white; margin: 0; font-size: 24px;">Votre Guide Finavia</h1>
                        </div>
                        
                        <div style="padding: 40px 30px;">
                            <h2 style="color: #07036e; margin-bottom: 20px;">Bonjour ${data.firstName},</h2>
                            <p style="font-size: 16px; line-height: 1.6; color: #666;">
                                Merci de votre intérêt. Votre guide stratégique sur la performance financière est prêt à être consulté.
                            </p>
                            
                            <div style="margin: 40px 0;">
                                <a href="${pdfUrl}" 
                                   download="guide-finavia.pdf" 
                                   target="_self"
                                   style="background-color: #e51990; color: white; padding: 10px 20px; text-decoration: none; border-radius: 50px; font-weight: bold; font-size: 15px; box-shadow: 0 4px 15px rgba(229, 25, 144, 0.3);">
                                   TÉLÉCHARGER LE GUIDE PDF
                                </a>
                            </div>
                            
                            <p style="font-size: 14px; color: #999; margin-top: 30px;">
                                Ce guide a été conçu pour vous aider à identifier les leviers de croissance de <strong>${data.company}</strong>.
                            </p>
                        </div>
                    
                        <div style="background-color: #f9f9f9; padding: 20px; border-top: 1px solid #eee; font-size: 12px; color: #aaa;">
                            Finavia © 2025 | Conseil en Performance & Automatisation
                        </div>
                    </div>
`
;