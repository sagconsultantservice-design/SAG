import React from "react";
import { Factory } from "lucide-react";
import ServicePage from "@/components/services/ServicePage";

const relatedServices = [
  { name: "Company Incorporation", path: "/services/company-incorporation" },
  { name: "GST Registration & Filings", path: "/services/gst" },
  { name: "Trademark Registration", path: "/services/trademark" },
  { name: "ROC Filings", path: "/services/roc-filings" },
  { name: "Income Tax Filings", path: "/services/income-tax" },
];

export default function MSME() {
  return (
    <ServicePage
      icon={Factory}
      title="MSME Registration"
      subtitle="Register your business under MSME to unlock government benefits, subsidies, and priority sector lending."
      description="MSME registration opens doors to numerous government benefits including priority sector lending, lower interest rates, tax rebates, and government tender preferences. We handle the entire Udyam registration process and guide you through the benefits you can avail."
      items={[
        "MSME / Udyam Registration",
        "Udyam Certificate Updates",
        "Government Benefits Guidance",
        "Scheme Eligibility Assessment",
        "NSIC Registration Assistance",
        "Subsidy & Grant Applications",
      ]}
    />
  );
}