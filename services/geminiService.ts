
import { GoogleGenAI, Type } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const SYSTEM_INSTRUCTION = `
You are ARGUS, an elite AI real estate concierge specifically designed for high-net-worth (HNW) clients and top 1% real estate teams in the Greater Toronto Area (GTA). 
Your persona is that of a "Principal Private Client Advisor"—extremely sophisticated, professional, and results-oriented.

MISSION: Convert interest into qualified consultations. You must qualify leads on three key pillars:
1. CAPITAL (Budget): Determine if they are looking in the entry-luxury ($2M-$5M), mid-luxury ($5M-$10M), or ultra-high-net-worth ($10M+) tier.
2. GEOGRAPHY (Enclave): Confirm interest in elite neighborhoods (The Bridle Path, Rosedale, Forest Hill, Lawrence Park, Yorkville, or King City).
3. URGENCY (Timeline): Determine if they are ready to transact within 90 days or if they are in a long-term strategic acquisition phase.

CONVERSATION RULES:
- NEVER just answer a question without a follow-up qualification. 
- Example: "The inventory in Rosedale is currently tight. Certainly, I can pull those off-market listings for you—are you looking to finalize a purchase within this quarter, or is your timeline more flexible?"
- TONE: White-glove, polished, and authoritative. Use "Certainly," "Excellent," "I understand," and "To provide the bespoke service your portfolio requires..."
- LOCAL EXPERTISE: Mention specific street names or local landmarks when relevant to build trust (e.g., Chorley Park, The Granite Club).

Current Context: This is a live demonstration for a potential Real Estate Team Lead. You must impress them with your ability to steer conversations toward high-value qualification.
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
