/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Property {
  id: string;
  address: string;
  city: string;
  price?: string;
  rate?: string;
  size?: string;
  type: "Retail" | "Restaurant" | "Development Land" | "Apartment" | "Office" | "Industrial";
  status: "For Sale" | "For Lease";
  image: string;
  details?: string;
}

export interface TeamMember {
  name: string;
  title: string;
  license?: string;
  experience?: string;
  bio: string;
  image: string;
  tag?: string;
}

export interface TimelineEvent {
  year: string;
  title: string;
}

export interface Publication {
  year: string;
  title: string;
  description: string;
  source: string;
}

export const TEAM_MEMBERS: TeamMember[] = [
  {
    name: "Mark Hong",
    title: "President & Designated Broker Officer",
    license: "01067529",
    experience: "35+ Years Active Market Tenure",
    bio: "President and Founder Mark Hong has been active in Southern California's commercial real estate arena since 1990. He has successfully closed over 2,000 transactions representing $1B+ in valuation. Specializing in high-density land development, retail acquisitions, and landlord representation, he acts as a primary advisor to private capital portfolios and served as President/Chairman of the Korean Real Estate Broker Association of Southern California (KREBASC).",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=800",
    tag: "Founder"
  },
  {
    name: "Michelle Suh",
    title: "Senior Vice President",
    experience: "High-Net-Worth Advisory Specialist",
    bio: "Michelle specializes in high-net-worth commercial investments and retail landlord advisory, aligning prominent national retail concepts with premium Southern California corridors.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=600"
  },
  {
    name: "James Chin",
    title: "Vice President",
    experience: "Tenant Leasing Representative",
    bio: "James acts as a primary tenant leasing representative and commercial brokerage advisor, securing prime institutional-grade locations for regional medical and restaurant brands.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Kyi Lee",
    title: "Vice President",
    experience: "Commercial Acquisitions & Underwriting",
    bio: "Kyi leads the underwriting and transaction logistics, delivering institutional-grade underwriting discipline to private capital portfolios.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Tony Kim",
    title: "Vice President",
    experience: "Retail Landlord Representative",
    bio: "Tony focuses on retail landlord representation, maximizing structural yield optimization and leasing rates across shopping centers.",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Sun Choi",
    title: "Vice President",
    experience: "Private Client Investment Advisory",
    bio: "Sun advises private client portfolios on strategic acquisitions and cross-border commercial investment strategy in Southern California.",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Michelle Yum",
    title: "Senior Associate",
    experience: "Leasing Logistics & Transactions",
    bio: "Michelle coordinates leasing logistics and handles transaction coordination, ensuring seamless transitions from underwriting to lease execution.",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Christina Yi",
    title: "Marketing Coordinator",
    experience: "Corporate Branding & Distribution",
    bio: "Christina manages corporate branding, regional listing distribution, and regional outreach strategies to maintain elite corporate positioning.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&q=80&w=800"
  },
  {
    name: "Furball Hong",
    title: "Chief Canine Officer & Corporate Mascot",
    experience: "Office Inspiration Leader",
    bio: "Furball is a charming, pure-white Pomeranian who maintains structural harmony, oversees office morale, and keeps high spirits high at our Wilshire Blvd head office.",
    image: "https://images.unsplash.com/photo-1543466835-00a7907e9de1?auto=format&fit=crop&q=80&w=800",
    tag: "Corporate Mascot"
  }
];

export const TIMELINE_AWARDS: TimelineEvent[] = [
  { year: "2022", title: "City of Recognition Award" },
  { year: "2022", title: "Certificate of Congressional Recognition" },
  { year: "2021", title: "Certificate of Congressional Recognition" },
  { year: "2021", title: "House of Representatives Commendation" },
  { year: "1996", title: "Salesperson of the Year Award" },
  { year: "1994", title: "Outstanding Sales Achievement Award" }
];

