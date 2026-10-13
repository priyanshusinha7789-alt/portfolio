import React, { useState } from "react";
import { CAFE_DEMO_URL, ACADEMY_DEMO_URL, PROJECTS } from "../data/websiteData";
import {
  ArrowUpRight,
  Sparkles,
  Coffee,
  GraduationCap,
  CheckCircle2,
  ExternalLink,
  Laptop,
  Smartphone,
  MessageCircle,
  ShoppingBag,
  MapPin,
  PhoneCall,
  Award,
  BookOpen,
  Users,
} from "lucide-react";

export default function Hero({ activeProjectId = "cafe", onSwitchProject, onOpenLiveDemo }) {
  const [deviceView, setDeviceView] = useState("desktop"); // 'desktop' or 'mobile'

  const currentProject = PROJECTS.find((p) => p.id === activeProjectId) || PROJECTS[0];

  const handleScrollTo = (id) => {
    const el = document.querySelector(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative pt-28 pb-16 md:pt-36 md:pb-24 lg:pt-40 lg:pb-32 overflow-hidden paper-texture"
    >
      {/* Ambient Warm Gradient Glows */}
      <div
        className="absolute top-10 left-1/2 -translate-x-1/2 w-[650px] h-[350px] bg-gradient-to-b from-[#EDE2D4]/70 via-[#F5EFE6]/40 to-transparent rounded-full blur-3xl -z-10 pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute top-40 -left-20 w-72 h-72 bg-[#C47D4C]/10 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute top-60 -right-20 w-80 h-80 bg-[#8B6B52]/10 rounded-full blur-3xl -z-10 pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Eyebrow & Badging */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14 animate-in fade-in slide-in-from-bottom-4 duration-700">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#E3D5C5] text-[#6F4E37] text-xs font-semibold tracking-wide uppercase shadow-xs mb-6">
            <span className="w-2 h-2 rounded-full bg-[#C47D4C]"></span>
            <span>PRIME FOCUS — DIGITAL STUDIO</span>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-[66px] font-serif font-bold text-[#2B1B14] leading-[1.12] tracking-tight mb-6">
            Websites That Make{" "}
            <span className="italic font-normal font-serif text-[#6F4E37] relative inline-block">
              Local Businesses
              <svg
                className="absolute -bottom-1.5 left-0 w-full h-2.5 text-[#C47D4C]/40"
                viewBox="0 0 100 12"
                preserveAspectRatio="none"
                fill="none"
              >
                <path
                  d="M0 6 Q 50 12, 100 6"
                  stroke="currentColor"
                  strokeWidth="3.5"
                  strokeLinecap="round"
                />
              </svg>
            </span>{" "}
            Stand Out.
          </h1>

          {/* Supporting Subtitle */}
          <p className="text-base sm:text-lg md:text-xl text-[#6F4E37] font-normal leading-relaxed max-w-2xl mx-auto mb-8">
            Modern websites for cafés, restaurants, shops, coaching centres and
            local businesses — designed to make your digital presence clear,
            professional and memorable.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3.5 mb-10">
            <button
              onClick={() => handleScrollTo("#work")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#F5EFE6] bg-[#2B1B14] hover:bg-[#6F4E37] shadow-md hover:shadow-lg transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2"
            >
              <span>Explore Our Work</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <button
              onClick={() => handleScrollTo("#contact")}
              className="w-full sm:w-auto px-8 py-3.5 rounded-full text-xs sm:text-sm font-semibold text-[#2B1B14] bg-[#F5EFE6] hover:bg-[#EDE2D4] border border-[#E3D5C5] shadow-xs hover:shadow transition-all flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#C47D4C]" />
              <span>Talk to Us</span>
            </button>
          </div>

          {/* Key Trust Signals for Local Business Owners */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3 max-w-2xl mx-auto pt-2 text-left">
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F5EFE6]/70 border border-[#E3D5C5]/70">
              <CheckCircle2 className="w-4 h-4 text-[#C47D4C] shrink-0" />
              <span className="text-xs font-medium text-[#3A241B]">
                Cafés &amp; Dining
              </span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F5EFE6]/70 border border-[#E3D5C5]/70">
              <CheckCircle2 className="w-4 h-4 text-[#C47D4C] shrink-0" />
              <span className="text-xs font-medium text-[#3A241B]">
                Shops &amp; Retail
              </span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F5EFE6]/70 border border-[#E3D5C5]/70">
              <CheckCircle2 className="w-4 h-4 text-[#C47D4C] shrink-0" />
              <span className="text-xs font-medium text-[#3A241B]">
                Coaching Centres
              </span>
            </div>
            <div className="flex items-center gap-2 p-2 rounded-xl bg-[#F5EFE6]/70 border border-[#E3D5C5]/70">
              <CheckCircle2 className="w-4 h-4 text-[#C47D4C] shrink-0" />
              <span className="text-xs font-medium text-[#3A241B]">
                100% Mobile Ready
              </span>
            </div>
          </div>
        </div>

        {/* HERO VISUAL: Realistic Browser & Device Mockup */}
        <div className="relative max-w-5xl mx-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-200">
          
          {/* Controls Bar for Mockup */}
          <div className="flex flex-wrap items-center justify-between px-4 py-2.5 bg-[#2B1B14] rounded-t-2xl text-[#EDE2D4] border-t border-x border-[#3A241B] gap-2">
            {/* Window Dots & Project Switcher Tabs */}
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-1.5">
                <span className="w-3 h-3 rounded-full bg-[#E57373]/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#FFB74D]/80 inline-block"></span>
                <span className="w-3 h-3 rounded-full bg-[#81C784]/80 inline-block"></span>
              </div>

              {/* Project Tab Selector */}
              {onSwitchProject && (
                <div className="flex items-center bg-[#150D09] p-0.5 rounded-lg border border-[#4A3427]">
                  <button
                    onClick={() => onSwitchProject("cafe")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                      activeProjectId === "cafe"
                        ? "bg-[#6F4E37] text-white"
                        : "text-[#A88970] hover:text-[#EDE2D4]"
                    }`}
                  >
                    <Coffee className="w-3 h-3 text-[#C47D4C]" />
                    <span className="hidden sm:inline">Café Demo</span>
                  </button>
                  <button
                    onClick={() => onSwitchProject("academy")}
                    className={`flex items-center gap-1.5 px-2.5 py-1 rounded text-xs font-medium transition-colors ${
                      activeProjectId === "academy"
                        ? "bg-[#6F4E37] text-white"
                        : "text-[#A88970] hover:text-[#EDE2D4]"
                    }`}
                  >
                    <GraduationCap className="w-3 h-3 text-amber-300" />
                    <span className="hidden sm:inline">Academy Demo</span>
                  </button>
                </div>
              )}
            </div>

            {/* Address Bar Simulation */}
            <div className="flex-1 max-w-sm mx-2 hidden md:flex items-center justify-center bg-[#1F140E] px-3 py-1 rounded-full text-xs font-mono text-[#EDE2D4]/80 border border-[#4A3427]">
              <span className="text-[#C47D4C] mr-1.5">🔒</span>
              <span className="truncate">{currentProject.url.replace(/^https?:\/\//, "")}</span>
            </div>

            {/* Actions: View switcher & Live Button */}
            <div className="flex items-center gap-2">
              <div className="flex items-center bg-[#1F140E] p-0.5 rounded-lg border border-[#4A3427]">
                <button
                  onClick={() => setDeviceView("desktop")}
                  className={`p-1.5 rounded text-xs transition-colors ${
                    deviceView === "desktop"
                      ? "bg-[#6F4E37] text-[#F5EFE6]"
                      : "text-[#A88970] hover:text-[#EDE2D4]"
                  }`}
                  title="Desktop Preview"
                >
                  <Laptop className="w-3.5 h-3.5" />
                </button>
                <button
                  onClick={() => setDeviceView("mobile")}
                  className={`p-1.5 rounded text-xs transition-colors ${
                    deviceView === "mobile"
                      ? "bg-[#6F4E37] text-[#F5EFE6]"
                      : "text-[#A88970] hover:text-[#EDE2D4]"
                  }`}
                  title="Mobile Preview"
                >
                  <Smartphone className="w-3.5 h-3.5" />
                </button>
              </div>

              <a
                href={currentProject.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-medium bg-[#6F4E37] hover:bg-[#8B6B52] text-[#F5EFE6] rounded-lg transition-colors shadow-xs"
              >
                <span>Live Site</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>

          {/* Mockup Screen Frame */}
          <div className="relative bg-[#1A110D] p-2 sm:p-4 rounded-b-2xl shadow-2xl border-b border-x border-[#3A241B] overflow-hidden">
            {deviceView === "desktop" ? (
              /* Desktop View Mockup Content */
              activeProjectId === "cafe" ? (
                /* 1. CAFÉ DESKTOP SIMULATION */
                <div className="relative bg-[#073B32] rounded-xl overflow-hidden shadow-inner text-[#F5EFE6] transition-all">
                  <div className="relative min-h-[380px] sm:min-h-[460px] md:min-h-[500px] flex flex-col justify-between p-6 sm:p-10 bg-gradient-to-r from-[#04241F] via-[#073B32]/90 to-black/60">
                    <img
                      src="https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?w=1600&auto=format&fit=crop&q=80"
                      alt="Brew and Bloom Café Atmosphere"
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-35 -z-10"
                      loading="lazy"
                    />

                    {/* Café Mini Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2">
                        <span className="text-xl">☕</span>
                        <div>
                          <span className="font-serif font-bold text-base text-amber-200 block leading-tight">
                            Brew &amp; Bloom
                          </span>
                          <span className="text-[9px] tracking-widest text-emerald-200/80 uppercase">
                            CAFÉ &amp; KITCHEN
                          </span>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-5 text-xs text-stone-200">
                        <span>Home</span>
                        <span>Menu</span>
                        <span>Bestsellers</span>
                        <span>Find Us</span>
                        <span className="px-2.5 py-1 rounded bg-amber-500/20 text-amber-300 font-medium">
                          Cart (0)
                        </span>
                      </div>
                    </div>

                    {/* Café Hero Content */}
                    <div className="max-w-lg my-auto py-6">
                      <span className="inline-block px-3 py-1 rounded-full bg-emerald-900/70 border border-emerald-400/30 text-emerald-300 text-xs font-medium mb-3">
                        📍 Haldia, West Bengal
                      </span>
                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-3">
                        Good Coffee. <br />
                        <span className="italic font-normal text-amber-200">
                          Slow Moments.
                        </span>{" "}
                        <br />
                        Beautiful Days.
                      </h2>
                      <p className="text-xs sm:text-sm text-stone-300 leading-relaxed mb-6 max-w-md">
                        Artisan single-origin coffees, handcrafted wood-fired
                        pizzas, gourmet pastas and decadent desserts delivered
                        fresh.
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <a
                          href={CAFE_DEMO_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-amber-500 hover:bg-amber-400 text-stone-900 text-xs font-bold transition-all shadow"
                        >
                          Explore Menu
                        </a>
                        <a
                          href={CAFE_DEMO_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-emerald-700/80 hover:bg-emerald-600 text-white text-xs font-semibold border border-emerald-500/30 flex items-center gap-1.5"
                        >
                          <MessageCircle className="w-3.5 h-3.5" />
                          <span>WhatsApp Order</span>
                        </a>
                      </div>
                    </div>

                    {/* Café Badges Strip */}
                    <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
                      <div>
                        <div className="font-bold text-amber-300 text-xs sm:text-sm">
                          100%
                        </div>
                        <div className="text-[10px] text-stone-300">
                          Arabica Beans
                        </div>
                      </div>
                      <div className="border-x border-white/10">
                        <div className="font-bold text-amber-300 text-xs sm:text-sm">
                          30 Min
                        </div>
                        <div className="text-[10px] text-stone-300">
                          Avg. Delivery
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-amber-300 text-xs sm:text-sm">
                          7 Days
                        </div>
                        <div className="text-[10px] text-stone-300">Open Week</div>
                      </div>
                    </div>
                  </div>
                </div>
              ) : (
                /* 2. ACADEMY DESKTOP SIMULATION */
                <div className="relative bg-[#0A192F] rounded-xl overflow-hidden shadow-inner text-[#F5EFE6] transition-all">
                  <div className="relative min-h-[380px] sm:min-h-[460px] md:min-h-[500px] flex flex-col justify-between p-6 sm:p-10 bg-gradient-to-r from-[#06101E] via-[#0A192F]/90 to-[#14213D]/80">
                    <img
                      src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=1600&auto=format&fit=crop&q=80"
                      alt="Haldia Learning Academy Campus"
                      className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-30 -z-10"
                      loading="lazy"
                    />

                    {/* Academy Mini Header */}
                    <div className="flex items-center justify-between border-b border-white/10 pb-4">
                      <div className="flex items-center gap-2.5">
                        <span className="text-xl">🎓</span>
                        <div>
                          <span className="font-serif font-bold text-base text-amber-300 block leading-tight">
                            Haldia Learning Academy
                          </span>
                          <span className="text-[9px] tracking-widest text-sky-200/80 uppercase">
                            PREMIER COACHING FOR JEE, NEET &amp; FOUNDATION
                          </span>
                        </div>
                      </div>
                      <div className="hidden sm:flex items-center gap-5 text-xs text-slate-200">
                        <span>Courses</span>
                        <span>Faculty</span>
                        <span>Syllabus</span>
                        <span>Admin CRM</span>
                        <span className="px-2.5 py-1 rounded bg-amber-400 text-slate-950 font-bold">
                          Enquire Now
                        </span>
                      </div>
                    </div>

                    {/* Academy Hero Content */}
                    <div className="max-w-xl my-auto py-6">
                      <div className="flex flex-wrap items-center gap-2 mb-3">
                        <span className="inline-block px-3 py-1 rounded-full bg-blue-900/70 border border-blue-400/30 text-blue-300 text-xs font-medium">
                          📍 Haldia Central Campus, WB
                        </span>
                        <span className="inline-block px-2.5 py-1 rounded-full bg-amber-500/20 border border-amber-400/30 text-amber-300 text-xs font-semibold">
                          ⭐ Ex-IITian Mentorship
                        </span>
                      </div>

                      <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-white leading-tight mb-3">
                        Empowering Ambitions. <br />
                        <span className="italic font-normal text-amber-300">
                          Cracking JEE &amp; NEET
                        </span>{" "}
                        in Haldia.
                      </h2>

                      <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6 max-w-lg">
                        Structured classroom programs for Foundation (Class 8–10), Higher Secondary &amp; Repeaters with comprehensive chapter modules, weekly test series and personalized doubt clearing.
                      </p>

                      <div className="flex flex-wrap gap-3">
                        <a
                          href={ACADEMY_DEMO_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-amber-400 hover:bg-amber-300 text-slate-950 text-xs font-bold transition-all shadow"
                        >
                          Explore Course Streams
                        </a>
                        <a
                          href={ACADEMY_DEMO_URL}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 rounded-lg bg-blue-700/70 hover:bg-blue-600 text-white text-xs font-semibold border border-blue-400/30 flex items-center gap-1.5"
                        >
                          <BookOpen className="w-3.5 h-3.5" />
                          <span>View Syllabus Timelines</span>
                        </a>
                      </div>
                    </div>

                    {/* Academy Badges Strip */}
                    <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4 text-center">
                      <div>
                        <div className="font-bold text-amber-300 text-xs sm:text-sm">
                          Ex-IITian
                        </div>
                        <div className="text-[10px] text-slate-300">
                          Pedigree Faculty
                        </div>
                      </div>
                      <div className="border-x border-white/10">
                        <div className="font-bold text-amber-300 text-xs sm:text-sm">
                          Class 8–12
                        </div>
                        <div className="text-[10px] text-slate-300">
                          JEE &amp; NEET Batches
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-amber-300 text-xs sm:text-sm">
                          1-on-1
                        </div>
                        <div className="text-[10px] text-slate-300">Doubt Lab Support</div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            ) : (
              /* Mobile View Mockup Content */
              activeProjectId === "cafe" ? (
                /* Café Mobile View */
                <div className="max-w-xs mx-auto bg-[#04241F] rounded-2xl border-4 border-stone-800 p-4 shadow-xl text-white">
                  <div className="w-16 h-1 bg-stone-700 rounded-full mx-auto mb-3"></div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                    <span className="font-serif font-bold text-amber-200">
                      ☕ Brew &amp; Bloom
                    </span>
                    <span className="px-2 py-0.5 bg-amber-500/20 text-amber-300 rounded text-[10px]">
                      Cart (1)
                    </span>
                  </div>
                  <div className="py-5 text-center">
                    <p className="text-[10px] text-emerald-300 uppercase tracking-wider mb-1">
                      Freshly Brewed in Haldia
                    </p>
                    <h3 className="font-serif text-lg font-bold leading-tight mb-2">
                      Good Coffee. <br />
                      <span className="italic text-amber-200">
                        Slow Moments.
                      </span>
                    </h3>
                    <p className="text-[11px] text-stone-300 mb-4 px-2">
                      Artisan coffees, wood-fired pizzas &amp; fresh bakes.
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href={CAFE_DEMO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 bg-amber-500 text-stone-950 text-xs font-bold rounded-lg text-center"
                      >
                        View Live Menu
                      </a>
                      <a
                        href={CAFE_DEMO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 bg-emerald-700/60 text-emerald-100 text-xs font-medium rounded-lg border border-emerald-500/30 text-center"
                      >
                        WhatsApp Order
                      </a>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/10 text-[9px] text-center text-stone-400">
                    📱 Mobile First • Instant Fast Load
                  </div>
                </div>
              ) : (
                /* Academy Mobile View */
                <div className="max-w-xs mx-auto bg-[#0A192F] rounded-2xl border-4 border-slate-800 p-4 shadow-xl text-white">
                  <div className="w-16 h-1 bg-slate-700 rounded-full mx-auto mb-3"></div>
                  <div className="flex items-center justify-between pb-3 border-b border-white/10 text-xs">
                    <span className="font-serif font-bold text-amber-300">
                      🎓 Haldia Academy
                    </span>
                    <span className="px-2 py-0.5 bg-amber-400 text-slate-950 rounded text-[10px] font-bold">
                      Admissions Open
                    </span>
                  </div>
                  <div className="py-5 text-center">
                    <p className="text-[10px] text-sky-300 uppercase tracking-wider mb-1">
                      Premier Coaching in Haldia
                    </p>
                    <h3 className="font-serif text-lg font-bold leading-tight mb-2">
                      Target JEE &amp; NEET. <br />
                      <span className="italic text-amber-300">
                        Ex-IITian Mentors.
                      </span>
                    </h3>
                    <p className="text-[11px] text-slate-300 mb-4 px-2">
                      Class 8-12 Foundation, Higher Secondary &amp; Repeaters.
                    </p>
                    <div className="flex flex-col gap-2">
                      <a
                        href={ACADEMY_DEMO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2 bg-amber-400 text-slate-950 text-xs font-bold rounded-lg text-center"
                      >
                        Explore Batches
                      </a>
                      <a
                        href={ACADEMY_DEMO_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-1.5 bg-blue-700/60 text-blue-100 text-xs font-medium rounded-lg border border-blue-400/30 text-center"
                      >
                        Online Enquiry
                      </a>
                    </div>
                  </div>
                  <div className="mt-2 pt-2 border-t border-white/10 text-[9px] text-center text-slate-400">
                    📱 Touch Optimized • Rapid Lead Funnel
                  </div>
                </div>
              )
            )}

            {/* Interactive Floating Micro-Badges around Mockup */}
            {activeProjectId === "cafe" ? (
              <>
                <div className="hidden lg:block absolute -bottom-4 -left-4 bg-[#FCFAF7] border border-[#E3D5C5] p-3.5 rounded-2xl shadow-xl max-w-xs animate-float-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#6F4E37] shrink-0 border border-[#E3D5C5]">
                      <ShoppingBag className="w-5 h-5 text-[#C47D4C]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#2B1B14]">
                        Zero-Commission Ordering
                      </div>
                      <div className="text-[11px] text-[#6F4E37]">
                        WhatsApp Cart &amp; Live Summary
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="hidden lg:block absolute top-16 -right-4 bg-[#FCFAF7] border border-[#E3D5C5] p-3.5 rounded-2xl shadow-xl max-w-xs animate-float-slow"
                  style={{ animationDelay: "2.5s" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#6F4E37] shrink-0 border border-[#E3D5C5]">
                      <MapPin className="w-5 h-5 text-[#C47D4C]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#2B1B14]">
                        Find Us on Maps
                      </div>
                      <div className="text-[11px] text-[#6F4E37]">
                        Integrated Leaflet &amp; Directions
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="hidden lg:block absolute -bottom-4 -left-4 bg-[#FCFAF7] border border-[#E3D5C5] p-3.5 rounded-2xl shadow-xl max-w-xs animate-float-slow">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#6F4E37] shrink-0 border border-[#E3D5C5]">
                      <Award className="w-5 h-5 text-amber-600" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#2B1B14]">
                        Ex-IITian Mentorship
                      </div>
                      <div className="text-[11px] text-[#6F4E37]">
                        Class 8-12 &amp; JEE/NEET Repeaters
                      </div>
                    </div>
                  </div>
                </div>

                <div
                  className="hidden lg:block absolute top-16 -right-4 bg-[#FCFAF7] border border-[#E3D5C5] p-3.5 rounded-2xl shadow-xl max-w-xs animate-float-slow"
                  style={{ animationDelay: "2.5s" }}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-[#F5EFE6] flex items-center justify-center text-[#6F4E37] shrink-0 border border-[#E3D5C5]">
                      <Users className="w-5 h-5 text-[#C47D4C]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#2B1B14]">
                        Admin Leads CRM
                      </div>
                      <div className="text-[11px] text-[#6F4E37]">
                        Real-Time Inquiries &amp; CSV Export
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>

          {/* Quick Explanatory Banner Below Mockup */}
          <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 p-4 rounded-xl bg-[#F5EFE6] border border-[#E3D5C5] text-xs text-[#6F4E37]">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600"></span>
              <span className="font-semibold text-[#2B1B14]">
                Featured Showcase:
              </span>
              <span>{currentProject.name} ({currentProject.category})</span>
            </div>

            <button
              onClick={() => onOpenLiveDemo(activeProjectId)}
              className="inline-flex items-center gap-1.5 font-bold text-[#2B1B14] hover:text-[#6F4E37] transition-colors"
            >
              <span>Launch Fullscreen Preview</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
