import React from "react";
import { NAV_LINKS, CAFE_DEMO_URL, ACADEMY_DEMO_URL } from "../data/websiteData";
import { ArrowUp, Coffee, GraduationCap, ExternalLink } from "lucide-react";

export default function Footer({ onOpenLiveDemo }) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-[#1F140E] text-[#EDE2D4] border-t border-[#3A241B] pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#3A241B]">
          
          {/* Col 1: Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-[#2B1B14] border border-[#6F4E37] flex items-center justify-center text-[#F5EFE6]">
                <div className="w-2.5 h-2.5 rounded-full bg-[#C47D4C]"></div>
              </div>
              <div className="font-serif font-bold text-xl text-white tracking-tight">
                PRIME FOCUS
              </div>
            </div>

            <p className="text-xs sm:text-sm text-[#A88970] max-w-sm leading-relaxed">
              We build websites that make local businesses stand out. Modern websites for businesses that deserve more than just a social media page.
            </p>

            <div className="pt-2 flex items-center gap-2 text-xs text-[#8B6B52]">
              <Coffee className="w-3.5 h-3.5 text-[#C47D4C]" />
              <span>Crafted for local cafés, restaurants, shops &amp; coaching institutes.</span>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#C47D4C] uppercase mb-4">
              Navigation
            </h4>
            <ul className="grid grid-cols-2 gap-2.5 text-xs text-[#EDE2D4]/80">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Live Concept Demos */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs font-mono font-bold tracking-widest text-[#C47D4C] uppercase mb-4">
              Featured Work
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-3">
              {/* Café */}
              <div className="p-3.5 rounded-xl bg-[#2B1B14] border border-[#4A3427] text-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <Coffee className="w-3.5 h-3.5 text-[#C47D4C]" />
                    <span>Brew &amp; Bloom Café</span>
                  </span>
                  <span className="text-[10px] text-emerald-400">Live</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <a
                    href={CAFE_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-amber-200 hover:text-white font-medium inline-flex items-center gap-1"
                  >
                    <span>Website</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => onOpenLiveDemo && onOpenLiveDemo("cafe")}
                    className="text-[11px] text-[#C47D4C] hover:text-white transition-colors"
                  >
                    Preview
                  </button>
                </div>
              </div>

              {/* Academy */}
              <div className="p-3.5 rounded-xl bg-[#2B1B14] border border-[#4A3427] text-xs">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-bold text-white flex items-center gap-1.5">
                    <GraduationCap className="w-3.5 h-3.5 text-amber-400" />
                    <span>Haldia Learning Academy</span>
                  </span>
                  <span className="text-[10px] text-blue-400">Live</span>
                </div>
                <div className="flex items-center gap-3 mt-2">
                  <a
                    href={ACADEMY_DEMO_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-[11px] text-sky-200 hover:text-white font-medium inline-flex items-center gap-1"
                  >
                    <span>Portal</span>
                    <ExternalLink className="w-3 h-3" />
                  </a>
                  <button
                    onClick={() => onOpenLiveDemo && onOpenLiveDemo("academy")}
                    className="text-[11px] text-[#C47D4C] hover:text-white transition-colors"
                  >
                    Preview
                  </button>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Strip */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#8B6B52]">
          <div>
            &copy; 2026 PRIME FOCUS. All rights reserved.
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 text-xs font-medium text-[#EDE2D4] hover:text-[#C47D4C] transition-colors"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
