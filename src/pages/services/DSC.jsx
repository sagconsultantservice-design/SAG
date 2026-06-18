import React from "react";
import { KeyRound } from "lucide-react";
import ServicePage from "@/components/services/ServicePage";

const relatedServices = [
  { name: "ROC Filings", path: "/services/roc-filings" },
  { name: "Company Incorporation", path: "/services/company-incorporation" },
  { name: "Income Tax Filings", path: "/services/income-tax" },
  { name: "GST Registration & Filings", path: "/services/gst" },
  { name: "TDS Filings", path: "/services/tds" },
];

export default function DSC() {
  return (
    <ServicePage
      icon={KeyRound}
      title="DSC Services"
      subtitle="Digital Signature Certificate services for secure electronic document signing and online filings."
      description="Digital Signature Certificates (DSC) are essential for secure digital transactions and online filings. We provide new DSC issuance, renewal, and Class 3 DSC services for individuals, directors, and businesses. Our streamlined process ensures quick turnaround."
      items={[
        "New DSC Issuance",
        "DSC Renewal Services",
        "Class 3 DSC (Document Signing)",
        "DGFT DSC for Import/Export",
        "DSC for e-Tendering",
        "Organization DSC",
      ]}
      // relatedServices={relatedServices}
    />
  );
}