import React from 'react';

interface BadgeProps {
    children: React.ReactNode;
    variant?: 'red' | 'purple' | 'neutral' | 'outline' | 'alert';
    className?: string;
}

export const Badge: React.FC<BadgeProps> = ({ children, variant = 'neutral', className = '' }) => {
    const styles = {
        red: "bg-brand-red/20 text-white border border-brand-red/60 shadow-[0_0_10px_rgba(217,26,42,0.2)]",
        purple: "bg-brand-purple/20 text-white border border-brand-purple/60 shadow-[0_0_10px_rgba(124,58,237,0.2)]",
        neutral: "bg-white/10 text-slate-300 border border-white/20",
        outline: "bg-transparent text-white border border-white/40",
        alert: "bg-brand-alert/20 text-brand-alert border border-brand-alert/40"
    };

    return (
        <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider ${styles[variant]} ${className}`}>
            {children}
        </span>
    );
};
