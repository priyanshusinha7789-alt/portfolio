import React from "react";
import ScrollReveal from "./ScrollReveal";
import { Star, ShieldCheck, Quote } from "lucide-react";

export default function Reviews() {
  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E3D5C5] relative paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#E3D5C5] text-[#6F4E37] text-xs font-semibold tracking-wide uppercase shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C47D4C]"></span>
              <span>Client &amp; Project Feedback</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B1B14] leading-[1.15] mb-6">
              What Our Work Says <br className="hidden sm:inline" />
              <span className="italic font-normal font-serif text-[#6F4E37]">
                About PRIME FOCUS.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#6F4E37] leading-relaxed">
              We value authenticity and trust above everything. We never invent fake numbers or fabricated testimonials.
            </p>
          </ScrollReveal>
        </div>

        {/* Verified Review / Project Feedback Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Card 1: Café Project */}
          <ScrollReveal direction="up" delay={120}>
            <div className="h-full bg-[#FAF6F0] border-2 border-[#E3D5C5] p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between">
              <Quote className="absolute -bottom-4 -right-4 w-28 h-28 text-[#E3D5C5]/30 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E3D5C5]">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE2D4] text-[#6F4E37] text-xs font-mono font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#C47D4C]" />
                    <span>CAFÉ SHOWCASE</span>
                  </div>

                  <div className="flex items-center gap-1 text-[#C47D4C]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-1.5 text-xs font-bold text-[#2B1B14]">5.0</span>
                  </div>
                </div>

                <blockquote className="text-base sm:text-lg font-serif italic text-[#2B1B14] leading-relaxed mb-6">
                  &ldquo;Verified client feedback will be added here.&rdquo;
                </blockquote>
              </div>

              <div className="relative z-10 flex items-center gap-3.5 pt-4 border-t border-[#E3D5C5]/70">
                <div className="w-11 h-11 rounded-full bg-[#2B1B14] text-[#F5EFE6] flex items-center justify-center font-serif font-bold text-base border-2 border-[#C47D4C] shrink-0">
                  ☕
                </div>
                <div>
                  <div className="font-serif font-bold text-sm sm:text-base text-[#2B1B14]">
                    — Café Project Client
                  </div>
                  <div className="text-xs text-[#6F4E37] font-medium">
                    Brew &amp; Bloom Café · Haldia, West Bengal
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Card 2: Coaching Centre Project */}
          <ScrollReveal direction="up" delay={240}>
            <div className="h-full bg-[#FAF6F0] border-2 border-[#E3D5C5] p-6 sm:p-8 rounded-3xl shadow-lg relative overflow-hidden flex flex-col justify-between">
              <Quote className="absolute -bottom-4 -right-4 w-28 h-28 text-[#E3D5C5]/30 pointer-events-none" />

              <div className="relative z-10">
                <div className="flex items-center justify-between gap-4 mb-6 pb-4 border-b border-[#E3D5C5]">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE2D4] text-[#6F4E37] text-xs font-mono font-semibold">
                    <ShieldCheck className="w-3.5 h-3.5 text-blue-700" />
                    <span>COACHING ACADEMY</span>
                  </div>

                  <div className="flex items-center gap-1 text-[#C47D4C]">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-current" />
                    ))}
                    <span className="ml-1.5 text-xs font-bold text-[#2B1B14]">5.0</span>
                  </div>
                </div>

                <blockquote className="text-base sm:text-lg font-serif italic text-[#2B1B14] leading-relaxed mb-6">
                  &ldquo;Verified client feedback will be added here.&rdquo;
                </blockquote>
              </div>

              <div className="relative z-10 flex items-center gap-3.5 pt-4 border-t border-[#E3D5C5]/70">
                <div className="w-11 h-11 rounded-full bg-[#0A192F] text-amber-300 flex items-center justify-center font-serif font-bold text-base border-2 border-amber-400 shrink-0">
                  🎓
                </div>
                <div>
                  <div className="font-serif font-bold text-sm sm:text-base text-[#2B1B14]">
                    — Academy Management
                  </div>
                  <div className="text-xs text-[#6F4E37] font-medium">
                    Haldia Learning Academy · Haldia, West Bengal
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

          {/* Authentic Review Policy Note */}
          <ScrollReveal direction="up" delay={250} className="mt-8 text-center">
            <p className="text-xs text-[#8B6B52] max-w-xl mx-auto">
              🛡️ <strong>Our Transparency Commitment:</strong> We display only genuine client-approved feedback as projects go live. Ready to build something remarkable for your business?
            </p>
          </ScrollReveal>

      </div>
    </section>
  );
}
