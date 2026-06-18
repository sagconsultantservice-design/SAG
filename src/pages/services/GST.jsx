import React from "react";
import { Percent } from "lucide-react";
import ServicePage from "@/components/services/ServicePage";

const relatedServices = [
  { name: "Income Tax Filings", path: "/services/income-tax" },
  { name: "TDS Filings", path: "/services/tds" },
  { name: "ROC Filings", path: "/services/roc-filings" },
  { name: "Company Incorporation", path: "/services/company-incorporation" },
  { name: "MSME Registration", path: "/services/msme" },
];

export default function GST() {
  return (
    <ServicePage
      icon={Percent}
      title="GST Registration & Filings"
      subtitle="Complete GST solutions including registration, return filing, and expert consultation for your business."
      description="From GST registration to monthly, quarterly, and annual return filing, we provide end-to-end GST compliance services. Our experts stay updated with the latest GST regulations to ensure your business remains fully compliant and avoids penalties."
      items={[
        "GST Registration (New & Amendment)",
        "GST Return Filing (GSTR-1, GSTR-3B, GSTR-9)",
        "GST Consultation & Advisory",
        "GST Audit Support",
        "Input Tax Credit Reconciliation",
        "E-Way Bill Management",
      ]}
      // relatedServices={relatedServices}
    />
  );
}