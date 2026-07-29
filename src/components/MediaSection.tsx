/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Newspaper, FileText, Landmark, Quote, ArrowUpRight } from "lucide-react";
import { PUBLICATIONS } from "../types";

export default function MediaSection() {
  return (
    <section id="media-section" className="py-24 bg-[#FAFAF9] text-[#1E2B38]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Page title */}
        <div className="max-w-2xl text-left mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
            EDITORIAL credentials & AUTHORITY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E2B38] mb-4">
            Publications & Market Notes
          </h2>
          <p className="font-sans text-sm md:text-base text-[#1E2B38]/70 font-light">
            KORUS and President Mark Hong act as leading voices on Southern California zoning policies, Koreatown commercial retail developments, and private capital wealth preservation.
          </p>
        </div>

        {/* Media grid of Publications */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-left">
          {PUBLICATIONS.map((pub, i) => (
            <motion.div
              key={i}
              whileHover={{ y: -2 }}
              className="bg-[#FFFFFF] rounded-[16px] p-8 border border-[#1E2B38]/8 shadow-sm flex flex-col justify-between hover:shadow-md transition-all group"
            >
              <div>
                
                {/* Header info */}
                <div className="flex items-center justify-between mb-8">
                  <span className="font-serif text-2xl font-bold text-[#C5A880]">
                    {pub.year}
                  </span>
                  <div className="p-2.5 bg-[#FAFAF9] text-[#1E2B38]/60 group-hover:bg-[#1E2B38] group-hover:text-white rounded-lg transition-colors">
                    {pub.source.includes("Times") || pub.source.includes("Daily") || pub.source.includes("Journal") ? (
                      <Newspaper className="w-4 h-4" />
                    ) : (
                      <FileText className="w-4 h-4" />
                    )}
                  </div>
                </div>

                <span className="text-[10px] font-sans font-bold tracking-widest text-[#9CA3AF] uppercase block mb-1">
                  {pub.source}
                </span>
                
                <h3 className="font-serif text-xl font-semibold text-[#1E2B38] mb-4 group-hover:text-[#C5A880] transition-colors leading-snug">
                  {pub.title}
                </h3>
                
                <p className="font-sans text-xs lg:text-sm text-[#1E2B38]/70 leading-relaxed font-light">
                  {pub.description}
                </p>

              </div>

              {/* Card Footer */}
              <div className="mt-8 pt-6 border-t border-[#1E2B38]/6 flex items-center justify-between text-xs font-semibold text-[#C5A880]">
                <span>ARCHIVAL RECORD</span>
                <span className="group-hover:translate-x-0.5 transition-transform">
                  View Reference
                </span>
              </div>

            </motion.div>
          ))}
        </div>

        {/* Featured Quote section */}
        <div className="mt-24 bg-[#1E2B38] text-white rounded-[24px] p-8 lg:p-12 relative overflow-hidden text-left shadow-lg">
          
          {/* Subtle Background Lines */}
          <div className="absolute right-0 bottom-0 w-64 h-64 bg-white/[0.02] rounded-tl-full pointer-events-none" />

          <div className="max-w-3xl relative z-10">
            <Quote className="w-12 h-12 text-[#C5A880] mb-6 opacity-80" />
            
            <p className="font-serif text-2xl lg:text-3xl leading-relaxed mb-8 font-light italic">
              "Koreatown and the Mid-Wilshire corridor have transitioned from high-density communities into global commercial retail and residential centers. Our mission is to guide client capital through these fast-moving zoning shifts with long-term trust."
            </p>
            
            <div className="flex items-center space-x-3">
              <div className="w-6 h-[1px] bg-white/40" />
              <div>
                <span className="block font-sans text-sm font-bold text-white">
                  Mark Hong
                </span>
                <span className="block font-sans text-xs text-[#9CA3AF]">
                  President, KORUS Real Estate & Past President of KREBASC
                </span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
