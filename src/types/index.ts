export interface ContactFormData {
    name: string;
    email: string;
    message: string;
    company: string;
    phone?: string;
    service?: string;
}

export interface AuditFormData {
    company: string;
    firstName: string;
    lastName: string;
    email: string;
    step1: string; // The "Positioning" dropdown
    step2: string; // The "Causality" dropdown
}

export interface ResourceFormData {
    company: string;
    firstName: string;
    lastName: string;
    email: string;
}

export interface ContactInfo {
    phone: string;
    email: string;
    address: string;
}