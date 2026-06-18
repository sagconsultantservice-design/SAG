import React from "react";
import { Stamp } from "lucide-react";
import ServicePage from "@/components/services/ServicePage";

const relatedServices = [
  { name: "Company Incorporation", path: "/services/company-incorporation" },
  { name: "MSME Registration", path: "/services/msme" },
  { name: "ROC Filings", path: "/services/roc-filings" },
  { name: "GST Registration & Filings", path: "/services/gst" },
  { name: "DSC Services", path: "/services/dsc" },
];

export default function Trademark() {
  return (
    <ServicePage
      icon={Stamp}
      title="Trademark Registration"
      subtitle="Protect your brand identity with comprehensive trademark search, registration, and objection handling services."
      description="Your brand is one of your most valuable assets. Our trademark registration services ensure your brand identity is legally protected. From comprehensive trademark searches to filing and objection handling, we manage the entire process to secure your intellectual property."
      items={[
        "Trademark Search & Availability Check",
        "Trademark Application Filing",
        "Trademark Registration Certificate",
        "Objection & Opposition Handling",
        "Trademark Renewal",
        "Logo & Brand Name Protection",
      ]}
    />
  );
}