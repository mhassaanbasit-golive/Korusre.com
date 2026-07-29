/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { MessageSquare, X, Send, Sparkles, Building2, UserCheck, Eye, Compass, HelpCircle } from "lucide-react";

interface Message {
  id: string;
  sender: "user" | "assistant";
  text: string;
  timestamp: Date;
}

export default function AiAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "initial",
      sender: "assistant",
      text: "Welcome to KORUS Real Estate's Advisory Desk. I am your specialized AI Assistant. How may I guide your commercial portfolios or listings search today?",
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  const suggestedPrompts = [
    { label: "Mark Hong's experience", query: "What is President Mark Hong's experience in Southern California?" },
    { label: "Active Listings For Sale", query: "Can you list your properties currently available for sale?" },
    { label: "Property Management Portals", query: "What secure portals do you provide for tenant property management?" },
    { label: "Who is Furball Hong?", query: "Tell me about your corporate mascot Furball Hong!" }
  ];

  const sendMessage = async (text: string) => {
    if (!text.trim() || loading) return;

    const userMsg: Message = {
      id: Math.random().toString(),
      sender: "user",
      text: text,
      timestamp: new Date()
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputValue("");
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: text })
      });

      const data = await response.json();
      
      const assistantMsg: Message = {
        id: Math.random().toString(),
        sender: "assistant",
        text: data.reply || "I apologize, but I am experiencing connectivity limits. KORUS is located at 3255 Wilshire Blvd, Suite 703, Los Angeles, CA. Reach us at info@korusre.com.",
        timestamp: new Date()
      };
      
      setMessages((prev) => [...prev, assistantMsg]);
    } catch (error) {
      console.error("AI Assistant request failed: ", error);
      const assistantMsg: Message = {
        id: Math.random().toString(),
        sender: "assistant",
        text: "KORUS Real Estate is currently prioritizing high-trust offline portfolio advisory. President Mark Hong can be reached directly at +1 (213) 251-9000.",
        timestamp: new Date()
      };
      setMessages((prev) => [...prev, assistantMsg]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages, loading]);

  return (
    <div id="ai-assistant-root" className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 font-sans">
      
      {/* Floating Trigger Bubble */}
      <motion.button
        id="ai-assistant-toggle"
        whileHover={{ 
          scale: 1.12, 
          rotate: 6,
          boxShadow: "0 12px 36px rgba(15, 23, 30, 0.55)"
        }}
        whileTap={{ scale: 0.92 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        onClick={() => setIsOpen(!isOpen)}
        style={{ 
          backdropFilter: "blur(16px) saturate(180%)", 
          background: "rgba(15, 23, 30, 0.92)", 
          border: "1px solid rgba(255, 255, 255, 0.12)" 
        }}
        className="w-14 h-14 text-white rounded-full flex items-center justify-center cursor-pointer transition-all duration-300"
        aria-label="Toggle AI Advisory Desk"
      >
        <AnimatePresence mode="wait">
          {isOpen ? (
            <X className="w-6 h-6 text-white" key="close-icon" />
          ) : (
            <MessageSquare className="w-6 h-6 text-[#C5A880]" key="chat-icon" />
          )}
        </AnimatePresence>
      </motion.button>

      {/* Floating Chat Sidebar/Panel */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="ai-assistant-panel"
            initial={{ opacity: 0, y: 30, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.95 }}
            transition={{ type: "spring", damping: 25, stiffness: 220 }}
            className="fixed inset-x-4 bottom-22 sm:absolute sm:inset-auto sm:bottom-18 sm:right-0 w-auto sm:w-[420px] h-[calc(100dvh-120px)] sm:h-[550px] max-h-[600px] bg-white/95 backdrop-blur-md rounded-[24px] border border-[#1E2B38]/12 shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-[#1E2B38] text-white flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center">
                  <Building2 className="w-4 h-4 text-[#C5A880]" />
                </div>
                <div className="text-left">
                  <h4 className="font-serif text-base font-bold tracking-tight">KORUS Advisory AI</h4>
                  <span className="block text-[9px] font-sans font-bold tracking-widest text-[#C5A880] uppercase">
                    GEMINI-3.6-FLASH SECURITY
                  </span>
                </div>
              </div>
              
              <button
                id="ai-assistant-close-panel"
                onClick={() => setIsOpen(false)}
                className="text-white/60 hover:text-white p-1 rounded-full hover:bg-white/10"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Chat Messages Log */}
            <div
              id="ai-messages-log"
              ref={scrollRef}
              className="flex-1 p-5 overflow-y-auto space-y-4 bg-[#FAFAF9]"
            >
              {messages.map((msg) => (
                <div
                  key={msg.id}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`max-w-[80%] rounded-[16px] px-4 py-3 text-sm leading-relaxed text-left ${
                      msg.sender === "user"
                        ? "bg-[#C5A880] text-white font-medium"
                        : "bg-[#FFFFFF] text-[#1E2B38] border border-[#1E2B38]/8 shadow-sm font-light"
                    }`}
                  >
                    <p>{msg.text}</p>
                    <span className="block text-[9px] mt-1 opacity-60 text-right">
                      {msg.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                    </span>
                  </div>
                </div>
              ))}

              {/* Waiting Indicator */}
              {loading && (
                <div className="flex justify-start">
                  <div className="bg-[#FFFFFF] border border-[#1E2B38]/8 rounded-[16px] px-4 py-3 flex items-center space-x-2 shadow-sm">
                    <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full animate-bounce [animation-delay:-0.3s]" />
                    <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full animate-bounce [animation-delay:-0.15s]" />
                    <span className="w-1.5 h-1.5 bg-[#C5A880] rounded-full animate-bounce" />
                  </div>
                </div>
              )}
            </div>

            {/* Pre-programmed Suggestion Chips */}
            <div className="px-5 py-3 border-t border-[#1E2B38]/6 bg-white space-y-1.5 text-left">
              <span className="text-[9px] font-sans font-bold tracking-widest text-[#9CA3AF] uppercase block">
                Suggested Consultation Queries
              </span>
              <div className="flex flex-wrap gap-1.5 max-h-[100px] overflow-y-auto">
                {suggestedPrompts.map((chip, index) => (
                  <button
                    key={index}
                    onClick={() => sendMessage(chip.query)}
                    className="px-2.5 py-1.5 bg-[#FAFAF9] border border-[#1E2B38]/6 hover:border-[#C5A880] text-left rounded-lg text-xs text-[#1E2B38] font-medium transition-colors cursor-pointer"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Form Input Bar */}
            <div className="p-3 border-t border-[#1E2B38]/8 bg-[#FAFAF9]">
              <form
                id="ai-chat-form"
                onSubmit={(e) => {
                  e.preventDefault();
                  sendMessage(inputValue);
                }}
                className="flex items-center space-x-2"
              >
                <input
                  id="ai-chat-input"
                  type="text"
                  placeholder="Ask KORUS real estate details..."
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  className="flex-1 px-4 py-3 bg-white border border-[#1E2B38]/8 rounded-[14px] font-sans text-xs sm:text-sm focus:outline-none focus:border-[#C5A880]"
                />
                <button
                  id="ai-chat-submit"
                  type="submit"
                  disabled={!inputValue.trim() || loading}
                  className="w-10 h-10 rounded-[12px] bg-[#1E2B38] text-white flex items-center justify-center hover:bg-[#C5A880] transition-colors disabled:opacity-50 disabled:hover:bg-[#1E2B38] cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>

          </motion.div>
        )}
      </AnimatePresence>

    </div>
  );
}
