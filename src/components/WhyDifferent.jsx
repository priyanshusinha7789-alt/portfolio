import React from "react";
import { DIFFERENTIATORS } from "../data/websiteData";
import {
  Palette,
  Smartphone,
  Compass,
  MessageSquareCheck,
  Code2,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const ICON_MAP = {
  Palette: Palette,
  Smartphone: Smartphone,
  Compass: Compass,
  MessageSquareCheck: MessageSquareCheck,
  Code2: Code2,
  ShieldCheck: ShieldCheck,
};

export default function WhyDifferent() {
  return (
    <section className="py-20 md:py-28 bg-[#F5EFE6]/60 border-t border-[#E3D5C5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE2D4] border border-[#E3D5C5] text-[#6F4E37] text-xs font-semibold tracking-wide uppercase shadow-xs mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C47D4C]"></span>
            <span>Why PRIME FOCUS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B1B14] leading-[1.15] mb-6">
            Not Just a Website. <br className="hidden sm:inline" />
            <span className="italic font-normal font-serif text-[#6F4E37]">
              A Digital First Impression.
            </span>
          </h2>

          <p className="text-base sm:text-lg text-[#6F4E37] leading-relaxed">
            Most local businesses get sold generic templates that fail on phones. We take a craft-driven approach built around your specific business goals.
          </p>
        </div>

        {/* 6 Studio Differentiator Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {DIFFERENTIATORS.map((item, idx) => {
            const IconComponent = ICON_MAP[item.icon] || Sparkles;
            return (
              <div
                key={idx}
                className="bg-[#FCFAF7] border border-[#E3D5C5] p-7 rounded-3xl shadow-sm hover:shadow-lg hover:border-[#C47D4C]/50 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-2xl bg-[#F5EFE6] border border-[#E3D5C5] flex items-center justify-center text-[#6F4E37] group-hover:bg-[#2B1B14] group-hover:text-[#F5EFE6] transition-colors">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-xs font-bold text-[#8B6B52] bg-[#EDE2D4] px-3 py-1 rounded-full">
                      Pillar 0{idx + 1}
                    </span>
                  </div>

                  <h3 className="text-lg font-serif font-bold text-[#2B1B14] mb-2.5">
                    {item.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#6F4E37] leading-relaxed mb-6">
                    {item.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-[#E3D5C5]/70 flex items-start gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#C47D4C] shrink-0 mt-0.5" />
                  <span className="text-xs font-medium text-[#2B1B14]">
                    {item.benefit}
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
