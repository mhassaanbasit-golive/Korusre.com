/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { Award, CheckCircle2, AwardIcon } from "lucide-react";
import { TIMELINE_AWARDS } from "../types";

export default function AboutSection() {
  const companyValues = [
    {
      title: "Integrity",
      desc: "Absolute transparency in underwriting and transaction representations."
    },
    {
      title: "Market Expertise",
      desc: "Dominant local knowledge of Southern California corridors, demographic shifts, and commercial zoning."
    },
    {
      title: "Institutional Discipline",
      desc: "Rigorous analysis applied to every deal size, from single-tenant leases to master-planned development sites."
    },
    {
      title: "Relationship Longevity",
      desc: "Treating transactions as milestones in long-term partnerships."
    },
    {
      title: "Entrepreneurial Speed",
      desc: "Swift execution, localized agility, and creative marketing strategies."
    }
  ];

  return (
    <section id="about-section" className="py-24 bg-[#FAFAF9] text-[#1E2B38]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* EDITORIAL INTRODUCTION (Image Left, Text Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-lg border border-[#1E2B38]/8">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1600"
                alt="Elite Office Space"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
          <div className="lg:col-span-7 text-left lg:pl-6">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
              KORUS HISTORY
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E2B38] mb-6">
              Your Dream, Our Commitment.
            </h2>
            <p className="font-sans text-sm md:text-lg lg:text-xl text-[#1E2B38]/80 leading-relaxed font-light">
              Established in 2013, KORUS Real Estate has grown into a strategic commercial real estate firm specializing in retail investment sales, development land, and leasing across Southern California. Our reputation is founded upon solid relationships and the transactional capability of veteran specialists.
            </p>
          </div>
        </div>

        {/* THE MARK HONG NARRATIVE (Editorial Split) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 border-t border-b border-[#1E2B38]/8 py-20 mb-28 text-left">
          <div className="lg:col-span-4">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
              LEADERSHIP HIGHLIGHT
            </span>
            <h3 className="font-serif text-3xl lg:text-4xl font-semibold tracking-tight text-[#1E2B38] leading-tight">
              Over Thirty-Five Years of Transactional Expertise
            </h3>
          </div>
          <div className="lg:col-span-8">
            <p className="font-sans text-base text-[#1E2B38]/85 leading-relaxed space-y-4 font-light">
              With over 35 years of active market experience, President and Founder Mark Hong has successfully navigated more than 2,000 commercial transactions, representing over $1 Billion in lifetime valuation. A recognized specialist in high-density land development, retail acquisitions, and landlord representation, he acts as a primary advisor to private capital portfolios and institutional real estate assets.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
              <div className="flex items-center space-x-3 text-sm font-semibold text-[#1E2B38]">
                <CheckCircle2 className="w-5 h-5 text-[#8FA89B]" />
                <span>Licensed California Designated Broker</span>
              </div>
              <div className="flex items-center space-x-3 text-sm font-semibold text-[#1E2B38]">
                <CheckCircle2 className="w-5 h-5 text-[#8FA89B]" />
                <span>KREBASC President/Chairman Emeritus</span>
              </div>
            </div>
          </div>
        </div>

        {/* COMMUNITY LEADERSHIP SECTION (Text Left, Image Right) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center mb-28">
          <div className="lg:col-span-7 text-left">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
              REGIONAL INTEGRATION
            </span>
            <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-[#1E2B38] mb-6">
              Respected Business Leadership
            </h3>
            <p className="font-sans text-sm md:text-base text-[#1E2B38]/85 leading-relaxed font-light">
              Deeply integrated within the Southern California business community, Mark Hong has served as the Chairman and President of the Korean Real Estate Broker Association of Southern California (KREBASC), advising on regional policy, commercial zoning, and cross-border investment strategies. This network grants our clients exclusive off-market opportunities and immediate access to prominent Asian-American investments.
            </p>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-[20px] overflow-hidden shadow-lg border border-[#1E2B38]/8">
              <img
                src="https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&q=80&w=800"
                alt="Leadership and Community Panel"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>
        </div>

        {/* CHRONOLOGICAL TRUST ACCOLADES (Horizontal Timeline) */}
        <div className="mb-28 text-left">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
            CHRONOLOGICAL RECOGNITIONS
          </span>
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-[#1E2B38] mb-12">
            A Legacy of Distinction
          </h3>
          <div className="relative border-l md:border-l-0 md:border-t border-[#1E2B38]/10 pl-6 md:pl-0 md:pt-8 grid grid-cols-1 md:grid-cols-6 gap-8">
            {TIMELINE_AWARDS.map((award, i) => (
              <div key={i} className="relative text-left">
                {/* Timeline Dot (md view top, mobile view left) */}
                <div className="absolute -left-[31px] md:-left-1.5 md:-top-[38px] w-3 h-3 rounded-full bg-[#C5A880] border-2 border-[#FAFAF9]" />
                <span className="font-serif text-2xl font-bold text-[#C5A880] block mb-2">
                  {award.year}
                </span>
                <p className="font-sans text-sm font-semibold text-[#1E2B38] leading-snug">
                  {award.title}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* COMPANY VALUES CARDS (4-column Grid style adapted for 5 cards gracefully) */}
        <div className="text-left">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
            GUIDING CONSTITUTION
          </span>
          <h3 className="font-serif text-2xl md:text-3xl lg:text-4xl font-semibold tracking-tight text-[#1E2B38] mb-12">
            The Values of KORUS
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {companyValues.map((val, i) => (
              <div
                key={i}
                className="bg-[#FFFFFF] p-6 rounded-[16px] border border-[#1E2B38]/8 shadow-sm flex flex-col justify-between"
              >
                <div>
                  <div className="w-8 h-8 rounded bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-6 text-sm font-bold font-sans">
                    0{i + 1}
                  </div>
                  <h4 className="font-serif text-lg lg:text-xl font-semibold text-[#1E2B38] mb-3">
                    {val.title}
                  </h4>
                  <p className="font-sans text-xs lg:text-sm text-[#1E2B38]/70 leading-relaxed font-light">
                    {val.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
