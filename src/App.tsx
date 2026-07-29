/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Building2, MapPin, Phone, Mail, ArrowUp, Clock } from "lucide-react";

import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import OfferingsSection from "./components/OfferingsSection";
import AboutSection from "./components/AboutSection";
import TeamSection from "./components/TeamSection";
import ListingsSection from "./components/ListingsSection";
import PropertyManagement from "./components/PropertyManagement";
import MediaSection from "./components/MediaSection";
import ContactSection from "./components/ContactSection";
import AiAssistant from "./components/AiAssistant";
import HomepageExtended from "./components/HomepageExtended";

export default function App() {
  const [activeTab, setActiveTab] = useState<string>("home");

  const tabs = [
    { id: "home", name: "Home" },
    { id: "about", name: "About Us" },
    { id: "team", name: "Team" },
    { id: "portfolio", name: "Portfolio" },
    { id: "management", name: "Property Management" },
    { id: "media", name: "Media & Press" },
    { id: "contact", name: "Contact Desk" }
  ];

  // Force scrolling to top on page switches to avoid Cumulative Layout Shifts
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTab]);

  return (
    <div id="korus-app" className="relative min-h-screen bg-[#FAFAF9] text-[#1E2B38] selection:bg-[#C5A880]/30 selection:text-[#1E2B38] overflow-x-hidden flex flex-col justify-between font-sans">
      
      {/* Top Navbar Header */}
      <Navbar activeTab={activeTab} setActiveTab={setActiveTab} tabs={tabs} />

      {/* Primary Page Container with motion-guided layout transitions */}
      <main id="main-content" className="flex-1">
        <AnimatePresence mode="wait">
          {activeTab === "home" && (
            <motion.div
              key="tab-home"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <HeroSection setActiveTab={setActiveTab} />
              <OfferingsSection setActiveTab={setActiveTab} />
              <HomepageExtended setActiveTab={setActiveTab} />
            </motion.div>
          )}

          {activeTab === "about" && (
            <motion.div
              key="tab-about"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <AboutSection />
            </motion.div>
          )}

          {activeTab === "team" && (
            <motion.div
              key="tab-team"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <TeamSection />
            </motion.div>
          )}

          {activeTab === "portfolio" && (
            <motion.div
              key="tab-portfolio"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <ListingsSection />
            </motion.div>
          )}

          {activeTab === "management" && (
            <motion.div
              key="tab-management"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <PropertyManagement />
            </motion.div>
          )}

          {activeTab === "media" && (
            <motion.div
              key="tab-media"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <MediaSection />
            </motion.div>
          )}

          {activeTab === "contact" && (
            <motion.div
              key="tab-contact"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35 }}
            >
              <ContactSection />
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Institutional Footer */}
      <footer id="corporate-footer" className="bg-[#1E2B38] text-white py-16 border-t border-white/[0.05] relative z-10 text-left">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 grid grid-cols-1 md:grid-cols-12 gap-12">
          
          {/* Brand Intro Column (4-col) */}
          <div className="md:col-span-4 space-y-6">
            <button
              onClick={() => { setActiveTab("home"); window.scrollTo({ top: 0, behavior: "smooth" }); }}
              className="flex items-center space-x-2.5 group cursor-pointer text-left"
            >
              <div className="flex-shrink-0">
                <svg
                  viewBox="0 0 32 40"
                  className="w-10 h-12 transition-transform duration-300 group-hover:scale-105"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  {/* Building outline: vertical right line + horizontal top hook */}
                  <path
                    d="M 28 36 V 4 H 10"
                    stroke="#C5A880"
                    strokeWidth="2.5"
                    strokeLinecap="square"
                    strokeLinejoin="miter"
                  />
                  {/* 3x6 grid of small squares */}
                  <rect x="4" y="7" width="3.5" height="3.5" fill="#C5A880" />
                  <rect x="11" y="7" width="3.5" height="3.5" fill="#C5A880" />
                  <rect x="18" y="7" width="3.5" height="3.5" fill="#C5A880" />

                  <rect x="4" y="12" width="3.5" height="3.5" fill="#C5A880" />
                  <rect x="11" y="12" width="3.5" height="3.5" fill="#C5A880" />
                  <rect x="18" y="12" width="3.5" height="3.5" fill="#C5A880" />

                  <rect x="4" y="17" width="3.5" height="3.5" fill="#C5A880" />
                  <rect x="11" y="17" width="3.5" height="3.5" fill="#C5A880" />
                  <rect x="18" y="17" width="3.5" height="3.5" fill="#C5A880" />

                  <rect x="4" y="22" width="3.5" height="3.5" fill="#C5A880" />
                  <rect x="11" y="22" width="3.5" height="3.5" fill="#C5A880" />
                  <rect x="18" y="22" width="3.5" height="3.5" fill="#C5A880" />

                  <rect x="4" y="27" width="3.5" height="3.5" fill="#C5A880" />
                  <rect x="11" y="27" width="3.5" height="3.5" fill="#C5A880" />
                  <rect x="18" y="27" width="3.5" height="3.5" fill="#C5A880" />

                  <rect x="4" y="32" width="3.5" height="3.5" fill="#C5A880" />
                  <rect x="11" y="32" width="3.5" height="3.5" fill="#C5A880" />
                  <rect x="18" y="32" width="3.5" height="3.5" fill="#C5A880" />
                </svg>
              </div>
              <div>
                <span className="block font-serif text-2xl lg:text-3xl font-bold tracking-wide text-[#C5A880] leading-none transition-colors duration-300 group-hover:text-white">
                  KORUS
                </span>
                <span className="block font-serif text-[10px] tracking-[0.15em] text-[#C5A880] uppercase font-bold leading-none mt-1.5">
                  REAL ESTATE
                </span>
              </div>
            </button>
            <p className="font-sans text-sm text-[#9CA3AF] leading-relaxed max-w-sm font-light">
              Providing institutional-grade commercial sales, landlord representation, acquisitions, and premium asset management in Southern California since 2013.
            </p>
          </div>

          {/* Page Links Directory Column (3-col) */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#C5A880] tracking-wide">
              Directory
            </h4>
            <ul className="space-y-2 font-sans text-sm text-[#9CA3AF]">
              {tabs.map((tab) => (
                <li key={tab.id}>
                  <button
                    onClick={() => setActiveTab(tab.id)}
                    className="hover:text-white transition-colors cursor-pointer text-left py-1"
                  >
                    {tab.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Corporate Desk Info Column (5-col) */}
          <div className="md:col-span-5 space-y-4">
            <h4 className="font-serif text-lg font-semibold text-[#C5A880] tracking-wide">
              Corporate Desk
            </h4>
            <div className="space-y-3 font-sans text-sm text-[#9CA3AF] font-light">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4.5 h-4.5 text-[#C5A880] shrink-0 mt-0.5" />
                <span>3255 Wilshire Blvd, Suite 703, Los Angeles, CA 90010 (Koreatown HQ)</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="w-4.5 h-4.5 text-[#C5A880] shrink-0" />
                <a href="tel:+12132519000" className="hover:text-white font-bold">
                  +1 (213) 251-9000
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="w-4.5 h-4.5 text-[#C5A880] shrink-0" />
                <a href="mailto:info@korusre.com" className="hover:text-white">
                  info@korusre.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Clock className="w-4.5 h-4.5 text-[#C5A880] shrink-0" />
                <span>Monday – Friday, 9:00 AM to 5:00 PM</span>
              </div>
            </div>
          </div>

        </div>

        {/* Legal Licensing & Credits */}
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12 mt-12 pt-8 border-t border-white/[0.05] flex flex-col md:flex-row items-center justify-between font-sans text-xs text-[#9CA3AF] space-y-4 md:space-y-0">
          <p className="font-light">
            © 2026 KORUS Real Estate. All Rights Reserved. CA Broker License ID: 01067529.
          </p>
          <div className="flex items-center space-x-6">
            <span className="hover:text-white transition-colors cursor-pointer">Privacy Charter</span>
            <span className="hover:text-white transition-colors cursor-pointer">Underwriting Terms</span>
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="p-2 bg-white/5 rounded-lg text-white hover:bg-white/10 transition-all flex items-center justify-center cursor-pointer"
              aria-label="Scroll to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </footer>

      {/* Floating AI Assistant Bubble & Panel */}
      <AiAssistant />

    </div>
  );
}
