import express from "express";
import path from "path";
import dotenv from "dotenv";
import { GoogleGenAI } from "@google/genai";
import { createServer as createViteServer } from "vite";

// Load environment variables
dotenv.config();

const app = express();
const PORT = 3000;

app.use(express.json());

// Curated Local Knowledge Base (Fallback & Grounding)
const KORUS_KNOWLEDGE = {
  about: "KORUS Real Estate, established in 2013, is a premier commercial real estate firm in Southern California specializing in retail investment sales, development land, property management, and leasing. Led by veteran President Mark Hong, KORUS combines institutional-grade transactional discipline with local market intelligence.",
  metrics: "KORUS boasts over 35 years of active market tenure (led by Mark Hong since 1990), 2,000+ completed transactions, and over $1 Billion in lifetime transaction volume.",
  offerings: "KORUS offers commercial and industrial brokerage (acquisition & disposition), landlord & tenant leasing representation, and proactive asset & property management.",
  markHong: "President and Founder Mark Hong has active market tenure in California since 1990. He has completed over 2,000 transactions representing $1B+ in valuation, specializing in retail acquisitions and high-density land development. He is a past Chairman/President of the Korean Real Estate Broker Association of Southern California (KREBASC).",
  team: [
    "Mark Hong: President & Designated Broker Officer (License ID: 01067529; 35+ years experience, KREBASC Past President)",
    "Michelle Suh: Senior Vice President (Specialist in HNW commercial investments and retail landlord advisory)",
    "James Chin: Vice President (Tenant leasing representative, commercial brokerage advisor)",
    "Kyi Lee: Vice President (Commercial acquisitions and underwriting)",
    "Tony Kim: Vice President (Retail properties landlord representative)",
    "Michelle Yum: Senior Associate (Leasing logistics and transaction coordinator)",
    "Sun Choi: Vice President (Private client investment advisory)",
    "Christina Yi: Marketing Coordinator (Corporate branding, regional listing distribution)",
    "Furball Hong: Chief Canine Officer & Corporate Mascot (White Pomeranian)"
  ],
  propertiesSale: [
    { address: "4185 Charter St, Vernon, CA 90058", price: "$5,090,000", size: "14,848 sq. ft.", type: "Retail/Industrial" },
    { address: "34112 County Line Rd, Yucaipa, CA", price: "$400,000", size: "N/A", type: "Development Opportunity" },
    { address: "521 E Oaks St, Compton, CA 90221", price: "$784,000", size: "2,200 sq. ft.", type: "Retail/Commercial" },
    { address: "1118 S Atlantic Blvd, Los Angeles, CA 90222", price: "$1,500,000", size: "3,036 sq. ft.", type: "Commercial" },
    { address: "1118 S Atlantic Blvd, Los Angeles, CA 90222 (Retail Asset)", price: "$278,000", size: "1,000 sq. ft.", type: "Retail" },
    { address: "5001 Hollywood Blvd, Los Angeles, CA 90027", price: "$6,100,000 (310 PSF)", size: "16,100 sq. ft.", type: "Commercial/Retail" },
    { address: "South Gate Corridor [Development Land Opportunity]", price: "$1,300,000", size: "N/A", type: "Development Land (Zoned for High Density)" },
    { address: "4303 Firestone Blvd, South Gate, CA 90280", price: "$430,000", size: "1,049 sq. ft.", type: "Retail/Commercial" },
    { address: "2974 E Florence Ave, Huntington Park, CA", price: "$850,000 (80 PSF)", size: "N/A", type: "Zoned Retail" },
    { address: "944 & 948 Dewey Ave, Los Angeles, CA (Multi-Unit Apartment Development)", price: "$5,000,000", size: "21,160 sq. ft.", type: "Apartment" }
  ],
  propertiesLease: [
    { address: "3200 Mowry Ave, Fremont, CA 94538", rate: "$40,001/mo + NNN", size: "8,371 sq. ft.", type: "Prime Restaurant Space" },
    { address: "818 N Pacific Ave, Glendale, CA 91203", rate: "$2.75/SF + NNN", size: "3,301 sq. ft.", type: "Leased Restaurant Turnkey" },
    { address: "922 S Western Ave, Los Angeles, CA 90006", rate: "$10,000/mo + NNN", size: "1,555 sq. ft.", type: "Koreatown Retail" },
    { address: "4521 Fountain Ave, Los Angeles, CA 90029", rate: "$2.25/SF/MO", size: "2,075 sq. ft.", type: "Retail/Commercial" },
    { address: "918 N Western Ave, Los Angeles, CA", rate: "$2.10/SF + NNN", size: "5,380 sq. ft.", type: "High Visibility Retail" },
    { address: "14515 Mojave Dr, Victorville, CA", rate: "$1.20/SF + NNN", size: "17,272 sq. ft.", type: "Large Retail/Showroom" }
  ],
  contact: {
    address: "3255 Wilshire Blvd, Suite 703, Los Angeles, CA 90010 (Heart of Mid-Wilshire/Koreatown)",
    phone: "+1 (213) 251-9000",
    email: "info@korusre.com",
    hours: "Monday – Friday, 9:00 AM to 5:00 PM"
  },
  portals: {
    commercialCafe: "Commercial Cafe Portal - for tenants to submit and track maintenance dispatches.",
    rentCafe: "Rent Cafe Portal - for tenants to process ACH bank payments and view lease statements."
  }
};

