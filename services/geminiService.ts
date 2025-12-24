
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || '' });

export const getChristmasMessage = async (): Promise<string> => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: "Escreva uma mensagem de Natal curta, calorosa e emocionante (máximo 35 palavras) em português dedicada à pessoa que está lendo e a toda a sua família. A mensagem deve ser assinada por 'Nick'. Seja poético e natalino.",
      config: {
        temperature: 0.9,
      }
    });
    return response.text || "Que a luz do Natal ilumine o seu coração e o de toda a sua família com paz e alegria hoje e sempre. Feliz Natal! Com carinho, Nick.";
  } catch (error) {
    console.error("Error fetching Gemini message:", error);
    return "Que o brilho deste Natal traga esperança e felicidade para você e todos os seus familiares. Boas festas! Com carinho, Nick.";
  }
};
