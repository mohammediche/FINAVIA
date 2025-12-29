import { useState } from 'react';

export function useForm<T>(initialState: T, onSubmit: (data: T) => Promise<void>) {
    const [formData, setFormData] = useState<T>(initialState);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        try {
            await onSubmit(formData);
            setFormData(initialState);
        } finally {
            setIsSubmitting(false);
        }
    };

    return { formData, isSubmitting, handleChange, handleSubmit };
}