// Graceful fallback responder function (if API key missing or requests fail)
function generateLocalResponse(query: string): string {
  const q = query.toLowerCase();

  if (q.includes("phone") || q.includes("email") || q.includes("contact") || q.includes("address") || q.includes("office") || q.includes("where")) {
    return `KORUS Real Estate is located at ${KORUS_KNOWLEDGE.contact.address}. You can reach our advisory desk directly at ${KORUS_KNOWLEDGE.contact.phone} or email us at ${KORUS_KNOWLEDGE.contact.email}. We are open ${KORUS_KNOWLEDGE.contact.hours}.`;
  }
  
  if (q.includes("mark") || q.includes("hong") || q.includes("president") || q.includes("founder")) {
    return `${KORUS_KNOWLEDGE.markHong} Under his guidance, KORUS provides elite institutional-grade transaction services.`;
  }

  if (q.includes("team") || q.includes("who works") || q.includes("members") || q.includes("agent") || q.includes("broker")) {
    return `KORUS Real Estate is led by President Mark Hong, along with Senior VP Michelle Suh, VPs James Chin, Kyi Lee, Tony Kim, Sun Choi, and Senior Associate Michelle Yum. We also have Christina Yi heading marketing and Furball Hong as our corporate mascot.`;
  }

  if (q.includes("mascot") || q.includes("dog") || q.includes("furball") || q.includes("canine")) {
    return `Our beloved corporate mascot is Furball Hong, a charming White Pomeranian who serves as KORUS's Chief Canine Officer. He brings daily inspiration and positive energy to our Wilshire Boulevard headquarters.`;
  }

  if (q.includes("sale") || q.includes("buy") || q.includes("for sale") || q.includes("purchase")) {
    return `KORUS represents premium Southern California commercial listings, including 4185 Charter St in Vernon ($5,090,000), 5001 Hollywood Blvd ($6,100,000), and a prime High-Density land opportunity in the South Gate Corridor ($1,300,000). Please visit our Portfolio section for our complete active transaction list.`;
  }

  if (q.includes("lease") || q.includes("rent") || q.includes("restaurant") || q.includes("tenant")) {
    return `We represent premium retail and restaurant spaces for lease, such as 3200 Mowry Ave in Fremont (8,371 SF at $40,001/mo) and 922 S Western Ave in Koreatown (1,555 SF at $10,000/mo). We specialize in aligning national and regional brands with premier corridors.`;
  }

  if (q.includes("portal") || q.includes("rent cafe") || q.includes("commercial cafe") || q.includes("tenant portal") || q.includes("payment")) {
    return `KORUS provides secure digital management through the Rent Cafe Portal (for automated ACH clearings and statements) and the Commercial Cafe Portal (for real-time maintenance dispatch tracking).`;
  }

  if (q.includes("property management") || q.includes("management") || q.includes("asset management")) {
    return `${KORUS_KNOWLEDGE.about} Our property management program delivers proactive lease administration, 24/7 preventative maintenance, and institutional financial reporting.`;
  }

  return `KORUS Real Estate combines over 35 years of local Southern California transaction mastery and over $1 Billion in completed volume to guide your commercial investments. Please let us know if you would like info on our active listings, landlord-tenant leasing, or property management portals.`;
}

