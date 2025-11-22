import React from 'react';
import { Heart, Settings, Code, Cpu } from 'lucide-react';

export const BackgroundAnimation = () => {
    // Generate 35 random particles with mixed types
    const particles = Array.from({ length: 35 }).map((_, i) => {
        // Types of particles: Heart (Teleton), Gear (Hackathon/Construction), Code/Chip (Tech)
        const type = i % 5;
        let Icon, animationClass, colorClass;

        if (type === 0 || type === 1) {
            // HEARTS (Teletón) - Floating gently
            Icon = Heart;
            animationClass = 'animate-float';
            colorClass = 'text-brand-red';
        } else if (type === 2) {
            // GEARS (Hackathon/Building) - Rotating
            Icon = Settings;
            animationClass = 'animate-float-rotate';
            colorClass = 'text-brand-purple';
        } else {
            // TECH (Hackathon) - Floating
            Icon = type === 3 ? Code : Cpu;
            animationClass = 'animate-float';
            colorClass = 'text-white';
        }

        const size = Math.floor(Math.random() * 30) + 15; // 15px - 45px
        const left = Math.floor(Math.random() * 100); // 0% - 100%
        const duration = Math.floor(Math.random() * 25) + 15; // 15s - 40s
        const delay = Math.floor(Math.random() * 20);

        return (
            <div
                key={i}
                className={`absolute ${animationClass} ${colorClass}`}
                style={{
                    left: `${left}%`,
                    fontSize: `${size}px`,
                    animationDuration: `${duration}s`,
                    animationDelay: `-${delay}s`,
                    bottom: '-60px'
                }}
            >
                <Icon size={size} fill={type <= 1 ? 'currentColor' : 'none'} strokeWidth={1.5} />
            </div>
        );
    });

    return (
        <div className="absolute inset-0 overflow-hidden pointer-events-none select-none z-0">
            {particles}
        </div>
    );
};
