import {AuditFormData} from "@/types";


export const AuditAdminTemplate = (data: AuditFormData) =>   `
                    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 15px; overflow: hidden;">
                        <div style="background-color: #07036e; padding: 20px; text-align: center;">
                            <h1 style="color: white; margin: 0; font-size: 20px;">📊 Nouveau Diagnostic Audit</h1>
                        </div>
                        
                        <div style="padding: 30px;">
                            <p style="font-size: 16px; color: #666; margin-bottom: 25px;">Une nouvelle demande d'audit a été complétée avec les détails suivants :</p>
                            
                            <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #07036e; width: 35%;">Client</td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.firstName} ${data.lastName}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #07036e;">Entreprise</td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.company}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #07036e;">Email</td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.email}</td>
                                </tr>
                            </table>
                    
                            <div style="background-color: #f4f7fa; padding: 20px; border-radius: 10px; border: 1px dashed #07036e;">
                                <h3 style="color: #07036e; margin-top: 0; font-size: 16px;">🔍 Réponses au Diagnostic :</h3>
                                <p style="margin: 10px 0;"><strong>Positionnement :</strong><br/> <span style="color: #e51990;">${data.step1}</span></p>
                                <p style="margin: 10px 0;"><strong>Priorité Stratégique :</strong><br/> <span style="color: #e51990;">${data.step2}</span></p>
                            </div>
                        </div>
                    
                        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #999;">
                            Généré par le système Finavia Audit.
                        </div>
                    </div>
                    `;