import { LucideIcon } from 'lucide-react';

interface ContactInfoItemProps {
    icon: LucideIcon;
    label: string;
    value: string;
    light?: boolean;
}

export const ContactInfoItem = ({ icon: Icon, label, value, light = false }: ContactInfoItemProps) => {
    return (
        <div className="flex items-center gap-4 group">
            <div className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-colors duration-300 ${
                light
                    ? 'bg-white/10 text-white group-hover:bg-[#e51990]'
                    : 'bg-[#e51990]/10 text-[#e51990] group-hover:bg-[#e51990] group-hover:text-white'
            }`}>
                <Icon size={22} />
            </div>
            <div>
                <p className={`text-xs uppercase font-bold tracking-wider ${
                    light ? 'text-white/50' : 'text-gray-400'
                }`}>
                    {label}
                </p>
                <p className={`font-semibold text-lg ${
                    light ? 'text-white' : 'text-[#07036e]'
                }`}>
                    {value}
                </p>
            </div>
        </div>
    );
};