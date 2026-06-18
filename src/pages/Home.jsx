import React from "react";
import HeroSection from "@/components/home/HeroSection";
import WhyChooseUs from "@/components/home/WhyChooseUs";
import ExpertiseSection from "@/components/home/ExpertiseSection";
import StatsSection from "@/components/home/StatsSection";
import CTASection from "@/components/home/CTASection";
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