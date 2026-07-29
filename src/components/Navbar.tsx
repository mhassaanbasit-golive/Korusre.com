/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Menu, X, Building2, PhoneCall, ChevronRight } from "lucide-react";

interface NavbarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  tabs: { id: string; name: string }[];
}

export default function Navbar({ activeTab, setActiveTab, tabs }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#FAFAF9]/80 backdrop-blur-md border-b border-[#1E2B38]/8 shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12 h-20 flex items-center justify-between">
        {/* Logo Brand Title */}
        <button
          id="brand-logo"
          onClick={() => {
            setActiveTab("home");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="flex items-center space-x-2.5 group text-left cursor-pointer"
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
            <span className="block font-serif text-2xl lg:text-3xl font-bold tracking-wide text-[#C5A880] leading-none transition-colors duration-300 group-hover:text-[#1E2B38]">
              KORUS
            </span>
            <span className="block font-serif text-[10px] tracking-[0.15em] text-[#C5A880] uppercase font-bold leading-none mt-1.5">
              REAL ESTATE
            </span>
          </div>
        </button>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav" className="hidden lg:flex items-center space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              id={`nav-link-${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
              className={`relative px-4 py-2 font-sans text-sm font-medium tracking-wide transition-colors duration-200 cursor-pointer ${
                activeTab === tab.id
                  ? "text-[#1E2B38]"
                  : "text-[#1E2B38]/70 hover:text-[#1E2B38]"
              }`}
            >
              <span className="relative z-10">{tab.name}</span>
              {activeTab === tab.id && (
                <motion.div
                  layoutId="active-tab-indicator"
                  className="absolute inset-0 bg-[#C5A880]/10 rounded-md -z-10"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          ))}
        </nav>

        {/* Call to Action Direct Phone */}
        <div className="hidden lg:flex items-center space-x-4">
          <a
            id="nav-phone-cta"
            href="tel:+12132519000"
            style={{ 
              backdropFilter: "blur(12px) saturate(180%)", 
              background: "rgba(30, 42, 56, 0.7)", 
              border: "1px solid rgba(255, 255, 255, 0.15)" 
            }}
            className="flex items-center space-x-2 px-4 py-2 text-[#FAFAF9] rounded-[14px] font-sans text-sm font-semibold tracking-wide hover:bg-[#C5A880] transition-all duration-300 shadow-sm"
          >
            <PhoneCall className="w-4 h-4 animate-pulse" />
            <span>(213) 251-9000</span>
          </a>
        </div>

        {/* Mobile Hamburger Trigger */}
        <button
          id="mobile-menu-toggle"
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden p-2 text-[#1E2B38] focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer (AnimatePresence) */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-drawer-overlay"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.25 }}
            className="absolute top-20 left-0 right-0 bg-[#FAFAF9] border-b border-[#1E2B38]/8 shadow-lg z-40 lg:hidden overflow-hidden"
          >
            <div className="px-6 py-6 space-y-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  id={`mobile-nav-link-${tab.id}`}
                  onClick={() => {
                    setActiveTab(tab.id);
                    setIsOpen(false);
                  }}
                  className={`w-full text-left px-4 py-3 rounded-[14px] font-sans text-base font-semibold tracking-wide flex items-center justify-between transition-colors ${
                    activeTab === tab.id
                      ? "bg-[#C5A880]/10 text-[#1E2B38]"
                      : "text-[#1E2B38]/70 hover:bg-[#1E2B38]/5"
                  }`}
                >
                  <span>{tab.name}</span>
                  <ChevronRight className={`w-4 h-4 transition-transform duration-200 ${activeTab === tab.id ? "text-[#C5A880] translate-x-1" : "text-[#1E2B38]/30"}`} />
                </button>
              ))}
              <div className="pt-4 border-t border-[#1E2B38]/8">
                <a
                  id="mobile-nav-phone-cta"
                  href="tel:+12132519000"
                  className="w-full flex items-center justify-center space-x-2 py-4 bg-[#1E2B38] text-[#FAFAF9] rounded-[14px] font-sans text-base font-bold tracking-wide"
                >
                  <PhoneCall className="w-5 h-5" />
                  <span>Call Direct Advisory Desk</span>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
