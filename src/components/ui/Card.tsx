import React from 'react';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
    children: React.ReactNode;
    className?: string;
    glow?: 'red' | 'purple' | 'none';
}

export const Card: React.FC<CardProps> = ({ children, className = '', glow = 'none', ...props }) => {
    const glows = {
        none: "shadow-xl",
        red: "shadow-[0_0_30px_rgba(217,26,42,0.15)] border-brand-red/30",
        purple: "shadow-[0_0_30px_rgba(124,58,237,0.15)] border-brand-purple/30"
    };

    return (
        <div
            className={`bg-base-900/90 backdrop-blur-md border border-white/10 rounded-3xl p-6 ${glows[glow]} ${className}`}
            {...props}
        >
            {children}
        </div>
    );
};
