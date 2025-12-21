import { GoogleGenAI, Type } from "@google/genai";
import { AnalysisResult, Language } from "../types";

// Initialize Gemini Client
const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

/**
 * Helper to convert File object to Base64 string
 */
export const fileToGenerativePart = async (file: File): Promise<string> => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      // Remove data url prefix (e.g. "data:image/jpeg;base64,")
      const base64Content = base64String.split(',')[1];
      resolve(base64Content);
    };
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
};

export const analyzeImage = async (base64Image: string, language: Language = 'pt-BR'): Promise<AnalysisResult> => {
  const modelId = "gemini-2.5-flash";

  const langMap: Record<Language, string> = {
    'pt-BR': 'Portuguese (Brazil)',
    'en': 'English',
    'es': 'Spanish'
  };

  const targetLang = langMap[language];
  const currency = language === 'pt-BR' ? 'BRL (Brazilian Real)' : 'USD (US Dollar)';

  const prompt = `
    Analyze this vehicle image as an expert automotive adjuster, senior mechanic, and traffic law expert.
    
    1. Identify the vehicle and damage severity.
    2. List affected parts with repair actions and costs in ${currency}.
    3. LEGAL ANALYSIS: Based on the visual evidence (impact angle, damage location), infer the likely scenario. 
       Explain who generally bears the cost/liability in this type of collision according to Brazilian Traffic Laws (Código de Trânsito Brasileiro - CTB).
       Cite relevant CTB articles if possible (e.g., rear-end collision presumption of guilt).
       Provide brief advice on next steps.
    4. Generate a hidden marketing profile.
    
    IMPORTANT: Provide all string text response in ${targetLang}.
  `;

  try {
    const response = await ai.models.generateContent({
      model: modelId,
      contents: {
        parts: [
          { inlineData: { mimeType: "image/jpeg", data: base64Image } },
          { text: prompt }
        ]
      },
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            vehicle: {
              type: Type.OBJECT,
              properties: {
                make: { type: Type.STRING },
                model: { type: Type.STRING },
                year: { type: Type.STRING, description: "Approximate year range" },
                type: { type: Type.STRING, description: "Sedan, SUV, Truck, etc." },
              }
            },
            damage: {
              type: Type.OBJECT,
              properties: {
                severityScore: { type: Type.NUMBER, description: "0 to 100" },
                collisionType: { type: Type.STRING },
                structuralIntegrity: { type: Type.STRING },
                summary: { type: Type.STRING }
              }
            },
            legal: {
              type: Type.OBJECT,
              properties: {
                liabilityAssessment: { type: Type.STRING, description: "Who is likely at fault or who pays" },
                ctbReference: { type: Type.STRING, description: "Mention CTB articles or general traffic rules" },
                advice: { type: Type.STRING, description: "Recommendation for the user" }
              }
            },
            parts: {
              type: Type.ARRAY,
              items: {
                type: Type.OBJECT,
                properties: {
                  name: { type: Type.STRING },
                  action: { type: Type.STRING, enum: ["REPLACE", "REPAIR", "CHECK"] },
                  estimatedCost: { type: Type.NUMBER },
                  status: { type: Type.STRING, enum: ["CRITICAL", "MAJOR", "MINOR"] }
                }
              }
            },
            costs: {
              type: Type.OBJECT,
              properties: {
                partsTotal: { type: Type.NUMBER },
                laborHours: { type: Type.NUMBER },
                laborRate: { type: Type.NUMBER },
                totalMin: { type: Type.NUMBER },
                totalMax: { type: Type.NUMBER },
                currency: { type: Type.STRING }
              }
            },
            profile: {
              type: Type.OBJECT,
              properties: {
                segment: { type: Type.STRING },
                churnRisk: { type: Type.STRING },
                upsellOpportunity: { type: Type.STRING },
                recommendedServices: { type: Type.ARRAY, items: { type: Type.STRING } }
              }
            }
          }
        }
      }
    });

    if (response.text) {
      const parsed = JSON.parse(response.text);
      // Add metadata for system use
      return {
        ...parsed,
        id: crypto.randomUUID(),
        timestamp: Date.now()
      } as AnalysisResult;
    }
    throw new Error("No response text from Gemini");

  } catch (error) {
    console.error("Gemini Analysis Error:", error);
    throw error;
  }
};