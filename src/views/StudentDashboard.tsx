import React, { useState } from 'react';
import { MapPin, PenTool, Sparkles, Building2, Accessibility, ArrowRight, User, Check, Volume2, X, Info, HeartHandshake } from 'lucide-react';
import { StudentProfile, Experience, ViewState } from '../types/index';
import { Button } from '../components/ui/Button';
import { Badge } from '../components/ui/Badge';
import { Card } from '../components/ui/Card';
import { FeatureTag } from '../components/ui/FeatureTag';

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
    const [selectedExp, setSelectedExp] = useState<Experience | null>(null);

    return (
        <div className="min-h-screen bg-base-950 pb-20">
            <div className="bg-gradient-to-r from-brand-red to-brand-purple p-1">
                <div className="bg-base-950 px-6 py-8">
                    <div className="max-w-4xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                        <div className="flex items-center gap-4 w-full md:w-auto">
                            <Button
                                variant="ghost"
                                onClick={() => setView('landing')}
                                className="shrink-0"
                                icon={<ArrowRight className="w-4 h-4 rotate-180" />}
                            >
                                Volver
                            </Button>
                            <div className="flex-1">
                                <div className="flex items-center gap-3 mb-2">
                                    <h1 className="text-3xl font-black">Hola, {student.name}</h1>
                                    <Badge variant="purple">{student.gradeOrYear}</Badge>
                                </div>
                                <p className="text-slate-400 flex items-center gap-2 mb-2">
                                    <MapPin className="w-4 h-4" /> {student.commune}, {student.region}
                                </p>
                                {/* Progress Bar for Profile Completion */}
                                <div className="flex items-center gap-2 text-sm text-brand-purple font-bold bg-brand-purple/10 px-3 py-1 rounded-full w-fit">
                                    <PenTool className="w-4 h-4" />
                                    ¡Completa tu perfil psicosocial para que te encuentren los padrinos!
                                </div>
                            </div>
                        </div>
                        <Button variant="primary" onClick={() => setView('student-profile')} icon={<User className="w-4 h-4" />}>
                            Editar Mi Perfil
                        </Button>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-8 space-y-8">
                <section>
                    <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                        <Sparkles className="text-brand-red" /> Oportunidades para Inspirarte
                    </h2>
                    <p className="text-slate-400 mb-6">Estas empresas están buscando talentos como tú. Si te gusta alguna, diles "Me interesa" y revisarán tu perfil.</p>

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