export const PROPERTIES: Property[] = [
  // For Sale Listings
  {
    id: "sale-1",
    address: "4185 Charter St, Vernon, CA 90058",
    city: "Vernon, CA",
    price: "$5,090,000",
    size: "14,848 sq. ft.",
    type: "Industrial",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&q=80&w=800",
    details: "Premium stand-alone industrial manufacturing warehouse in high-demand Vernon corridor with ample loading docks and secure parking."
  },
  {
    id: "sale-2",
    address: "34112 County Line Rd, Yucaipa, CA",
    city: "Yucaipa, CA",
    price: "$400,000",
    size: "N/A",
    type: "Development Land",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&q=80&w=800",
    details: "Prime Development Opportunity in emerging Yucaipa corridor with outstanding local utility staging and immediate major freeway access."
  },
  {
    id: "sale-3",
    address: "521 E Oaks St, Compton, CA 90221",
    city: "Compton, CA",
    price: "$784,000",
    size: "2,200 sq. ft.",
    type: "Retail",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&q=80&w=800",
    details: "Outstanding high-visibility corner retail storefront with excellent daily local traffic, fully upgraded security and storage systems."
  },
  {
    id: "sale-4",
    address: "1118 S Atlantic Blvd, Los Angeles, CA 90222",
    city: "Los Angeles, CA",
    price: "$1,500,000",
    size: "3,036 sq. ft.",
    type: "Office",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800",
    details: "Multi-tenant corporate commercial office block boasting massive high-visibility frontages on a highly-trafficked corridor."
  },
  {
    id: "sale-5",
    address: "1118 S Atlantic Blvd, Los Angeles, CA 90222 (Retail Asset)",
    city: "Los Angeles, CA",
    price: "$278,000",
    size: "1,000 sq. ft.",
    type: "Retail",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1555421689-491a97ff2040?auto=format&fit=crop&q=80&w=800",
    details: "Affordable commercial retail asset unit providing robust historic yield, situated inside a dense population trade corridor."
  },
  {
    id: "sale-6",
    address: "5001 Hollywood Blvd, Los Angeles, CA 90027",
    city: "Los Angeles, CA",
    price: "$6,100,000 (310 PSF)",
    size: "16,100 sq. ft.",
    type: "Retail",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&q=80&w=800",
    details: "High-exposure commercial retail plaza center on historic Hollywood Boulevard. High traffic count, strong local density, excellent tenant mix."
  },
  {
    id: "sale-7",
    address: "[Development Land Opportunity] South Gate Corridor",
    city: "South Gate, CA",
    price: "$1,300,000",
    size: "N/A",
    type: "Development Land",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&q=80&w=800",
    details: "Pre-entitled master-planned development parcel zoned specifically for High Density residential and commercial mixed-use."
  },
  {
    id: "sale-8",
    address: "4303 Firestone Blvd, South Gate, CA 90280",
    city: "South Gate, CA",
    price: "$430,000",
    size: "1,049 sq. ft.",
    type: "Office",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=800",
    details: "Professional office and corporate layout space boasting direct private street entrances and dedicated executive parking spots."
  },
  {
    id: "sale-9",
    address: "2974 E Florence Ave, Huntington Park, CA",
    city: "Huntington Park, CA",
    price: "$850,000 (80 PSF)",
    size: "N/A",
    type: "Development Land",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1590487988256-9ed24133863e?auto=format&fit=crop&q=80&w=800",
    details: "Commercial streetfront land parcel zoned specifically for retail development, with high-footfall visual frontage alignments."
  },
  {
    id: "sale-10",
    address: "944 & 948 Dewey Ave, Los Angeles, CA (Multi-Unit Apartment Development)",
    city: "Los Angeles, CA",
    price: "$5,000,000",
    size: "21,160 sq. ft.",
    type: "Apartment",
    status: "For Sale",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    details: "Outstanding high-density multi-unit residential apartment development package in Koreatown vicinity with full civil clearances."
  },

  // For Lease Listings
  {
    id: "lease-1",
    address: "3200 Mowry Ave, Fremont, CA 94538 (Prime Restaurant Space)",
    city: "Fremont, CA",
    rate: "$40,001/mo + NNN",
    size: "8,371 sq. ft.",
    type: "Restaurant",
    status: "For Lease",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&q=80&w=800",
    details: "Institutional grade flagship restaurant facility with fully operational kitchen, premium walk-in freezers, and expansive parking stalls."
  },
  {
    id: "lease-2",
    address: "818 N Pacific Ave, Glendale, CA 91203 (Leased Restaurant Turnkey)",
    city: "Glendale, CA",
    rate: "$2.75/SF + NNN",
    size: "3,301 sq. ft.",
    type: "Restaurant",
    status: "For Lease",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9?auto=format&fit=crop&q=80&w=800",
    details: "Elite turnkey restaurant configuration situated inside glitzy Glendale corridor with grease trap, commercial exhausts, and premium seating layout."
  },
  {
    id: "lease-3",
    address: "922 S Western Ave, Los Angeles, CA 90006 (Koreatown Retail)",
    city: "Los Angeles, CA",
    rate: "$10,000/mo + NNN",
    size: "1,555 sq. ft.",
    type: "Retail",
    status: "For Lease",
    image: "https://images.unsplash.com/photo-1472851294608-062f824d296e?auto=format&fit=crop&q=80&w=800",
    details: "High-exposure retail store corner layout along Southern Koreatown's Western Avenue, boasting modern storefront glass and stellar footfalls."
  },
  {
    id: "lease-4",
    address: "4521 Fountain Ave, Los Angeles, CA 90029",
    city: "Los Angeles, CA",
    rate: "$2.25/SF/MO",
    size: "2,075 sq. ft.",
    type: "Office",
    status: "For Lease",
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80&w=800",
    details: "Ultra-clean modern creative executive space layout with open-concept workstations, secure conference halls, and direct streetfront access."
  },
  {
    id: "lease-5",
    address: "918 N Western Ave, Los Angeles, CA (High Visibility Retail)",
    city: "Los Angeles, CA",
    rate: "$2.10/SF + NNN",
    size: "5,380 sq. ft.",
    type: "Retail",
    status: "For Lease",
    image: "https://images.unsplash.com/photo-1567401893414-76b7b1e5a7a5?auto=format&fit=crop&q=80&w=800",
    details: "Commanding glass-frontage retail facility sitting directly on Western Avenue. Highly suited for national showroom, retail center, or clinic."
  },
  {
    id: "lease-6",
    address: "14515 Mojave Dr, Victorville, CA (Large Retail/Showroom)",
    city: "Victorville, CA",
    rate: "$1.20/SF + NNN",
    size: "17,272 sq. ft.",
    type: "Industrial",
    status: "For Lease",
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&q=80&w=800",
    details: "Massive retail commercial showroom or warehouse center situated directly off Mojave Drive with incredible surface parking counts."
  }
];

