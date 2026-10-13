import React, { useState } from "react";
import IntroScreen from "./components/IntroScreen";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import WhyWeStarted from "./components/WhyWeStarted";
import FeaturedProject from "./components/FeaturedProject";
import InsideProject from "./components/InsideProject";
import ProjectFeatures from "./components/ProjectFeatures";
import Process from "./components/Process";
import WhyDifferent from "./components/WhyDifferent";
import Services from "./components/Services";
import Packages from "./components/Packages";
import Reviews from "./components/Reviews";
import Benefits from "./components/Benefits";
import FAQ from "./components/FAQ";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import LivePreviewModal from "./components/LivePreviewModal";

export default function App() {
  const [hasEntered, setHasEntered] = useState(false);
  const [liveDemoModalOpen, setLiveDemoModalOpen] = useState(false);
  const [activeProjectId, setActiveProjectId] = useState("cafe");
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  const handleOpenLiveDemo = (projectId) => {
    if (projectId) {
      setActiveProjectId(projectId);
    }
    setLiveDemoModalOpen(true);
  };

  const handleSelectPackage = (packageName) => {
    setSelectedPackage(packageName);
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleSelectService = (serviceName) => {
    setSelectedService(serviceName);
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FCFAF7] text-[#2B1B14] selection:bg-[#6F4E37] selection:text-[#F5EFE6] font-sans">
      
      {/* 1. Dedicated Studio Landing / Intro Screen */}
      {!hasEntered && (
        <IntroScreen onEnter={() => setHasEntered(true)} />
      )}

      {/* 2. Main PRIME FOCUS Portfolio Website */}
      <div
        className={`transition-opacity duration-700 ${
          hasEntered ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Navigation */}
        <Navbar onOpenLiveDemo={handleOpenLiveDemo} />

        {/* Main Content Flow */}
        <main id="main-content">
          {/* Hero Section */}
          <Hero
            activeProjectId={activeProjectId}
            onSwitchProject={setActiveProjectId}
            onOpenLiveDemo={handleOpenLiveDemo}
          />

          {/* Meet PRIME FOCUS (About) */}
          <About />

          {/* Why We Started (Storytelling Section) */}
          <WhyWeStarted />

          {/* Our Work / Featured Projects (Café & Coaching Institute) */}
          <FeaturedProject
            activeProjectId={activeProjectId}
            onSwitchProject={setActiveProjectId}
            onOpenLiveDemo={handleOpenLiveDemo}
          />

          {/* Inside the Project (6 Case Study Cards) */}
          <InsideProject
            activeProjectId={activeProjectId}
            onSwitchProject={setActiveProjectId}
          />

          {/* Project Features & "WANT TO SEE WHAT WE BUILD?" CTA Banner */}
          <ProjectFeatures
            activeProjectId={activeProjectId}
            onSwitchProject={setActiveProjectId}
            onOpenLiveDemo={handleOpenLiveDemo}
          />

          {/* How We Built It (4-Step Timeline) */}
          <Process />

          {/* Why PRIME FOCUS (6 Differentiator Pillars) */}
          <WhyDifferent />

          {/* Services (11 Clean Capabilities) */}
          <Services onSelectService={handleSelectService} />

          {/* Packages & Pricing (Starter, Business, Premium, Maintenance) */}
          <Packages onSelectPackage={handleSelectPackage} />

          {/* Customer / Project Feedback */}
          <Reviews />

          {/* Qualitative Results & Benefits */}
          <Benefits />

          {/* FAQ Accordion */}
          <FAQ />

          {/* Contact ("Let's Talk About Your Business.") */}
          <Contact
            preselectedPackage={selectedPackage}
            preselectedService={selectedService}
          />
        </main>

        {/* Footer */}
        <Footer onOpenLiveDemo={handleOpenLiveDemo} />

        {/* Interactive Overlays & Widgets */}
        <LivePreviewModal
          isOpen={liveDemoModalOpen}
          onClose={() => setLiveDemoModalOpen(false)}
          activeProjectId={activeProjectId}
        />
      </div>
    </div>
  );
}
