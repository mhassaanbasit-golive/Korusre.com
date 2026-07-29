/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  ChevronLeft, 
  ChevronRight, 
  ArrowRight, 
  Building, 
  Wrench, 
  CreditCard, 
  MapPin, 
  Phone, 
  Mail, 
  ArrowUpRight, 
  Check, 
  Loader2,
  X,
  Sparkles,
  ShieldCheck,
  Smartphone
} from "lucide-react";
import { TEAM_MEMBERS, PROPERTIES, Property, TeamMember } from "../types";

interface HomepageExtendedProps {
  setActiveTab: (tab: string) => void;
  // If property management tab accepts initial portal type, we can pass it if we want
}

export default function HomepageExtended({ setActiveTab }: HomepageExtendedProps) {
  // Reorder team members as requested: Mark Hong, Michelle Suh, James Chin, Kyi Lee, Tony Kim, Michelle Yum, Sun Choi, Christina Yi, and Furball Hong
  const orderedTeamNames = [
    "Mark Hong",
    "Michelle Suh",
    "James Chin",
    "Kyi Lee",
    "Tony Kim",
    "Michelle Yum",
    "Sun Choi",
    "Christina Yi",
    "Furball Hong"
  ];

  // Map TEAM_MEMBERS to match the requested order
  const carouselMembers = orderedTeamNames
    .map(name => TEAM_MEMBERS.find(m => m.name === name))
    .filter(Boolean) as TeamMember[];

  // Carousel Scroll Ref
  const carouselRef = useRef<HTMLDivElement>(null);

  const scrollCarousel = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 340; // Card width + gap
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth"
      });
    }
  };

  // Get the 4 specific listings for Featured Portfolio Grid
  // (e.g., 5001 Hollywood Blvd, 4185 Charter St, 944 Dewey Ave, and 1118 S Atlantic Blvd)
  const featuredIds = ["sale-6", "sale-1", "sale-10", "sale-4"];
  const featuredListings = featuredIds
    .map(id => PROPERTIES.find(p => p.id === id))
    .filter(Boolean) as Property[];

  // Selected property modal state
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Contact form state
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [consultationCode, setConsultationCode] = useState("");

  const handleContactSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setConsultationCode("KOR-CONS-" + Math.floor(1000 + Math.random() * 9000));
    }, 1200);
  };

  const handleResetForm = () => {
    setSubmitted(false);
    setName("");
    setEmail("");
    setPhone("");
    setMessage("");
  };

  return (
    <div id="homepage-extensions" className="space-y-0 text-left">

      {/* 1. OUR TEAM CAROUSEL SECTION */}
      <section id="homepage-team-carousel" className="py-24 bg-[#FAFAF9] border-t border-[#1E2B38]/8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="max-w-xl">
              <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
                MEET OUR STRATEGISTS
              </span>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E2B38]">
                Our Team of Experts
              </h2>
              <p className="font-sans text-sm text-[#1E2B38]/75 mt-3 font-light">
                Our advisors carry deep market tenure, exceptional underwriting capacity, and high-trust advisory protocols in Southern California.
              </p>
            </div>
            
            {/* Navigation Arrows */}
            <div className="flex items-center space-x-3 mt-6 md:mt-0">
              <button
                onClick={() => scrollCarousel("left")}
                className="w-11 h-11 rounded-full border border-[#1E2B38]/12 flex items-center justify-center text-[#1E2B38] hover:bg-[#1E2B38] hover:text-white transition-colors duration-300 cursor-pointer"
                aria-label="Scroll Team Left"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={() => scrollCarousel("right")}
                className="w-11 h-11 rounded-full border border-[#1E2B38]/12 flex items-center justify-center text-[#1E2B38] hover:bg-[#1E2B38] hover:text-white transition-colors duration-300 cursor-pointer"
                aria-label="Scroll Team Right"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Carousel Viewport */}
          <div 
            ref={carouselRef}
            className="flex space-x-8 overflow-x-auto pb-6 pt-2 scrollbar-none snap-x snap-mandatory"
            style={{ scrollbarWidth: "none" }}
          >
            {carouselMembers.map((member) => (
              <motion.div
                key={member.name}
                whileHover={{ y: -4 }}
                className="flex-shrink-0 w-[290px] md:w-[320px] bg-white rounded-[20px] p-6 border border-[#1E2B38]/8 shadow-sm flex flex-col items-center text-center snap-start relative group"
              >
                {member.tag && (
                  <span className="absolute top-4 right-4 bg-[#C5A880]/10 text-[#C5A880] text-[9px] font-bold tracking-widest uppercase px-2.5 py-1 rounded-full">
                    {member.tag}
                  </span>
                )}
                
                {/* Circular Profile Image */}
                <div className="w-28 h-28 md:w-32 md:h-32 rounded-full overflow-hidden mb-5 border-2 border-[#C5A880]/20 p-1 group-hover:border-[#C5A880]/70 transition-colors duration-300">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover rounded-full grayscale hover:grayscale-0 transition-all duration-300"
                    referrerPolicy="no-referrer"
                  />
                </div>

                <h3 className="font-serif text-lg md:text-xl font-bold text-[#1E2B38]">
                  {member.name}
                </h3>
                <p className="font-sans text-xs font-semibold text-[#C5A880] uppercase tracking-wider mt-1.5 min-h-[32px] leading-snug flex items-center justify-center">
                  {member.title}
                </p>
                
                <p className="font-sans text-xs text-[#1E2B38]/70 mt-3.5 leading-relaxed line-clamp-3 font-light text-center">
                  {member.bio}
                </p>

                <button
                  onClick={() => {
                    setActiveTab("team");
                    setTimeout(() => {
                      const element = document.getElementById(`team-member-${member.name.replace(/\s+/g, "-")}`);
                      if (element) {
                        element.scrollIntoView({ behavior: "smooth", block: "center" });
                      }
                    }, 100);
                  }}
                  className="mt-6 text-xs font-sans font-bold text-[#1E2B38] hover:text-[#C5A880] transition-colors flex items-center space-x-1.5 cursor-pointer"
                >
                  <span>View Full Credentials</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </motion.div>
            ))}
          </div>

        </div>
      </section>


      {/* 2. FEATURED PORTFOLIO GRID SECTION */}
      <section id="homepage-featured-grid" className="py-24 bg-white border-t border-[#1E2B38]/8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
              ACTIVE CAPITAL OPPORTUNITIES
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E2B38]">
              Featured Commercial Portfolio
            </h2>
            <p className="font-sans text-sm text-[#1E2B38]/75 mt-3 font-light">
              A curated selection of our highest-visibility retail assets, development sites, and industrial complexes currently active in Southern California.
            </p>
          </div>

          {/* 2x2 Grid Layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-10">
            {featuredListings.map((listing) => (
              <motion.div
                key={listing.id}
                whileHover={{ y: -3 }}
                className="bg-[#FAFAF9] rounded-[20px] overflow-hidden border border-[#1E2B38]/8 shadow-sm flex flex-col justify-between group"
              >
                {/* Visual Cover */}
                <div className="relative aspect-[16/9] overflow-hidden bg-stone-100">
                  <img
                    src={listing.image}
                    alt={listing.address}
                    className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70" />
                  
                  {/* Absolute badging */}
                  <div className="absolute top-4 left-4 bg-[#1E2B38] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md">
                    {listing.type}
                  </div>
                  <div className="absolute top-4 right-4 bg-[#C5A880] text-white text-[10px] font-bold tracking-widest uppercase px-3 py-1.5 rounded-md">
                    {listing.status}
                  </div>
                </div>

                {/* Content Area */}
                <div className="p-6 md:p-8 flex-1 flex flex-col justify-between">
                  <div className="space-y-3">
                    <p className="font-sans text-xs font-bold text-[#C5A880] tracking-wider uppercase">
                      {listing.city}
                    </p>
                    <h3 className="font-serif text-xl md:text-2xl font-bold text-[#1E2B38] tracking-tight leading-snug line-clamp-2">
                      {listing.address}
                    </h3>
                    <p className="font-sans text-xs text-[#1E2B38]/70 leading-relaxed font-light line-clamp-2">
                      {listing.details}
                    </p>
                  </div>

                  {/* Financial & Dimensions row */}
                  <div className="mt-6 pt-6 border-t border-[#1E2B38]/6 flex items-center justify-between">
                    <div>
                      <span className="block font-sans text-[10px] font-bold text-[#1E2B38]/50 uppercase tracking-widest">
                        Investment Value
                      </span>
                      <span className="font-serif text-lg md:text-xl font-bold text-[#1E2B38]">
                        {listing.price || "Contact Desk"}
                      </span>
                    </div>

                    <div className="text-right">
                      <span className="block font-sans text-[10px] font-bold text-[#1E2B38]/50 uppercase tracking-widest">
                        Total Size
                      </span>
                      <span className="font-sans text-sm font-semibold text-[#1E2B38]">
                        {listing.size || "N/A"}
                      </span>
                    </div>
                  </div>

                  {/* Muted Bronze Action Button */}
                  <div className="mt-6 pt-2">
                    <button
                      onClick={() => setSelectedProperty(listing)}
                      className="w-full py-3 bg-[#C5A880]/10 text-[#C5A880] hover:bg-[#C5A880] hover:text-white rounded-xl font-sans text-xs font-bold tracking-widest uppercase transition-all duration-300 flex items-center justify-center space-x-2 cursor-pointer"
                    >
                      <span>View Listing Details</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <button
              onClick={() => setActiveTab("portfolio")}
              className="px-8 py-4 bg-[#1E2B38] text-white rounded-[14px] font-sans text-sm font-bold tracking-widest uppercase hover:bg-[#C5A880] transition-colors duration-300 inline-flex items-center space-x-2.5 cursor-pointer shadow-md shadow-[#1E2B38]/10"
            >
              <span>View Full Active Portfolio</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

        </div>
      </section>


      {/* 3. PROPERTY MANAGEMENT & PORTALS SHOWCASE SECTION */}
      <section id="homepage-portals-showcase" className="py-24 bg-[#FAFAF9] border-t border-[#1E2B38]/8">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          
          <div className="max-w-2xl mb-16">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
              DIGITAL TENANT MANAGEMENT
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E2B38]">
              Property Management & Portals
            </h2>
            <p className="font-sans text-sm text-[#1E2B38]/75 mt-3 font-light">
              We streamline operations for commercial and residential tenants with state-of-the-art secure digital gateways, guaranteeing prompt dispatch and transparent accounting.
            </p>
          </div>

          {/* Split-Layout Card */}
          <div className="bg-white rounded-[24px] border border-[#1E2B38]/8 shadow-sm p-8 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-12 items-stretch">
            
            {/* Commercial Cafe Portal Block */}
            <div className="flex flex-col justify-between space-y-6 lg:pr-6">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-6">
                  <Wrench className="w-6 h-6" />
                </div>
                
                <span className="text-[10px] font-sans font-bold tracking-widest text-[#C5A880] uppercase block mb-1">
                  COMMERCIAL CAFE INTEGRATION
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#1E2B38]">
                  Commercial Tenant Portal
                </h3>
                
                <p className="font-sans text-sm text-[#1E2B38]/70 leading-relaxed mt-4 font-light">
                  A high-trust interface designed specifically for our retail, restaurant, and corporate office tenants. Access real-time property maintenance dispatches, request priority modifications, and review historical tenancy ledgers.
                </p>

                {/* Bullet list of key integrations */}
                <ul className="mt-6 space-y-2.5">
                  <li className="flex items-center space-x-2.5 text-xs text-[#1E2B38]/80 font-medium">
                    <Check className="w-4 h-4 text-[#8FA89B]" />
                    <span>24/7 Priority Work Order Dispatch</span>
                  </li>
                  <li className="flex items-center space-x-2.5 text-xs text-[#1E2B38]/80 font-medium">
                    <Check className="w-4 h-4 text-[#8FA89B]" />
                    <span>Live Tracking of Field Maintenance Crews</span>
                  </li>
                  <li className="flex items-center space-x-2.5 text-xs text-[#1E2B38]/80 font-medium">
                    <Check className="w-4 h-4 text-[#8FA89B]" />
                    <span>Documented CAM Auditing and Statements</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setActiveTab("management")}
                  className="px-6 py-3.5 bg-[#C5A880] text-white hover:bg-[#D6B98D] rounded-xl font-sans text-xs font-bold tracking-widest uppercase transition-colors duration-300 flex items-center justify-center space-x-2 cursor-pointer w-full sm:w-auto"
                >
                  <span>Launch Maintenance Dispatch</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Rent Cafe Portal Block */}
            <div className="flex flex-col justify-between space-y-6 lg:pl-6 lg:border-l lg:border-[#1E2B38]/8">
              <div>
                <div className="w-12 h-12 rounded-xl bg-[#1E2B38]/5 text-[#1E2B38] flex items-center justify-center mb-6">
                  <CreditCard className="w-6 h-6" />
                </div>
                
                <span className="text-[10px] font-sans font-bold tracking-widest text-[#1E2B38]/60 uppercase block mb-1">
                  RENT CAFE DIGITAL GATEWAY
                </span>
                <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#1E2B38]">
                  Residential & Retail Rent Portal
                </h3>
                
                <p className="font-sans text-sm text-[#1E2B38]/70 leading-relaxed mt-4 font-light">
                  A fully integrated, Regulation E compliant platform allowing immediate electronic clearing of rent and operational charges. Connect commercial accounts or checking nodes to authorize automated monthly ACH sweeps.
                </p>

                {/* Bullet list of key integrations */}
                <ul className="mt-6 space-y-2.5">
                  <li className="flex items-center space-x-2.5 text-xs text-[#1E2B38]/80 font-medium">
                    <Check className="w-4 h-4 text-[#8FA89B]" />
                    <span>Secure ACH Checking node registration</span>
                  </li>
                  <li className="flex items-center space-x-2.5 text-xs text-[#1E2B38]/80 font-medium">
                    <Check className="w-4 h-4 text-[#8FA89B]" />
                    <span>Instant Digital Receipt and Clearance logs</span>
                  </li>
                  <li className="flex items-center space-x-2.5 text-xs text-[#1E2B38]/80 font-medium">
                    <Check className="w-4 h-4 text-[#8FA89B]" />
                    <span>Paperless Tenant Renewals & Agreements</span>
                  </li>
                </ul>
              </div>

              <div className="pt-6">
                <button
                  onClick={() => setActiveTab("management")}
                  className="px-6 py-3.5 bg-[#1E2B38] text-white hover:bg-[#2C3E52] rounded-xl font-sans text-xs font-bold tracking-widest uppercase transition-colors duration-300 flex items-center justify-center space-x-2 cursor-pointer w-full sm:w-auto"
                >
                  <span>Access Secure Payment Node</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>


      {/* 4. CONTACT DOCKING SECTION */}
      <section id="homepage-contact-dock" className="py-24 bg-white border-t border-[#1E2B38]/8 relative overflow-hidden">
        
        {/* Subtle Decorative Map Accent on background */}
        <div className="absolute right-0 top-0 bottom-0 w-1/3 bg-[#FAFAF9] opacity-50 border-l border-[#1E2B38]/5 hidden xl:block" />

        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch text-left">
            
            {/* Left Column: Headline and Address info (5-col) */}
            <div className="lg:col-span-5 flex flex-col justify-between space-y-8 pr-4">
              <div>
                <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
                  INITIATE PORTFOLIO DIALOGUE
                </span>
                <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E2B38] leading-tight">
                  Initiate Your Portfolio Consultation
                </h2>
                <p className="font-sans text-sm text-[#1E2B38]/75 mt-4 leading-relaxed font-light">
                  KORUS Real Estate representatives are ready to model your acquisitions, audit your property yields, and list your Southern California commercial assets.
                </p>
              </div>

              <div className="space-y-5 pt-8 border-t border-[#1E2B38]/8">
                
                {/* Office Info Row */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FAFAF9] border border-[#1E2B38]/8 flex items-center justify-center text-[#C5A880] shrink-0 mt-0.5">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans text-[10px] font-bold text-[#1E2B38]/50 uppercase tracking-widest">
                      Physical Head Office
                    </span>
                    <p className="font-sans text-sm text-[#1E2B38] font-semibold mt-0.5 leading-relaxed">
                      3255 Wilshire Blvd, Suite 703<br />
                      Los Angeles, CA 90010
                    </p>
                    <span className="text-[10px] text-[#8FA89B] font-bold block mt-1">
                      Mid-Wilshire Koreatown HQ
                    </span>
                  </div>
                </div>

                {/* Phone Info Row */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FAFAF9] border border-[#1E2B38]/8 flex items-center justify-center text-[#C5A880] shrink-0 mt-0.5">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans text-[10px] font-bold text-[#1E2B38]/50 uppercase tracking-widest">
                      Direct Advisory Phone
                    </span>
                    <a href="tel:+12132519000" className="font-sans text-sm text-[#1E2B38] font-bold mt-0.5 block hover:text-[#C5A880]">
                      (213) 251-9000
                    </a>
                  </div>
                </div>

                {/* Email Info Row */}
                <div className="flex items-start space-x-4">
                  <div className="w-10 h-10 rounded-lg bg-[#FAFAF9] border border-[#1E2B38]/8 flex items-center justify-center text-[#C5A880] shrink-0 mt-0.5">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="block font-sans text-[10px] font-bold text-[#1E2B38]/50 uppercase tracking-widest">
                      Corporate Correspondence
                    </span>
                    <a href="mailto:info@korusre.com" className="font-sans text-sm text-[#1E2B38] font-medium mt-0.5 block hover:text-[#C5A880]">
                      info@korusre.com
                    </a>
                  </div>
                </div>

              </div>
            </div>

            {/* Right Column: Minimal Contact Form Card (7-col) */}
            <div className="lg:col-span-7 bg-[#FAFAF9] rounded-[24px] p-8 border border-[#1E2B38]/8 shadow-sm">
              <AnimatePresence mode="wait">
                {!submitted ? (
                  <motion.div
                    key="form-docked"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    <form onSubmit={handleContactSubmit} className="space-y-4">
                      
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block font-sans text-[10px] font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1.5">
                            Full Name *
                          </label>
                          <input
                            type="text"
                            required
                            placeholder="John Doe"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-[#1E2B38]/8 rounded-xl font-sans text-sm focus:outline-none focus:border-[#C5A880]"
                          />
                        </div>
                        <div>
                          <label className="block font-sans text-[10px] font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1.5">
                            Email Address *
                          </label>
                          <input
                            type="email"
                            required
                            placeholder="john@portfolioholdings.com"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 bg-white border border-[#1E2B38]/8 rounded-xl font-sans text-sm focus:outline-none focus:border-[#C5A880]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block font-sans text-[10px] font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1.5">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          placeholder="(213) 555-0199"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-[#1E2B38]/8 rounded-xl font-sans text-sm focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>

                      <div>
                        <label className="block font-sans text-[10px] font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1.5">
                          Describe Your Portfolio Intentions *
                        </label>
                        <textarea
                          rows={4}
                          required
                          placeholder="I am interested in acquiring commercial retail, coordinating leasing representation, or requesting property management operations..."
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          className="w-full px-4 py-3 bg-white border border-[#1E2B38]/8 rounded-xl font-sans text-sm focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>

                      <div className="pt-2">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full py-4 bg-[#C5A880] hover:bg-[#D6B98D] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-xl transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow shadow-[#C5A880]/15"
                        >
                          {loading ? (
                            <>
                              <Loader2 className="w-4.5 h-4.5 animate-spin" />
                              <span>TRANSMITTING INQUIRY...</span>
                            </>
                          ) : (
                            <>
                              <span>Request Portfolio Consultation</span>
                              <ArrowRight className="w-4 h-4" />
                            </>
                          )}
                        </button>
                      </div>

                    </form>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form-docked-success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-6 space-y-5"
                  >
                    <div className="w-14 h-14 bg-[#8FA89B]/10 text-[#8FA89B] rounded-full flex items-center justify-center mx-auto">
                      <Check className="w-7 h-7" />
                    </div>
                    
                    <div className="space-y-2">
                      <span className="text-[10px] font-sans font-bold tracking-widest text-[#8FA89B] uppercase block">
                        TRANSMISSION SECURED
                      </span>
                      <h3 className="font-serif text-2xl md:text-3xl font-semibold text-[#1E2B38]">
                        Briefing Queued on President's Desk
                      </h3>
                      <p className="font-sans text-sm text-[#1E2B38]/70 max-w-md mx-auto font-light leading-relaxed">
                        Thank you, {name}. Your consultation request has been cataloged. An associate from KORUS Real Estate will respond shortly with structured market modeling.
                      </p>
                    </div>

                    <div className="bg-white border border-[#1E2B38]/8 p-4 rounded-xl text-left max-w-sm mx-auto text-xs font-mono space-y-1">
                      <div className="flex justify-between text-[#9CA3AF]">
                        <span>TICKET ID:</span>
                        <span className="font-bold text-[#1E2B38]">{consultationCode}</span>
                      </div>
                      <div className="flex justify-between text-[#9CA3AF]">
                        <span>CLIENT:</span>
                        <span className="text-[#1E2B38]">{name}</span>
                      </div>
                      <div className="flex justify-between text-[#9CA3AF]">
                        <span>TEL DESK:</span>
                        <span className="text-[#1E2B38]">{phone || "N/A"}</span>
                      </div>
                      <div className="flex justify-between text-[#9CA3AF]">
                        <span>ACTION:</span>
                        <span className="text-[#8FA89B] font-bold">SCHEDULING ACTIVE</span>
                      </div>
                    </div>

                    <button
                      onClick={handleResetForm}
                      className="font-sans text-xs font-bold text-[#C5A880] hover:underline cursor-pointer"
                    >
                      Send Another Portfolio Inquiry
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

          </div>
        </div>

      </section>


      {/* PORTFOLIO PROPERTY DETAILS MODAL DIALOGUE */}
      <AnimatePresence>
        {selectedProperty && (
          <div className="fixed inset-0 bg-[#1E2B38]/40 backdrop-blur-sm z-[100] flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 15 }}
              transition={{ duration: 0.25 }}
              className="bg-white rounded-[24px] max-w-2xl w-full overflow-hidden shadow-2xl border border-[#1E2B38]/8 text-left flex flex-col relative"
            >
              <button
                onClick={() => setSelectedProperty(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-white/90 backdrop-blur-sm shadow flex items-center justify-center text-[#1E2B38] hover:bg-[#1E2B38] hover:text-white transition-all cursor-pointer"
                aria-label="Close details"
              >
                <X className="w-5 h-5" />
              </button>

              {/* Visual Cover */}
              <div className="relative aspect-[16/9] bg-stone-100">
                <img
                  src={selectedProperty.image}
                  alt={selectedProperty.address}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                
                <div className="absolute bottom-4 left-6 right-6 flex items-end justify-between">
                  <div>
                    <span className="text-[10px] text-[#C5A880] font-sans font-bold tracking-widest uppercase block mb-1">
                      {selectedProperty.type} • {selectedProperty.city}
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-white tracking-tight leading-tight">
                      {selectedProperty.address}
                    </h3>
                  </div>
                </div>
              </div>

              {/* Specs & Description Area */}
              <div className="p-6 md:p-8 space-y-6">
                <div className="grid grid-cols-3 gap-4 border-b border-[#1E2B38]/8 pb-6">
                  <div>
                    <span className="block font-sans text-[10px] text-[#1E2B38]/50 uppercase tracking-widest">
                      Zoning Type
                    </span>
                    <span className="font-sans text-sm font-bold text-[#1E2B38]">
                      {selectedProperty.type}
                    </span>
                  </div>
                  <div>
                    <span className="block font-sans text-[10px] text-[#1E2B38]/50 uppercase tracking-widest">
                      Total Footprint
                    </span>
                    <span className="font-sans text-sm font-bold text-[#1E2B38]">
                      {selectedProperty.size || "Contact Broker"}
                    </span>
                  </div>
                  <div>
                    <span className="block font-sans text-[10px] text-[#1E2B38]/50 uppercase tracking-widest">
                      Asset Valuation
                    </span>
                    <span className="font-serif text-base font-bold text-[#C5A880]">
                      {selectedProperty.price || "Inquire Details"}
                    </span>
                  </div>
                </div>

                <div className="space-y-2">
                  <h4 className="font-serif text-base font-bold text-[#1E2B38]">
                    Underwriting Overview
                  </h4>
                  <p className="font-sans text-sm text-[#1E2B38]/75 leading-relaxed font-light">
                    {selectedProperty.details || "A premium, high-visibility commercial asset offering historic cash flows and excellent long-term capital preservation in a core Southern California corridor."}
                  </p>
                </div>

                <div className="pt-4 flex items-center space-x-3">
                  <button
                    onClick={() => {
                      setSelectedProperty(null);
                      setActiveTab("contact");
                    }}
                    className="flex-1 py-3.5 bg-[#C5A880] text-white hover:bg-[#D6B98D] text-xs font-sans font-bold tracking-widest uppercase rounded-xl transition-colors text-center cursor-pointer shadow"
                  >
                    Inquire On Listing
                  </button>
                  <button
                    onClick={() => {
                      setSelectedProperty(null);
                      setActiveTab("portfolio");
                    }}
                    className="px-5 py-3.5 border border-[#1E2B38]/12 text-[#1E2B38] hover:bg-[#1E2B38] hover:text-white text-xs font-sans font-bold tracking-widest uppercase rounded-xl transition-colors cursor-pointer text-center"
                  >
                    View In Portfolio Tab
                  </button>
                </div>
              </div>

            </motion.div>
          </div>
        )}
      </AnimatePresence>

    </div>
  );
}
