/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ShieldCheck, CalendarClock, PhoneCall, Receipt, Lock, HelpCircle, Check, Loader2, Landmark } from "lucide-react";

export default function PropertyManagement() {
  const [activePortal, setActivePortal] = useState<"none" | "commercial" | "rent">("none");
  
  // Commercial Cafe State
  const [commUnit, setCommUnit] = useState("");
  const [commAddress, setCommAddress] = useState("");
  const [commPriority, setCommPriority] = useState("Low");
  const [commDesc, setCommDesc] = useState("");
  const [commSubmitted, setCommSubmitted] = useState(false);
  const [commLoading, setCommLoading] = useState(false);
  const [commTicketId, setCommTicketId] = useState("");

  // Rent Cafe State
  const [rentTenantId, setRentTenantId] = useState("");
  const [rentAmount, setRentAmount] = useState("");
  const [rentRouting, setRentRouting] = useState("");
  const [rentAccount, setRentAccount] = useState("");
  const [rentSubmitted, setRentSubmitted] = useState(false);
  const [rentLoading, setRentLoading] = useState(false);
  const [rentReceiptId, setRentReceiptId] = useState("");

  const handleCommercialSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!commAddress || !commDesc) return;
    setCommLoading(true);
    setTimeout(() => {
      setCommLoading(false);
      setCommSubmitted(true);
      setCommTicketId("KMC-" + Math.floor(100000 + Math.random() * 900000));
    }, 1500);
  };

  const handleRentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!rentTenantId || !rentAmount || !rentRouting || !rentAccount) return;
    setRentLoading(true);
    setTimeout(() => {
      setRentLoading(false);
      setRentSubmitted(true);
      setRentReceiptId("ACH-REF-" + Math.floor(1000000 + Math.random() * 9000000));
    }, 1800);
  };

  const resetPortals = () => {
    setActivePortal("none");
    setCommSubmitted(false);
    setCommUnit("");
    setCommAddress("");
    setCommPriority("Low");
    setCommDesc("");
    setRentSubmitted(false);
    setRentTenantId("");
    setRentAmount("");
    setRentRouting("");
    setRentAccount("");
  };

  return (
    <section id="property-management-section" className="py-24 bg-[#FAFAF9] text-[#1E2B38]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Section Title */}
        <div className="max-w-3xl text-left mb-16">
          <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
            PROACTIVE YIELD SECURITY
          </span>
          <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E2B38] mb-4">
            Commercial Property Management
          </h2>
          <p className="font-sans text-sm md:text-base text-[#1E2B38]/70 font-light">
            Providing institutional property oversight across Southern California shopping centers, office suites, and industrial corridors. Our team is dedicated to tenant satisfaction and operational cost-efficiency.
          </p>
        </div>

        {/* Services 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-24 text-left">
          
          <div className="bg-[#FFFFFF] p-6 rounded-[16px] border border-[#1E2B38]/8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-6">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg lg:text-xl font-semibold text-[#1E2B38] mb-3">
                Lease Administration
              </h3>
              <p className="font-sans text-xs lg:text-sm text-[#1E2B38]/70 leading-relaxed font-light">
                Comprehensive lease abstracting, active rent roll audits, and strict landlord-tenant contract compliance.
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-[16px] border border-[#1E2B38]/8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#1E2B38]/5 text-[#1E2B38] flex items-center justify-center mb-6">
                <CalendarClock className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg lg:text-xl font-semibold text-[#1E2B38] mb-3">
                Renewal Management
              </h3>
              <p className="font-sans text-xs lg:text-sm text-[#1E2B38]/70 leading-relaxed font-light">
                Proactive scheduling and structured negotiations to maintain continuous tenant occupancy and rate retention.
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-[16px] border border-[#1E2B38]/8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#8FA89B]/10 text-[#8FA89B] flex items-center justify-center mb-6">
                <PhoneCall className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg lg:text-xl font-semibold text-[#1E2B38] mb-3">
                Preventative Maintenance
              </h3>
              <p className="font-sans text-xs lg:text-sm text-[#1E2B38]/70 leading-relaxed font-light">
                24/7 dedicated dispatch and coordination of facility repairs, inspections, and tenant work order dispatches.
              </p>
            </div>
          </div>

          <div className="bg-[#FFFFFF] p-6 rounded-[16px] border border-[#1E2B38]/8 shadow-sm flex flex-col justify-between">
            <div>
              <div className="w-10 h-10 rounded-lg bg-[#C5A880]/10 text-[#C5A880] flex items-center justify-center mb-6">
                <Receipt className="w-5 h-5" />
              </div>
              <h3 className="font-serif text-lg lg:text-xl font-semibold text-[#1E2B38] mb-3">
                Financial Reporting
              </h3>
              <p className="font-sans text-xs lg:text-sm text-[#1E2B38]/70 leading-relaxed font-light">
                Detailed monthly cash flow distributions, transparent expense audits, tax planning details, and bookkeeping logs.
              </p>
            </div>
          </div>

        </div>

        {/* SECURE PORTAL ACCESS PANEL */}
        <div className="bg-[#FFFFFF] border border-[#1E2B38]/8 rounded-[24px] p-8 lg:p-12 text-left shadow-md relative overflow-hidden">
          
          {/* Decorative Security Background Line */}
          <div className="absolute right-0 top-0 w-24 h-24 bg-[#C5A880]/5 rounded-bl-full pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* Informational Copy (5-col) */}
            <div className="lg:col-span-5">
              <div className="flex items-center space-x-2 text-xs font-bold text-[#C5A880] mb-3 tracking-widest uppercase">
                <Lock className="w-4 h-4" />
                <span>SECURE CLIENT PORTAL ACCESS</span>
              </div>
              <h3 className="font-serif text-3xl font-semibold text-[#1E2B38] mb-4">
                Digital Tenant Ecosystem
              </h3>
              <p className="font-sans text-sm text-[#1E2B38]/70 leading-relaxed mb-8 font-light">
                We provide our tenants with fully secure, direct online tools. Submit maintenance requests, track real-time dispatches, and authorize monthly ACH clearings securely.
              </p>
              
              <div className="space-y-4">
                {/* Portal Toggle Buttons */}
                <button
                  id="btn-portal-commercial"
                  onClick={() => { resetPortals(); setActivePortal("commercial"); }}
                  className={`w-full text-left p-4 rounded-[14px] border transition-all cursor-pointer flex items-center justify-between ${activePortal === "commercial" ? "border-[#C5A880] bg-[#C5A880]/5" : "border-[#1E2B38]/8 hover:border-[#1E2B38]/30"}`}
                >
                  <div>
                    <span className="block font-serif text-base font-bold text-[#1E2B38]">Commercial Cafe Portal</span>
                    <span className="block font-sans text-xs text-[#9CA3AF] mt-0.5">Submit & track maintenance dispatches</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${activePortal === "commercial" ? "border-[#C5A880] bg-[#C5A880] text-white" : "border-[#1E2B38]/20"}`}>
                    {activePortal === "commercial" && <Check className="w-3 h-3" />}
                  </div>
                </button>

                <button
                  id="btn-portal-rent"
                  onClick={() => { resetPortals(); setActivePortal("rent"); }}
                  className={`w-full text-left p-4 rounded-[14px] border transition-all cursor-pointer flex items-center justify-between ${activePortal === "rent" ? "border-[#1E2B38] bg-[#1E2B38]/5" : "border-[#1E2B38]/8 hover:border-[#1E2B38]/30"}`}
                >
                  <div>
                    <span className="block font-serif text-base font-bold text-[#1E2B38]">Rent Cafe Portal</span>
                    <span className="block font-sans text-xs text-[#9CA3AF] mt-0.5">Process secure ACH checking payments</span>
                  </div>
                  <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${activePortal === "rent" ? "border-[#1E2B38] bg-[#1E2B38] text-white" : "border-[#1E2B38]/20"}`}>
                    {activePortal === "rent" && <Check className="w-3 h-3" />}
                  </div>
                </button>
              </div>
            </div>

            {/* Portal Interaction Screen (7-col) */}
            <div className="lg:col-span-7 bg-[#FAFAF9] rounded-[20px] p-8 border border-[#1E2B38]/6 shadow-inner min-h-[400px] flex flex-col justify-center">
              
              <AnimatePresence mode="wait">
                {activePortal === "none" && (
                  <motion.div
                    key="portal-empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-center py-12"
                  >
                    <Lock className="w-10 h-10 text-[#C5A880] mx-auto mb-4" />
                    <h4 className="font-serif text-lg font-bold text-[#1E2B38] mb-1">
                      Portal Inactive
                    </h4>
                    <p className="font-sans text-xs text-[#9CA3AF] max-w-sm mx-auto leading-normal">
                      Select either the **Commercial Cafe** or **Rent Cafe** portal tab on the left to initiate a secure terminal transaction simulation.
                    </p>
                  </motion.div>
                )}

                {/* Commercial Cafe Simulator */}
                {activePortal === "commercial" && (
                  <motion.div
                    key="portal-commercial"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="w-full text-left"
                  >
                    {!commSubmitted ? (
                      <form id="commercial-ticket-form" onSubmit={handleCommercialSubmit} className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#1E2B38]/8 pb-3 mb-4">
                          <span className="font-serif text-sm font-bold text-[#1E2B38]">Commercial Cafe System Terminal</span>
                          <span className="px-2 py-0.5 bg-[#8FA89B]/25 text-[#8FA89B] font-sans text-[10px] font-bold uppercase rounded">SECURE DISPATCH</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block font-sans text-[11px] font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1">Unit/Suite Number</label>
                            <input
                              id="comm-unit"
                              type="text"
                              required
                              placeholder="e.g. Suite 703"
                              value={commUnit}
                              onChange={(e) => setCommUnit(e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-[#1E2B38]/8 rounded-[10px] font-sans text-xs focus:outline-none focus:border-[#C5A880]"
                            />
                          </div>
                          <div>
                            <label className="block font-sans text-[11px] font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1">Priority Level</label>
                            <select
                              id="comm-priority"
                              value={commPriority}
                              onChange={(e) => setCommPriority(e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-[#1E2B38]/8 rounded-[10px] font-sans text-xs focus:outline-none"
                            >
                              <option value="Low">Low (General Inquiry)</option>
                              <option value="Medium">Medium (Attention Requested)</option>
                              <option value="Urgent">Urgent (Emergency dispatch)</option>
                            </select>
                          </div>
                        </div>

                        <div>
                          <label className="block font-sans text-[11px] font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1">Property Address</label>
                          <input
                            id="comm-address"
                            type="text"
                            required
                            placeholder="e.g. 5001 Hollywood Blvd, Los Angeles, CA"
                            value={commAddress}
                            onChange={(e) => setCommAddress(e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-[#1E2B38]/8 rounded-[10px] font-sans text-xs focus:outline-none focus:border-[#C5A880]"
                          />
                        </div>

                        <div>
                          <label className="block font-sans text-[11px] font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1">Problem Description</label>
                          <textarea
                            id="comm-desc"
                            rows={3}
                            required
                            placeholder="Detail your service or maintenance request precisely..."
                            value={commDesc}
                            onChange={(e) => setCommDesc(e.target.value)}
                            className="w-full px-3 py-2 bg-white border border-[#1E2B38]/8 rounded-[10px] font-sans text-xs focus:outline-none focus:border-[#C5A880]"
                          />
                        </div>

                        <button
                          id="comm-submit"
                          type="submit"
                          disabled={commLoading}
                          className="w-full py-3 bg-[#C5A880] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-[12px] flex items-center justify-center space-x-2 cursor-pointer"
                        >
                          {commLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>GENERATING DISPATCH CODE...</span>
                            </>
                          ) : (
                            <span>Transmit Maintenance Ticket</span>
                          )}
                        </button>
                      </form>
                    ) : (
                      <motion.div
                        id="comm-success-screen"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-6"
                      >
                        <div className="w-12 h-12 bg-[#8FA89B]/10 text-[#8FA89B] rounded-full flex items-center justify-center mx-auto mb-4">
                          <Check className="w-6 h-6" />
                        </div>
                        <h4 className="font-serif text-lg font-bold text-[#1E2B38] mb-1">
                          Ticket Dispatched Successfully
                        </h4>
                        <p className="font-sans text-xs text-[#1E2B38]/70 mb-6 max-w-sm mx-auto leading-relaxed">
                          Your maintenance work order has been logged in KORUS Cafe. A field agent has been dispatched to {commAddress}.
                        </p>
                        
                        <div className="bg-white border border-[#1E2B38]/8 p-4 rounded-[14px] text-left max-w-xs mx-auto mb-6 text-xs font-mono space-y-1">
                          <div className="flex justify-between text-[#9CA3AF]">
                            <span>TICKET CODE:</span>
                            <span className="font-bold text-[#1E2B38]">{commTicketId}</span>
                          </div>
                          <div className="flex justify-between text-[#9CA3AF]">
                            <span>UNIT SUITE:</span>
                            <span className="text-[#1E2B38]">{commUnit}</span>
                          </div>
                          <div className="flex justify-between text-[#9CA3AF]">
                            <span>PRIORITY:</span>
                            <span className="font-bold text-[#C5A880]">{commPriority}</span>
                          </div>
                          <div className="flex justify-between text-[#9CA3AF]">
                            <span>STATUS:</span>
                            <span className="text-[#8FA89B] font-bold">QUEUED FOR SERVICE</span>
                          </div>
                        </div>

                        <button
                          onClick={() => setCommSubmitted(false)}
                          className="font-sans text-xs font-bold text-[#C5A880] hover:underline cursor-pointer"
                        >
                          Submit Another Ticket
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                )}

                {/* Rent Cafe Simulator */}
                {activePortal === "rent" && (
                  <motion.div
                    key="portal-rent"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="w-full text-left"
                  >
                    {!rentSubmitted ? (
                      <form id="rent-payment-form" onSubmit={handleRentSubmit} className="space-y-4">
                        <div className="flex items-center justify-between border-b border-[#1E2B38]/8 pb-3 mb-4">
                          <span className="font-serif text-sm font-bold text-[#1E2B38]">Rent Cafe Bank Terminal</span>
                          <span className="px-2 py-0.5 bg-[#1E2B38] text-white font-sans text-[10px] font-bold uppercase rounded">ACH CLEARING</span>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block font-sans text-[11px] font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1">Tenant Account ID</label>
                            <input
                              id="rent-id"
                              type="text"
                              required
                              placeholder="e.g. KOR-9082"
                              value={rentTenantId}
                              onChange={(e) => setRentTenantId(e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-[#1E2B38]/8 rounded-[10px] font-sans text-xs focus:outline-none focus:border-[#C5A880]"
                            />
                          </div>
                          <div>
                            <label className="block font-sans text-[11px] font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1">Clearance Amount ($)</label>
                            <input
                              id="rent-amt"
                              type="number"
                              required
                              placeholder="e.g. 10000"
                              value={rentAmount}
                              onChange={(e) => setRentAmount(e.target.value)}
                              className="w-full px-3 py-2 bg-white border border-[#1E2B38]/8 rounded-[10px] font-sans text-xs focus:outline-none focus:border-[#C5A880]"
                            />
                          </div>
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                          <div>
                            <label className="block font-sans text-[11px] font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1">ACH Routing Number</label>
                            <input
                              id="rent-routing"
                              type="password"
                              required
                              placeholder="9 Digits"
                              maxLength={9}
                              value={rentRouting}
                              onChange={(e) => setRentRouting(e.target.value)}
                              className="w-full pl-3 pr-3 py-2 bg-white border border-[#1E2B38]/8 rounded-[10px] font-sans text-xs focus:outline-none focus:border-[#C5A880]"
                            />
                          </div>
                          <div>
                            <label className="block font-sans text-[11px] font-bold text-[#1E2B38]/60 uppercase tracking-wider mb-1">Checking Account No.</label>
                            <input
                              id="rent-account"
                              type="password"
                              required
                              placeholder="Account Number"
                              value={rentAccount}
                              onChange={(e) => setRentAccount(e.target.value)}
                              className="w-full pl-3 pr-3 py-2 bg-white border border-[#1E2B38]/8 rounded-[10px] font-sans text-xs focus:outline-none focus:border-[#C5A880]"
                            />
                          </div>
                        </div>

                        <div className="p-3 bg-white border border-[#1E2B38]/6 rounded-[12px] flex items-center space-x-2">
                          <Landmark className="w-4 h-4 text-[#C5A880]" />
                          <span className="font-sans text-[10px] text-[#1E2B38]/60">Secure bank authorization under Regulation E clear rules.</span>
                        </div>

                        <button
                          id="rent-submit"
                          type="submit"
                          disabled={rentLoading}
                          className="w-full py-3 bg-[#1E2B38] text-white font-sans text-xs font-bold tracking-widest uppercase rounded-[12px] flex items-center justify-center space-x-2 cursor-pointer"
                        >
                          {rentLoading ? (
                            <>
                              <Loader2 className="w-4 h-4 animate-spin" />
                              <span>AUTHORIZING ACH TRANSACTION...</span>
                            </>
                          ) : (
                            <span>Clear Electronic ACH Rent Payment</span>
                          )}
                        </button>
                      </form>
                    ) : (
                      <motion.div
                        id="rent-success-screen"
                        initial={{ scale: 0.95, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        className="text-center py-6"
                      >
                        <div className="w-12 h-12 bg-[#1E2B38]/10 text-[#1E2B38] rounded-full flex items-center justify-center mx-auto mb-4">
                          <Check className="w-6 h-6 text-[#C5A880]" />
                        </div>
                        <h4 className="font-serif text-lg font-bold text-[#1E2B38] mb-1">
                          Payment Complete & Cleared
                        </h4>
                        <p className="font-sans text-xs text-[#1E2B38]/70 mb-6 max-w-sm mx-auto leading-relaxed">
                          Your ACH transfer has completed. Thank you for utilizing KORUS Rent Cafe Portal.
                        </p>
                        
                        <div className="bg-white border border-[#1E2B38]/8 p-4 rounded-[14px] text-left max-w-xs mx-auto mb-6 text-xs font-mono space-y-1">
                          <div className="flex justify-between text-[#9CA3AF]">
                            <span>RECEIPT CODE:</span>
                            <span className="font-bold text-[#1E2B38]">{rentReceiptId}</span>
                          </div>
                          <div className="flex justify-between text-[#9CA3AF]">
                            <span>TENANT ACCOUNT:</span>
                            <span className="text-[#1E2B38]">{rentTenantId}</span>
                          </div>
                          <div className="flex justify-between text-[#9CA3AF]">
                            <span>CLEARED TOTAL:</span>
                            <span className="font-bold text-[#8FA89B]">${parseFloat(rentAmount).toLocaleString()}.00</span>
                          </div>
                          <div className="flex justify-between text-[#9CA3AF]">
                            <span>STATUS:</span>
                            <span className="text-[#8FA89B] font-bold">ACH CLEAR COMPLETED</span>
                          </div>
                        </div>

                        <button
                          onClick={() => setRentSubmitted(false)}
                          className="font-sans text-xs font-bold text-[#1E2B38] hover:underline cursor-pointer"
                        >
                          Authorize Another Payment
                        </button>
                      </motion.div>
                    )}
                  </motion.div>
                )}

              </AnimatePresence>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
