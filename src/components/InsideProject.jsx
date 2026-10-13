import React from "react";
import ScrollReveal from "./ScrollReveal";
import { PROJECTS } from "../data/websiteData";
import {
  CheckCircle2,
  ArrowUpRight,
  Coffee,
  GraduationCap,
} from "lucide-react";

export default function InsideProject({ activeProjectId = "cafe", onSwitchProject }) {
  const currentProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  return (
    <section className="py-20 md:py-28 bg-[#FCFAF7] relative overflow-hidden paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#E3D5C5] text-[#6F4E37] text-xs font-semibold tracking-wide uppercase shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C47D4C]"></span>
              <span>Case Study Breakdown</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B1B14] leading-[1.15] mb-4">
              Inside the Project: <br className="hidden sm:inline" />
              <span className="italic font-normal font-serif text-[#6F4E37]">
                {activeProjectId === "cafe"
                  ? "How we crafted the Brew & Bloom experience."
                  : "How we engineered the Haldia Learning Academy portal."}
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#6F4E37] leading-relaxed mb-8">
              {activeProjectId === "cafe"
                ? "Every section of the website was thoughtfully engineered to solve a real business challenge — from building customer appetite to streamlining zero-commission WhatsApp orders."
                : "Engineered from the ground up for students and parents — establishing academic credibility, simplifying course exploration, and capturing high-intent admission leads."}
            </p>

            {/* Project Switcher Tabs */}
            {onSwitchProject && (
              <div className="inline-flex items-center bg-[#EDE2D4] p-1.5 rounded-2xl border border-[#E3D5C5] shadow-xs">
                <button
                  onClick={() => onSwitchProject("cafe")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeProjectId === "cafe"
                      ? "bg-[#2B1B14] text-[#F5EFE6] shadow-sm"
                      : "text-[#6F4E37] hover:text-[#2B1B14]"
                  }`}
                >
                  <Coffee className="w-4 h-4 text-[#C47D4C]" />
                  <span>Brew &amp; Bloom Café</span>
                </button>

                <button
                  onClick={() => onSwitchProject("academy")}
                  className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all ${
                    activeProjectId === "academy"
                      ? "bg-[#2B1B14] text-[#F5EFE6] shadow-sm"
                      : "text-[#6F4E37] hover:text-[#2B1B14]"
                  }`}
                >
                  <GraduationCap className="w-4 h-4 text-amber-300" />
                  <span>Haldia Learning Academy</span>
                </button>
              </div>
            )}
          </ScrollReveal>
        </div>

        {/* 6 Large Visual Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {currentProject.steps.map((item, index) => (
            <ScrollReveal
              key={`${currentProject.id}-${item.step}`}
              direction="up"
              delay={(index % 3) * 120}
            >
              <div className="h-full bg-[#FCFAF7] rounded-2xl border border-[#E3D5C5] overflow-hidden shadow-sm hover:shadow-xl hover:border-[#C47D4C]/50 transition-all duration-300 flex flex-col group">
                {/* Card Visual / Mockup Preview */}
                <div className="relative h-56 w-full overflow-hidden bg-[#2B1B14]">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-90"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#2B1B14]/90 via-[#2B1B14]/30 to-transparent"></div>
                  
                  {/* Step Number Pill */}
                  <div className="absolute top-4 left-4 flex items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-[#2B1B14]/80 backdrop-blur-sm border border-white/20 text-[#F5EFE6] font-mono font-bold text-xs">
                      {item.step}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#C47D4C] text-white text-[10px] font-semibold uppercase tracking-wider">
                      {item.badge}
                    </span>
                  </div>

                  {/* Subtitle bottom banner */}
                  <div className="absolute bottom-3 left-4 right-4">
                    <span className="text-xs font-serif italic text-amber-200 block">
                      {item.subtitle}
                    </span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#2B1B14] mb-3">
                      {item.step} — {item.title}
                    </h3>
                    
                    <p className="text-xs sm:text-sm text-[#6F4E37] leading-relaxed mb-5">
                      {item.desc}
                    </p>

                    {/* Highlights Bullet List */}
                    <div className="space-y-2 pt-3 border-t border-[#E3D5C5]/60 mb-6">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-start gap-2 text-xs text-[#3A241B]">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#C47D4C] shrink-0 mt-0.5" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-2">
                    <a
                      href={currentProject.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6F4E37] hover:text-[#2B1B14] group-hover:translate-x-1 transition-all"
                    >
                      <span>View Live Website →</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
}
