import React, { useState, useEffect } from 'react';
import { StudentProfile, Experience, ViewState, CompanyProfile } from './types/index';
import { generateStudentAnalysisForCompany } from './services/geminiService';
import { INITIAL_STUDENT, MOCK_STUDENTS_DB, INITIAL_COMPANY, INITIAL_EXPERIENCES } from './data/mockData';
import { SuccessModal } from './components/SuccessModal';

// Views
import { Landing } from './views/Landing';
import { StudentDashboard } from './views/StudentDashboard';
import { StudentProfileView } from './views/StudentProfile';
import { CompanyTalentScout } from './views/CompanyTalentScout';

export default function App() {
    const [view, setView] = useState<ViewState>('landing');
    const [student, setStudent] = useState<StudentProfile>(INITIAL_STUDENT);
    const [company, setCompany] = useState<CompanyProfile>(INITIAL_COMPANY);
    const [experiences, setExperiences] = useState<Experience[]>(INITIAL_EXPERIENCES);

    // --- STATES FOR COMPANY TALENT SCOUT ---
    const [candidates, setCandidates] = useState<{ profile: StudentProfile, matchAnalysis: string }[]>([]);
    const [sponsoringCandidate, setSponsoringCandidate] = useState<StudentProfile | null>(null);

    // --- STATES FOR STUDENT ---
    const [showSuccess, setShowSuccess] = useState(false);
    const [successMessage, setSuccessMessage] = useState("");

    // --- EFFECTS ---

    // Load candidates analysis when company view opens
    useEffect(() => {
        if (view === 'company-talent-scout') {
            const loadCandidates = () => {
                // 1. Set initial candidates with "Analizando..." state immediately
                const initialData = MOCK_STUDENTS_DB.map(cand => ({
                    profile: cand,
                    matchAnalysis: "La IA está analizando la compatibilidad cultural..."
                }));
                setCandidates(initialData);

                // 2. Update progressively in background
                MOCK_STUDENTS_DB.forEach(async (cand) => {
                    const analysis = await generateStudentAnalysisForCompany(company, cand);
                    setCandidates(prev => prev.map(p =>
                        p.profile.id === cand.id
                            ? { ...p, matchAnalysis: analysis }
                            : p
                    ));
                });
            };
            loadCandidates();
        }
    }, [view, company]);

    // --- HANDLERS ---

    const speakText = (text: string) => {
        window.speechSynthesis.cancel();
        const utterance = new SpeechSynthesisUtterance(text);
        utterance.lang = 'es-ES';
        utterance.rate = 1;
        window.speechSynthesis.speak(utterance);
    };

    const handleSponsor = (candidate: StudentProfile) => {
        setSponsoringCandidate(candidate);
        setSuccessMessage(`Has enviado una invitación de Apadrinamiento a ${candidate.name}.`);
        setShowSuccess(true);
    };

    const handleStudentApply = () => {
        setSuccessMessage("¡Tu interés ha sido enviado! La empresa revisará tu perfil.");
        setShowSuccess(true);
        speakText("¡Felicidades! Tu interés ha sido enviado.");
    };

    // --- RENDER ---

    if (showSuccess) {
        return (
            <SuccessModal
                message={successMessage}
                onClose={() => {
                    setShowSuccess(false);
                    setSponsoringCandidate(null);
                }}
            />
        );
    }

    if (view === 'landing') {
        return <Landing setView={setView} />;
    }

    if (view === 'student-dashboard') {
        return (
            <StudentDashboard
                student={student}
                experiences={experiences}
                setView={setView}
                onApply={handleStudentApply}
                speakText={speakText}
            />
        );
    }

    if (view === 'student-profile') {
        return (
            <StudentProfileView
                student={student}
                setStudent={setStudent}
                setView={setView}
            />
        );
    }

    if (view === 'company-talent-scout') {
        return (
            <CompanyTalentScout
                company={company}
                candidates={candidates}
                setView={setView}
                onSponsor={handleSponsor}
            />
        );
    }

    return null;
}
