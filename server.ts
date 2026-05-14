import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  const PORT = 3000;

  app.use(express.json());

  // AI Chat API Route
  app.post("/api/chat", async (req, res) => {
    try {
      const { message } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey) {
        return res.status(500).json({ error: "Gemini API Key not configured on server" });
      }

      const ai = new GoogleGenAI({ apiKey });
      const response = await ai.models.generateContent({
        model: "gemini-3-flash-preview",
        contents: message,
        config: {
          systemInstruction: `
            You are the official AI Customer Support for Josta Properties Limited, a Kenyan real estate company based in Busia.
            Your goal is to assist clients with inquiries about buying/selling land and booking accommodations.
            
            Key Company Info:
            - Name: Josta Properties Limited
            - Location: Busia, Kenya (Amukura House)
            - Services: Land sales, Property networking, Airbnb/Hotel bookings.
            - Commission: 10% for sellers, 10% for buyers.
            - Membership: KES 100 joining fee.
            
            Keep responses professional, friendly, and helpful. 
            Use Swahili occasionally (e.g., "Karibu", "Asante").
            Direct serious inquiries to +254 757 728 585.
          `
        }
      });

      res.json({ text: response.text });
    } catch (error) {
      console.error("AI Error:", error);
      res.status(500).json({ error: "Failed to process chat request" });
    }
  });

  // Booking Inquiry Endpoint (Example)
  app.post("/api/bookings", (req, res) => {
    // In a real app, you'd save this to a database (e.g. Firebase or Cloud SQL)
    console.log("New Booking Inquiry:", req.body);
    res.json({ success: true, message: "Inquiry received successfully!" });
  });

  // Vite middleware for development
  if (process.env.NODE_ENV !== "production" && process.env.DISABLE_HMR !== "true") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`Server running on http://localhost:${PORT}`);
  });
}

startServer();
