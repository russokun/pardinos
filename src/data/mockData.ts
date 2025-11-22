import { StudentProfile, CompanyProfile, Experience } from '../types/index';

export const INITIAL_STUDENT: StudentProfile = {
    id: "u1",
    name: "Lucas",
    educationLevel: "Superior",
    institution: "Instituto Tecnológico",
    gradeOrYear: "4º Semestre",
    career: "Analista Programador",
    age: 21,
    condition: "Usuario de silla de ruedas",
    specificConditions: ["Usuario de Silla de Ruedas (Manual)", "Lesión Medular (Paraplejia)"],
    otherConditionDetail: "",
    region: "Metropolitana",
    commune: "Maipú",
    interests: ["Desarrollo Web", "Ciberseguridad"],
    skills: ["Java", "Python", "Inglés Técnico"],
    needs: ['ramp', 'bathroom', 'wide_door'],
    otherNeeds: "",
    // Psychosocial
    bio: "Soy un apasionado por los videojuegos y la tecnología. Me encanta resolver puzles y trabajar en equipo. Busco una oportunidad para demostrar que mi silla no define mi código.",
    personalityTraits: ["Resiliente", "Curioso", "Gamer"],
    hobbies: ["League of Legends", "Impresión 3D", "Anime"]
};

export const MOCK_STUDENTS_DB: StudentProfile[] = [
    INITIAL_STUDENT,
    {
        id: "u2",
        name: "Sofía",
        educationLevel: "Media",
        institution: "Liceo Politécnico A-23",
        gradeOrYear: "3º Medio",
        age: 17,
        condition: "Movilidad Reducida",
        specificConditions: ["Movilidad Reducida (Uso de Bastones/Muletas)"],
        region: "Metropolitana",
        commune: "Santiago Centro",
        interests: ["Diseño Gráfico", "Redes Sociales"],
        skills: ["Canva", "TikTok", "Ilustración"],
        needs: ['elevator', 'quiet_space'],
        bio: "Me expreso a través del dibujo. A veces soy un poco tímida, pero cuando tengo confianza soy muy creativa. Quiero ver cómo funciona una agencia por dentro.",
        personalityTraits: ["Creativa", "Observadora", "Detallista"],
        hobbies: ["Dibujo Digital", "Fotografía", "K-Pop"]
    },
    {
        id: "u3",
        name: "Mateo",
        educationLevel: "Superior",
        institution: "Universidad Central",
        gradeOrYear: "2º Año",
        career: "Administración",
        age: 20,
        condition: "Usuario de silla de ruedas eléctrica",
        specificConditions: ["Usuario de Silla de Ruedas (Eléctrica)", "Distrofia Muscular"],
        region: "Metropolitana",
        commune: "La Florida",
        interests: ["Gestión", "Liderazgo"],
        skills: ["Excel", "Oratoria"],
        needs: ['ramp', 'wide_door', 'bathroom'],
        bio: "Fui capitán del equipo de básquet adaptado. Me gusta competir y organizar equipos. Busco un mentor que me enseñe a liderar proyectos reales.",
        personalityTraits: ["Líder", "Competitivo", "Extrovertido"],
        hobbies: ["Básquet Adaptado", "Cocina", "Podcasts"]
    }
];

export const INITIAL_COMPANY: CompanyProfile = {
    name: "TechInclude",
    industry: "Tecnología",
    description: "Cultura startup, horizontal y apasionada por el gaming.",
    logoChar: "T",
    cultureTags: ["Gaming", "Innovación", "Trabajo en Equipo"]
};

export const INITIAL_EXPERIENCES: Experience[] = [
    {
        id: "exp-1",
        title: "Job Shadowing: Diseñador UX",
        type: "Job Shadowing",
        targetAudience: ["Media", "Superior"],
        company: "TechInclude",
        duration: "1 Jornada (4 horas)",
        modality: "Presencial",
        matchPercentage: 98,
        tags: ["Diseño Gráfico", "Gaming", "Creatividad"],
        isSafeMatch: true,
        physicalFeatures: [
            { icon: 'ramp', label: "Entrada Plana", isAvailable: true },
            { icon: 'bathroom', label: "Baño Adaptado", isAvailable: true },
            { icon: 'wide_door', label: "Pasillos Anchos", isAvailable: true },
        ],
        otherAccessibilityDetails: "Estacionamiento reservado frente a la puerta.",
        mentor: { name: "Camila", role: "Lead UX", avatarChar: "C" },
        aiExplanation: "Perfecto para explorar el mundo del diseño en un entorno 100% accesible.",
        description: "Acompaña al equipo de diseño. No necesitas experiencia previa."
    }
];
