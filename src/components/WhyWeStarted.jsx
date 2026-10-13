import React from "react";
import ScrollReveal from "./ScrollReveal";
import { WHY_US_CARDS } from "../data/websiteData";
import {
  MapPin,
  MessageCircle,
  ArrowDown,
  Sparkles,
  CheckCircle2,
  XCircle,
  Globe,
  ArrowRight,
} from "lucide-react";

function InstagramIcon(props) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
      <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
    </svg>
  );
}

export default function WhyWeStarted() {
  return (
    <section className="py-20 md:py-28 bg-[#FCFAF7] relative overflow-hidden paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#E3D5C5] text-[#6F4E37] text-xs font-semibold tracking-wide uppercase shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C47D4C]"></span>
              <span>Why PRIME FOCUS?</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B1B14] leading-[1.15] mb-6">
              From scattered social pages to{" "}
              <span className="italic font-normal font-serif text-[#6F4E37]">
                one professional digital home.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#6F4E37] leading-relaxed">
              Many local businesses already have Instagram, WhatsApp or Google Maps — but their online presence is often scattered across different platforms. We started PRIME FOCUS to give these businesses a unified, professional digital home.
            </p>
          </ScrollReveal>
        </div>

        {/* Storytelling Diagram */}
        <div className="max-w-5xl mx-auto">
          
          {/* Top 3 Fragmented Channels */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-8">
            
            {/* Instagram Card */}
            <ScrollReveal direction="up" delay={0}>
              <div className="h-full bg-[#FAF6F0] border border-[#E3D5C5] p-6 rounded-2xl relative shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#E3D5C5] flex items-center justify-center text-[#6F4E37]">
                    <InstagramIcon className="w-5 h-5 text-[#C47D4C]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#EDE2D4] text-[#6F4E37]">
                    Social Feed
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#2B1B14] mb-2">
                  Instagram
                </h3>
                <p className="text-xs text-[#6F4E37] mb-4">
                  Great for daily photos, but menus get lost in past posts, stories expire, and there is no direct ordering cart.
                </p>
                <div className="space-y-2 pt-3 border-t border-[#E3D5C5]/60 text-xs text-[#8B6B52]">
                  <div className="flex items-start gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-amber-700/70 shrink-0 mt-0.5" />
                    <span>Menu highlights buried in past posts</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-amber-700/70 shrink-0 mt-0.5" />
                    <span>No structured price search or cart</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* Google Maps Card */}
            <ScrollReveal direction="up" delay={150}>
              <div className="h-full bg-[#FAF6F0] border border-[#E3D5C5] p-6 rounded-2xl relative shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#E3D5C5] flex items-center justify-center text-[#6F4E37]">
                    <MapPin className="w-5 h-5 text-[#C47D4C]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#EDE2D4] text-[#6F4E37]">
                    Location Listing
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#2B1B14] mb-2">
                  Google Maps
                </h3>
                <p className="text-xs text-[#6F4E37] mb-4">
                  Helps customers navigate, but offers zero custom branding, no interactive food showcase, and lists competitors.
                </p>
                <div className="space-y-2 pt-3 border-t border-[#E3D5C5]/60 text-xs text-[#8B6B52]">
                  <div className="flex items-start gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-amber-700/70 shrink-0 mt-0.5" />
                    <span>Zero control over brand aesthetics</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-amber-700/70 shrink-0 mt-0.5" />
                    <span>Competitor ads displayed nearby</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

            {/* WhatsApp Card */}
            <ScrollReveal direction="up" delay={300}>
              <div className="h-full bg-[#FAF6F0] border border-[#E3D5C5] p-6 rounded-2xl relative shadow-xs">
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] border border-[#E3D5C5] flex items-center justify-center text-[#6F4E37]">
                    <MessageCircle className="w-5 h-5 text-[#C47D4C]" />
                  </div>
                  <span className="px-2.5 py-1 rounded-full text-[11px] font-semibold bg-[#EDE2D4] text-[#6F4E37]">
                    Direct Chat
                  </span>
                </div>
                <h3 className="font-serif font-bold text-lg text-[#2B1B14] mb-2">
                  WhatsApp Chat
                </h3>
                <p className="text-xs text-[#6F4E37] mb-4">
                  Fast communication, but staff spend hours answering repetitive questions and sending blurry PDF menus.
                </p>
                <div className="space-y-2 pt-3 border-t border-[#E3D5C5]/60 text-xs text-[#8B6B52]">
                  <div className="flex items-start gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-amber-700/70 shrink-0 mt-0.5" />
                    <span>Manual typing for every menu inquiry</span>
                  </div>
                  <div className="flex items-start gap-1.5">
                    <XCircle className="w-3.5 h-3.5 text-amber-700/70 shrink-0 mt-0.5" />
                    <span>No automated total bill calculations</span>
                  </div>
                </div>
              </div>
            </ScrollReveal>

          </div>

          {/* Central Convergence Connector */}
          <ScrollReveal direction="none" delay={150}>
            <div className="flex flex-col items-center justify-center my-6">
              <div className="w-px h-8 bg-gradient-to-b from-[#E3D5C5] to-[#6F4E37]"></div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#2B1B14] text-[#F5EFE6] text-xs font-semibold shadow-md my-2">
                <Sparkles className="w-3.5 h-3.5 text-[#C47D4C]" />
                <span>Unified Into One Experience</span>
                <ArrowDown className="w-3.5 h-3.5 text-[#C47D4C]" />
              </div>
              <div className="w-px h-8 bg-gradient-to-b from-[#6F4E37] to-[#2B1B14]"></div>
            </div>
          </ScrollReveal>

          {/* The Hero Outcome: One Professional Website */}
          <ScrollReveal direction="up" delay={200}>
            <div className="bg-[#2B1B14] text-[#F5EFE6] border border-[#3A241B] p-8 sm:p-10 rounded-3xl shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-80 h-80 bg-[#C47D4C]/15 rounded-full blur-3xl pointer-events-none"></div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
                <div className="lg:col-span-7">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#3A241B] text-[#C47D4C] text-xs font-mono font-medium mb-3">
                    <Globe className="w-3.5 h-3.5" />
                    <span>THE PRIME FOCUS SOLUTION</span>
                  </div>

                  <h3 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-4">
                    ONE PROFESSIONAL WEBSITE
                  </h3>

                  <p className="text-sm sm:text-base text-[#EDE2D4]/90 leading-relaxed mb-6">
                    We bring your visual appeal, your location, and your customer communication together onto a single, beautifully branded website owned completely by you.
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-[#F5EFE6]">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C47D4C] shrink-0" />
                      <span>Always up-to-date digital menu</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C47D4C] shrink-0" />
                      <span>Instant 1-tap WhatsApp orders</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C47D4C] shrink-0" />
                      <span>Embedded map &amp; directions</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-[#C47D4C] shrink-0" />
                      <span>100% Mobile-first fast loading</span>
                    </div>
                  </div>
                </div>

                <div className="lg:col-span-5 flex flex-col items-center justify-center p-6 rounded-2xl bg-[#1F140E] border border-[#4A3427] text-center">
                  <div className="w-14 h-14 rounded-2xl bg-[#2B1B14] border border-[#6F4E37] flex items-center justify-center text-3xl mb-4 shadow-inner">
                    ☕
                  </div>
                  <h4 className="font-serif font-bold text-lg text-[#F5EFE6] mb-1">
                    Ready to give your business a digital home?
                  </h4>
                  <p className="text-xs text-[#A88970] mb-5">
                    See how we implemented this concept for our featured café project.
                  </p>
                  <a
                    href="#work"
                    className="w-full py-3 rounded-full text-xs font-semibold text-[#2B1B14] bg-[#F5EFE6] hover:bg-[#EDE2D4] transition-all flex items-center justify-center gap-2 shadow"
                  >
                    <span>See Featured Project</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

      </div>
    </section>
  );
}
