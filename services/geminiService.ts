
import { GoogleGenAI } from "@google/genai";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getConciergeResponse = async (userMessage: string) => {
  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: userMessage,
      config: {
        systemInstruction: `Você é o Concierge da Alrion Tech, uma agência de luxo focada em sites de elite. 
        Sua fala deve ser extremamente polida, sofisticada e prestativa.
        Use termos como "Certamente", "Será um prazer", "Nossa curadoria".
        O foco da Alrion é exclusividade, alta performance e design sob medida.
        Não dê preços exatos, convide o cliente para uma reunião estratégica de consultoria.
        Responda em Português do Brasil.`,
        temperature: 0.7,
      },
    });
    return response.text;
  } catch (error) {
    console.error("Gemini Error:", error);
    return "Lamento, mas tive uma pequena interrupção em meus sistemas de luxo. Poderia repetir?";
  }
};
