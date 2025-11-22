import React from 'react';
import { User, Sparkles, Heart } from 'lucide-react';
import { StudentProfile, CompanyProfile, ViewState } from '../types/index';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';

interface CompanyTalentScoutProps {
    company: CompanyProfile;
    candidates: { profile: StudentProfile, matchAnalysis: string }[];
    setView: (view: ViewState) => void;
    onSponsor: (candidate: StudentProfile) => void;
}

export const CompanyTalentScout: React.FC<CompanyTalentScoutProps> = ({
    company,
    candidates,
    setView,
    onSponsor
}) => {
    return (
        <div className="min-h-screen bg-base-950">
            <div className="bg-base-900 border-b border-white/10 px-6 py-6 sticky top-0 z-40 shadow-xl">
                <div className="max-w-6xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <div className="w-10 h-10 bg-brand-purple rounded-lg flex items-center justify-center text-white font-bold text-xl">
                            {company.logoChar}
                        </div>
                        <div>
                            <h1 className="text-xl font-bold">{company.name}</h1>
                            <p className="text-slate-400 text-xs uppercase font-bold tracking-wider">Modo Padrino Activado</p>
                        </div>
                    </div>
                    <Button variant="ghost" onClick={() => setView('landing')}>Cerrar Sesión</Button>
                </div>
            </div>

            <div className="max-w-6xl mx-auto px-6 py-8">
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-black mb-3">Descubre Talento Diverso</h2>
                    <p className="text-slate-400 max-w-2xl mx-auto">
                        Explora perfiles de profesionales talentosos. Evalúa habilidades, experiencia y fit cultural para tu equipo.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {candidates.map(({ profile, matchAnalysis }) => (
                        <div key={profile.id} className="bg-base-900 rounded-3xl border border-white/10 overflow-hidden hover:border-brand-purple/50 transition-all group flex flex-col">
                            {/* Header Card */}
                            <div className="h-24 bg-gradient-to-br from-brand-purple/20 to-base-900 relative">
                                <div className="absolute -bottom-8 left-6">
                                    <div className="w-20 h-20 bg-base-950 rounded-2xl border-4 border-base-900 flex items-center justify-center">
                                        <User className="w-10 h-10 text-slate-300" />
                                    </div>
                                </div>
                                <div className="absolute top-3 right-3">
                                    <Badge variant="neutral">{profile.commune}</Badge>
                                </div>
                            </div>

                            <div className="p-6 pt-10 flex-1 flex flex-col">
                                <div className="mb-4">
                                    <h3 className="text-2xl font-bold">{profile.name}, {profile.age}</h3>
                                    <p className="text-brand-purple font-medium text-sm">{profile.gradeOrYear} • {profile.career || profile.institution}</p>
                                </div>

                                <div className="space-y-4 mb-6 flex-1">
                                    {/* Bio */}
                                    <div className="bg-white/5 p-3 rounded-xl">
                                        <p className="text-slate-300 text-sm italic">"{profile.bio}"</p>
                                    </div>

                                    {/* Tags */}
                                    <div>
                                        <p className="text-xs font-bold text-slate-500 uppercase mb-2">Personalidad & Hobbies</p>
                                        <div className="flex flex-wrap gap-2">
                                            {profile.personalityTraits.slice(0, 3).map(t => (
                                                <Badge key={t} variant="purple" className="text-[10px]">{t}</Badge>
                                            ))}
                                            {profile.hobbies.slice(0, 2).map(h => (
                                                <Badge key={h} variant="neutral" className="text-[10px]">{h}</Badge>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Conditions (Simplified for card) */}
                                    {(profile.specificConditions || []).length > 0 && (
                                        <div className="flex gap-1 flex-wrap">
                                            {(profile.specificConditions || []).slice(0, 2).map(c => (
                                                <Badge key={c} variant="red" className="text-[9px] truncate max-w-[120px]">{c.split('(')[0]}</Badge>
                                            ))}
                                            {(profile.specificConditions || []).length > 2 && <Badge variant="red" className="text-[9px]">+{(profile.specificConditions || []).length - 2}</Badge>}
                                        </div>
                                    )}

                                    {/* AI Analysis */}
                                    <div className="bg-brand-red/5 border border-brand-red/20 p-3 rounded-xl">
                                        <div className="flex items-center gap-2 mb-1">
                                            <Sparkles className="w-3 h-3 text-brand-red" />
                                            <span className="text-xs font-bold text-brand-red uppercase">Por qué apadrinarlo</span>
                                        </div>
                                        <p className="text-xs text-slate-300">{matchAnalysis}</p>
                                    </div>
                                </div>

                                <Button onClick={() => onSponsor(profile)} variant="primary" className="w-full" icon={<Heart className="w-4 h-4 fill-current" />}>
                                    Apadrinar Talento
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};