// Lazy-initialized Gemini AI Client
let aiClient: GoogleGenAI | null = null;
function getGeminiClient(): GoogleGenAI | null {
  if (!aiClient) {
    const apiKey = process.env.GEMINI_API_KEY;
    if (apiKey && apiKey !== "MY_GEMINI_API_KEY") {
      aiClient = new GoogleGenAI({
        apiKey: apiKey,
        httpOptions: {
          headers: {
            "User-Agent": "aistudio-build",
          },
        },
      });
    }
  }
  return aiClient;
}

// API endpoint for Chat
app.post("/api/chat", async (req, res) => {
  const { message } = req.body;
  if (!message) {
    return res.status(400).json({ error: "Message is required" });
  }

  // Attempt to use Google GenAI
  const client = getGeminiClient();
  if (client) {
    try {
      // System instructions ensuring 3 sentences maximum, editorial tone, using hardcoded KORUS knowledge base
      const systemInstruction = `You are KORUS Real Estate AI Assistant. Under no circumstances should you generate robotic responses.
Keep responses to a MAXIMUM of 3 sentences. Be highly editorial, professional, and authoritative.
Use the following hardcoded KORUS Real Estate knowledge base to answer precisely:
- KORUS Real Estate was established in 2013 by veteran President & Designated Broker Officer Mark Hong (active in CA commercial real estate since 1990, 35+ years experience, KREBASC Past President).
- KORUS is located at 3255 Wilshire Blvd, Suite 703, Los Angeles, CA 90010. Phone: +1 (213) 251-9000. Email: info@korusre.com. Hours: Monday-Friday, 9:00 AM - 5:00 PM.
- Over 2,000 completed transactions and $1B+ lifetime volume.
- Core Offerings: Industrial & Commercial Brokerage, Landlord & Tenant Lease Representation, Asset & Property Management.
- Team members: Mark Hong (President & Designated Broker Officer, Lic ID: 01067529), Michelle Suh (SVP), James Chin (VP), Kyi Lee (VP), Tony Kim (VP), Sun Choi (VP), Michelle Yum (Senior Associate), Christina Yi (Marketing Coordinator), Furball Hong (Corporate Mascot, Chief Canine Officer, White Pomeranian).
- Portals: Rent Cafe (for tenant payments, statements & ACH) and Commercial Cafe (for tenant dispatches, work orders & maintenance dispatches).
- Listings For Sale: 4185 Charter St, Vernon ($5,090,000); 34112 County Line Rd, Yucaipa ($400,000); 521 E Oaks St, Compton ($784,000); 1118 S Atlantic Blvd ($1,500,000); 5001 Hollywood Blvd ($6,100,000); South Gate Corridor [Land Opportunity] ($1,300,000); 4303 Firestone Blvd, South Gate ($430,000); 2974 E Florence Ave ($850,000); 944 Dewey Ave ($5,000,000).
- Listings For Lease: 3200 Mowry Ave, Fremont ($40,001/mo); 818 N Pacific Ave, Glendale ($2.75/SF); 922 S Western Ave, Koreatown ($10,000/mo); 4521 Fountain Ave ($2.25/SF); 918 N Western Ave ($2.10/SF); 14515 Mojave Dr, Victorville ($1.20/SF).
If asked about anything outside KORUS Real Estate, politely steer the conversation back to KORUS real estate capabilities.`;

      // Use gemini-3.6-flash which is the modern flash model from guidelines
      const response = await client.models.generateContent({
        model: "gemini-3.6-flash",
        contents: message,
        config: {
          systemInstruction,
          temperature: 0.6,
        },
      });

      const reply = response.text || generateLocalResponse(message);
      return res.json({ reply });
    } catch (error) {
      console.warn("Gemini AI API execution failed, reverting to local fallback: ", error);
      const reply = generateLocalResponse(message);
      return res.json({ reply, fallbackUsed: true });
    }
  } else {
    // Graceful fallback if no API key is provided
    const reply = generateLocalResponse(message);
    return res.json({ reply, fallbackUsed: true });
  }
});

// Configure Vite or Static Assets serving based on environment
async function startServer() {
  if (process.env.NODE_ENV !== "production") {
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
    console.log(`KORUS Real Estate server active on host 0.0.0.0, port ${PORT}`);
  });
}

startServer();