export const PUBLICATIONS: Publication[] = [
  {
    year: "2022",
    title: "KREBASC Market Forecast Keynote",
    source: "Korean Real Estate Broker Association",
    description: "Speaking points and advisory briefing addressing Southern California commercial retail investment trends, zoning modifications, and foreign investment limits."
  },
  {
    year: "2018",
    title: "Commercial Retail Valuation Dynamics",
    source: "The Korea Times",
    description: "In-depth executive corporate interview with Mark Hong analyzing Mid-Wilshire and Koreatown commercial retail valuation shifts and multi-tenant rental rates."
  },
  {
    year: "2017",
    title: "Mark Hong Inaugurated as Chairman",
    source: "Koreatown Daily & Korea Times",
    description: "Media coverage profiling Mark Hong's official election and public inauguration as Chairman and President of KREBASC, advising Southern California retail portfolios."
  },
  {
    year: "2016",
    title: "Acquisition & Tax Mitigation Panels",
    source: "Korea Daily",
    description: "Panel discussion takeaways detailing local zoning clearance processes, commercial real estate tax structures, and high-density land development rules."
  },
  {
    year: "2015",
    title: "The Guardians of Institutional Korean-American Portfolios",
    source: "The Korea Times",
    description: "Feature profile highlighting KORUS Real Estate as a trusted institutional asset manager and guardian for prominent private capital holdings."
  },
  {
    year: "L.A. Boom",
    title: "L.A.'s Seoul Takes Flight",
    source: "Los Angeles Business Journal",
    description: "Detailed professional commentary by Mark Hong on the massive commercial high-rise development boom shaping Koreatown and the broader Los Angeles skyline."
  }
];
