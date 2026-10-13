import React from "react";
import ScrollReveal from "./ScrollReveal";
import { PILLARS } from "../data/websiteData";
import {
  Sparkles,
  Smartphone,
  MessageSquare,
  ShieldCheck,
  CheckCircle,
  HeartHandshake,
  LayoutTemplate,
  PhoneCall,
} from "lucide-react";

const ICON_MAP = {
  Sparkles: Sparkles,
  Smartphone: Smartphone,
  MessageSquare: MessageSquare,
  ShieldCheck: ShieldCheck,
};

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28 bg-[#F5EFE6]/50 border-t border-[#E3D5C5]/60 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE2D4] border border-[#E3D5C5] text-[#6F4E37] text-xs font-semibold tracking-wide uppercase shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C47D4C]"></span>
              <span>Meet PRIME FOCUS</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B1B14] leading-[1.15] mb-6">
              We build websites around the business —{" "}
              <span className="italic font-normal font-serif text-[#6F4E37]">
                not around a generic template.
              </span>
            </h2>

            <div className="space-y-4 text-base sm:text-lg text-[#6F4E37] leading-relaxed">
              <p>
                <strong className="text-[#2B1B14] font-semibold">PRIME FOCUS</strong> is a growing web-development studio focused on helping local businesses build a stronger digital presence.
              </p>
              <p>
                We create websites that bring important business information, services, menus, offers and contact options together in one professional experience.
              </p>
              <p>
                From cafés and restaurants to coaching centres and local shops, we craft each experience with purpose, attention to detail, and a deep respect for how real customers browse.
              </p>
            </div>
          </ScrollReveal>
        </div>

        {/* 4 Core Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PILLARS.map((pillar, index) => {
            const IconComponent = ICON_MAP[pillar.icon] || Sparkles;
            return (
              <ScrollReveal key={index} direction="up" delay={index * 100}>
                <div className="h-full bg-[#FCFAF7] border border-[#E3D5C5] p-7 rounded-2xl shadow-sm hover:shadow-md hover:border-[#C47D4C]/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] border border-[#E3D5C5] flex items-center justify-center text-[#6F4E37] group-hover:bg-[#2B1B14] group-hover:text-[#F5EFE6] transition-colors mb-5">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#2B1B14] mb-2.5">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-[#6F4E37] leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E3D5C5]/60 flex items-center gap-2 text-xs font-semibold text-[#8B6B52]">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#C47D4C]"></span>
                    <span>Core Standard</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Honest Studio Manifesto Box */}
        <ScrollReveal direction="up" delay={200} className="mt-14">
          <div className="p-6 sm:p-8 rounded-2xl bg-[#2B1B14] text-[#F5EFE6] border border-[#3A241B] shadow-xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-[#C47D4C]/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="relative z-10 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6">
              <div className="max-w-2xl">
                <span className="text-xs font-mono uppercase tracking-widest text-[#C47D4C] block mb-2">
                  Our Promise to Local Owners
                </span>
                <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                  No corporate jargon. No bloated costs. Just pure craft.
                </h4>
                <p className="text-xs sm:text-sm text-[#EDE2D4]/80 leading-relaxed">
                  When you partner with PRIME FOCUS, you work directly with passionate developers who understand local commerce. We build fast, mobile-friendly websites that give your brand a lasting digital advantage.
                </p>
              </div>

              <a
                href="#contact"
                className="px-6 py-3 rounded-full text-xs font-semibold text-[#2B1B14] bg-[#F5EFE6] hover:bg-[#EDE2D4] transition-colors shrink-0 shadow-md flex items-center gap-1.5"
              >
                <PhoneCall className="w-3.5 h-3.5 text-[#C47D4C]" />
                <span>Talk to Us</span>
              </a>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
