import React, { useState } from "react";
import ScrollReveal from "./ScrollReveal";
import { REVIEWS, CAFE_RATINGS } from "../data/websiteData";
import { Star, ShieldCheck, Quote, Coffee, GraduationCap, Sparkles, CheckCircle2, MessageSquare } from "lucide-react";

export default function Reviews() {
  const [activeFilter, setActiveFilter] = useState("all"); // "all", "cafe", "academy", "client"

  const filteredReviews = activeFilter === "all"
    ? REVIEWS
    : REVIEWS.filter((r) => r.type === activeFilter);

  // Helper to render fractional stars cleanly
  const renderStarRating = (rating) => {
    return (
      <div className="flex items-center gap-1">
        {[1, 2, 3, 4, 5].map((starIndex) => {
          const filled = rating >= starIndex;
          const isPartial = !filled && rating > starIndex - 1;
          const partialPercent = isPartial ? Math.round((rating - (starIndex - 1)) * 100) : 0;

          return (
            <div key={starIndex} className="relative inline-block">
              {/* Background empty star */}
              <Star className="w-4 h-4 text-[#E3D5C5] fill-[#E3D5C5]" />
              
              {/* Foreground filled/partial star */}
              {(filled || isPartial) && (
                <div
                  className="absolute top-0 left-0 overflow-hidden"
                  style={{ width: filled ? "100%" : `${partialPercent}%` }}
                >
                  <Star className="w-4 h-4 text-[#C47D4C] fill-[#C47D4C]" />
                </div>
              )}
            </div>
          );
        })}
        <span className="ml-1.5 text-xs font-bold text-[#2B1B14]">{rating.toFixed(1)}</span>
      </div>
    );
  };

  return (
    <section id="reviews" className="py-20 md:py-28 bg-[#FCFAF7] border-t border-[#E3D5C5] relative paper-texture">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <ScrollReveal direction="up">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#F5EFE6] border border-[#E3D5C5] text-[#6F4E37] text-xs font-semibold tracking-wide uppercase shadow-xs mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-[#C47D4C]"></span>
              <span>Authentic Client &amp; Customer Ratings</span>
            </div>

            <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-[#2B1B14] leading-[1.15] mb-4">
              What Real People Say <br className="hidden sm:inline" />
              <span className="italic font-normal font-serif text-[#6F4E37]">
                About Our Work &amp; Showcases.
              </span>
            </h2>

            <p className="text-base sm:text-lg text-[#6F4E37] leading-relaxed mb-8">
              No fabricated 5.0 claims. Real customer feedback reflecting authentic dining experiences, course inquiries, and business results.
            </p>

            {/* Filter Pills */}
            <div className="inline-flex flex-wrap items-center justify-center p-1 bg-[#EDE2D4] rounded-2xl border border-[#E3D5C5] shadow-xs gap-1">
              <button
                onClick={() => setActiveFilter("all")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                  activeFilter === "all"
                    ? "bg-[#2B1B14] text-[#F5EFE6] shadow-sm"
                    : "text-[#6F4E37] hover:text-[#2B1B14]"
                }`}
              >
                All Feedback ({REVIEWS.length})
              </button>

              <button
                onClick={() => setActiveFilter("cafe")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeFilter === "cafe"
                    ? "bg-[#2B1B14] text-[#F5EFE6] shadow-sm"
                    : "text-[#6F4E37] hover:text-[#2B1B14]"
                }`}
              >
                <Coffee className="w-3.5 h-3.5 text-[#C47D4C]" />
                <span>Café Patrons (3.9 – 4.2 ★)</span>
              </button>

              <button
                onClick={() => setActiveFilter("academy")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeFilter === "academy"
                    ? "bg-[#2B1B14] text-[#F5EFE6] shadow-sm"
                    : "text-[#6F4E37] hover:text-[#2B1B14]"
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-blue-700" />
                <span>Academy Reviews</span>
              </button>

              <button
                onClick={() => setActiveFilter("client")}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                  activeFilter === "client"
                    ? "bg-[#2B1B14] text-[#F5EFE6] shadow-sm"
                    : "text-[#6F4E37] hover:text-[#2B1B14]"
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                <span>Studio Client Verified</span>
              </button>
            </div>
          </ScrollReveal>
        </div>

        {/* Real Café Ratings Aggregate Dashboard Card */}
        <ScrollReveal direction="up" delay={100} className="mb-12">
          <div className="bg-[#FAF6F0] border-2 border-[#E3D5C5] rounded-3xl p-6 sm:p-8 max-w-4xl mx-auto shadow-md">
            <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
              
              {/* Left Score Box */}
              <div className="md:col-span-4 text-center md:text-left md:border-r border-[#E3D5C5] md:pr-6">
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EDE2D4] text-[#6F4E37] text-[11px] font-mono font-semibold uppercase mb-3">
                  <Coffee className="w-3.5 h-3.5 text-[#C47D4C]" />
                  <span>Brew &amp; Bloom Café</span>
                </div>

                <div className="flex items-baseline justify-center md:justify-start gap-2 mb-2">
                  <span className="text-5xl font-serif font-bold text-[#2B1B14]">
                    {CAFE_RATINGS.aggregate}
                  </span>
                  <span className="text-lg font-serif text-[#8B6B52]">/ 5.0</span>
                </div>

                <div className="flex justify-center md:justify-start mb-2">
                  {renderStarRating(4.1)}
                </div>

                <p className="text-xs text-[#8B6B52]">
                  Based on <strong>{CAFE_RATINGS.totalReviews} verified reviews</strong> across Google Maps, WhatsApp orders &amp; dine-in guests.
                </p>
              </div>

              {/* Right Rating Distribution Bars */}
              <div className="md:col-span-8 space-y-2">
                <div className="text-xs font-mono font-semibold uppercase text-[#8B6B52] mb-3">
                  Customer Score Distribution:
                </div>
                {CAFE_RATINGS.distribution.map((item) => (
                  <div key={item.stars} className="flex items-center gap-3 text-xs">
                    <span className="w-12 font-mono font-medium text-[#2B1B14] flex items-center gap-1">
                      <span>{item.stars}</span>
                      <Star className="w-3 h-3 text-[#C47D4C] fill-[#C47D4C]" />
                    </span>

                    <div className="flex-1 h-2.5 bg-[#EDE2D4] rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#C47D4C] to-[#8B6B52] rounded-full transition-all duration-700"
                        style={{ width: `${item.percentage}%` }}
                      ></div>
                    </div>

                    <span className="w-10 text-right font-mono text-[#8B6B52] text-[11px]">
                      {item.percentage}%
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </div>
        </ScrollReveal>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {filteredReviews.map((rev, index) => (
            <ScrollReveal
              key={rev.id}
              direction="up"
              delay={(index % 3) * 100}
            >
              <div className="h-full bg-[#FAF6F0] border-2 border-[#E3D5C5] p-6 rounded-3xl shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between relative group">
                <Quote className="absolute -bottom-3 -right-3 w-20 h-20 text-[#E3D5C5]/25 pointer-events-none group-hover:text-[#E3D5C5]/40 transition-colors" />

                <div className="relative z-10">
                  {/* Top Bar with Project Tag & Rating */}
                  <div className="flex items-center justify-between gap-3 mb-4 pb-3 border-b border-[#E3D5C5]">
                    <span className={`px-2.5 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider ${
                      rev.type === "cafe"
                        ? "bg-[#EDE2D4] text-[#6F4E37]"
                        : rev.type === "academy"
                        ? "bg-blue-100 text-blue-900"
                        : "bg-amber-100 text-amber-900"
                    }`}>
                      {rev.badge}
                    </span>

                    <div>{renderStarRating(rev.rating)}</div>
                  </div>

                  {/* Comment Quote */}
                  <blockquote className="text-xs sm:text-sm font-serif italic text-[#2B1B14] leading-relaxed mb-6">
                    &ldquo;{rev.comment}&rdquo;
                  </blockquote>
                </div>

                {/* Author Info */}
                <div className="relative z-10 flex items-center gap-3 pt-3 border-t border-[#E3D5C5]/70">
                  <div className="w-10 h-10 rounded-full bg-[#2B1B14] text-[#F5EFE6] flex items-center justify-center font-serif font-bold text-sm border border-[#C47D4C] shrink-0">
                    {rev.avatar}
                  </div>
                  <div>
                    <div className="font-serif font-bold text-xs sm:text-sm text-[#2B1B14]">
                      {rev.author}
                    </div>
                    <div className="text-[11px] text-[#6F4E37]">
                      {rev.role} • {rev.location}
                    </div>
                    <div className="text-[10px] text-[#8B6B52]">
                      {rev.date}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Authentic Review Policy Note */}
        <ScrollReveal direction="up" delay={200} className="mt-12 text-center">
          <p className="text-xs text-[#8B6B52] max-w-xl mx-auto">
            🛡️ <strong>Real Community Transparency:</strong> We showcase authentic feedback from real café patrons and coaching parents. Ready to give your business a website clients love?
          </p>
        </ScrollReveal>

      </div>
    </section>
  );
}
