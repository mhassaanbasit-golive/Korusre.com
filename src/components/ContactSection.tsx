/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MapPin, Phone, Mail, Clock, Send, Landmark, Loader2, Check, Sparkles } from "lucide-react";

export default function ContactSection() {
  const [fullName, setFullName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [classification, setClassification] = useState("Asset Acquisition");
  const [message, setMessage] = useState("");
  
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [inquiryCode, setInquiryCode] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email || !message) return;
    setLoading(true);
    
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setInquiryCode("KRE-ADV-" + Math.floor(10000 + Math.random() * 90000));
    }, 1500);
  };

  const handleReset = () => {
    setSubmitted(false);
    setFullName("");
    setTitle("");
    setEmail("");
    setPhone("");
    setClassification("Asset Acquisition");
    setMessage("");
  };

  return (
    <section id="contact-section" className="py-24 bg-[#FAFAF9] text-[#1E2B38]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Editorial header */}
        <div className="max-w-2xl text-left mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
            PORTFOLIO CONSULTATION Desk
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E2B38] mb-4">
            Connect with KORUS
          </h2>
          <p className="font-sans text-sm md:text-base text-[#1E2B38]/70 font-light">
            Whether acquiring retail shopping centers, listing land development parcels, or requesting elite property management services, our advisors are prepared to assist.
          </p>
        </div>

        {/* Asymmetrical Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch text-left">
          
          {/* Left Side: Office Showcase Map & Details (5-col) */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            
            <div className="bg-[#FFFFFF] p-8 rounded-[16px] border border-[#1E2B38]/8 shadow-sm space-y-6">
              
              <div>
                <span className="text-[10px] font-sans font-bold tracking-widest text-[#C5A880] uppercase block mb-1">
                  HEAD OFFICE LOCATION
                </span>
                <h3 className="font-serif text-2xl font-semibold text-[#1E2B38]">
                  Mid-Wilshire Corporate HQ
                </h3>
              </div>

              <div className="space-y-4 pt-4 border-t border-[#1E2B38]/8">
                
                <div className="flex items-start space-x-3.5">
                  <MapPin className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-xs font-bold text-[#1E2B38]/60 uppercase tracking-widest">
                      Corporate Address
                    </span>
                    <p className="font-sans text-sm text-[#1E2B38] mt-0.5 leading-relaxed">
                      3255 Wilshire Blvd, Suite 703,<br />
                      Los Angeles, CA 90010
                    </p>
                    <span className="text-[10px] text-[#8FA89B] font-bold block mt-1">
                      (Heart of Mid-Wilshire/Koreatown)
                    </span>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Phone className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-xs font-bold text-[#1E2B38]/60 uppercase tracking-widest">
                      Direct Phone Desk
                    </span>
                    <a href="tel:+12132519000" className="font-sans text-sm text-[#1E2B38] font-bold mt-0.5 hover:text-[#C5A880]">
                      +1 (213) 251-9000
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Mail className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-xs font-bold text-[#1E2B38]/60 uppercase tracking-widest">
                      Corporate Email
                    </span>
                    <a href="mailto:info@korusre.com" className="font-sans text-sm text-[#1E2B38] mt-0.5 hover:text-[#C5A880]">
                      info@korusre.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start space-x-3.5">
                  <Clock className="w-5 h-5 text-[#C5A880] shrink-0 mt-0.5" />
                  <div>
                    <span className="block font-sans text-xs font-bold text-[#1E2B38]/60 uppercase tracking-widest">
                      Business Hours
                    </span>
                    <p className="font-sans text-sm text-[#1E2B38] mt-0.5">
                      Monday – Friday, 9:00 AM to 5:00 PM
                    </p>
                  </div>
                </div>

              </div>

            </div>

            {/* Custom high-end abstract visual box representing Koreatown skyline */}
            <div className="relative aspect-[16/9] lg:aspect-[4/3] rounded-[16px] overflow-hidden shadow-sm border border-[#1E2B38]/8 bg-stone-200">
              <img
                src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=1600"
                alt="Los Angeles Wilshire Blvd Skyline"
                className="w-full h-full object-cover grayscale"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-[#1E2B38]/20" />
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-sm p-4 rounded-xl border border-[#1E2B38]/5">
                <span className="text-[9px] font-sans font-bold tracking-widest text-[#C5A880] block mb-0.5">SKYLINE INSIGHT</span>
                <p className="text-xs text-[#1E2B38] leading-tight">
                  "Wilshire Boulevard represents Southern California's primary high-density investment lane."
                </p>
              </div>
            </div>

          </div>

          {/* Right Side: Advisory Form Panel (7-col) */}
          <div className="lg:col-span-7 bg-[#FFFFFF] rounded-[16px] p-8 border border-[#1E2B38]/8 shadow-sm flex flex-col justify-center">
            
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.div
                  key="form-panel"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <div className="border-b border-[#1E2B38]/8 pb-4 mb-6">
                    <span className="text-[10px] font-sans font-bold tracking-widest text-[#C5A880] uppercase block mb-1">
                      SECURED ADVISORY BRIEFING
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-[#1E2B38]">
                      Initiate Portfolio Consultation
                    </h3>
                  </div>

                  <form id="advisory-form" onSubmit={handleSubmit} className="space-y-4">
                    
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1.5">
                          Full Name *
                        </label>
                        <input
                          id="contact-fullname"
                          type="text"
                          required
                          placeholder="Mark Miller"
                          value={fullName}
                          onChange={(e) => setFullName(e.target.value)}
                          className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#1E2B38]/8 rounded-[12px] font-sans text-sm focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1.5">
                          Professional Title
                        </label>
                        <input
                          id="contact-title"
                          type="text"
                          placeholder="Portfolio Manager"
                          value={title}
                          onChange={(e) => setTitle(e.target.value)}
                          className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#1E2B38]/8 rounded-[12px] font-sans text-sm focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label className="block font-sans text-xs font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1.5">
                          Email Address *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          required
                          placeholder="mark@capitalholding.com"
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#1E2B38]/8 rounded-[12px] font-sans text-sm focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>
                      <div>
                        <label className="block font-sans text-xs font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1.5">
                          Contact Phone
                        </label>
                        <input
                          id="contact-phone"
                          type="tel"
                          placeholder="+1 (213) 555-0199"
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#1E2B38]/8 rounded-[12px] font-sans text-sm focus:outline-none focus:border-[#C5A880]"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1.5">
                        Inquiry Classification *
                      </label>
                      <select
                        id="contact-classification"
                        value={classification}
                        onChange={(e) => setClassification(e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#1E2B38]/8 rounded-[12px] font-sans text-sm focus:outline-none focus:border-[#C5A880] cursor-pointer"
                      >
                        <option value="Asset Acquisition">Asset Acquisition (Buy commercial properties)</option>
                        <option value="Listing Representation">Listing Representation (Sell/List commercial properties)</option>
                        <option value="Commercial Leasing">Commercial Leasing (Rent retail or restaurant suites)</option>
                        <option value="Property Management">Property Management (Secure management services)</option>
                      </select>
                    </div>

                    <div>
                      <label className="block font-sans text-xs font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1.5">
                        Inquiry Message Details *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        required
                        placeholder="Please describe your portfolio needs, asset location, or leasing criteria..."
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#1E2B38]/8 rounded-[12px] font-sans text-sm focus:outline-none focus:border-[#C5A880]"
                      />
                    </div>

                    <div className="pt-2">
                      <button
                        id="contact-submit"
                        type="submit"
                        disabled={loading}
                        className="w-full py-4 bg-[#C5A880] hover:bg-[#D6B98D] text-white font-sans text-sm font-bold tracking-widest uppercase rounded-[12px] transition-colors flex items-center justify-center space-x-2 cursor-pointer shadow shadow-[#C5A880]/10"
                      >
                        {loading ? (
                          <>
                            <Loader2 className="w-5 h-5 animate-spin" />
                            <span>TRANSMITTING ADVISORY...</span>
                          </>
                        ) : (
                          <>
                            <span>Transmit Advisory Brief</span>
                            <Send className="w-4 h-4" />
                          </>
                        )}
                      </button>
                    </div>

                  </form>
                </motion.div>
              ) : (
                <motion.div
                  key="success-panel"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="w-14 h-14 bg-[#8FA89B]/10 text-[#8FA89B] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Check className="w-8 h-8" />
                  </div>
                  
                  <span className="text-[10px] font-sans font-bold tracking-widest text-[#8FA89B] uppercase block mb-1">
                    TRANSMISSION REFRESHED COMPLETE
                  </span>
                  <h3 className="font-serif text-3xl font-semibold text-[#1E2B38] mb-2">
                    Inquiry Transmitted Successfully
                  </h3>
                  <p className="font-sans text-sm text-[#1E2B38]/70 max-w-md mx-auto mb-8 font-light">
                    Your advisory briefing has been transmitted securely. An executive associate will compile the necessary data modeling and respond within one business day.
                  </p>

                  {/* Structured Inquiry Ticket Card */}
                  <div className="bg-[#FAFAF9] border border-[#1E2B38]/8 p-6 rounded-[16px] text-left max-w-sm mx-auto mb-8 space-y-3.5 text-xs font-mono">
                    <div className="flex justify-between text-[#9CA3AF]">
                      <span>TRANSMISSION CODE:</span>
                      <span className="font-bold text-[#1E2B38]">{inquiryCode}</span>
                    </div>
                    <div className="flex justify-between text-[#9CA3AF]">
                      <span>NAME:</span>
                      <span className="text-[#1E2B38]">{fullName}</span>
                    </div>
                    {title && (
                      <div className="flex justify-between text-[#9CA3AF]">
                        <span>TITLE:</span>
                        <span className="text-[#1E2B38]">{title}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-[#9CA3AF]">
                      <span>EMAIL:</span>
                      <span className="text-[#1E2B38]">{email}</span>
                    </div>
                    <div className="flex justify-between text-[#9CA3AF]">
                      <span>CLASSIFICATION:</span>
                      <span className="font-bold text-[#C5A880]">{classification}</span>
                    </div>
                    <div className="flex justify-between text-[#9CA3AF]">
                      <span>STATUS:</span>
                      <span className="text-[#8FA89B] font-bold">QUEUED ON PRESIDENT'S DESK</span>
                    </div>
                  </div>

                  <button
                    onClick={handleReset}
                    className="font-sans text-xs font-bold text-[#C5A880] hover:underline cursor-pointer"
                  >
                    Initiate Another Portfolio Request
                  </button>
                </motion.div>
              )}
            </AnimatePresence>

          </div>

        </div>

      </div>
    </section>
  );
}
