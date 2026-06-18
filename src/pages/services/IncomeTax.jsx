import React from "react";
import { Receipt } from "lucide-react";
import ServicePage from "@/components/services/ServicePage";

const relatedServices = [
  { name: "GST Registration & Filings", path: "/services/gst" },
  { name: "TDS Filings", path: "/services/tds" },
  { name: "ROC Filings", path: "/services/roc-filings" },
  { name: "Company Incorporation", path: "/services/company-incorporation" },
  { name: "Visa Turnover Certification", path: "/services/visa-turnover" },
];

export default function IncomeTax() {
  return (
    <ServicePage
      icon={Receipt}
      title="Income Tax Filings"
      subtitle="Expert tax planning and filing assistance for individuals and businesses to maximize savings and ensure compliance."
      description="Navigating income tax regulations can be complex. Our team of experts provides comprehensive tax planning and filing services, ensuring you pay only what you owe while maximizing your deductions and exemptions. We handle everything from individual returns to complex business filings."
      items={[
        "Individual Tax Filing (ITR-1 to ITR-7)",
        "Business Tax Filing & Returns",
        "Tax Planning & Advisory",
        "Tax Consultation & Assessment",
        "Capital Gains Tax Filing",
        "NRI Tax Filing Services",
      ]}
    />
  );
}