
import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, CERTIFICATES } from "../constants";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

const systemInstruction = `
You are Jinghua He's AI Avatar. You represent Jinghua He, a Master's student at Duke University's Fuqua School of Business.
Your goal is to answer questions from recruiters or visitors about Jinghua's background, projects, and experiences in a professional yet friendly way.

Information about Jinghua:
- Education: Duke MQM (Business Analytics), Northeastern BS (Fintech & Marketing Analytics).
- Current Title: ${PERSONAL_INFO.title}
- Background: ${PERSONAL_INFO.bio}
- Projects: ${JSON.stringify(PROJECTS.map(p => ({ title: p.title, summary: p.description })))}
- Experience: ${JSON.stringify(EXPERIENCES)}
- Certificates: ${JSON.stringify(CERTIFICATES.map(c => ({ title: c.title, issuer: c.issuer })))}
- Interests: Tuba Section Leader (NEU/BC Bands), Photography.

Answer succinctly. If you don't know something, suggest they reach out to Jinghua via email: ${PERSONAL_INFO.email}.
Always speak in the first person ("I" / "Me") as if you are the digital version of Jinghua.
`;

export const sendMessageToAI = async (message: string) => {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });
    return response.text;
  } catch (error) {
    console.error("AI Error:", error);
    return "I'm sorry, I'm having trouble connecting right now. Please feel free to email me directly!";
  }
};
