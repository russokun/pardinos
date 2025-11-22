import React from 'react';

export const FeatureTag: React.FC<{ icon: React.ReactNode; label: string; available: boolean }> = ({ icon, label, available }) => (
    <div className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm font-medium transition-colors ${available ? 'bg-brand-purple/10 border-brand-purple/40 text-white' : 'bg-base-950 border-white/10 text-slate-500 opacity-60'}`}>
        <div className={`${available ? 'text-brand-purple' : 'text-slate-600'}`}>
            {icon}
        </div>
        <span>{label}</span>
    </div>
);
