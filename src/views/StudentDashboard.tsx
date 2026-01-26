import React, { useState } from 'react';
import { MapPin, PenTool, Sparkles, Building2, Accessibility, ArrowRight, User, Check, Volume2, X, Info, HeartHandshake } from 'lucide-react';
import { StudentProfile, Experience, ViewState } from '../types/index';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { FeatureTag } from '../components/ui/FeatureTag';
import { useLanguage, LanguageSwitch } from '../services/LanguageContext';

interface StudentDashboardProps {
    student: StudentProfile;
    experiences: Experience[];
    setView: (view: ViewState) => void;
    onApply: () => void;
    speakText: (text: string) => void;
}

export const StudentDashboard: React.FC<StudentDashboardProps> = ({
    student,
    experiences,
    setView,
    onApply,
    speakText
}) => {
    const { t } = useLanguage();
    const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

    return (
        <div className="min-h-screen bg-base-950 pb-20">
            <div className="bg-base-950 p-4 md:p-6">
                <div className="max-w-4xl mx-auto bg-base-900 rounded-3xl p-6 border border-white/5 relative overflow-hidden">
                    {/* Gradient Border Effect */}
                    <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-brand-red to-brand-purple"></div>
                    <div className="absolute top-0 right-0 w-1 h-full bg-gradient-to-b from-brand-purple to-brand-red"></div>

                    <div className="flex flex-col relative z-10">
                        {/* Top Row: Volver & Semester */}
                        <div className="flex justify-between items-start mb-4">
                            <Button
                                variant="ghost"
                                onClick={() => setView('landing')}
                                className="bg-white/5 hover:bg-white/10 text-sm px-4 py-2 h-auto rounded-xl border border-white/10"
                                icon={<ArrowRight className="w-4 h-4 rotate-180" />}
                            >
                                {t('common.back')}
                            </Button>
                            <div className="flex items-center gap-4">
                                <LanguageSwitch />
                                <div className="px-3 py-1 rounded-full border border-brand-purple/50 bg-brand-purple/10 text-xs font-bold text-brand-purple uppercase tracking-wider">
                                    {student.gradeOrYear}
                                </div>
                            </div>
                        </div>

                        {/* Name & Location */}
                        <div className="mb-6">
                            <h1 className="text-4xl font-black mb-2 leading-tight">
                                {t('student.dashboard.welcome')} {student.name}!
                            </h1>
                            <p className="text-slate-400 flex items-center gap-2 text-sm">
                                <MapPin className="w-4 h-4 text-slate-500" /> {student.commune}, {student.region}
                            </p>
                        </div>

                        {/* CTA Bubble */}
                        <div className="bg-brand-purple/10 border border-brand-purple/20 rounded-2xl rounded-tl-none p-4 mb-8 max-w-xs ml-4 relative">
                            <div className="absolute -left-2 top-0 w-4 h-4 bg-brand-purple/10 border-l border-t border-brand-purple/20 transform -rotate-45"></div>
                            <p className="text-brand-purple font-bold text-sm leading-relaxed">
                                {t('student.dashboard.cta')}
                            </p>
                        </div>

                        {/* Edit Profile Button */}
                        <Button
                            variant="primary"
                            onClick={() => setView('student-profile')}
                            className="w-full py-4 text-lg font-bold rounded-xl shadow-lg shadow-brand-red/20"
                            icon={<User className="w-5 h-5" />}
                        >
                            {t('student.dashboard.editProfile')}
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Sparkles className="text-brand-red" /> {t('student.dashboard.opportunities.title')}
                    </h2>
                    <p className="text-slate-400 mb-6">{t('student.dashboard.opportunities.desc')}</p>

                    <div className="grid gap-6">
                        {experiences.map((exp) => (
                            <Card key={exp.id} className="relative overflow-hidden group hover:border-white/20 transition-all" glow={exp.matchPercentage > 90 ? 'red' : 'none'}>
                                <div className="flex flex-col md:flex-row gap-6">
                                    <div className="flex-1">
                                        <div className="flex flex-wrap gap-2 mb-3">
                                            <Badge variant="purple">{exp.type}</Badge>
                                            <Badge variant="outline">{exp.modality}</Badge>
                                        </div>

                                        <h3 className="text-2xl font-bold mb-1">{exp.title}</h3>
                                        <div className="text-lg text-slate-300 mb-4 font-medium flex items-center gap-2">
                                            <Building2 className="w-4 h-4 text-brand-purple" /> {exp.company}
                                        </div>

                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {exp.physicalFeatures.map((feature, idx) => (
                                                <FeatureTag
                                                    key={idx}
                                                    icon={
                                                        feature.icon === 'ramp' ? <Accessibility className="w-4 h-4" /> :
                                                            feature.icon === 'elevator' ? <ArrowRight className="w-4 h-4 -rotate-90" /> :
                                                                feature.icon === 'bathroom' ? <User className="w-4 h-4" /> :
                                                                    <Check className="w-4 h-4" />
                                                    }
                                                    label={feature.label}
                                                    available={feature.isAvailable}
                                                />
                                            ))}
                                        </div>

                                        <div className="bg-white/5 rounded-xl p-4 border-l-4 border-brand-purple mb-6">
                                            <div className="flex gap-3">
                                                <Sparkles className="w-5 h-5 text-brand-purple mt-1 shrink-0" />
                                                <div>
                                                    <h4 className="text-sm font-bold text-brand-purple mb-1 uppercase tracking-wide">Por qué te gustaría</h4>
                                                    <p className="text-sm text-slate-300 leading-relaxed italic">"{exp.aiExplanation}"</p>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="flex flex-wrap gap-3">
                                            <Button
                                                onClick={() => setSelectedExp(exp)}
                                                variant="primary"
                                                className="flex-1 md:flex-none"
                                            >
                                                Ver Detalle
                                            </Button>
                                            <Button
                                                onClick={() => speakText(`${exp.title} en ${exp.company}. ${exp.aiExplanation}`)}
                                                variant="secondary"
                                                className="flex-none px-6"
                                                icon={<Volume2 className="w-5 h-5" />}
                                            >
                                                Escuchar
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </Card>
                        ))}
                    </div>
                </section>
            </div>

            {/* Modal Detalle Estudiante */}
            {selectedExp && (
                <div className="fixed inset-0 bg-base-950/90 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
                    <div className="bg-base-900 border border-white/10 w-full max-w-2xl rounded-3xl p-8 shadow-2xl relative animate-fade-in my-auto">
                        <button onClick={() => setSelectedExp(null)} className="absolute top-4 right-4 p-2 hover:bg-white/10 rounded-full transition-colors">
                            <X className="w-6 h-6" />
                        </button>

                        <div className="flex items-center gap-4 mb-6">
                            <div className="w-16 h-16 bg-brand-red rounded-2xl flex items-center justify-center text-3xl font-black text-white">
                                {selectedExp.company[0]}
                            </div>
                            <div>
                                <h2 className="text-2xl font-bold">{selectedExp.title}</h2>
                                <p className="text-brand-purple font-medium">{selectedExp.company}</p>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h3 className="text-lg font-bold text-white mb-2 flex items-center gap-2">
                                    <Info className="w-5 h-5 text-brand-red" /> Descripción
                                </h3>
                                <p className="text-slate-300 leading-relaxed">{selectedExp.description}</p>
                            </div>
                            <Button onClick={() => { onApply(); setSelectedExp(null); }} className="w-full text-lg py-4" variant="primary" icon={<HeartHandshake />}>
                                Me Interesa
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};
