/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Award, User, X, Briefcase, Sparkles, AlertCircle } from "lucide-react";
import { TEAM_MEMBERS, TeamMember } from "../types";

export default function TeamSection() {
  const [selectedMember, setSelectedMember] = useState<TeamMember | null>(null);

  return (
    <section id="team-section" className="py-24 bg-[#FAFAF9] text-[#1E2B38]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Editorial Heading */}
        <div className="max-w-2xl text-left mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
            KORUS ADVISORS
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E2B38] mb-4">
            Meet Our Professionals
          </h2>
          <p className="font-sans text-sm md:text-base text-[#1E2B38]/70 font-light">
            Each advisor brings institutional-grade transaction intelligence, local Southern California relationships, and unwavering client integrity.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {TEAM_MEMBERS.map((member, i) => (
            <motion.div
              key={i}
              id={`team-member-card-${member.name.toLowerCase().replace(/\s+/g, "-")}`}
              whileHover={{ y: -4 }}
              onClick={() => setSelectedMember(member)}
              className="bg-[#FFFFFF] rounded-[16px] overflow-hidden border border-[#1E2B38]/8 shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between text-left"
            >
              {/* Profile Image container */}
              <div className="relative aspect-[4/3] bg-[#1E2B38]/5 overflow-hidden">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual Label Tag */}
                {member.tag && (
                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#C5A880] text-white text-[10px] font-sans font-bold tracking-widest uppercase rounded-full">
                    {member.tag}
                  </div>
                )}
                
                {/* Dog Mascot Icon overlay */}
                {member.name.includes("Furball") && (
                  <div className="absolute top-4 right-4 p-2 bg-[#8FA89B] text-white rounded-full">
                    <Sparkles className="w-4 h-4" />
                  </div>
                )}
              </div>

              {/* Profile Bio summary */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <h3 className="font-serif text-xl lg:text-2xl font-semibold text-[#1E2B38] group-hover:text-[#C5A880] transition-colors mb-1">
                    {member.name}
                  </h3>
                  <p className="font-sans text-sm font-semibold text-[#C5A880] mb-3">
                    {member.title}
                  </p>
                  <p className="font-sans text-xs lg:text-sm text-[#1E2B38]/70 leading-relaxed line-clamp-2 font-light">
                    {member.bio}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-[#1E2B38]/6 flex items-center justify-between text-xs font-semibold text-[#1E2B38]/60 group-hover:text-[#1E2B38] transition-colors">
                  <span>{member.experience}</span>
                  <span className="text-[#C5A880]">Read Profile →</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Detailed Modal/Dialog (AnimatePresence) */}
        <AnimatePresence>
          {selectedMember && (
            <div id="team-modal-container" className="fixed inset-0 z-50 flex items-center justify-center p-4">
              
              {/* Background Overlay */}
              <motion.div
                id="team-modal-overlay"
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedMember(null)}
                className="absolute inset-0 bg-black"
              />

              {/* Dialog Content */}
              <motion.div
                id="team-modal-content"
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                transition={{ duration: 0.3 }}
                className="relative bg-[#FAFAF9] rounded-[24px] overflow-hidden max-w-3xl w-full border border-[#1E2B38]/12 shadow-2xl z-10 flex flex-col md:flex-row"
              >
                {/* Left Side: Photo inside Modal */}
                <div className="md:w-5/12 relative bg-[#1E2B38]/5">
                  <img
                    src={selectedMember.image}
                    alt={selectedMember.name}
                    className="w-full h-full object-cover min-h-[300px] md:absolute md:inset-0 grayscale"
                    referrerPolicy="no-referrer"
                  />
                  {selectedMember.tag && (
                    <div className="absolute top-4 left-4 px-3 py-1 bg-[#C5A880] text-white text-[10px] font-sans font-bold tracking-widest uppercase rounded-full">
                      {selectedMember.tag}
                    </div>
                  )}
                </div>

                {/* Right Side: Copy Details */}
                <div className="p-8 md:w-7/12 flex flex-col justify-between text-left">
                  
                  {/* Close trigger button */}
                  <button
                    id="team-modal-close"
                    onClick={() => setSelectedMember(null)}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#1E2B38]/5 text-[#1E2B38] transition-colors cursor-pointer"
                    aria-label="Close details"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div>
                    <span className="text-[10px] font-sans font-bold tracking-widest text-[#C5A880] uppercase block mb-1">
                      {selectedMember.experience}
                    </span>
                    <h3 className="font-serif text-3xl font-semibold text-[#1E2B38] mb-1">
                      {selectedMember.name}
                    </h3>
                    <p className="font-sans text-sm font-semibold text-[#1E2B38]/80 mb-6">
                      {selectedMember.title}
                    </p>

                    <div className="space-y-4 mb-8">
                      <div className="flex items-start space-x-3 text-sm text-[#1E2B38]/80 leading-relaxed font-light">
                        <User className="w-4 h-4 mt-1 text-[#C5A880] shrink-0" />
                        <p>{selectedMember.bio}</p>
                      </div>

                      {/* License ID */}
                      {selectedMember.license && (
                        <div className="flex items-center space-x-3 text-xs font-bold text-[#1E2B38]/60 bg-[#1E2B38]/5 p-3 rounded-[12px] w-fit">
                          <Award className="w-4 h-4 text-[#C5A880]" />
                          <span>CA License ID: {selectedMember.license}</span>
                        </div>
                      )}

                      {/* Mascot Fun Warning */}
                      {selectedMember.name.includes("Furball") && (
                        <div className="flex items-center space-x-3 text-xs font-bold text-[#8FA89B] bg-[#8FA89B]/10 p-3 rounded-[12px]">
                          <AlertCircle className="w-4 h-4" />
                          <span>Guarantees treats, structure, and positive yields!</span>
                        </div>
                      )}
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#1E2B38]/8 flex items-center justify-between">
                    <span className="text-xs font-sans text-[#9CA3AF]">KORUS Real Estate Advisory</span>
                    <button
                      id="team-modal-contact-trigger"
                      onClick={() => {
                        setSelectedMember(null);
                        // Force navigating to contact screen
                        const contactTab = document.getElementById("nav-link-contact");
                        if (contactTab) contactTab.click();
                      }}
                      className="text-xs font-bold font-sans text-[#C5A880] hover:text-[#D6B98D] transition-colors cursor-pointer"
                    >
                      Consult with Advisor →
                    </button>
                  </div>

                </div>

              </motion.div>
            </div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
