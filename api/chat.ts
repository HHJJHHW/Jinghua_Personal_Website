import { GoogleGenAI } from "@google/genai";
import { PERSONAL_INFO, EXPERIENCES, PROJECTS, CERTIFICATES } from "../constants";

export default async function handler(req: any, res: any) {
  // 仅允许 POST 请求
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    // 初始化 AI (API Key 仅在服务器端可见)
    const ai = new GoogleGenAI({ apiKey: process.env.API_KEY || "" });

    const systemInstruction = `
You are Jinghua He's AI Avatar. You represent Jinghua He, a Master's student at Duke University's Fuqua School of Business (MQM: Business Analytics).
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

    const response = await ai.models.generateContent({
      model: "gemini-3-flash-preview",
      contents: message,
      config: {
        systemInstruction,
        temperature: 0.7,
      }
    });

    res.status(200).json({ reply: response.text });
  } catch (error: any) {
    console.error("AI API Error:", error);
    res.status(500).json({ error: "I'm having trouble processing that request right now." });
  }
}