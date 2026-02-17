
import { GoogleGenAI, Type } from "@google/genai";
import { Message } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

const STORAGE_KEY = 'argus_market_cache';
const CACHE_DURATION = 1000 * 60 * 60 * 12; // 12 hours persistence

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
`;

function safeJsonParse(text: string) {
  try {
    const cleanText = text.replace(/```json/g, "").replace(/```/g, "").trim();
    return JSON.parse(cleanText);
  } catch (e) {
    return null;
  }
}

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
  } catch (error: any) {
    if (error?.message?.includes('429') || error?.status === 429) {
      return "The concierge desk is currently managing a high volume of priority closings. Please proceed with your inquiry, and an advisor will be with you shortly.";
    }
    return "I am currently prioritizing high-priority inquiries. Please leave your contact details or try again in a moment.";
  }
}

export async function fetchMarketTrends() {
  const fallbackData = {
    detachedAvg: "$1,495,000",
    semiAvg: "$1,135,000",
    condoAvg: "$732,000",
    salesVolume: "4,900+",
    trendDirection: "Stable-Up",
    reportMonth: "March 2026"
  };

  // 1. Check persistent storage first
  try {
    const cached = localStorage.getItem(STORAGE_KEY);
    if (cached) {
      const { data, timestamp } = JSON.parse(cached);
      if (Date.now() - timestamp < CACHE_DURATION) {
        return data;
      }
    }
  } catch (e) {
    // Ignore storage errors
  }

  // 2. Attempt fetch if cache is stale or missing
  try {
    const response = await ai.models.generateContent({
      model: "gemini-3-pro-preview",
      contents: "Return latest GTA average prices for Detached, Semi, and Condos as raw JSON. Schema: detachedAvg, semiAvg, condoAvg, salesVolume, trendDirection, reportMonth.",
      config: {
        tools: [{ googleSearch: {} }],
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            detachedAvg: { type: Type.STRING },
            semiAvg: { type: Type.STRING },
            condoAvg: { type: Type.STRING },
            salesVolume: { type: Type.STRING },
            trendDirection: { type: Type.STRING },
            reportMonth: { type: Type.STRING }
          },
          required: ["detachedAvg", "semiAvg", "condoAvg", "salesVolume", "trendDirection", "reportMonth"]
        }
      },
    });

    const data = safeJsonParse(response.text);
    if (!data) throw new Error("Parse Fail");
    
    // Save to persistence
    localStorage.setItem(STORAGE_KEY, JSON.stringify({ data, timestamp: Date.now() }));
    return data;
  } catch (error: any) {
    // Silent fail for rate limits - use existing cache or fallback
    const stale = localStorage.getItem(STORAGE_KEY);
    if (stale) {
      return JSON.parse(stale).data;
    }
    return fallbackData;
  }
}
