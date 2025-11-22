import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> { }

export const Input: React.FC<InputProps> = (props) => (
    <input
        className="w-full bg-base-950 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-red focus:ring-2 focus:ring-brand-red/50 focus:outline-none transition-all"
        {...props}
    />
);

export const Label: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <label className="block text-sm font-bold text-slate-300 mb-2 uppercase tracking-wide">
        {children}
    </label>
);

interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> { }

export const Select: React.FC<SelectProps> = (props) => (
    <div className="relative">
        <select
            className="w-full bg-base-950 border border-white/20 rounded-xl px-4 py-3 text-white appearance-none focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/50 focus:outline-none transition-all"
            {...props}
        />
        <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
            ▼
        </div>
    </div>
);

interface CheckboxProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label: string;
}

export const Checkbox: React.FC<CheckboxProps> = ({ label, ...props }) => (
    <label className="flex items-center gap-3 cursor-pointer group">
        <div className="relative flex items-center">
            <input type="checkbox" className="peer sr-only" {...props} />
            <div className="w-6 h-6 border-2 border-white/30 rounded-md peer-checked:bg-brand-red peer-checked:border-brand-red transition-all flex items-center justify-center">
                <svg className="w-4 h-4 text-white opacity-0 peer-checked:opacity-100" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                </svg>
            </div>
        </div>
        <span className="text-slate-300 group-hover:text-white transition-colors select-none">{label}</span>
    </label>
);
