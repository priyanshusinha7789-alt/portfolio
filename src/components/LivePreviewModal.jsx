import React, { useState, useEffect } from "react";
import { PROJECTS, CAFE_DEMO_URL, ACADEMY_DEMO_URL } from "../data/websiteData";
import {
  X,
  ExternalLink,
  Laptop,
  Smartphone,
  RotateCw,
  Sparkles,
  Coffee,
  GraduationCap,
} from "lucide-react";

export default function LivePreviewModal({ isOpen, onClose, activeProjectId = "cafe" }) {
  const [selectedId, setSelectedId] = useState(activeProjectId);
  const [device, setDevice] = useState("desktop"); // 'desktop' or 'mobile'
  const [iframeKey, setIframeKey] = useState(0);

  useEffect(() => {
    if (activeProjectId) {
      setSelectedId(activeProjectId);
    }
  }, [activeProjectId]);

  if (!isOpen) return null;

  const currentProject = PROJECTS.find((p) => p.id === selectedId) || PROJECTS[0];

  const handleSelectProject = (id) => {
    setSelectedId(id);
    setIframeKey((prev) => prev + 1);
  };

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-black/85 backdrop-blur-md animate-in fade-in duration-200"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div className="relative w-full max-w-6xl h-[92vh] max-h-[860px] bg-[#1F140E] border border-[#4A3427] rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        
        {/* Modal Window Topbar */}
        <div className="flex flex-wrap items-center justify-between px-4 py-3 bg-[#2B1B14] border-b border-[#3A241B] text-[#EDE2D4] gap-3">
          
          {/* Left: Window Controls & Active Project Indicator */}
          <div className="flex items-center gap-3">
            <button
              onClick={onClose}
              className="w-3.5 h-3.5 rounded-full bg-red-500/80 hover:bg-red-500 transition-colors focus:outline-none"
              title="Close Preview"
            />
            <span className="w-3.5 h-3.5 rounded-full bg-amber-500/80 inline-block" />
            <span className="w-3.5 h-3.5 rounded-full bg-emerald-500/80 inline-block" />
            
            {/* Project Switcher Pills */}
            <div className="ml-2 flex items-center bg-[#150D09] p-0.5 rounded-xl border border-[#4A3427]">
              <button
                onClick={() => handleSelectProject("cafe")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedId === "cafe"
                    ? "bg-[#6F4E37] text-white shadow-xs"
                    : "text-[#A88970] hover:text-[#EDE2D4]"
                }`}
              >
                <Coffee className="w-3.5 h-3.5 text-[#C47D4C]" />
                <span>Café Demo</span>
              </button>

              <button
                onClick={() => handleSelectProject("academy")}
                className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold transition-all ${
                  selectedId === "academy"
                    ? "bg-[#6F4E37] text-white shadow-xs"
                    : "text-[#A88970] hover:text-[#EDE2D4]"
                }`}
              >
                <GraduationCap className="w-3.5 h-3.5 text-blue-400" />
                <span>Academy Demo</span>
              </button>
            </div>
          </div>

          {/* Center: Device Switcher */}
          <div className="flex items-center bg-[#1F140E] p-1 rounded-xl border border-[#4A3427]">
            <button
              onClick={() => setDevice("desktop")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                device === "desktop"
                  ? "bg-[#6F4E37] text-white shadow-xs"
                  : "text-[#A88970] hover:text-white"
              }`}
            >
              <Laptop className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Desktop</span>
            </button>
            <button
              onClick={() => setDevice("mobile")}
              className={`flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-medium transition-all ${
                device === "mobile"
                  ? "bg-[#6F4E37] text-white shadow-xs"
                  : "text-[#A88970] hover:text-white"
              }`}
            >
              <Smartphone className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Mobile (390px)</span>
            </button>
          </div>

          {/* Right: Refresh & Open in New Tab & Close */}
          <div className="flex items-center gap-2">
            <button
              onClick={() => setIframeKey((prev) => prev + 1)}
              className="p-1.5 rounded-lg text-[#A88970] hover:text-white hover:bg-[#3A241B] transition-colors"
              title="Reload Preview"
            >
              <RotateCw className="w-3.5 h-3.5" />
            </button>

            <a
              href={currentProject.url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold bg-[#C47D4C] hover:bg-[#A86435] text-white rounded-lg transition-colors shadow"
            >
              <span>Open in New Tab</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-[#EDE2D4] hover:bg-[#3A241B] transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

        </div>

        {/* Modal URL Simulation Bar */}
        <div className="px-4 py-1.5 bg-[#170E0A] border-b border-[#3A241B] flex items-center justify-between text-xs font-mono text-[#8B6B52]">
          <div className="flex items-center gap-2 truncate">
            <span className="text-emerald-500">🔒 https://</span>
            <span className="text-[#EDE2D4]/80 truncate">
              {currentProject.url.replace(/^https?:\/\//, "")}
            </span>
          </div>
          <span className="text-[11px] hidden md:inline text-amber-200/80 font-serif">
            {currentProject.name} — {currentProject.category}
          </span>
        </div>

        {/* Iframe Viewport Container */}
        <div className="flex-1 bg-[#150D09] overflow-auto flex items-center justify-center p-2 relative">
          <div
            className={`h-full transition-all duration-300 rounded-xl overflow-hidden shadow-2xl bg-white ${
              device === "desktop"
                ? "w-full max-w-full"
                : "w-[390px] max-w-full border-8 border-stone-800"
            }`}
          >
            <iframe
              key={`${selectedId}-${iframeKey}`}
              src={currentProject.url}
              title={currentProject.name}
              className="w-full h-full border-0"
              allow="geolocation; camera; microphone"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
