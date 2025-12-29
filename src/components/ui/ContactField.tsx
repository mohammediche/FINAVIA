import React from 'react';

interface ContactFieldProps extends React.InputHTMLAttributes<HTMLInputElement | HTMLTextAreaElement> {
    label: string;
    isTextArea?: boolean;
}

export const ContactField = ({ label, isTextArea, ...props }: ContactFieldProps) => {
    const baseStyles = "w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-[#e51990] focus:ring-2 focus:ring-[#e51990]/20 outline-none transition-all bg-gray-50/50 text-[#07036e] placeholder:text-gray-400";

    return (
        <div className="w-full">
            <label className="block text-sm font-semibold text-[#07036e] mb-2">
                {label}
            </label>
            {isTextArea ? (
                <textarea
                    {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
                    className={`${baseStyles} resize-none`}
                    rows={4}
                />
            ) : (
                <input
                    {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
                    className={baseStyles}
                />
            )}
        </div>
    );
};