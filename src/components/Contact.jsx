import React, { useState, useEffect } from "react";
import confetti from "canvas-confetti";
import ScrollReveal from "./ScrollReveal";
import {
  Send,
  MessageCircle,
  PhoneCall,
  CheckCircle2,
  Sparkles,
  ArrowRight,
  Copy,
} from "lucide-react";

export default function Contact({ preselectedPackage, preselectedService }) {
  const [formData, setFormData] = useState({
    name: "",
    businessName: "",
    businessType: "Café / Restaurant",
    phone: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (preselectedPackage) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `I am interested in the ${preselectedPackage} package for my business.`,
      }));
    }
  }, [preselectedPackage]);

  useEffect(() => {
    if (preselectedService) {
      setFormData((prev) => ({
        ...prev,
        message: prev.message || `I would like to inquire about your ${preselectedService} service.`,
      }));
    }
  }, [preselectedService]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const generateWhatsAppMessage = () => {
    const text = `*PRIME FOCUS — Project Enquiry*
----------------------------------------
*Name:* ${formData.name || "Business Owner"}
*Business Name:* ${formData.businessName || "Not specified"}
*Business Type:* ${formData.businessType}
*Phone / WhatsApp:* ${formData.phone || "Not specified"}
*Message:*
${formData.message || "Hello PRIME FOCUS team, I would like to talk about building a website for my business."}
----------------------------------------`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e) => {
    if (e) e.preventDefault();
    if (!formData.name && !formData.businessName && !formData.phone) {
      alert("Please provide at least your Name or Phone number.");
      return;
    }

    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 },
        colors: ["#6F4E37", "#C47D4C", "#2B1B14", "#D4AF37"],
      });
    } catch (err) {}

    setSubmitted(true);

    const waUrl = `https://wa.me/?text=${generateWhatsAppMessage()}`;
    window.open(waUrl, "_blank");
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    try {
      confetti({
        particleCount: 100,
        spread: 80,
        origin: { y: 0.6 },
        colors: ["#6F4E37", "#C47D4C", "#2B1B14", "#D4AF37"],
      });
    } catch (err) {}

    setSubmitted(true);
  };

  const handleCopySummary = () => {
    const plainText = `PRIME FOCUS Project Enquiry:
Name: ${formData.name}
Business: ${formData.businessName}
Type: ${formData.businessType}
Phone/WhatsApp: ${formData.phone}
Message: ${formData.message}`;

    navigator.clipboard.writeText(plainText);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 bg-[#2B1B14] text-[#F5EFE6] relative overflow-hidden paper-texture-dark">
      {/* Warm ambient background glow */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#C47D4C]/10 rounded-full blur-3xl pointer-events-none"></div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Direct Headline & Context */}
          <div className="lg:col-span-5">
            <ScrollReveal direction="up">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#3A241B] border border-[#6F4E37]/50 text-[#C47D4C] text-xs font-mono font-medium mb-4 uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Start the Conversation</span>
              </div>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold text-white leading-[1.15] mb-6">
                Let's Talk About <br />
                <span className="italic font-normal font-serif text-amber-200">
                  Your Business.
                </span>
              </h2>

              <p className="text-base sm:text-lg text-[#EDE2D4]/90 leading-relaxed mb-6">
                Have a business that needs a better digital presence? Tell us what you need and we'll get in touch directly.
              </p>

              <div className="p-3.5 rounded-2xl bg-[#3A241B]/80 border border-[#6F4E37]/60 text-xs text-[#EDE2D4]/80 mb-6 space-y-1">
                <div className="font-bold text-amber-200 flex items-center gap-1.5">
                  <span>🌍 International Clients &amp; Foreign Quotes</span>
                </div>
                <p className="text-[11px] text-[#EDE2D4]/70 leading-relaxed">
                  Dual pricing provided in <strong>₹ INR | $ USD</strong> based on our documented reference rate (1 USD ≈ ₹83.33 INR, Oct 2026). Payments settled via <strong>Stripe, Wise, and PayPal</strong>.
                </p>
              </div>

              <div className="pt-1">
                <a
                  href="#work"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#3A241B] hover:bg-[#4A3427] text-white text-xs font-semibold border border-[#6F4E37] transition-all"
                >
                  <span>Explore Our Work</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C47D4C]" />
                </a>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Clean Enquiry Form */}
          <div className="lg:col-span-7">
            <ScrollReveal direction="up" delay={150}>
              <div className="bg-[#1F140E] border border-[#4A3427] rounded-3xl p-6 sm:p-10 shadow-2xl">
                
                {!submitted ? (
                  <form onSubmit={handleFormSubmit} className="space-y-4">
                    <div className="border-b border-[#4A3427] pb-4 mb-2">
                      <h3 className="font-serif font-bold text-xl text-white">
                        Send an Enquiry
                      </h3>
                      <p className="text-xs text-[#A88970] mt-1">
                        Fill out your business details below to get in touch with our team.
                      </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Name */}
                      <div>
                        <label className="block text-xs font-medium text-[#EDE2D4] mb-1.5">
                          Your Name *
                        </label>
                        <input
                          type="text"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="e.g. Rahul Sharma"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#2B1B14] border border-[#4A3427] text-white placeholder-[#8B6B52] text-xs focus:outline-none focus:border-[#C47D4C]"
                        />
                      </div>

                      {/* Business Name */}
                      <div>
                        <label className="block text-xs font-medium text-[#EDE2D4] mb-1.5">
                          Business Name *
                        </label>
                        <input
                          type="text"
                          name="businessName"
                          required
                          value={formData.businessName}
                          onChange={handleChange}
                          placeholder="e.g. Daily Roast Café"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#2B1B14] border border-[#4A3427] text-white placeholder-[#8B6B52] text-xs focus:outline-none focus:border-[#C47D4C]"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      {/* Business Type */}
                      <div>
                        <label className="block text-xs font-medium text-[#EDE2D4] mb-1.5">
                          Business Type
                        </label>
                        <select
                          name="businessType"
                          value={formData.businessType}
                          onChange={handleChange}
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#2B1B14] border border-[#4A3427] text-white text-xs focus:outline-none focus:border-[#C47D4C]"
                        >
                          <option value="Café / Restaurant">Café / Restaurant</option>
                          <option value="Bakery / Cloud Kitchen">Bakery / Cloud Kitchen</option>
                          <option value="Retail Shop / Boutique">Retail Shop / Boutique</option>
                          <option value="Coaching Centre / Institute">Coaching Centre / Institute</option>
                          <option value="Professional Services">Professional Services</option>
                          <option value="Other Local Business">Other Local Business</option>
                        </select>
                      </div>

                      {/* WhatsApp / Phone */}
                      <div>
                        <label className="block text-xs font-medium text-[#EDE2D4] mb-1.5">
                          Phone / WhatsApp *
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          placeholder="+91 98765 43210"
                          className="w-full px-3.5 py-2.5 rounded-xl bg-[#2B1B14] border border-[#4A3427] text-white placeholder-[#8B6B52] text-xs focus:outline-none focus:border-[#C47D4C]"
                        />
                      </div>
                    </div>

                    {/* Message */}
                    <div>
                      <label className="block text-xs font-medium text-[#EDE2D4] mb-1.5">
                        Message / What do you need?
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="e.g. We need a modern café website with our menu and location..."
                        className="w-full px-3.5 py-2.5 rounded-xl bg-[#2B1B14] border border-[#4A3427] text-white placeholder-[#8B6B52] text-xs focus:outline-none focus:border-[#C47D4C] resize-none"
                      ></textarea>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-2 flex flex-col sm:flex-row gap-3">
                      <button
                        type="button"
                        onClick={handleWhatsAppSubmit}
                        className="flex-1 py-3.5 px-5 rounded-xl bg-[#25D366] hover:bg-[#20bd5a] text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all transform hover:-translate-y-0.5"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Send via WhatsApp</span>
                      </button>

                      <button
                        type="submit"
                        className="py-3.5 px-6 rounded-xl bg-[#F5EFE6] hover:bg-white text-[#2B1B14] font-bold text-xs flex items-center justify-center gap-2 transition-all"
                      >
                        <span>Send Enquiry</span>
                        <Send className="w-3.5 h-3.5" />
                      </button>
                    </div>

                    <p className="text-[11px] text-center text-[#8B6B52] pt-1">
                      🔒 We respect your privacy. No spam.
                    </p>
                  </form>
                ) : (
                  /* Post-Submission Summary */
                  <div className="py-6 text-center animate-in fade-in duration-300">
                    <div className="w-14 h-14 rounded-full bg-emerald-900/60 border border-emerald-500/40 text-emerald-400 flex items-center justify-center mx-auto mb-4">
                      <CheckCircle2 className="w-8 h-8" />
                    </div>

                    <h3 className="font-serif font-bold text-2xl text-white mb-2">
                      Enquiry Summary Ready
                    </h3>

                    <p className="text-xs sm:text-sm text-[#EDE2D4]/80 max-w-md mx-auto mb-6">
                      Thank you, <strong className="text-white">{formData.name || "friend"}</strong>! You can now send this enquiry directly to WhatsApp or copy the summary.
                    </p>

                    <div className="p-4 rounded-xl bg-[#2B1B14] border border-[#4A3427] text-left text-xs font-mono text-[#EDE2D4]/90 space-y-1.5 mb-6">
                      <div><span className="text-[#8B6B52]">Name:</span> {formData.name || "Business Owner"}</div>
                      <div><span className="text-[#8B6B52]">Business:</span> {formData.businessName || "Local Business"} ({formData.businessType})</div>
                      <div><span className="text-[#8B6B52]">Contact:</span> {formData.phone}</div>
                      {formData.message && <div><span className="text-[#8B6B52]">Message:</span> {formData.message}</div>}
                    </div>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
                      <button
                        onClick={handleWhatsAppSubmit}
                        className="w-full sm:w-auto px-6 py-3 rounded-xl bg-[#25D366] text-stone-950 font-bold text-xs flex items-center justify-center gap-2 shadow"
                      >
                        <MessageCircle className="w-4 h-4 fill-current" />
                        <span>Send to WhatsApp Now</span>
                      </button>

                      <button
                        onClick={handleCopySummary}
                        className="w-full sm:w-auto px-5 py-3 rounded-xl bg-[#3A241B] text-[#EDE2D4] hover:text-white text-xs font-medium border border-[#6F4E37] flex items-center justify-center gap-2"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        <span>{copied ? "Copied!" : "Copy Enquiry"}</span>
                      </button>
                    </div>

                    <button
                      onClick={() => setSubmitted(false)}
                      className="mt-6 text-xs text-[#8B6B52] hover:text-[#EDE2D4] underline"
                    >
                      Edit details
                    </button>
                  </div>
                )}

              </div>
            </ScrollReveal>
          </div>

        </div>

      </div>
    </section>
  );
}
