import React from "react";
import ScrollReveal from "./ScrollReveal";
import { PROCESS_STEPS } from "../data/websiteData";
import {
  Compass,
  Palette,
  Code2,
  Rocket,
  CheckCircle2,
  Sparkles,
} from "lucide-react";

const STEP_ICONS = [Compass, Palette, Code2, Rocket];

export default function Process() {
  return (
    <section className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E3D5C5] relative overflow-hidden paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#E3D5C5] text-[#6F4E37] text-xs font-semibold tracking-wide uppercase shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C47D4C]"></span>
              <span>How We Built It</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B1B14] leading-[1.15] mb-6">
              A clear 4-step process <br className="hidden sm:inline" />
              <span className="italic font-normal font-serif text-[#6F4E37]">
                from concept to live launch.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#6F4E37] leading-relaxed">
              We keep the entire website creation process organized, collaborative, and straightforward so you always know what we're working on.
            </p>
          </ScrollReveal>
        </div>

        {/* 4-Step Timeline Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          
          {/* Subtle connecting line for desktop */}
          <div className="hidden lg:block absolute top-1/2 left-8 right-8 h-0.5 bg-[#E3D5C5] -translate-y-8 -z-0"></div>

          {PROCESS_STEPS.map((step, idx) => {
            const IconComp = STEP_ICONS[idx] || Sparkles;
            return (
              <ScrollReveal
                key={idx}
                direction="up"
                delay={idx * 120}
              >
                <div className="h-full bg-[#FCFAF7] border border-[#E3D5C5] p-7 rounded-2xl shadow-sm hover:shadow-md hover:border-[#C47D4C]/40 transition-all duration-300 flex flex-col justify-between group relative z-10">
                  <div>
                    {/* Step Header */}
                    <div className="flex items-center justify-between mb-6">
                      <span className="font-mono text-2xl font-bold text-[#C47D4C]">
                        {step.number}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#E3D5C5] flex items-center justify-center text-[#6F4E37] group-hover:bg-[#2B1B14] group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5" />
                      </div>
                    </div>

                    {/* Phase & Title */}
                    <div className="text-xs font-mono font-bold uppercase tracking-widest text-[#8B6B52] mb-1">
                      {step.phase}
                    </div>
                    <h3 className="text-lg font-serif font-bold text-[#2B1B14] mb-3">
                      {step.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-[#6F4E37] leading-relaxed mb-6">
                      {step.desc}
                    </p>
                  </div>

                  {/* Deliverables Checklist */}
                  <div className="pt-4 border-t border-[#E3D5C5]/60 space-y-2">
                    {step.details.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-center gap-2 text-xs text-[#3A241B]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C47D4C] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Timeline Bottom Banner */}
        <ScrollReveal direction="up" delay={250} className="mt-12 text-center">
          <div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-[#F5EFE6] border border-[#E3D5C5] text-xs font-medium text-[#6F4E37]">
            <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
            <span>Typical project completion within 5 to 10 working days</span>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
