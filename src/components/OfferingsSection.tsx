/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Building2, Handshake, ShieldAlert, ArrowUpRight } from "lucide-react";

interface OfferingsSectionProps {
  setActiveTab: (tab: string) => void;
}

export default function OfferingsSection({ setActiveTab }: OfferingsSectionProps) {
  return (
    <section id="offerings-section" className="py-24 bg-[#FAFAF9] border-t border-[#1E2B38]/8">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Heading with high editorial hierarchy */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16">
          <div className="max-w-2xl text-left">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
              CORE OF REAL ESTATE DISCIPLINE
            </span>
            <h2 className="font-serif text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E2B38]">
              Expert Transaction Advisory
            </h2>
          </div>
          <p className="font-sans text-base text-[#1E2B38]/70 mt-4 md:mt-0 max-w-sm text-left">
            We operate with absolute transparency, rigorous data modeling, and localized Southern California wisdom to yield superior returns for our clients.
          </p>
        </div>

        {/* Asymmetrical Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* Card 1: Industrial & Commercial Brokerage (Wider 7-col card) */}
          <motion.div
            id="offering-card-1"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveTab("portfolio")}
            className="lg:col-span-7 bg-[#FFFFFF] rounded-[16px] p-8 lg:p-12 border border-[#1E2B38]/8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer text-left"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-8">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#1E2B38] mb-4">
                Industrial & Commercial Brokerage
              </h3>
              <p className="font-sans text-base text-[#1E2B38]/70 leading-relaxed max-w-xl">
                Facilitating the strategic acquisition and disposition of retail shopping centers, office buildings, industrial properties, apartment complexes, and development land.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#1E2B38]/6 flex items-center justify-between">
              <span className="font-sans text-xs font-bold text-[#C5A880] tracking-widest uppercase">
                Acquisition & Disposition
              </span>
              <div className="w-8 h-8 rounded-full bg-[#FAFAF9] text-[#1E2B38] flex items-center justify-center group-hover:bg-[#1E2B38] group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Card 2: Landlord & Tenant Lease Representation (Shorter 5-col card) */}
          <motion.div
            id="offering-card-2"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveTab("portfolio")}
            className="lg:col-span-5 bg-[#FFFFFF] rounded-[16px] p-8 lg:p-12 border border-[#1E2B38]/8 shadow-sm hover:shadow-md transition-all flex flex-col justify-between group cursor-pointer text-left"
          >
            <div>
              <div className="w-12 h-12 rounded-lg bg-[#1E2B38]/5 text-[#1E2B38] flex items-center justify-center mb-8">
                <Handshake className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#1E2B38] mb-4">
                Landlord & Tenant Lease Representation
              </h3>
              <p className="font-sans text-base text-[#1E2B38]/70 leading-relaxed">
                Aligning prominent national and regional retail, medical, and restaurant brands with prime Southern California trade corridors.
              </p>
            </div>
            <div className="mt-8 pt-6 border-t border-[#1E2B38]/6 flex items-center justify-between">
              <span className="font-sans text-xs font-bold text-[#1E2B38] tracking-widest uppercase">
                Leasing Corridors
              </span>
              <div className="w-8 h-8 rounded-full bg-[#FAFAF9] text-[#1E2B38] flex items-center justify-center group-hover:bg-[#1E2B38] group-hover:text-white transition-colors">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </div>
          </motion.div>

          {/* Card 3: Asset & Property Management (Wider 12-col card emphasizing portals & yields) */}
          <motion.div
            id="offering-card-3"
            whileHover={{ y: -2 }}
            transition={{ duration: 0.25 }}
            onClick={() => setActiveTab("management")}
            className="lg:col-span-12 bg-[#FFFFFF] rounded-[16px] p-8 lg:p-12 border border-[#1E2B38]/8 shadow-sm hover:shadow-md transition-all grid grid-cols-1 md:grid-cols-12 gap-8 items-center group cursor-pointer text-left"
          >
            <div className="md:col-span-8">
              <div className="w-12 h-12 rounded-lg bg-[#8FA89B]/10 text-[#8FA89B] flex items-center justify-center mb-8">
                <ShieldAlert className="w-6 h-6" />
              </div>
              <h3 className="font-serif text-2xl lg:text-3xl font-semibold text-[#1E2B38] mb-4">
                Asset & Property Management
              </h3>
              <p className="font-sans text-base text-[#1E2B38]/70 leading-relaxed max-w-2xl">
                Providing proactive commercial property oversight focused on operational efficiency, tenant portal coordination, 24/7 preventative maintenance dispatch, and structural yield optimization.
              </p>
            </div>
            <div className="md:col-span-4 md:border-l md:border-[#1E2B38]/8 md:pl-8 flex flex-col justify-between h-full py-2">
              <div className="space-y-4">
                <span className="font-sans text-xs font-bold text-[#C5A880] tracking-widest uppercase block">
                  MANAGEMENT PORTALS
                </span>
                <p className="font-sans text-sm text-[#1E2B38]/60 leading-normal">
                  Immediate tenant support, maintenance logs, and financial statement audits accessible securely.
                </p>
              </div>
              <div className="mt-6 flex items-center justify-between">
                <span className="font-sans text-sm font-semibold text-[#1E2B38] group-hover:text-[#C5A880] transition-colors">
                  Configure Portals
                </span>
                <div className="w-8 h-8 rounded-full bg-[#FAFAF9] text-[#1E2B38] flex items-center justify-center group-hover:bg-[#1E2B38] group-hover:text-white transition-colors">
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
