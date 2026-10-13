import React from "react";
import ScrollReveal from "./ScrollReveal";
import { PROJECTS } from "../data/websiteData";
import {
  Utensils,
  Flame,
  ShoppingBag,
  MessageCircle,
  MapPin,
  Smartphone,
  GraduationCap,
  Award,
  Calendar,
  UserCheck,
  Shield,
  ExternalLink,
  ArrowUpRight,
  Sparkles,
  Coffee,
} from "lucide-react";

const ICON_MAP = {
  Utensils: Utensils,
  Flame: Flame,
  ShoppingBag: ShoppingBag,
  MessageCircle: MessageCircle,
  MapPin: MapPin,
  Smartphone: Smartphone,
  GraduationCap: GraduationCap,
  Award: Award,
  Calendar: Calendar,
  UserCheck: UserCheck,
  Shield: Shield,
};

export default function ProjectFeatures({ activeProjectId = "cafe", onSwitchProject, onOpenLiveDemo }) {
  const currentProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  return (
    <section className="py-16 md:py-24 bg-[#2B1B14] text-[#F5EFE6] relative overflow-hidden paper-texture-dark">
      {/* Ambient background blur */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-[#C47D4C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Large Prominent CTA Banner */}
        <ScrollReveal direction="up">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-r from-[#3A241B] via-[#2B1B14] to-[#1F140E] border border-[#6F4E37]/50 shadow-2xl mb-16 text-center">
            
            {/* Top Badge & Project Toggle */}
            <div className="flex flex-wrap items-center justify-center gap-2 mb-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1F140E] border border-[#6F4E37]/40 text-[#C47D4C] text-xs font-mono font-medium uppercase tracking-widest">
                {activeProjectId === "cafe" ? <Coffee className="w-3.5 h-3.5" /> : <GraduationCap className="w-3.5 h-3.5 text-blue-400" />}
                <span>Interactive Live Demo Ready</span>
              </div>

              {onSwitchProject && (
                <div className="inline-flex items-center bg-[#1F140E] p-1 rounded-xl border border-[#4A3427]">
                  <button
                    onClick={() => onSwitchProject("cafe")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeProjectId === "cafe"
                        ? "bg-[#6F4E37] text-white"
                        : "text-[#A88970] hover:text-[#EDE2D4]"
                    }`}
                  >
                    ☕ Café Demo
                  </button>
                  <button
                    onClick={() => onSwitchProject("academy")}
                    className={`px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                      activeProjectId === "academy"
                        ? "bg-[#6F4E37] text-white"
                        : "text-[#A88970] hover:text-[#EDE2D4]"
                    }`}
                  >
                    🎓 Academy Demo
                  </button>
                </div>
              )}
            </div>

            <h3 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white mb-4 tracking-tight">
              WANT TO SEE WHAT WE BUILD?
            </h3>

            <p className="text-sm sm:text-base text-[#EDE2D4]/90 max-w-2xl mx-auto mb-8 leading-relaxed">
              {activeProjectId === "cafe"
                ? "Experience the smooth interactions, categorized menu filters, and zero-commission ordering workflow exactly as your café customers would."
                : "Experience the structured course streams, Ex-IITian faculty credential showcase, and streamlined admission inquiry funnel built for local coaching centres."}
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href={currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#F5EFE6] hover:bg-[#EDE2D4] text-[#2B1B14] text-xs sm:text-sm font-bold shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
              >
                <span>
                  {activeProjectId === "cafe"
                    ? "Explore the Café Website →"
                    : "Explore the Academy Portal →"}
                </span>
                <ExternalLink className="w-4 h-4 text-[#6F4E37]" />
              </a>

              <button
                onClick={() => onOpenLiveDemo(activeProjectId)}
                className="w-full sm:w-auto px-7 py-4 rounded-full bg-[#3A241B] hover:bg-[#4A3427] text-white text-xs sm:text-sm font-semibold border border-[#6F4E37] transition-all flex items-center justify-center gap-2"
              >
                <span>Launch Embedded Preview</span>
                <ArrowUpRight className="w-4 h-4 text-[#C47D4C]" />
              </button>
            </div>
          </div>
        </ScrollReveal>

        {/* Section Header for Feature Highlights */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <ScrollReveal direction="up">
            <span className="text-xs font-mono tracking-widest text-[#C47D4C] uppercase mb-2 block">
              Integrated Features
            </span>
            <h4 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
              {activeProjectId === "cafe"
                ? "Key Highlights Built Into the Café Experience"
                : "Key Highlights Built Into the Coaching Institute Platform"}
            </h4>
            <p className="text-xs sm:text-sm text-[#A88970]">
              Every feature is purpose-built to reduce friction and drive customer engagement for local business owners.
            </p>
          </ScrollReveal>
        </div>

        {/* 6 Feature Highlights Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProject.features.map((feat, idx) => {
            const IconComponent = ICON_MAP[feat.icon] || Sparkles;
            return (
              <ScrollReveal
                key={`${currentProject.id}-${idx}`}
                direction="up"
                delay={(idx % 3) * 100}
              >
                <div className="h-full bg-[#1F140E]/80 border border-[#4A3427] p-6 rounded-2xl hover:border-[#C47D4C]/60 hover:bg-[#1F140E] transition-all duration-300 flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-xl bg-[#2B1B14] border border-[#4A3427] flex items-center justify-center text-[#C47D4C] group-hover:bg-[#6F4E37] group-hover:text-white transition-colors shrink-0">
                    <IconComponent className="w-5 h-5" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-xs font-mono font-bold tracking-wider text-[#C47D4C] uppercase">
                        {feat.title}
                      </span>
                      <span className="text-[10px] text-[#8B6B52]">·</span>
                      <span className="text-xs text-[#EDE2D4] font-medium">
                        {feat.subtitle}
                      </span>
                    </div>
                    <p className="text-xs text-[#A88970] leading-relaxed">
                      {feat.desc}
                    </p>
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
