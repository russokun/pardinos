import React, { useState } from 'react';
import { ArrowRight, Plus, Check } from 'lucide-react';
import { ViewState, Experience, CompanyProfile, EducationLevel, AccessibilityFeature, AccessibilityFeatureType } from '../types/index';
import { Button } from '../components/ui/Button';
import { Input, Label, Select, Checkbox } from '../components/ui/Input';
import { Card } from '../components/ui/Card';

interface CompanyCreatePostProps {
    company: CompanyProfile;
    setView: (view: ViewState) => void;
    onCreatePost: (experience: Omit<Experience, 'id'>) => void;
}

export const CompanyCreatePost: React.FC<CompanyCreatePostProps> = ({
    company,
    setView,
    onCreatePost
}) => {
    const [formData, setFormData] = useState({
        title: '',
        type: 'Mentoría' as Experience['type'],
        targetAudience: [] as EducationLevel[],
        duration: '',
        modality: 'Presencial' as Experience['modality'],
        description: '',
        mentorName: '',
        mentorRole: '',
    });

    const [accessibilityFeatures, setAccessibilityFeatures] = useState<{
        ramp: boolean;
        elevator: boolean;
        bathroom: boolean;
        wide_door: boolean;
        quiet_space: boolean;
        sign_language: boolean;
    }>({
        ramp: false,
        elevator: false,
        bathroom: false,
        wide_door: false,
        quiet_space: false,
        sign_language: false
    });

    const [otherAccessibilityDetails, setOtherAccessibilityDetails] = useState('');

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const physicalFeatures: AccessibilityFeature[] = [
            { icon: 'ramp', label: 'Rampa de acceso', isAvailable: accessibilityFeatures.ramp },
            { icon: 'elevator', label: 'Ascensor', isAvailable: accessibilityFeatures.elevator },
            { icon: 'bathroom', label: 'Baño Adaptado', isAvailable: accessibilityFeatures.bathroom },
            { icon: 'wide_door', label: 'Puertas anchas', isAvailable: accessibilityFeatures.wide_door },
            { icon: 'quiet_space', label: 'Espacios tranquilos', isAvailable: accessibilityFeatures.quiet_space },
            { icon: 'sign_language', label: 'Intérprete de señas', isAvailable: accessibilityFeatures.sign_language },
        ];

        const newExperience: Omit<Experience, 'id'> = {
            title: formData.title,
            type: formData.type,
            targetAudience: formData.targetAudience,
            company: company.name,
            duration: formData.duration,
            modality: formData.modality,
            matchPercentage: 85,
            tags: [],
            physicalFeatures,
            otherAccessibilityDetails,
            aiExplanation: `Esta oportunidad en ${company.name} es el escenario perfecto para potenciar tu "Viaje Heroico" junto a un Pardino o Madrina referente.`,
            description: formData.description,
            mentor: formData.mentorName ? {
                name: formData.mentorName,
                role: formData.mentorRole,
                avatarChar: formData.mentorName[0].toUpperCase()
            } : undefined,
            isSafeMatch: true
        };

        onCreatePost(newExperience);
    };

    const handleAudienceToggle = (level: EducationLevel) => {
        setFormData(prev => ({
            ...prev,
            targetAudience: prev.targetAudience.includes(level)
                ? prev.targetAudience.filter(l => l !== level)
                : [...prev.targetAudience, level]
        }));
    };

    return (
        <div className="min-h-screen bg-base-950 pb-20">
            <div className="bg-base-900 border-b border-white/10 px-6 py-6 sticky top-0 z-40 shadow-xl">
                <div className="max-w-4xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            onClick={() => setView('company-talent-scout')}
                            className="shrink-0"
                            icon={<ArrowRight className="w-4 h-4 rotate-180" />}
                        >
                            Volver
                        </Button>
                        <div>
                            <h1 className="text-xl font-bold">Crear Nueva Oportunidad</h1>
                            <p className="text-slate-400 text-xs">{company.name}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-4xl mx-auto px-6 py-8">
                <Card className="p-8">
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Título del puesto */}
                        <div>
                            <Label>Título del Puesto / Oportunidad *</Label>
                            <Input
                                required
                                value={formData.title}
                                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
                                placeholder="Ej: Desarrollador Frontend Junior"
                            />
                        </div>

                        {/* Tipo de oferta */}
                        <div>
                            <Label>Tipo de Oferta *</Label>
                            <Select
                                required
                                value={formData.type}
                                onChange={(e) => setFormData({ ...formData, type: e.target.value as Experience['type'] })}
                            >
                                <option value="Job Shadowing">Job Shadowing</option>
                                <option value="Mentoría">Mentoría</option>
                                <option value="Pasantía">Pasantía</option>
                                <option value="Práctica Profesional">Práctica Profesional</option>
                                <option value="Visita Técnica">Visita Técnica</option>
                                <option value="Capacitación">Capacitación</option>
                            </Select>
                        </div>

                        {/* Modalidad */}
                        <div>
                            <Label>Modalidad *</Label>
                            <Select
                                required
                                value={formData.modality}
                                onChange={(e) => setFormData({ ...formData, modality: e.target.value as Experience['modality'] })}
                            >
                                <option value="Presencial">Presencial</option>
                                <option value="Remoto">Remoto</option>
                                <option value="Híbrido">Híbrido</option>
                            </Select>
                        </div>

                        {/* Duración */}
                        <div>
                            <Label>Duración *</Label>
                            <Input
                                required
                                value={formData.duration}
                                onChange={(e) => setFormData({ ...formData, duration: e.target.value })}
                                placeholder="Ej: 3 meses, 1 semana, 6 horas"
                            />
                        </div>

                        {/* Público objetivo */}
                        <div>
                            <Label>Público Objetivo *</Label>
                            <div className="space-y-2 mt-2">
                                <Checkbox
                                    label="Educación Media"
                                    checked={formData.targetAudience.includes('Media')}
                                    onChange={() => handleAudienceToggle('Media')}
                                />
                                <Checkbox
                                    label="Educación Superior"
                                    checked={formData.targetAudience.includes('Superior')}
                                    onChange={() => handleAudienceToggle('Superior')}
                                />
                            </div>
                        </div>

                        {/* Descripción */}
                        <div>
                            <Label>Descripción del Puesto *</Label>
                            <textarea
                                required
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                placeholder="Describe las responsabilidades, requisitos y lo que aprenderán..."
                                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-brand-purple transition-all resize-none"
                                rows={5}
                            />
                        </div>

                        {/* Condiciones de accesibilidad */}
                        <div>
                            <Label>Condiciones de Accesibilidad</Label>
                            <p className="text-sm text-slate-400 mb-3">Marca las características disponibles en tu espacio de trabajo:</p>
                            <div className="grid md:grid-cols-2 gap-3">
                                <Checkbox
                                    label="Rampa de acceso"
                                    checked={accessibilityFeatures.ramp}
                                    onChange={(e) => setAccessibilityFeatures({ ...accessibilityFeatures, ramp: e.target.checked })}
                                />
                                <Checkbox
                                    label="Ascensor"
                                    checked={accessibilityFeatures.elevator}
                                    onChange={(e) => setAccessibilityFeatures({ ...accessibilityFeatures, elevator: e.target.checked })}
                                />
                                <Checkbox
                                    label="Baño adaptado"
                                    checked={accessibilityFeatures.bathroom}
                                    onChange={(e) => setAccessibilityFeatures({ ...accessibilityFeatures, bathroom: e.target.checked })}
                                />
                                <Checkbox
                                    label="Puertas anchas"
                                    checked={accessibilityFeatures.wide_door}
                                    onChange={(e) => setAccessibilityFeatures({ ...accessibilityFeatures, wide_door: e.target.checked })}
                                />
                                <Checkbox
                                    label="Espacios tranquilos"
                                    checked={accessibilityFeatures.quiet_space}
                                    onChange={(e) => setAccessibilityFeatures({ ...accessibilityFeatures, quiet_space: e.target.checked })}
                                />
                                <Checkbox
                                    label="Intérprete de señas disponible"
                                    checked={accessibilityFeatures.sign_language}
                                    onChange={(e) => setAccessibilityFeatures({ ...accessibilityFeatures, sign_language: e.target.checked })}
                                />
                            </div>
                            <div className="mt-3">
                                <Input
                                    value={otherAccessibilityDetails}
                                    onChange={(e) => setOtherAccessibilityDetails(e.target.value)}
                                    placeholder="Detalles adicionales de accesibilidad (opcional)"
                                />
                            </div>
                        </div>

                        {/* Información del mentor (opcional) */}
                        <div className="border-t border-white/10 pt-6">
                            <Label>Pardino/Madrina Referente (Opcional)</Label>
                            <div className="grid md:grid-cols-2 gap-4 mt-3">
                                <Input
                                    value={formData.mentorName}
                                    onChange={(e) => setFormData({ ...formData, mentorName: e.target.value })}
                                    placeholder="Nombre del Pardino/Madrina"
                                />
                                <Input
                                    value={formData.mentorRole}
                                    onChange={(e) => setFormData({ ...formData, mentorRole: e.target.value })}
                                    placeholder="Cargo del Pardino/Madrina"
                                />
                            </div>
                        </div>

                        {/* Botones */}
                        <div className="flex gap-4 pt-4">
                            <Button
                                type="submit"
                                variant="primary"
                                className="flex-1"
                                icon={<Check className="w-5 h-5" />}
                            >
                                Publicar Oportunidad
                            </Button>
                            <Button
                                type="button"
                                variant="secondary"
                                onClick={() => setView('company-talent-scout')}
                            >
                                Cancelar
                            </Button>
                        </div>
                    </form>
                </Card>
            </div>
        </div>
    );
};
