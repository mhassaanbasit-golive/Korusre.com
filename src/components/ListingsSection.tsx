/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Search, MapPin, Building2, Tag, Landmark, Compass, Key, HelpCircle, Eye, X } from "lucide-react";
import { PROPERTIES, Property } from "../types";

export default function ListingsSection() {
  const [searchTerm, setSearchTerm] = useState("");
  const [statusFilter, setStatusFilter] = useState<"All" | "For Sale" | "For Lease">("All");
  const [typeFilter, setTypeFilter] = useState<string>("All");
  const [regionFilter, setRegionFilter] = useState<string>("All");
  
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);

  // Derive unique Types and Regions for the filters
  const typesList = useMemo(() => {
    const list = new Set(PROPERTIES.map((p) => p.type));
    return ["All", ...Array.from(list)];
  }, []);

  const regionsList = useMemo(() => {
    const list = new Set(PROPERTIES.map((p) => p.city.split(",")[0].trim()));
    return ["All", ...Array.from(list)];
  }, []);

  // Filter listings based on controls
  const filteredProperties = useMemo(() => {
    return PROPERTIES.filter((p) => {
      const matchSearch =
        p.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.type.toLowerCase().includes(searchTerm.toLowerCase()) ||
        p.city.toLowerCase().includes(searchTerm.toLowerCase());

      const matchStatus = statusFilter === "All" ? true : p.status === statusFilter;
      const matchType = typeFilter === "All" ? true : p.type === typeFilter;
      
      const regionPart = p.city.split(",")[0].trim();
      const matchRegion = regionFilter === "All" ? true : regionPart === regionFilter;

      return matchSearch && matchStatus && matchType && matchRegion;
    });
  }, [searchTerm, statusFilter, typeFilter, regionFilter]);

  return (
    <section id="portfolio-section" className="py-24 bg-[#FAFAF9] text-[#1E2B38]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        
        {/* Page title */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between mb-12">
          <div className="max-w-xl text-left">
            <span className="text-xs font-sans font-bold tracking-[0.2em] text-[#C5A880] uppercase block mb-3">
              ACTIVE Southern California DATABASE
            </span>
            <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-[#1E2B38] mb-4">
              Commercial Portfolio
            </h2>
            <p className="font-sans text-sm md:text-base text-[#1E2B38]/70 font-light">
              Filter through our institutional-grade sales, developer-targeted land acquisitions, high-density residential properties, and prime retail/restaurant leasing database.
            </p>
          </div>
          <div className="mt-6 lg:mt-0 px-4 py-2 bg-[#8FA89B]/10 text-[#8FA89B] font-sans text-xs font-bold uppercase tracking-widest rounded-full w-fit">
            {filteredProperties.length} ACTIVE LISTINGS FOUND
          </div>
        </div>

        {/* Dynamic Controls / Filters Layout */}
        <div id="filter-controls-container" className="bg-[#FFFFFF] rounded-[16px] p-6 mb-10 border border-[#1E2B38]/8 shadow-sm text-left">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-end">
            
            {/* Search Input (Takes 12 columns on small, 4 on large) */}
            <div className="md:col-span-4">
              <label className="block font-sans text-xs font-bold text-[#1E2B38]/60 uppercase tracking-widest mb-2">
                Search Listings
              </label>
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-[#9CA3AF]" />
                <input
                  id="search-input"
                  type="text"
                  placeholder="Address, City, Zip, Keyword..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-11 pr-4 py-3 bg-[#FAFAF9] border border-[#1E2B38]/8 rounded-[14px] font-sans text-sm focus:outline-none focus:border-[#C5A880] transition-colors"
                />
              </div>
            </div>

            {/* Status Selector (Takes 12 columns, 3 on large) */}
            <div className="md:col-span-2">
              <label className="block font-sans text-xs font-bold text-[#1E2B38]/60 uppercase tracking-widest mb-2">
                Transaction Status
              </label>
              <select
                id="status-select"
                value={statusFilter}
                onChange={(e: any) => setStatusFilter(e.target.value)}
                className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#1E2B38]/8 rounded-[14px] font-sans text-sm focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
              >
                <option value="All">All Statuses</option>
                <option value="For Sale">For Sale</option>
                <option value="For Lease">For Lease</option>
              </select>
            </div>

            {/* Type Selector (Takes 12 columns, 3 on large) */}
            <div className="md:col-span-3">
              <label className="block font-sans text-xs font-bold text-[#1E2B38]/60 uppercase tracking-widest mb-2">
                Asset Type
              </label>
              <select
                id="type-select"
                value={typeFilter}
                onChange={(e) => setTypeFilter(e.target.value)}
                className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#1E2B38]/8 rounded-[14px] font-sans text-sm focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
              >
                <option value="All">All Types</option>
                {typesList.filter(t => t !== "All").map((type) => (
                  <option key={type} value={type}>{type}</option>
                ))}
              </select>
            </div>

            {/* Region Selector (Takes 12 columns, 2 on large) */}
            <div className="md:col-span-3">
              <label className="block font-sans text-xs font-bold text-[#1E2B38]/60 uppercase tracking-widest mb-2">
                Southern California Region
              </label>
              <select
                id="region-select"
                value={regionFilter}
                onChange={(e) => setRegionFilter(e.target.value)}
                className="w-full px-4 py-3 bg-[#FAFAF9] border border-[#1E2B38]/8 rounded-[14px] font-sans text-sm focus:outline-none focus:border-[#C5A880] transition-colors cursor-pointer"
              >
                <option value="All">All Regions</option>
                {regionsList.filter(r => r !== "All").map((region) => (
                  <option key={region} value={region}>{region}</option>
                ))}
              </select>
            </div>

          </div>
        </div>

        {/* Listings Grid */}
        <AnimatePresence mode="popLayout">
          {filteredProperties.length === 0 ? (
            <motion.div
              id="no-listings-found"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="py-16 text-center border border-dashed border-[#1E2B38]/12 rounded-[16px] bg-white"
            >
              <HelpCircle className="w-12 h-12 text-[#9CA3AF] mx-auto mb-4" />
              <h3 className="font-serif text-xl font-bold text-[#1E2B38] mb-2">
                No Properties Match Filters
              </h3>
              <p className="font-sans text-sm text-[#9CA3AF] max-w-sm mx-auto">
                Please adjust your search terms, select 'All Regions', or contact our office for potential off-market opportunities.
              </p>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProperties.map((p) => (
                <motion.div
                  key={p.id}
                  id={`listing-card-${p.id}`}
                  layout
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.25 }}
                  whileHover={{ y: -2 }}
                  onClick={() => setSelectedProperty(p)}
                  className="bg-[#FFFFFF] rounded-[16px] overflow-hidden border border-[#1E2B38]/8 shadow-sm hover:shadow-md transition-all group cursor-pointer flex flex-col justify-between text-left"
                >
                  <div className="relative aspect-[4/3] bg-[#1E2B38]/5 overflow-hidden">
                    <img
                      src={p.image}
                      alt={p.address}
                      className="w-full h-full object-cover grayscale group-hover:scale-102 group-hover:grayscale-0 transition-all duration-500"
                      referrerPolicy="no-referrer"
                    />
                    
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4 flex space-x-2">
                      <span className={`px-3 py-1 text-[10px] font-sans font-bold tracking-widest uppercase rounded-full text-white ${p.status === "For Sale" ? "bg-[#C5A880]" : "bg-[#1E2B38]"}`}>
                        {p.status}
                      </span>
                      <span className="px-3 py-1 text-[10px] font-sans font-bold tracking-widest uppercase rounded-full bg-white/90 backdrop-blur-sm text-[#1E2B38] border border-white/20 shadow">
                        {p.type}
                      </span>
                    </div>

                    <div className="absolute bottom-4 right-4 px-3 py-1 bg-white/95 backdrop-blur-sm rounded-lg shadow border border-[#1E2B38]/5 font-sans text-xs font-bold text-[#1E2B38]">
                      {p.price || p.rate}
                    </div>
                  </div>

                  <div className="p-6 flex flex-col justify-between flex-grow">
                    <div>
                      <div className="flex items-start space-x-2 text-xs font-semibold text-[#C5A880] mb-2 uppercase tracking-wider">
                        <MapPin className="w-3.5 h-3.5 shrink-0" />
                        <span>{p.city}</span>
                      </div>
                      <h3 className="font-serif text-lg font-bold text-[#1E2B38] leading-snug line-clamp-2 mb-2 group-hover:text-[#C5A880] transition-colors">
                        {p.address}
                      </h3>
                      {p.size && (
                        <p className="font-sans text-xs text-[#9CA3AF] mb-4 font-semibold">
                          Total Footprint: <span className="text-[#1E2B38]">{p.size}</span>
                        </p>
                      )}
                    </div>
                    <div className="pt-4 border-t border-[#1E2B38]/6 flex items-center justify-between text-xs font-semibold text-[#1E2B38]/60 group-hover:text-[#1E2B38] transition-colors">
                      <span className="font-sans text-[10px] tracking-widest uppercase text-[#9CA3AF]">
                        SECURE TRANSACTION
                      </span>
                      <span className="text-[#C5A880] flex items-center space-x-1">
                        <span>View Details</span>
                        <Eye className="w-3.5 h-3.5" />
                      </span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </AnimatePresence>

        {/* Listing Detail Popup Modal */}
        <AnimatePresence>
          {selectedProperty && (
            <div id="listing-modal" className="fixed inset-0 z-50 flex items-center justify-center p-4">
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.4 }}
                exit={{ opacity: 0 }}
                onClick={() => setSelectedProperty(null)}
                className="absolute inset-0 bg-black"
              />

              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 15 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 15 }}
                className="relative bg-[#FAFAF9] rounded-[24px] max-w-4xl w-full border border-[#1E2B38]/12 shadow-2xl z-10 overflow-hidden flex flex-col lg:flex-row text-left"
              >
                
                {/* Visual Cover Side */}
                <div className="lg:w-1/2 relative bg-[#1E2B38]/5">
                  <img
                    src={selectedProperty.image}
                    alt={selectedProperty.address}
                    className="w-full h-full object-cover min-h-[300px] lg:absolute lg:inset-0 grayscale"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Floating Tags */}
                  <div className="absolute top-6 left-6 flex space-x-2">
                    <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-widest uppercase text-white shadow ${selectedProperty.status === "For Sale" ? "bg-[#C5A880]" : "bg-[#1E2B38]"}`}>
                      {selectedProperty.status}
                    </span>
                  </div>

                  <div className="absolute bottom-6 left-6 right-6 text-white">
                    <span className="text-[10px] font-sans font-bold tracking-widest text-[#C5A880] uppercase block mb-1">
                      {selectedProperty.type}
                    </span>
                    <h4 className="font-serif text-2xl font-semibold leading-tight">
                      {selectedProperty.address}
                    </h4>
                  </div>
                </div>

                {/* Narrative Detail Side */}
                <div className="p-8 lg:w-1/2 flex flex-col justify-between">
                  <button
                    onClick={() => setSelectedProperty(null)}
                    className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#1E2B38]/5 text-[#1E2B38] transition-colors cursor-pointer"
                    aria-label="Close detail modal"
                  >
                    <X className="w-5 h-5" />
                  </button>

                  <div>
                    <span className="text-[10px] font-sans font-bold tracking-widest text-[#C5A880] uppercase block mb-1">
                      OFFICIAL TRANSACTION BRIEFING
                    </span>
                    <h3 className="font-serif text-2xl font-semibold text-[#1E2B38] mb-6">
                      Structure Specifications
                    </h3>

                    {/* Specifications Grid */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="p-4 bg-white border border-[#1E2B38]/6 rounded-[14px]">
                        <span className="block text-[10px] font-bold text-[#C5A880] tracking-widest uppercase mb-1">
                          VALUATION / ASSET
                        </span>
                        <span className="font-serif text-lg font-bold text-[#1E2B38]">
                          {selectedProperty.price || selectedProperty.rate}
                        </span>
                      </div>
                      <div className="p-4 bg-white border border-[#1E2B38]/6 rounded-[14px]">
                        <span className="block text-[10px] font-bold text-[#C5A880] tracking-widest uppercase mb-1">
                          SQUARE FOOTAGE
                        </span>
                        <span className="font-serif text-lg font-bold text-[#1E2B38]">
                          {selectedProperty.size || "N/A"}
                        </span>
                      </div>
                      <div className="p-4 bg-white border border-[#1E2B38]/6 rounded-[14px]">
                        <span className="block text-[10px] font-bold text-[#C5A880] tracking-widest uppercase mb-1">
                          ASSET CODE
                        </span>
                        <span className="font-sans text-sm font-semibold text-[#1E2B38]">
                          KRE-{selectedProperty.id.toUpperCase()}
                        </span>
                      </div>
                      <div className="p-4 bg-white border border-[#1E2B38]/6 rounded-[14px]">
                        <span className="block text-[10px] font-bold text-[#C5A880] tracking-widest uppercase mb-1">
                          REGIONAL ZONE
                        </span>
                        <span className="font-sans text-sm font-semibold text-[#1E2B38]">
                          {selectedProperty.city.split(",")[0]} Corridor
                        </span>
                      </div>
                    </div>

                    <div className="space-y-4 mb-8">
                      <span className="block text-[10px] font-bold text-[#9CA3AF] tracking-widest uppercase">
                        UNDERWRITING & TRANSACTION BRIEF
                      </span>
                      <p className="font-sans text-sm text-[#1E2B38]/80 leading-relaxed font-light">
                        {selectedProperty.details || "A premium institutional property aligned directly inside Southern California's primary trading corridors, supported by excellent regional demographics and local zoning clearances."}
                      </p>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#1E2B38]/8 flex items-center justify-between">
                    <span className="text-xs font-sans text-[#9CA3AF]">Mark Hong, Principal Broker</span>
                    <button
                      onClick={() => {
                        setSelectedProperty(null);
                        const contactTab = document.getElementById("nav-link-contact");
                        if (contactTab) contactTab.click();
                      }}
                      className="px-5 py-2.5 bg-[#1E2B38] hover:bg-[#C5A880] text-white font-sans text-xs font-bold tracking-wider uppercase rounded-[12px] transition-colors cursor-pointer"
                    >
                      Inquire Listing
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
