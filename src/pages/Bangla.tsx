import { useEffect } from "react";
import { useLanguageStore } from "@/lib/i18n";
import Navbar from "../components/landing/Navbar";
import Hero from "../components/landing/Hero";
import Stats from "../components/landing/Stats";
import Features from "../components/landing/Features";
import HowItWorks from "../components/landing/HowItWorks";
import StatementsSection from "../components/landing/StatementsSection";
import CostComparison from "../components/landing/CostComparison";
import Testimonials from "../components/landing/Testimonials";
import Pricing from "../components/landing/Pricing";
import FAQ from "../components/landing/FAQ";
import CTASection from "../components/landing/CTASection";
import Footer from "../components/landing/Footer";

const Bangla = () => {
  const { setLanguage } = useLanguageStore();

  useEffect(() => {
    // Set language to Bangla when this page is visited
    setLanguage('bn');
  }, [setLanguage]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <Hero />
      <Stats />
      <Features />
      <HowItWorks />
      <StatementsSection />
      <CostComparison />
      <Pricing />
      <Testimonials />
      <FAQ />
      <CTASection />
      <Footer />
    </div>
  );
};

export default Bangla;
