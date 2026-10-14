import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { PACKAGES } from "../data/websiteData";
import { CheckCircle2, ArrowRight, Sparkles, Info, Globe, CreditCard } from "lucide-react";

export default function Packages({ onSelectPackage }) {
  const [currencyMode, setCurrencyMode] = useState("both"); // "both", "inr", "usd"

  const handlePackageClick = (pkg) => {
    const formattedSelection = `${pkg.name} (${pkg.priceINR} / ${pkg.priceUSD})`;
    if (onSelectPackage) {
      onSelectPackage(formattedSelection);
    }
    const contactSection = document.querySelector("#contact");
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="packages" className="py-20 md:py-28 bg-[#F5EFE6]/60 border-t border-[#E3D5C5] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EDE2D4] border border-[#E3D5C5] text-[#6F4E37] text-xs font-semibold tracking-wide uppercase shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C47D4C]"></span>
              <span>Transparent Domestic &amp; Global Pricing</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B1B14] leading-[1.15] mb-4">
              Honest packages built for <br className="hidden sm:inline" />
              <span className="italic font-normal font-serif text-[#6F4E37]">
                local &amp; international businesses.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#6F4E37] leading-relaxed mb-8">
              No hidden retainers or confusing agency tiers. Indian Rupee (₹) &amp; US Dollar ($) pricing presented side-by-side for total clarity.
            </p>

            {/* Currency Mode Switcher */}
            <div className="inline-flex items-center p-1 bg-[#EDE2D4] rounded-2xl border border-[#E3D5C5] shadow-xs">
              <button
                onClick={() => setCurrencyMode("both")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  currencyMode === "both"
                    ? "bg-[#2B1B14] text-[#F5EFE6] shadow-sm"
                    : "text-[#6F4E37] hover:text-[#2B1B14]"
                }`}
              >
                <Globe className="w-3.5 h-3.5 text-[#C47D4C]" />
                <span>Side-by-Side (₹ &amp; $)</span>
              </button>

              <button
                onClick={() => setCurrencyMode("inr")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  currencyMode === "inr"
                    ? "bg-[#2B1B14] text-[#F5EFE6] shadow-sm"
                    : "text-[#6F4E37] hover:text-[#2B1B14]"
                }`}
              >
                <span>₹ INR Only</span>
              </button>

              <button
                onClick={() => setCurrencyMode("usd")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  currencyMode === "usd"
                    ? "bg-[#2B1B14] text-[#F5EFE6] shadow-sm"
                    : "text-[#6F4E37] hover:text-[#2B1B14]"
                }`}
              >
                <span>$ USD (Global)</span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* 4 Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
          {PACKAGES.map((pkg, index) => {
            const isPopular = pkg.popular;
            return (
              <ScrollReveal
                key={pkg.id}
                direction="up"
                delay={index * 120}
              >
                <div
                  className={`h-full rounded-3xl p-7 flex flex-col justify-between transition-all duration-300 relative ${
                    isPopular
                      ? "bg-[#2B1B14] text-[#F5EFE6] shadow-2xl border-2 border-[#C47D4C] transform lg:-translate-y-2"
                      : "bg-[#FCFAF7] text-[#2B1B14] border border-[#E3D5C5] shadow-sm hover:shadow-lg"
                  }`}
                >
                  {/* Popular Pill */}
                  {isPopular && (
                    <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-[#C47D4C] text-white text-[11px] font-bold tracking-wider uppercase shadow-md flex items-center gap-1.5">
                      <Sparkles className="w-3 h-3" />
                      <span>MOST POPULAR</span>
                    </div>
                  )}

                  <div>
                    {/* Badge */}
                    <div className="mb-4">
                      <span
                        className={`text-[11px] font-semibold px-2.5 py-1 rounded-full ${
                          isPopular
                            ? "bg-[#3A241B] text-[#C47D4C]"
                            : "bg-[#F5EFE6] text-[#6F4E37]"
                        }`}
                      >
                        {pkg.badge}
                      </span>
                    </div>

                    {/* Plan Name */}
                    <h3 className="text-2xl font-serif font-bold mb-2">
                      {pkg.name}
                    </h3>
                    
                    {/* Price Display Based on Currency Mode */}
                    <div className="mb-4">
                      {currencyMode === "both" && (
                        <div>
                          <div className="flex flex-wrap items-baseline gap-2">
                            <span className={`text-3xl sm:text-4xl font-serif font-bold ${isPopular ? "text-amber-200" : "text-[#2B1B14]"}`}>
                              {pkg.priceINR}
                            </span>
                            <span className="text-lg sm:text-xl font-serif font-bold text-[#C47D4C]">
                              / {pkg.priceUSD}
                            </span>
                          </div>
                          <div className={`text-[11px] mt-1 ${isPopular ? "text-[#EDE2D4]/70" : "text-[#8B6B52]"}`}>
                            {pkg.period} • Domestic &amp; Global clients
                          </div>
                        </div>
                      )}

                      {currencyMode === "inr" && (
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className={`text-4xl font-serif font-bold ${isPopular ? "text-amber-200" : "text-[#2B1B14]"}`}>
                              {pkg.priceINR}
                            </span>
                            <span className={`text-xs ${isPopular ? "text-[#EDE2D4]/70" : "text-[#8B6B52]"}`}>
                              {pkg.period}
                            </span>
                          </div>
                          <div className={`text-[11px] mt-1 ${isPopular ? "text-amber-200/80" : "text-[#C47D4C]"}`}>
                            ≈ {pkg.priceUSD} for foreign clients
                          </div>
                        </div>
                      )}

                      {currencyMode === "usd" && (
                        <div>
                          <div className="flex items-baseline gap-1.5">
                            <span className={`text-4xl font-serif font-bold ${isPopular ? "text-amber-200" : "text-[#2B1B14]"}`}>
                              {pkg.priceUSD}
                            </span>
                            <span className={`text-xs ${isPopular ? "text-[#EDE2D4]/70" : "text-[#8B6B52]"}`}>
                              {pkg.period}
                            </span>
                          </div>
                          <div className={`text-[11px] mt-1 ${isPopular ? "text-amber-200/80" : "text-[#C47D4C]"}`}>
                            ≈ {pkg.priceINR} (INR Equivalent)
                          </div>
                        </div>
                      )}
                    </div>

                    <p className={`text-xs leading-relaxed mb-6 ${isPopular ? "text-[#EDE2D4]/90" : "text-[#6F4E37]"}`}>
                      {pkg.desc}
                    </p>

                    {/* Features List */}
                    <div className={`space-y-2.5 pt-4 border-t mb-8 ${isPopular ? "border-white/10" : "border-[#E3D5C5]/60"}`}>
                      <div className={`text-[11px] font-mono uppercase tracking-wider font-semibold mb-2 ${isPopular ? "text-[#C47D4C]" : "text-[#8B6B52]"}`}>
                        Included Features:
                      </div>
                      {pkg.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-start gap-2.5 text-xs leading-snug">
                          <CheckCircle2
                            className={`w-4 h-4 shrink-0 mt-0.5 ${
                              isPopular ? "text-[#C47D4C]" : "text-[#6F4E37]"
                            }`}
                          />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* CTA Button */}
                  <button
                    onClick={() => handlePackageClick(pkg)}
                    className={`w-full py-3 px-4 rounded-xl text-xs font-bold transition-all flex items-center justify-center gap-2 shadow-sm ${
                      isPopular
                        ? "bg-[#F5EFE6] text-[#2B1B14] hover:bg-white"
                        : "bg-[#2B1B14] text-[#F5EFE6] hover:bg-[#6F4E37]"
                    }`}
                  >
                    <span>{pkg.ctaText}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Global Clients Pitch & Payment Information Banner */}
        <ScrollReveal direction="up" delay={180} className="mt-12">
          <div className="p-6 sm:p-7 rounded-3xl bg-[#2B1B14] text-[#F5EFE6] border border-[#6F4E37]/50 shadow-xl max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-5">
            <div className="flex items-start gap-3.5">
              <div className="w-10 h-10 rounded-2xl bg-[#3A241B] border border-[#C47D4C]/40 flex items-center justify-center text-[#C47D4C] shrink-0">
                <Globe className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-serif font-bold text-sm sm:text-base text-white mb-1">
                  Working with Foreign &amp; International Clients
                </h4>
                <p className="text-xs text-[#EDE2D4]/80 leading-relaxed">
                  We collaborate across US, UK, European, and Australian time zones. Payments accepted smoothly in <strong>USD ($)</strong> via <strong>Stripe, Wise, and PayPal</strong> with milestone-based delivery.
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3A241B] border border-[#6F4E37] text-amber-200 text-xs font-mono">
              <CreditCard className="w-3.5 h-3.5 text-[#C47D4C]" />
              <span>Stripe • Wise • PayPal</span>
            </div>
          </div>
        </ScrollReveal>

        {/* Important Transparency Disclaimers */}
        <ScrollReveal direction="up" delay={220} className="mt-6">
          <div className="p-6 rounded-2xl bg-[#FAF6F0] border border-[#E3D5C5] text-xs text-[#6F4E37] space-y-2 max-w-4xl mx-auto">
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-[#C47D4C] shrink-0 mt-0.5" />
              <span className="font-semibold text-[#2B1B14]">Project Scope Policy:</span>
              <span>Final project scope and features are confirmed before development begins.</span>
            </div>
            <div className="flex items-start gap-2">
              <Info className="w-4 h-4 text-[#C47D4C] shrink-0 mt-0.5" />
              <span className="font-semibold text-[#2B1B14]">Custom Systems:</span>
              <span>Major redesigns, new systems, and substantial custom features beyond agreed deliverables may be charged separately.</span>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
}
