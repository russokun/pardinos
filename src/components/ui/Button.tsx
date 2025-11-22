import React from 'react';
import { Loader2 } from 'lucide-react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
    isLoading?: boolean;
    icon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
    children,
    variant = 'primary',
    isLoading,
    icon,
    className = '',
    ...props
}) => {
    const baseStyles = "inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-bold text-lg transition-all transform active:scale-95 focus:ring-4 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed font-sans tracking-tight";

    const variants = {
        // Red Teletón (Primary Action / Heart)
        primary: "bg-brand-red text-white hover:bg-red-600 focus:ring-brand-red/50 shadow-[0_0_20px_rgba(217,26,42,0.4)] border border-brand-red",
        // Purple Hackathon (Secondary Action / Tech)
        secondary: "bg-brand-purple text-white hover:bg-purple-600 focus:ring-brand-purple/50 border border-brand-purple shadow-[0_0_15px_rgba(124,58,237,0.3)]",
        // White Outline
        outline: "bg-transparent border-2 border-white/30 text-white hover:border-white hover:bg-white/10 focus:ring-white/50",
        // Ghost
        ghost: "bg-white/5 text-white hover:bg-white/10 backdrop-blur-sm",
        // Danger/Warning
        danger: "bg-brand-alert/20 text-brand-alert border-2 border-brand-alert/50 hover:bg-brand-alert/30"
    };

    return (
        <button
            className={`${baseStyles} ${variants[variant]} ${className}`}
            disabled={isLoading || props.disabled}
            {...props}
        >
            {isLoading ? <Loader2 className="w-5 h-5 animate-spin" /> : icon}
            {children}
        </button>
    );
};
