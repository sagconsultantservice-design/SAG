import React from "react";
import { FileCheck } from "lucide-react";
import ServicePage from "@/components/services/ServicePage";

const relatedServices = [
  { name: "Income Tax Filings", path: "/services/income-tax" },
  { name: "GST Registration & Filings", path: "/services/gst" },
  { name: "ROC Filings", path: "/services/roc-filings" },
  { name: "Company Incorporation", path: "/services/company-incorporation" },
  { name: "DSC Services", path: "/services/dsc" },
];

export default function TDS() {
  return (
    <ServicePage
      icon={FileCheck}
      title="TDS Filings"
      subtitle="Complete TDS registration, quarterly return filing, and compliance support for businesses and individuals."
      description="Tax Deducted at Source (TDS) compliance is crucial for every business. We handle TDS registration, quarterly return filing, and ensure you're always in compliance with the latest TDS regulations. Our team ensures timely filing to avoid interest and penalties."
      items={[
        "TDS Registration (TAN Application)",
        "Quarterly TDS Return Filing",
        "TDS Compliance Support",
        "TDS Certificate Generation",
        "Lower Deduction Certificate",
        "TDS Refund Processing",
      ]}
    />
  );
}