import React from "react";
import HeroSection from "@/components/Home/HeroSection";
import WhyChooseUs from "@/components/Home/WhyChooseUs";
import ExpertiseSection from "@/components/Home/ExpertiseSection";
import StatsSection from "@/components/Home/StatsSection";
import CTASection from "@/components/Home/CTASection";
import SEO from "@/components/SEO";

export default function Home() {
  return (
    <>
      <SEO 
        title="SAG Consultancy Services - Expert Tax & Legal Consultants"
        description="We offer robust compliance, tax, and company incorporation services for startups and SMEs. Partner with SAG Consultancy today."
      />
      <HeroSection />
      <WhyChooseUs />
      <ExpertiseSection />
      <StatsSection />
      <CTASection />
    </>
  );
}