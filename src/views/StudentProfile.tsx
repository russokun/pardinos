import React from 'react';
import { PenTool, Info, Accessibility, Check, Smile } from 'lucide-react';
import { StudentProfile, EducationLevel, ViewState } from '../types/index';
import { Button } from '../components/ui/Button';
import { Card } from '../components/ui/Card';
import { Label, Input, Select } from '../components/ui/Input';
import { DISABILITY_OPTIONS } from '../data/constants';

interface StudentProfileProps {
    student: StudentProfile;
    setStudent: (student: StudentProfile) => void;
    setView: (view: ViewState) => void;
}

export const StudentProfileView: React.FC<StudentProfileProps> = ({ student, setStudent, setView }) => {
    const toggleDisability = (disability: string) => {
        const current = student.specificConditions || [];
        const updated = current.includes(disability)
            ? current.filter(d => d !== disability)
            : [...current, disability];
        setStudent({ ...student, specificConditions: updated });
    };

    return (
        <div className="min-h-screen bg-base-950 p-6">
            <div className="max-w-3xl mx-auto">
                <Button variant="ghost" onClick={() => setView('student-dashboard')} className="mb-6 pl-0 hover:bg-transparent hover:text-brand-red">
                    ← Volver al Dashboard
                </Button>

                <Card className="border-brand-purple/30">
                    <h2 className="text-3xl font-black mb-6 flex items-center gap-3">
                        <div className="w-12 h-12 bg-brand-red rounded-xl flex items-center justify-center">
                            <PenTool className="w-6 h-6 text-white" />
                        </div>
                        Editor de Perfil Completo
                    </h2>

                    <div className="space-y-10">

                        {/* SECCIÓN 1: DATOS GENERALES */}
                        <section className="space-y-4">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                                <Info className="text-brand-red" /> 1. Datos Generales
                            </h3>
                            <div className="grid md:grid-cols-2 gap-6">
                                <div>
                                    <Label>Nombre</Label>
                                    <Input value={student.name} onChange={(e) => setStudent({ ...student, name: e.target.value })} />
                                </div>
                                <div>
                                    <Label>Edad</Label>
                                    <Input
                                        type="number"
                                        value={student.age}
                                        onChange={(e) => setStudent({ ...student, age: parseInt(e.target.value) })}
                                    />
                                </div>
                                <div>
                                    <Label>Nivel Educativo</Label>
                                    <Select
                                        value={student.educationLevel}
                                        onChange={(e) => setStudent({ ...student, educationLevel: e.target.value as EducationLevel })}
                                    >
                                        <option value="Media">Educación Media</option>
                                        <option value="Superior">Educación Superior</option>
                                    </Select>
                                </div>
                                <div>
                                    <Label>Curso o Año</Label>
                                    <Input
                                        placeholder="Ej: 4º Medio, 2º Año"
                                        value={student.gradeOrYear}
                                        onChange={(e) => setStudent({ ...student, gradeOrYear: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <Label>Región</Label>
                                    <Input
                                        placeholder="Ej: Metropolitana, Valparaíso"
                                        value={student.region}
                                        onChange={(e) => setStudent({ ...student, region: e.target.value })}
                                    />
                                </div>
                                <div>
                                    <Label>Comuna</Label>
                                    <Input
                                        placeholder="Ej: Maipú, Providencia"
                                        value={student.commune}
                                        onChange={(e) => setStudent({ ...student, commune: e.target.value })}
                                    />
                                </div>
                            </div>
                        </section>

                        {/* SECCIÓN 2: DISCAPACIDAD FÍSICA Y ACCESIBILIDAD (PRIORIDAD) */}
                        <section className="space-y-4">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                                <Accessibility className="text-brand-red" /> 2. Condición Física y Accesibilidad
                            </h3>
                            <p className="text-slate-400 text-sm mb-4">
                                Selecciona todas las condiciones que apliquen a tu situación. Esto nos ayuda a buscar entornos seguros para ti.
                            </p>

                            <div className="grid md:grid-cols-2 gap-3 mb-4">
                                {DISABILITY_OPTIONS.map((option) => (
                                    <div
                                        key={option}
                                        onClick={() => toggleDisability(option)}
                                        className={`cursor-pointer p-3 rounded-xl border transition-all flex items-center gap-3 ${(student.specificConditions || []).includes(option)
                                            ? 'bg-brand-red/10 border-brand-red text-white'
                                            : 'bg-base-950 border-white/10 text-slate-400 hover:border-brand-red/50'
                                            }`}
                                    >
                                        <div className={`w-5 h-5 rounded-md border flex items-center justify-center flex-shrink-0 ${(student.specificConditions || []).includes(option) ? 'bg-brand-red border-brand-red' : 'border-slate-600'
                                            }`}>
                                            {(student.specificConditions || []).includes(option) && <Check className="w-3 h-3 text-white" />}
                                        </div>
                                        <span className="text-sm font-medium leading-tight">{option}</span>
                                    </div>
                                ))}
                            </div>

                            <div className="mt-4">
                                <Label>Otra condición / Detalle Específico (Opcional)</Label>
                                <Input
                                    placeholder="Escribe aquí si tu condición no está en la lista..."
                                    value={student.otherConditionDetail || ""}
                                    onChange={(e) => setStudent({ ...student, otherConditionDetail: e.target.value })}
                                />
                            </div>
                        </section>

                        {/* SECCIÓN 3: PERFIL PSICOSOCIAL */}
                        <section className="space-y-4">
                            <h3 className="text-xl font-bold text-white mb-4 flex items-center gap-2 border-b border-white/10 pb-2">
                                <Smile className="text-brand-purple" /> 3. Perfil Psicosocial (Tu Personalidad)
                            </h3>

                            {/* Personalidad */}
                            <div className="mb-6">
                                <Label>¿Cómo te describes? (Selecciona tus rasgos)</Label>
                                <div className="flex flex-wrap gap-2 mt-2">
                                    {["Creativo", "Resiliente", "Líder", "Introvertido", "Extrovertido", "Curioso", "Analítico", "Colaborativo"].map(trait => (
                                        <button
                                            key={trait}
                                            onClick={() => {
                                                const traits = student.personalityTraits.includes(trait)
                                                    ? student.personalityTraits.filter(t => t !== trait)
                                                    : [...student.personalityTraits, trait];
                                                setStudent({ ...student, personalityTraits: traits });
                                            }}
                                            className={`px-4 py-2 rounded-full text-sm font-bold transition-all border ${student.personalityTraits.includes(trait) ? 'bg-brand-purple text-white border-brand-purple' : 'bg-base-950 text-slate-400 border-white/20'}`}
                                        >
                                            {trait}
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Hobbies */}
                            <div className="mb-6">
                                <Label>Tus Pasiones y Hobbies</Label>
                                <Input
                                    placeholder="Ej: Videojuegos, Anime, Fútbol, Cocina, Música..."
                                    value={student.hobbies.join(", ")}
                                    onChange={(e) => setStudent({ ...student, hobbies: e.target.value.split(",").map(s => s.trim()) })}
                                />
                                <p className="text-xs text-slate-500 mt-1">Separa tus intereses por comas.</p>
                            </div>

                            {/* Bio */}
                            <div>
                                <Label>Tu Biografía Corta</Label>
                                <textarea
                                    className="w-full bg-base-950 border border-white/20 rounded-xl px-4 py-3 text-white placeholder:text-slate-600 focus:border-brand-purple focus:ring-2 focus:ring-brand-purple/50 focus:outline-none h-32 mt-2"
                                    placeholder="Cuéntale a tu futuro Mentor quién eres, qué sueñas y qué te motiva en tu Viaje Heroico..."
                                    value={student.bio}
                                    onChange={(e) => setStudent({ ...student, bio: e.target.value })}
                                />
                            </div>
                        </section>

                        <Button onClick={() => setView('student-dashboard')} className="w-full py-4 text-lg" variant="primary">
                            Guardar Perfil Completo
                        </Button>
                    </div>
                </Card>
            </div>
        </div>
    );
};
