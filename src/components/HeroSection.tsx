/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { ArrowRight, KeyRound, Building, ShieldCheck, History } from "lucide-react";

interface HeroSectionProps {
  setActiveTab: (tab: string) => void;
}

export default function HeroSection({ setActiveTab }: HeroSectionProps) {
  return (
    <section
      id="hero-section"
      className="relative min-h-[100vh] pt-24 pb-16 flex flex-col justify-center bg-[#FAFAF9]"
    >
      {/* Decorative Subtle Grid overlay for Editorial feel */}
      <div className="absolute inset-0 bg-[radial-gradient(#1e2b38_1px,transparent_1px)] [background-size:24px_24px] opacity-[0.03] pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 my-auto">
        
        {/* Left Side: Content Hierarchy */}
        <div className="lg:col-span-7 flex flex-col justify-center text-left">
          
          {/* Editorial Title */}
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="font-serif text-[34px] md:text-6xl lg:text-[72px] xl:text-[80px] font-semibold tracking-tight text-[#1E2B38] leading-tight md:leading-[1.05] mb-6"
          >
            Brokerage.<br />
            Investment.<br />
            Management.
          </motion.h1>

          {/* Subheading */}
          <motion.p
            id="hero-subheading"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="font-sans text-[14px] md:text-[18px] text-[#1E2B38]/85 leading-relaxed md:leading-relaxed max-w-2xl mb-10 font-light"
          >
            KORUS Real Estate combines institutional-grade transaction discipline with local Southern California intelligence. Led by veteran President Mark Hong, we specialize in commercial sales, retail acquisitions, tenant leasing, and premium property management.
          </motion.p>

          {/* Action Buttons */}
          <motion.div
            id="hero-actions"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 mb-12"
          >
            <button
              id="hero-btn-portfolio"
              onClick={() => setActiveTab("portfolio")}
              className="px-6 md:px-8 py-3.5 md:py-4 bg-[#C5A880] text-white rounded-[14px] font-sans text-xs md:text-base font-bold tracking-wide hover:bg-[#D6B98D] transition-colors duration-300 shadow-md shadow-[#C5A880]/10 flex items-center justify-center space-x-2 cursor-pointer"
            >
              <span>Explore Active Listings</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              id="hero-btn-management"
              onClick={() => setActiveTab("management")}
              className="px-6 md:px-8 py-3.5 md:py-4 border border-[#1E2B38] text-[#1E2B38] rounded-[14px] font-sans text-xs md:text-base font-semibold tracking-wide hover:bg-[#1E2B38] hover:text-white transition-all duration-300 flex items-center justify-center cursor-pointer"
            >
              Property Management Services
            </button>
          </motion.div>

        </div>

        {/* Right Side: Editorial Image Block (Isometric lines & clean frame) */}
        <div className="lg:col-span-5 relative flex items-center justify-center">
          <motion.div
            id="hero-imagery"
            initial={{ opacity: 0, scale: 0.98, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative w-full aspect-[4/5] rounded-[20px] overflow-hidden shadow-2xl bg-[#1E2B38]/5"
          >
            {/* High-quality cinematic Los Angeles skyline representing Southern California market */}
            <img
              src="https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?auto=format&fit=crop&q=80&w=2070"
              alt="Southern California Landmark Architecture"
              className="w-full h-full object-cover grayscale opacity-90 hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            
            {/* Absolute gradient overlays */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#1E2B38]/80 via-[#1E2B38]/20 to-transparent" />

            {/* Corner Badge */}
            <div className="absolute top-6 right-6 px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-white/20 shadow-lg">
              <span className="font-sans text-xs font-bold text-[#1E2B38] tracking-widest uppercase">
                LOS ANGELES HQ
              </span>
            </div>

            {/* In-image caption card representing KREBASC & Local Expertise */}
            <div className="absolute bottom-6 left-6 right-6 bg-[#FAFAF9]/95 backdrop-blur-sm p-6 rounded-[16px] border border-[#1E2B38]/10 shadow-lg">
              <span className="text-[10px] font-sans font-bold tracking-widest text-[#C5A880] uppercase block mb-1">
                EXECUTIVE PRINCIPLE
              </span>
              <p className="font-serif text-lg text-[#1E2B38] leading-snug">
                "We represent client capital with the same rigor applied to institutional portfolios."
              </p>
              <div className="mt-3 flex items-center space-x-2">
                <div className="w-4 h-[1px] bg-[#1E2B38]/30" />
                <span className="font-sans text-xs font-semibold text-[#1E2B38]/70">
                  Mark Hong, President
                </span>
              </div>
            </div>
          </motion.div>
        </div>

      </div>

      {/* Trust Metrics Grid (4-column layout positioned at bottom of the hero) */}
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 w-full mt-auto pt-10 border-t border-[#1E2B38]/8">
        <div id="trust-metrics-grid" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          
          <motion.div
            id="metric-card-1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.5 }}
            className="flex items-start space-x-4 p-4 rounded-[16px] bg-[#FFFFFF] border border-[#1E2B38]/4 shadow-sm"
          >
            <div className="p-3 bg-[#C5A880]/10 text-[#C5A880] rounded-[12px]">
              <History className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-serif text-2xl lg:text-3xl font-bold text-[#1E2B38] leading-tight">
                35+ Years
              </span>
              <span className="block font-sans text-xs text-[#9CA3AF] mt-1 font-medium">
                Active Market Tenure (Since 1990)
              </span>
            </div>
          </motion.div>

          <motion.div
            id="metric-card-2"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.6 }}
            className="flex items-start space-x-4 p-4 rounded-[16px] bg-[#FFFFFF] border border-[#1E2B38]/4 shadow-sm"
          >
            <div className="p-3 bg-[#1E2B38]/5 text-[#1E2B38] rounded-[12px]">
              <Building className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-serif text-2xl lg:text-3xl font-bold text-[#1E2B38] leading-tight">
                2,000+
              </span>
              <span className="block font-sans text-xs text-[#9CA3AF] mt-1 font-medium">
                Completed Transactions
              </span>
            </div>
          </motion.div>

          <motion.div
            id="metric-card-3"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.7 }}
            className="flex items-start space-x-4 p-4 rounded-[16px] bg-[#FFFFFF] border border-[#1E2B38]/4 shadow-sm"
          >
            <div className="p-3 bg-[#8FA89B]/10 text-[#8FA89B] rounded-[12px]">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-serif text-2xl lg:text-3xl font-bold text-[#1E2B38] leading-tight">
                $1B+
              </span>
              <span className="block font-sans text-xs text-[#9CA3AF] mt-1 font-medium">
                Lifetime Transaction Volume
              </span>
            </div>
          </motion.div>

          <motion.div
            id="metric-card-4"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.8 }}
            className="flex items-start space-x-4 p-4 rounded-[16px] bg-[#FFFFFF] border border-[#1E2B38]/4 shadow-sm"
          >
            <div className="p-3 bg-[#C5A880]/10 text-[#C5A880] rounded-[12px]">
              <KeyRound className="w-5 h-5" />
            </div>
            <div>
              <span className="block font-serif text-2xl lg:text-3xl font-bold text-[#1E2B38] leading-tight">
                Established 2013
              </span>
              <span className="block font-sans text-xs text-[#9CA3AF] mt-1 font-medium">
                13 Years of Corporate Operations
              </span>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
