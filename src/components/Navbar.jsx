import React, { useState, useEffect } from "react";
import { NAV_LINKS, CAFE_DEMO_URL } from "../data/websiteData";
import { Menu, X, ArrowUpRight, Sparkles, Coffee, GraduationCap } from "lucide-react";

export default function Navbar({ onOpenLiveDemo }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Determine active section
      const sections = NAV_LINKS.map(link => link.href.substring(1));
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#FCFAF7]/90 backdrop-blur-md border-b border-[#E3D5C5]/80 py-3.5 shadow-sm shadow-[#2B1B14]/5"
            : "bg-transparent py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Brand Logo */}
            <a
              href="#hero"
              onClick={(e) => handleNavClick(e, "#hero")}
              className="group flex items-center gap-3 focus:outline-none"
              aria-label="PRIME FOCUS home"
            >
              <div className="w-9 h-9 rounded-lg bg-[#2B1B14] flex items-center justify-center text-[#F5EFE6] shadow-sm group-hover:bg-[#6F4E37] transition-colors">
                {/* Custom Minimal Aperture / Focus Icon */}
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full border border-[#C47D4C]/60 group-hover:rotate-45 transition-transform duration-500"></div>
                  <div className="w-2.5 h-2.5 rounded-full bg-[#F5EFE6]"></div>
                </div>
              </div>
              <div className="flex flex-col">
                <span className="font-bold tracking-tight text-lg sm:text-xl text-[#2B1B14] font-serif leading-none">
                  PRIME FOCUS
                </span>
                <span className="text-[10px] tracking-widest text-[#8B6B52] font-semibold uppercase mt-0.5">
                  Digital Studio
                </span>
              </div>
            </a>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 bg-[#F5EFE6]/80 px-4 py-1.5 rounded-full border border-[#E3D5C5] shadow-xs" aria-label="Main Navigation">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-3.5 py-1.5 text-xs font-medium rounded-full transition-all duration-200 ${
                      isActive
                        ? "bg-[#2B1B14] text-[#F5EFE6] shadow-xs"
                        : "text-[#3A241B] hover:text-[#2B1B14] hover:bg-[#EDE2D4]/70"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Right Action Buttons */}
            <div className="hidden lg:flex items-center gap-2">
              {/* Featured Café Pill */}
              <button
                onClick={() => onOpenLiveDemo && onOpenLiveDemo("cafe")}
                className="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#6F4E37] bg-[#EDE2D4]/70 hover:bg-[#EDE2D4] border border-[#E3D5C5] rounded-full transition-all"
                title="Preview Featured Café Project"
              >
                <Coffee className="w-3.5 h-3.5 text-[#C47D4C]" />
                <span>Café Demo</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-600 animate-pulse"></span>
              </button>

              {/* Haldia Learning Academy Pill */}
              <button
                onClick={() => onOpenLiveDemo && onOpenLiveDemo("academy")}
                className="group flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-[#6F4E37] bg-[#EDE2D4]/70 hover:bg-[#EDE2D4] border border-[#E3D5C5] rounded-full transition-all"
                title="Preview Haldia Learning Academy Project"
              >
                <GraduationCap className="w-3.5 h-3.5 text-amber-700" />
                <span>Academy Demo</span>
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-blue-600 animate-pulse"></span>
              </button>

              {/* Main CTA */}
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-full text-xs font-semibold text-[#F5EFE6] bg-[#2B1B14] hover:bg-[#6F4E37] shadow-sm hover:shadow transition-all duration-200 transform hover:-translate-y-0.5 ml-1"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>

            {/* Mobile Hamburger Button */}
            <div className="flex md:hidden items-center gap-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, "#contact")}
                className="px-3 py-1.5 text-xs font-semibold text-[#F5EFE6] bg-[#2B1B14] rounded-full"
              >
                Start
              </a>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 rounded-lg text-[#2B1B14] bg-[#F5EFE6] border border-[#E3D5C5] focus:outline-none"
                aria-label="Toggle Navigation Menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-[#FCFAF7] border-b border-[#E3D5C5] px-4 pt-3 pb-6 mt-3 shadow-lg animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="flex flex-col space-y-2">
              {NAV_LINKS.map((link) => {
                const isActive = activeSection === link.href.substring(1);
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className={`px-4 py-2.5 rounded-lg text-sm font-medium transition-colors ${
                      isActive
                        ? "bg-[#2B1B14] text-[#F5EFE6]"
                        : "text-[#3A241B] hover:bg-[#F5EFE6]"
                    }`}
                  >
                    {link.name}
                  </a>
                );
              })}

              <div className="pt-3 border-t border-[#E3D5C5] flex flex-col gap-2">
                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLiveDemo && onOpenLiveDemo("cafe");
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#6F4E37] bg-[#F5EFE6] border border-[#E3D5C5] rounded-xl"
                >
                  <Coffee className="w-4 h-4 text-[#C47D4C]" />
                  <span>View Café Live Demo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => {
                    setMobileMenuOpen(false);
                    onOpenLiveDemo && onOpenLiveDemo("academy");
                  }}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-[#6F4E37] bg-[#F5EFE6] border border-[#E3D5C5] rounded-xl"
                >
                  <GraduationCap className="w-4 h-4 text-amber-700" />
                  <span>View Academy Live Demo</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#contact"
                  onClick={(e) => handleNavClick(e, "#contact")}
                  className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#F5EFE6] bg-[#2B1B14] rounded-xl shadow-sm"
                >
                  <span>Start a Project</span>
                  <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
