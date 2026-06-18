import React from "react";
import { Globe } from "lucide-react";
import ServicePage from "@/components/services/ServicePage";

const relatedServices = [
  { name: "Income Tax Filings", path: "/services/income-tax" },
  { name: "GST Registration & Filings", path: "/services/gst" },
  { name: "Company Incorporation", path: "/services/company-incorporation" },
  { name: "ROC Filings", path: "/services/roc-filings" },
  { name: "TDS Filings", path: "/services/tds" },
];

export default function VisaTurnover() {
  return (
    <ServicePage
      icon={Globe}
      title="Visa Turnover Certification"
      subtitle="Professional financial and turnover certification services for visa applications and international documentation."
      description="Planning to travel abroad? Our Visa Turnover Certification services provide the financial documentation and certifications required for visa applications. We prepare accurate turnover certificates, financial statements, and supporting documents that meet embassy requirements."
      items={[
        "Financial Certification for Visa",
        "Turnover Certification & Reports",
        "Visa Documentation Support",
        "CA-Certified Financial Statements",
        "Net Worth Certificates",
        "Sponsorship Letter Certification",
      ]}
    />
  );
}