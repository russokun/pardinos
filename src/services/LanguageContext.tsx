import React, { createContext, useContext, useState, ReactNode } from 'react';
import { Earth } from 'lucide-react';
import { Button } from '../components/ui/Button';

type Language = 'es' | 'en';

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
    es: {
        "common.back": "Volver",
        "landing.badge": "El Viaje Evolutivo es de a Pares",
        "landing.title": "Pardinos Teletón:",
        "landing.subtitle": "Más que un Padrinazgo, una Evolución Radical",
        "landing.description": "Transformamos vidas conectando jóvenes talentos con referentes que guían su \"Viaje Heroico\" hacia el éxito profesional.",
        "landing.studentCard.title": "Postula como Talento",
        "landing.studentCard.desc": "Inicia tu \"Viaje Heroico\" hacia la educación superior y el mundo profesional.",
        "landing.studentCard.cta": "Quiero un Pardino/a",
        "landing.companyCard.title": "Conviértete en Pardino/a",
        "landing.companyCard.desc": "Acompaña a un joven talentoso y genera un impacto real a través de la mentoría.",
        "landing.companyCard.cta": "Quiero ser mentor/a",
        "landing.model.badge": "NUESTRA PROPUESTA DE VALOR",
        "landing.model.title": "Nuestro Modelo",
        "landing.model.step1.title": "Match Estratégico",
        "landing.model.step1.desc": "Conectamos jóvenes con profesionales que comparten historias de resiliencia y éxito.",
        "landing.model.step2.title": "Viaje Heroico",
        "landing.model.step2.desc": "Acompañamiento integral: mentalidad (mindset), barreras psicológicas y financiamiento.",
        "landing.model.step3.title": "Ciclo Evolutivo",
        "landing.model.step3.desc": "El joven profesional se convierte en mentor, financiando la beca del siguiente talento.",
        "landing.winners.badge": "Reconocimiento 2025",
        "landing.winners.title": "Winners",
        "landing.winners.subtitle1": "La Bendita Hackathon",
        "landing.winners.subtitle2": "IA x Teletón",
        "landing.winners.desc1": "Seleccionados entre más de",
        "landing.winners.desc2": "y",
        "landing.winners.desc3": "por nuestra propuesta para transformar la discapacidad en",
        "landing.winners.prof": "Profesionales",
        "landing.winners.projects": "Proyectos",
        "landing.winners.humanCapital": "capital humano de excelencia",
        "landing.winners.organizedBy": "Organizado por",

        "student.dashboard.welcome": "¡Hola,",
        "student.dashboard.cta": "Potencia tu \"Viaje Heroico\" completando tu perfil para conectar con un Mentor",
        "student.dashboard.editProfile": "Editar Mi Perfil",
        "student.dashboard.opportunities.title": "Tu Viaje Heroico: Oportunidades",
        "student.dashboard.opportunities.desc": "Conecta con Mentores que serán tus referentes en el mundo profesional. Encuentra el apoyo para conquistar tu carrera.",

        "student.profile.back": "Volver al Dashboard",
        "student.profile.title": "Editor de Perfil Completo",
        "student.profile.general.title": "1. Datos Generales",
        "student.profile.section2": "2. Condición Física y Accesibilidad",
        "student.profile.section2Desc": "Selecciona todas las condiciones que apliquen a tu situación. Esto nos ayuda a buscar entornos seguros para ti.",
        "student.profile.section3": "3. Perfil Psicosocial (Tu Personalidad)",
        "student.profile.personality": "¿Cómo te describes? (Selecciona tus rasgos)",
        "student.profile.traits": "Creativo,Resiliente,Líder,Introvertido,Extrovertido,Curioso,Analítico,Colaborativo",

        "profile.hobbies": "Tus Pasiones y Hobbies",
        "profile.bio": "Tu Biografía Corta",
        "profile.bioPlaceholder": "Cuéntale a tu futuro Mentor quién eres, qué sueñas y qué te motiva en tu Viaje Heroico...",
        "profile.save": "Guardar Perfil Completo",
        "profile.back": "Volver al Dashboard",

        "company.scout.status": "Modo Pardino/Madrina: Propósito en Evolución",
        "company.scout.createOpportunity": "Crear Oportunidad",
        "company.scout.title": "Guía un Viaje Heroico",
        "company.scout.subtitle": "Descubre jóvenes con historias de resiliencia y talento. Sé el referente que necesitan para transformar su potencial en capital humano de excelencia.",
        "company.create.title": "Crear Nueva Oportunidad",

        "footer.description": "Plataforma profesional que conecta talento diverso con empresas líderes. Facilitamos oportunidades de desarrollo, mentoría y crecimiento profesional.",
        "footer.quickLinks.title": "Enlaces Rápidos",
        "footer.quickLinks.about": "Sobre Nosotros",
        "footer.quickLinks.howItWorks": "Cómo Funciona",
        "footer.quickLinks.stories": "Historias de Éxito",
        "footer.quickLinks.partners": "Empresas Aliadas",
        "footer.quickLinks.resources": "Recursos",
        "footer.contact.title": "Contacto",
        "footer.rights": "Todos los derechos reservados.",
        "footer.privacy": "Privacidad",
        "footer.terms": "Términos",
        "footer.accessibility": "Accesibilidad"
    },
    en: {
        "common.back": "Back",
        "landing.badge": "The Evolutionary Journey is in Pairs",
        "landing.title": "Pardinos Teletón:",
        "landing.subtitle": "More than a Sponsorship, a Radical Evolution",
        "landing.description": "We transform lives by connecting young talents with role models who guide their \"Heroic Journey\" towards professional success.",
        "landing.studentCard.title": "Apply as Talent",
        "landing.studentCard.desc": "Start your \"Heroic Journey\" towards higher education and the professional world.",
        "landing.studentCard.cta": "I want a Pardino/a",
        "landing.companyCard.title": "Become a Pardino/a",
        "landing.companyCard.desc": "Accompany a talented young person and generate real impact through mentoring.",
        "landing.companyCard.cta": "I want to be a mentor",
        "landing.model.badge": "OUR VALUE PROPOSITION",
        "landing.model.title": "Our Model",
        "landing.model.step1.title": "Strategic Match",
        "landing.model.step1.desc": "We connect young people with professionals who share stories of resilience and success.",
        "landing.model.step2.title": "Heroic Journey",
        "landing.model.step2.desc": "Comprehensive support: mindset, psychological barriers, and funding.",
        "landing.model.step3.title": "Evolutionary Cycle",
        "landing.model.step3.desc": "The young professional becomes a mentor, funding the next talent's scholarship.",
        "landing.winners.badge": "2025 Recognition",
        "landing.winners.title": "Winners",
        "landing.winners.subtitle1": "La Bendita Hackathon",
        "landing.winners.subtitle2": "AI x Teletón",
        "landing.winners.desc1": "Selected from over",
        "landing.winners.desc2": "and",
        "landing.winners.desc3": "for our proposal to transform disability into",
        "landing.winners.prof": "Professionals",
        "landing.winners.projects": "Projects",
        "landing.winners.humanCapital": "advanced human capital",
        "landing.winners.organizedBy": "Organized by",

        "student.dashboard.welcome": "Hello,",
        "student.dashboard.cta": "Boost your \"Heroic Journey\" by completing your profile to connect with a Mentor",
        "student.dashboard.editProfile": "Edit My Profile",
        "student.dashboard.opportunities.title": "Your Heroic Journey: Opportunities",
        "student.dashboard.opportunities.desc": "Connect with Mentors who will be your role models in the professional world. Find the support to conquer your career.",

        "student.profile.back": "Back to Dashboard",
        "student.profile.title": "Complete Profile Editor",
        "student.profile.general.title": "1. General Information",
        "student.profile.section2": "2. Physical Condition and Accessibility",
        "student.profile.section2Desc": "Select all conditions that apply to your situation. This helps us find safe environments for you.",
        "student.profile.section3": "3. Psychosocial Profile (Your Personality)",
        "student.profile.personality": "How do you describe yourself? (Select your traits)",
        "student.profile.traits": "Creative,Resilient,Leader,Introverted,Extroverted,Curious,Analytical,Collaborative",

        "profile.hobbies": "Your Passions and Hobbies",
        "profile.bio": "Your Short Bio",
        "profile.bioPlaceholder": "Tell your future Mentor who you are, what you dream of, and what motivates you on your Heroic Journey...",
        "profile.save": "Save Complete Profile",
        "profile.back": "Back to Dashboard",

        "company.scout.status": "Pardino/Madrina Mode: Purpose in Evolution",
        "company.scout.createOpportunity": "Create Opportunity",
        "company.scout.title": "Guide a Heroic Journey",
        "company.scout.subtitle": "Discover young people with stories of resilience and talent. Be the role model they need to transform their potential into advanced human capital.",
        "company.create.title": "Create New Opportunity",

        "footer.description": "Professional platform connecting diverse talent with leading companies. We facilitate development, mentorship, and professional growth opportunities.",
        "footer.quickLinks.title": "Quick Links",
        "footer.quickLinks.about": "About Us",
        "footer.quickLinks.howItWorks": "How it Works",
        "footer.quickLinks.stories": "Success Stories",
        "footer.quickLinks.partners": "Partner Companies",
        "footer.quickLinks.resources": "Resources",
        "footer.contact.title": "Contact",
        "footer.rights": "All rights reserved.",
        "footer.privacy": "Privacy",
        "footer.terms": "Terms",
        "footer.accessibility": "Accessibility"
    }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [language, setLanguage] = useState<Language>('es');

    const t = (key: string) => {
        return translations[language][key] || key;
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within a LanguageProvider');
    }
    return context;
};

export const LanguageSwitch: React.FC = () => {
    const { language, setLanguage } = useLanguage();

    return (
        <Button
            variant="ghost"
            onClick={() => setLanguage(language === 'es' ? 'en' : 'es')}
            className="flex items-center gap-2 px-3 py-1.5 h-auto bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all"
        >
            <Earth className="w-4 h-4 text-brand-purple" />
            <span className="text-xs font-black uppercase tracking-widest text-white">
                {language === 'es' ? 'EN' : 'ES'}
            </span>
        </Button>
    );
};
