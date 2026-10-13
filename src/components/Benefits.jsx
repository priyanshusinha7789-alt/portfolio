import React from "react";
import ScrollReveal from "./ScrollReveal";
import { QUALITATIVE_BENEFITS } from "../data/websiteData";
import {
  Compass,
  Search,
  Smartphone,
  Sparkles,
  Layers,
  PhoneCall,
  CheckCircle2,
} from "lucide-react";

const BENEFIT_ICONS = {
  Compass: Compass,
  Search: Search,
  Smartphone: Smartphone,
  Sparkles: Sparkles,
  Layers: Layers,
  PhoneCall: PhoneCall,
};

export default function Benefits() {
  return (
    <section className="py-20 md:py-28 bg-[#F5EFE6]/50 border-t border-[#E3D5C5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE2D4] border border-[#E3D5C5] text-[#6F4E37] text-xs font-semibold tracking-wide uppercase shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C47D4C]"></span>
              <span>Real World Value</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B1B14] leading-[1.15] mb-6">
              Real benefits that matter for <br className="hidden sm:inline" />
              <span className="italic font-normal font-serif text-[#6F4E37]">
                your day-to-day operations.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#6F4E37] leading-relaxed">
              We focus on practical, qualitative improvements that make managing customer inquiries easier and elevate how your business is perceived.
            </p>
          </ScrollReveal>
        </div>

        {/* 6 Qualitative Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUALITATIVE_BENEFITS.map((item, idx) => {
            const IconComp = BENEFIT_ICONS[item.icon] || Sparkles;
            return (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={(idx % 3) * 100}
              >
                <div className="h-full bg-[#FCFAF7] border border-[#E3D5C5] p-7 rounded-2xl shadow-sm hover:shadow-md hover:border-[#C47D4C]/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="w-12 h-12 rounded-xl bg-[#F5EFE6] border border-[#E3D5C5] flex items-center justify-center text-[#6F4E37] group-hover:bg-[#2B1B14] group-hover:text-white transition-colors mb-5">
                      <IconComp className="w-6 h-6 text-[#C47D4C]" />
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#2B1B14] mb-2.5">
                      {item.title}
                    </h3>

                    <p className="text-sm text-[#6F4E37] leading-relaxed">
                      {item.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-[#E3D5C5]/60 flex items-center gap-2 text-xs font-medium text-[#2B1B14]">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#C47D4C]" />
                    <span>Immediate Business Upgrade</span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
}
