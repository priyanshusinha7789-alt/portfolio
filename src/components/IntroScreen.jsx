import React, { useState, useEffect } from "react";
import { ArrowRight, Sparkles } from "lucide-react";

export default function IntroScreen({ onEnter }) {
  const [isExiting, setIsExiting] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setMounted(true);
    }, 50);
    return () => clearTimeout(timer);
  }, []);

  const handleEnterClick = () => {
    if (isExiting) return;
    setIsExiting(true);
    // 700ms smooth cinematic wipe transition
    setTimeout(() => {
      onEnter();
    }, 700);
  };

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center bg-[#1F140E] text-[#F5EFE6] select-none overflow-hidden transition-all duration-700 ${
        isExiting ? "opacity-0 pointer-events-none scale-102" : "opacity-100"
      }`}
      aria-label="PRIME FOCUS Studio Intro"
    >
      {/* Ambient Radial Vignette & Warm Glows */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-[#3A241B]/90 via-[#22140D] to-[#120B07] pointer-events-none" />
      <div className="absolute inset-0 paper-texture-dark opacity-60 pointer-events-none" />

      {/* Warm Ambient Floating Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-[#C47D4C]/15 rounded-full blur-3xl pointer-events-none animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="absolute -top-32 -right-32 w-80 h-80 bg-[#8B6B52]/15 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      {/* Top Quick Bypass Bar */}
      <div className="absolute top-6 right-6 z-20">
        <button
          onClick={handleEnterClick}
          className="text-xs font-mono text-[#A88970] hover:text-[#F5EFE6] px-3 py-1.5 rounded-full bg-[#2B1B14]/80 border border-[#4A3427] hover:border-[#C47D4C]/50 transition-colors flex items-center gap-1.5"
        >
          <span>Skip to portfolio</span>
          <ArrowRight className="w-3 h-3 text-[#C47D4C]" />
        </button>
      </div>

      {/* Main Studio Content */}
      <div className="relative z-10 max-w-2xl mx-auto px-6 py-10 text-center flex flex-col items-center justify-center">
        
        {/* Emblem */}
        <div
          className={`transition-all duration-700 ease-out transform ${
            mounted
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 -translate-y-4 scale-95"
          }`}
        >
          <div className="mx-auto mb-6 w-16 h-16 rounded-2xl bg-gradient-to-b from-[#3A241B] to-[#2B1B14] border border-[#6F4E37] flex items-center justify-center text-[#F5EFE6] shadow-2xl relative group">
            <div className="relative w-8 h-8 flex items-center justify-center">
              <div className="absolute inset-0 rounded-full border-2 border-[#C47D4C]"></div>
              <div className="w-3.5 h-3.5 rounded-full bg-[#F5EFE6] shadow-xs"></div>
            </div>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-[#C47D4C] animate-pulse"></span>
          </div>

          {/* Logo Wordmark */}
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-serif font-bold text-white tracking-tight leading-none mb-3">
            PRIME FOCUS
          </h1>
        </div>

        {/* Studio Tagline Badge */}
        <div
          className={`transition-all duration-700 delay-150 ease-out transform ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-2"
          }`}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#150D09] border border-[#4A3427] text-[#C47D4C] text-[11px] sm:text-xs font-mono font-bold tracking-[0.25em] uppercase mb-8 shadow-inner">
            <span className="w-1.5 h-1.5 rounded-full bg-[#C47D4C]"></span>
            <span>DIGITAL STUDIO</span>
          </div>
        </div>

        {/* Main Positioning Statement */}
        <div
          className={`transition-all duration-700 delay-300 ease-out transform max-w-xl ${
            mounted
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-3"
          }`}
        >
          <p className="text-base sm:text-lg md:text-xl font-serif text-[#EDE2D4]/90 leading-relaxed mb-10 tracking-wide">
            &ldquo;WE BUILD WEBSITES THAT MAKE LOCAL BUSINESSES STAND OUT.&rdquo;
          </p>
        </div>

        {/* Main Enter Button */}
        <div
          className={`transition-all duration-700 delay-450 ease-out transform ${
            mounted
              ? "opacity-100 translate-y-0 scale-100"
              : "opacity-0 translate-y-4 scale-95"
          }`}
        >
          <button
            onClick={handleEnterClick}
            disabled={isExiting}
            className={`group relative inline-flex items-center gap-3.5 px-9 py-4 rounded-full text-xs sm:text-sm font-bold tracking-widest uppercase transition-all duration-300 transform ${
              isExiting
                ? "scale-95 bg-[#C47D4C] text-white shadow-2xl"
                : "bg-[#F5EFE6] text-[#2B1B14] hover:bg-white hover:shadow-2xl hover:scale-105 active:scale-95"
            } shadow-xl border border-white/20 cursor-pointer`}
          >
            <span>ENTER PRIME FOCUS</span>
            <ArrowRight className="w-4 h-4 text-[#6F4E37] group-hover:translate-x-1.5 transition-transform duration-300" />
            
            {/* Subtle ambient glow on hover */}
            <span className="absolute -inset-0.5 rounded-full bg-gradient-to-r from-[#C47D4C] to-[#D4AF37] opacity-0 group-hover:opacity-30 blur-sm transition-opacity pointer-events-none"></span>
          </button>
        </div>

        {/* Bottom Tagline */}
        <div
          className={`mt-12 transition-all duration-700 delay-600 ease-out text-[11px] font-mono text-[#8B6B52] tracking-widest uppercase ${
            mounted ? "opacity-70" : "opacity-0"
          }`}
        >
          Est. 2026 · Built with Purpose
        </div>

      </div>

      {/* Smooth Cinematic Cream Overlay Wipe on Enter */}
      <div
        className={`fixed inset-0 bg-[#FCFAF7] transition-opacity duration-700 ease-in-out pointer-events-none z-30 ${
          isExiting ? "opacity-100" : "opacity-0"
        }`}
      />
    </div>
  );
}
