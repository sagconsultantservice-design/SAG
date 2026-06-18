import React from "react";
import { FileText } from "lucide-react";
import ServicePage from "@/components/services/ServicePage";

const relatedServices = [
  { name: "Company Incorporation", path: "/services/company-incorporation" },
  { name: "GST Registration & Filings", path: "/services/gst" },
  { name: "Income Tax Filings", path: "/services/income-tax" },
  { name: "TDS Filings", path: "/services/tds" },
  { name: "Trademark Registration", path: "/services/trademark" },
];

export default function ROCFilings() {
  return (
    <ServicePage
      icon={FileText}
      title="ROC Filings"
      subtitle="Comprehensive company filing and compliance services to keep your business compliant with the Registrar of Companies."
      description="Stay compliant with the Registrar of Companies through our expert ROC filing services. We handle all mandatory filings, form submissions, and compliance requirements so your company's legal standing remains impeccable. Our team ensures every deadline is met and every filing is accurate."
      items={[
        "Annual Filing (AOC-4, MGT-7)",
        "Compliance Filing & Reporting",
        "Director Changes (DIN, KYC)",
        "Company Updates & Amendments",
        "Registered Office Changes",
        "Share Transfer & Allotment",
      ]}
    />
  );
}