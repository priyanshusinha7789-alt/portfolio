import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { SERVICES } from "../data/websiteData";
import {
  Sparkles,
  ArrowRight,
  Layout,
  Code2,
  Utensils,
  Building2,
  MessageCircle,
  Share2,
  MapPin,
  Flame,
  Star,
  Wrench,
  Cpu,
} from "lucide-react";

const SERVICE_ICONS = {
  "website-design": Layout,
  "website-dev": Code2,
  "menu-websites": Utensils,
  "business-websites": Building2,
  "whatsapp-integration": MessageCircle,
  "social-media": Share2,
  "google-maps": MapPin,
  "offers-promotions": Flame,
  "customer-feedback": Star,
  "website-maintenance": Wrench,
  "custom-features": Cpu,
};

export default function Services({ onSelectService }) {
  const [filter, setFilter] = useState("All");

  const CATEGORIES = ["All", "Core Web", "Hospitality & Menus", "Integrations", "Support"];

  const filteredServices = SERVICES.filter((s) => {
    if (filter === "All") return true;
    if (filter === "Core Web") return s.category === "Design" || s.category === "Development" || s.category === "Corporate";
    if (filter === "Hospitality & Menus") return s.category === "Hospitality";
    if (filter === "Integrations") return s.category === "Integrations" || s.category === "Marketing" || s.category === "Engagement";
    if (filter === "Support") return s.category === "Support" || s.category === "Specialized";
    return true;
  });

  return (
    <section id="services" className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E3D5C5] relative paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#E3D5C5] text-[#6F4E37] text-xs font-semibold tracking-wide uppercase shadow-xs mb-4">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C47D4C]"></span>
                <span>Our Capabilities</span>
              </div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B1B14] leading-[1.15] mb-4">
                Services tailored for <br className="hidden sm:inline" />
                <span className="italic font-normal font-serif text-[#6F4E37]">
                  growing local businesses.
                </span>
              </h2>
              <p className="text-base sm:text-lg text-[#6F4E37]">
                From interactive café menus to coaching centre websites, we provide everything needed to establish your digital presence.
              </p>
            </ScrollReveal>
          </div>

          {/* Category Filter Pills */}
          <ScrollReveal direction="left" delay={150}>
            <div className="flex flex-wrap gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setFilter(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-semibold transition-all ${
                    filter === cat
                      ? "bg-[#2B1B14] text-[#F5EFE6] shadow-sm"
                      : "bg-[#F5EFE6] text-[#6F4E37] hover:bg-[#EDE2D4] border border-[#E3D5C5]"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* 11 Services Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service, index) => {
            const IconComp = SERVICE_ICONS[service.id] || Sparkles;
            return (
              <ScrollReveal
                key={service.id}
                direction="up"
                delay={(index % 3) * 100}
              >
                <div className="h-full bg-[#FCFAF7] border border-[#E3D5C5] p-6 sm:p-7 rounded-2xl shadow-sm hover:shadow-md hover:border-[#C47D4C]/40 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <div className="w-11 h-11 rounded-xl bg-[#F5EFE6] border border-[#E3D5C5] flex items-center justify-center text-[#6F4E37] group-hover:bg-[#2B1B14] group-hover:text-white transition-colors">
                        <IconComp className="w-5 h-5 text-[#C47D4C]" />
                      </div>
                      <span className="text-[11px] font-mono text-[#8B6B52] bg-[#EDE2D4] px-2.5 py-0.5 rounded-full">
                        {service.category}
                      </span>
                    </div>

                    <h3 className="text-lg font-serif font-bold text-[#2B1B14] mb-2">
                      {service.name}
                    </h3>

                    <p className="text-xs sm:text-sm text-[#6F4E37] leading-relaxed mb-4">
                      {service.desc}
                    </p>
                  </div>

                  <div>
                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 pt-3 border-t border-[#E3D5C5]/60 mb-4">
                      {service.tags.map((tag, tIdx) => (
                        <span
                          key={tIdx}
                          className="text-[10px] font-medium bg-[#F5EFE6] text-[#3A241B] px-2 py-0.5 rounded border border-[#E3D5C5]/60"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <a
                      href="#contact"
                      onClick={() => onSelectService && onSelectService(service.name)}
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-[#6F4E37] hover:text-[#2B1B14] group-hover:translate-x-1 transition-all"
                    >
                      <span>Inquire about this</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </a>
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
