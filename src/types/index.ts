
export type UserRole = 'student' | 'company' | null;

export type EducationLevel = 'Media' | 'Superior';

export interface StudentProfile {
  id: string;
  name: string;
  educationLevel: EducationLevel;
  institution: string; // Liceo o Universidad/Instituto
  gradeOrYear: string; // "4º Medio" o "3er Semestre"
  career?: string; // Solo para educación superior
  age: number;
  condition: string; // Resumen o título principal

  // Detailed Physical Profile
  specificConditions: string[]; // Lista de checkbox seleccionados
  otherConditionDetail?: string; // Texto libre si selecciona "Otro"
  needs: AccessibilityFeatureType[];
  otherNeeds?: string; // Detalles de accesibilidad del entorno

  region?: string;
  commune?: string;
  interests: string[]; // Professional interests (e.g. Python)
  skills: string[];


  // Psychosocial Profile
  bio: string;
  personalityTraits: string[]; // e.g. "Resiliente", "Líder", "Creativo"
  hobbies: string[]; // e.g. "Gaming", "Anime", "Fútbol"

  // Company Match Analysis (optional, for pre-generated insights)
  companyMatchAnalysis?: string;
}

export interface CompanyProfile {
  name: string;
  industry: string;
  description: string;
  logoChar: string;
  cultureTags: string[]; // To match with student hobbies/traits
}

export interface Mentor {
  name: string;
  role: string;
  avatarChar: string;
}

export type AccessibilityFeatureType = 'ramp' | 'elevator' | 'bathroom' | 'wide_door' | 'quiet_space' | 'sign_language';

export interface AccessibilityFeature {
  icon: AccessibilityFeatureType;
  label: string;
  isAvailable: boolean;
}

export interface Experience {
  id: string;
  title: string;
  type: 'Job Shadowing' | 'Pasantía' | 'Visita Técnica' | 'Práctica Profesional' | 'Mentoría' | 'Capacitación';
  targetAudience: EducationLevel[];
  company: string;
  companyId?: string;
  duration: string;
  modality: 'Presencial' | 'Híbrido' | 'Remoto';
  matchPercentage: number;
  tags: string[];
  physicalFeatures: AccessibilityFeature[];
  otherAccessibilityDetails?: string;
  aiExplanation: string;
  description: string;
  mentor?: Mentor;
  isSafeMatch: boolean;
}

export type ViewState = 'landing' | 'student-dashboard' | 'student-profile' | 'company-dashboard' | 'company-talent-scout' | 'company-create-post';