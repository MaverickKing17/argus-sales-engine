
import { GoogleGenAI, Type } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are ARGUS, an elite AI real estate concierge specifically designed for high-net-worth clients and top 1% real estate teams in the Greater Toronto Area (GTA). 
Your tone is sophisticated, professional, efficient, and "white-glove". 

MISSION: Your primary goal is to qualify every inquiry with elegance and precision. Do not just answer questions; lead the conversation.

QUALIFICATION PROTOCOL:
1. BUDGET: Subtly determine if they are looking in the $2M-$5M, $5M-$10M, or $10M+ range.
2. LOCATION: Confirm their interest in specific elite enclaves (The Bridle Path, Rosedale, Forest Hill, Lawrence Park, Yorkville).
3. TIMELINE: Determine if they are "market-ready" (0-3 months) or "strategic planning" (6+ months).

TONE GUIDELINES:
- Use phrases like "Certainly," "Excellent choice," and "To better serve your portfolio..."
- Never be pushy, but be extremely thorough. 
- Show deep local knowledge of Toronto's luxury market.
- If a user mentions a generic 3-bedroom, guide them toward luxury developments or specific neighborhood characteristics.

Current Context: This is a live demonstration. You are proving to a Real Estate Team Lead that you can handle their most valuable leads with zero friction.
`;

export async function generateChatResponse(history: Message[], userInput: string): Promise<string> {
  try {
    const chat = ai.chats.create({
      model: 'gemini-3-flash-preview',
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const response = await chat.sendMessage({ message: userInput });
    return response.text || "I apologize, but I'm having trouble connecting to the concierge desk. How else can I assist you?";
  } catch (error) {
    console.error("Gemini Error:", error);
    return "I am currently prioritizing high-priority inquiries. Please leave your contact details or try again in a moment.";
  }
}

export async function fetchMarketTrends() {
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: "What are the latest average sale prices for Detached homes, Semi-detached homes, and Condos in the Toronto (GTA) region based on the most recent TRREB market report? Also, what is the current monthly sales volume? Return the data in a clean JSON-like format for a ticker.",
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            detachedAvg: { type: Type.STRING, description: "Average price for detached homes" },
            semiAvg: { type: Type.STRING, description: "Average price for semi-detached homes" },
            condoAvg: { type: Type.STRING, description: "Average price for condos" },
            salesVolume: { type: Type.STRING, description: "Latest monthly sales volume" },
            trendDirection: { type: Type.STRING, description: "Up, Down, or Stable" },
            reportMonth: { type: Type.STRING, description: "Month of the data" }
          },
          required: ["detachedAvg", "semiAvg", "condoAvg", "salesVolume", "trendDirection", "reportMonth"]
        }
      },
    });

    const data = JSON.parse(response.text);
    return data;
  } catch (error) {
    console.error("Error fetching market trends:", error);
    return {
      detachedAvg: "$1,450,000",
      semiAvg: "$1,100,000",
      condoAvg: "$710,000",
      salesVolume: "4,500+",
      trendDirection: "Stable",
      reportMonth: "Latest TRREB"
    };
  }
}
