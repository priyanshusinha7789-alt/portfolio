import React, { useState, useEffect } from "react";
import { MessageCircle, Sparkles, X } from "lucide-react";

export default function QuickWhatsAppButton() {
  const [visible, setVisible] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setVisible(true);
      } else {
        setVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleWhatsAppClick = () => {
    const text = encodeURIComponent(
      "Hello PRIME FOCUS! I am interested in building a website for my business and would love to know more."
    );
    window.open(`https://wa.me/?text=${text}`, "_blank");
  };

  if (!visible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2 animate-in fade-in slide-in-from-bottom-6 duration-300">
      
      {/* Interactive Tooltip Pop */}
      {!tooltipDismissed && (
        <div className="relative bg-[#2B1B14] text-[#F5EFE6] border border-[#6F4E37] px-3.5 py-2 rounded-2xl shadow-xl text-xs max-w-xs flex items-center gap-2 animate-bounce-subtle">
          <Sparkles className="w-3.5 h-3.5 text-[#C47D4C] shrink-0" />
          <span>Have a quick question? Chat directly with us!</span>
          <button
            onClick={() => setTooltipDismissed(true)}
            className="text-[#A88970] hover:text-white ml-1 p-0.5"
            aria-label="Dismiss tooltip"
          >
            <X className="w-3.5 h-3.5" />
          </button>
        </div>
      )}

      {/* Floating Action Button */}
      <button
        onClick={handleWhatsAppClick}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold text-xs shadow-xl hover:shadow-2xl transition-all transform hover:scale-105"
        aria-label="Chat with PRIME FOCUS on WhatsApp"
      >
        <MessageCircle className="w-5 h-5 fill-current" />
        <span className="hidden sm:inline font-sans">Chat on WhatsApp</span>
      </button>
    </div>
  );
}
