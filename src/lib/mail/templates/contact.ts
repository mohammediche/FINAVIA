import {ContactFormData} from "@/types"

export const ContactAdminTemplate = (data: ContactFormData) =>`
                    <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; color: #333; max-width: 600px; margin: auto; border: 1px solid #eee; border-radius: 15px; overflow: hidden;">
                        <div style="background-color: #07036e; padding: 20px; text-align: center;">
                            <h1 style="color: white; margin: 0; font-size: 20px;">Nouveau Message Client</h1>
                        </div>
                        
                        <div style="padding: 30px;">
                            <p style="font-size: 16px; color: #666; margin-bottom: 25px;">Vous avez reçu une nouvelle demande via le site <strong>Finavia</strong>.</p>
                            
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #07036e; width: 30%;">Nom</td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.name}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #07036e;">Email</td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.email}</td>
                                </tr>
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #07036e;">Société</td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.company || 'Non spécifiée'}</td>
                                </tr>
                                
                                ${data.phone ? `
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #07036e;">Téléphone</td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.phone}</td>
                                </tr>` : ''}

                                ${data.service ? `
                                <tr>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee; font-weight: bold; color: #07036e;">Service</td>
                                    <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${data.service}</td>
                                </tr>` : ''}
                            </table>

                            <div style="margin-top: 30px; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #e51990; border-radius: 5px;">
                                <p style="margin: 0; font-weight: bold; color: #07036e; margin-bottom: 10px;">Message :</p>
                                <p style="margin: 0; line-height: 1.6; color: #444;">${data.message}</p>
                            </div>
                        </div>

                        <div style="background-color: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #999;">
                            Ceci est un message automatique envoyé depuis votre site web.
                        </div>
                    </div>
                `;