import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { FAQS } from "../data/websiteData";
import { ChevronDown } from "lucide-react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E3D5C5] relative paper-texture">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#E3D5C5] text-[#6F4E37] text-xs font-semibold tracking-wide uppercase shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C47D4C]"></span>
              <span>Common Questions</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B1B14] leading-[1.15] mb-6">
              Frequently Asked Questions
            </h2>

            <p className="text-base sm:text-lg text-[#6F4E37] leading-relaxed max-w-2xl mx-auto">
              Everything you need to know about working with PRIME FOCUS, timelines, menus, and how we handle local websites.
            </p>
          </ScrollReveal>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {FAQS.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <ScrollReveal
                key={index}
                direction="up"
                delay={index * 60}
              >
                <div
                  className={`rounded-2xl border transition-all duration-200 overflow-hidden ${
                    isOpen
                      ? "bg-[#FAF6F0] border-[#C47D4C]/60 shadow-sm"
                      : "bg-[#FCFAF7] border-[#E3D5C5] hover:border-[#C47D4C]/30"
                  }`}
                >
                  <button
                    onClick={() => toggleFAQ(index)}
                    className="w-full text-left px-6 py-5 flex items-center justify-between gap-4 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#6F4E37]"
                    aria-expanded={isOpen}
                  >
                    <span className="font-serif font-bold text-base sm:text-lg text-[#2B1B14] leading-snug">
                      {faq.q}
                    </span>
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#2B1B14] text-[#F5EFE6] rotate-180"
                          : "bg-[#F5EFE6] text-[#6F4E37] border border-[#E3D5C5]"
                      }`}
                    >
                      <ChevronDown className="w-4 h-4" />
                    </div>
                  </button>

                  {isOpen && (
                    <div className="px-6 pb-6 pt-1 text-sm sm:text-base text-[#6F4E37] leading-relaxed border-t border-[#E3D5C5]/50 animate-in fade-in duration-200">
                      <p>{faq.a}</p>
                    </div>
                  )}
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Still Have Questions Box */}
        <ScrollReveal direction="up" delay={200} className="mt-12 text-center">
          <div className="p-6 rounded-2xl bg-[#F5EFE6] border border-[#E3D5C5]">
            <p className="text-sm font-medium text-[#2B1B14] mb-2">
              Have a question specific to your business or location?
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-xs font-bold text-[#6F4E37] hover:text-[#2B1B14] underline underline-offset-4 transition-colors"
            >
              <span>Drop an enquiry below ↓</span>
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
