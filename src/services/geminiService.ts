
import { GoogleGenAI } from "@google/genai";
import { Experience, StudentProfile, CompanyProfile } from "../types";

const apiKey = process.env.API_KEY || '';

let ai: GoogleGenAI | null = null;
if (apiKey) {
  ai = new GoogleGenAI({ apiKey });
}

/**
 * Generates a pedagogical and reassuring analysis for a student.
 */
export const generateEducationalMatch = async (student: StudentProfile, exp: Experience): Promise<string> => {
  if (!ai) {
    console.warn("API Key not found, returning mock explanation.");
    return exp.aiExplanation;
  }

  try {
    const featuresText = exp.physicalFeatures.filter(f => f.isAvailable).map(f => f.label).join(", ");
    
    const prompt = `
      Actúa como un orientador vocacional para jóvenes con discapacidad.
      
      Perfil Estudiante: ${student.name}, ${student.age} años. ${student.educationLevel}.
      Intereses: ${student.interests.join(', ')}.
      Personalidad: ${student.personalityTraits.join(', ')}.
      
      Oportunidad: ${exp.title} en ${exp.company}.
      Accesibilidad: ${featuresText}.
      
      Explica en 1 frase motivadora por qué esta experiencia es segura y valiosa para su futuro. Tono juvenil y esperanzador.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || exp.aiExplanation;
  } catch (error) {
    console.error("Error generating AI analysis:", error);
    return exp.aiExplanation;
  }
};

/**
 * Generates an analysis for the Company (Recruiter) about a Student.
 * Focuses on Psychosocial fit and "Godparenting".
 */
export const generateStudentAnalysisForCompany = async (company: CompanyProfile, student: StudentProfile): Promise<string> => {
  if (!ai) {
     // Mock fallbacks based on simple logic
     if (student.hobbies.some(h => h.includes('Gaming') || h.includes('Tech'))) {
        return `${student.name} tiene una afinidad natural con la tecnología y el gaming, lo que sugiere una adaptación rápida a la cultura de ${company.name}.`;
     }
     return `El perfil resiliente y creativo de ${student.name} aportaría una perspectiva única a tu equipo de ${company.industry}.`;
  }

  try {
    const prompt = `
      Actúa como un Consultor de Inclusión y Talento Humano.
      
      La empresa "${company.name}" (${company.industry}, Cultura: ${company.description}) está buscando jóvenes para apadrinar/mentorear.
      
      Candidato: ${student.name} (${student.age} años).
      Bio: "${student.bio}"
      Rasgos: ${student.personalityTraits.join(', ')}.
      Hobbies: ${student.hobbies.join(', ')}.
      Carrera/Interés: ${student.career || student.gradeOrYear}.
      
      Escribe una recomendación breve (máximo 2 frases) para el Gerente de la empresa.
      Explica por qué deberían "Apadrinar" a este joven basándote en su perfil humano/psicosocial (soft skills), no solo técnico.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "Perfil recomendado por compatibilidad cultural.";
  } catch (error) {
    console.error("Error generating AI Company analysis:", error);
    return "Perfil recomendado por compatibilidad cultural.";
  }
};
