import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { PROJECTS, CAFE_DEMO_URL, ACADEMY_DEMO_URL } from "../data/websiteData";
import {
  ExternalLink,
  ArrowUpRight,
  Eye,
  CheckCircle2,
  Sparkles,
  Coffee,
  GraduationCap,
  Layers,
  ArrowRight,
} from "lucide-react";

export default function FeaturedProject({ activeProjectId = "cafe", onSwitchProject, onOpenLiveDemo }) {
  const [activeTabKey, setActiveTabKey] = useState("hero");

  const currentProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];
  const previews = currentProject.previews || {};
  const currentPreview = previews[activeTabKey] || Object.values(previews)[0];

  const handleSwitchProject = (id) => {
    if (onSwitchProject) {
      onSwitchProject(id);
    }
    const proj = PROJECTS.find((p) => p.id === id);
    if (proj && proj.previews) {
      setActiveTabKey(Object.keys(proj.previews)[0]);
    }
  };

  return (
    <section id="work" className="py-20 md:py-28 bg-[#F5EFE6]/40 border-t border-[#E3D5C5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE2D4] border border-[#E3D5C5] text-[#6F4E37] text-xs font-semibold tracking-wide uppercase shadow-xs mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C47D4C]"></span>
                <span>Our Work &amp; Portfolio</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B1B14] leading-[1.15] mb-4">
                Here's what we've been building.
              </h2>
              <p className="text-base sm:text-lg text-[#6F4E37]">
                Explore our live featured concepts created for real local businesses — from artisan cafés to premier educational coaching institutes.
              </p>
            </ScrollReveal>
          </div>

          {/* Project Switcher Bar */}
          <ScrollReveal direction="left" delay={150}>
            <div className="flex items-center bg-[#EDE2D4] p-1.5 rounded-2xl border border-[#E3D5C5] shadow-xs">
              <button
                onClick={() => handleSwitchProject("cafe")}
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
                onClick={() => handleSwitchProject("academy")}
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
          </ScrollReveal>
        </div>

        {/* Featured Project Showcase Container */}
        <ScrollReveal direction="up" delay={200}>
          <div className="bg-[#FCFAF7] border border-[#E3D5C5] rounded-3xl p-6 sm:p-10 shadow-lg relative overflow-hidden">
            
            {/* Project Header Info */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-10 pb-8 border-b border-[#E3D5C5]">
              <div className="lg:col-span-7">
                <div className="flex flex-wrap items-center gap-2.5 mb-3">
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#2B1B14] text-[#F5EFE6] flex items-center gap-1.5">
                    {activeProjectId === "cafe" ? <Coffee className="w-3.5 h-3.5 text-[#C47D4C]" /> : <GraduationCap className="w-3.5 h-3.5 text-amber-300" />}
                    <span>FEATURED SHOWCASE</span>
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-medium bg-[#EDE2D4] text-[#6F4E37]">
                    {currentProject.category}
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-mono text-[#8B6B52] bg-[#F5EFE6] border border-[#E3D5C5]">
                    Portfolio / Website Demo
                  </span>
                </div>

                <h3 className="text-3xl sm:text-4xl font-serif font-bold text-[#2B1B14] mb-3">
                  {currentProject.name}
                </h3>

                <p className="text-sm sm:text-base text-[#6F4E37] leading-relaxed mb-6">
                  {currentProject.desc}
                </p>

                {/* Tags Cloud */}
                <div className="flex flex-wrap gap-2">
                  {currentProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-[#F5EFE6] text-[#3A241B] border border-[#E3D5C5]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Live Launch Highlights Box */}
              <div className="lg:col-span-5 bg-[#FAF6F0] p-6 rounded-2xl border border-[#E3D5C5] flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-semibold uppercase text-[#8B6B52]">
                      Project Overview
                    </span>
                    <span className="flex items-center gap-1.5 text-xs font-medium text-emerald-700">
                      <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                      Live Concept Ready
                    </span>
                  </div>

                  <div className="space-y-2.5 text-xs text-[#3A241B]">
                    <div className="flex items-center justify-between py-1.5 border-b border-[#E3D5C5]/60">
                      <span className="text-[#8B6B52]">Industry:</span>
                      <span className="font-semibold">{currentProject.industry}</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-[#E3D5C5]/60">
                      <span className="text-[#8B6B52]">Location:</span>
                      <span className="font-semibold">{currentProject.location}</span>
                    </div>
                    <div className="flex items-center justify-between py-1.5 border-b border-[#E3D5C5]/60">
                      <span className="text-[#8B6B52]">Core Tech:</span>
                      <span className="font-semibold">{currentProject.tech}</span>
                    </div>
                  </div>
                </div>

                <div className="mt-6 flex items-center gap-3">
                  <a
                    href={currentProject.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 py-2.5 px-4 rounded-xl bg-[#6F4E37] hover:bg-[#5A3E2B] text-white text-xs font-semibold text-center transition-colors flex items-center justify-center gap-1.5 shadow-xs"
                  >
                    <span>View Live Website →</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>

                  <button
                    onClick={() => onOpenLiveDemo && onOpenLiveDemo(activeProjectId)}
                    className="py-2.5 px-3 rounded-xl bg-[#EDE2D4] hover:bg-[#E3D5C5] text-[#2B1B14] text-xs font-medium transition-colors"
                    title="Fullscreen interactive preview"
                  >
                    <Eye className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Interactive Case Preview Tabs */}
            <div>
              <div className="flex items-center justify-between flex-wrap gap-3 mb-6">
                <span className="text-xs font-bold uppercase tracking-wider text-[#8B6B52]">
                  Explore Website Views ({currentProject.name}):
                </span>

                <div className="flex flex-wrap gap-2">
                  {Object.keys(previews).map((key) => {
                    const item = previews[key];
                    const isActive = activeTabKey === key;
                    return (
                      <button
                        key={key}
                        onClick={() => setActiveTabKey(key)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                          isActive
                            ? "bg-[#2B1B14] text-[#F5EFE6] shadow-xs"
                            : "bg-[#F5EFE6] text-[#6F4E37] hover:bg-[#EDE2D4]"
                        }`}
                      >
                        {item.tag}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Active Tab Showcase Visual */}
              {currentPreview && (
                <div className="relative rounded-2xl overflow-hidden border border-[#E3D5C5] bg-[#2B1B14] text-white">
                  <div className="relative h-[360px] sm:h-[440px] w-full overflow-hidden">
                    <img
                      src={currentPreview.image}
                      alt={currentPreview.title}
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                      loading="lazy"
                    />
                    
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-[#1F140E] via-[#2B1B14]/40 to-transparent"></div>

                    {/* Content Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-6 sm:p-8 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
                      <div className="max-w-xl">
                        <span className="inline-block px-3 py-1 rounded-full bg-[#C47D4C] text-white text-[11px] font-bold uppercase tracking-wider mb-2">
                          {currentPreview.tag}
                        </span>
                        <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mb-2">
                          {currentPreview.title}
                        </h4>
                        <p className="text-xs sm:text-sm text-[#EDE2D4]/90 leading-relaxed">
                          {currentPreview.desc}
                        </p>
                      </div>

                      <a
                        href={currentProject.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white text-[#2B1B14] hover:bg-[#F5EFE6] text-xs font-bold transition-all shadow-md shrink-0"
                      >
                        <span>Inspect in Live Site</span>
                        <ArrowUpRight className="w-3.5 h-3.5" />
                      </a>
                    </div>
                  </div>
                </div>
              )}

            </div>

          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
