import { ContactFormData , AuditFormData, ResourceFormData } from '@/types/contact';

export const contactService = {
    async sendMessage(data: ContactFormData) {
        return this._post('/api/contact', data);
    },

    // New Audit Route
    async sendAudit(data: AuditFormData) {
        return this._post('/api/audit', data);
    },

    // New Resource Route
    async sendResourceRequest(data: ResourceFormData) {
        return this._post('/api/resource', data);
    },

    // Private helper to avoid repeating the fetch code
    async _post(url: string, body: any) {
        const response = await fetch(url, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });
        const result = await response.json();
        if (!response.ok) throw new Error(result.message || "Erreur");
        return result;
    }
};