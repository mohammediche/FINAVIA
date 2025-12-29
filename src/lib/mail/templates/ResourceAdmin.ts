import {ResourceFormData} from "@/types";

export const ResourceAdminTemplate = (data: ResourceFormData) => `
    <div style="font-family: Arial, sans-serif; border-left: 5px solid #e51990; padding: 20px; background: #fff; max-width: 600px; margin: auto; border-top: 1px solid #eee; border-right: 1px solid #eee; border-bottom: 1px solid #eee; border-radius: 0 10px 10px 0;">
        <h2 style="color: #07036e; margin-top: 0;">🎁 Nouveau Téléchargement PDF</h2>
        <p><strong>Prospect :</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Société :</strong> ${data.company}</p>
        <p><strong>Email :</strong> ${data.email}</p>
        <p style="font-size: 12px; color: #666; font-style: italic; margin-top: 20px;">Le guide a été envoyé automatiquement au client.</p>
    </div>
`;