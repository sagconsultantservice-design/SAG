import React from "react";
import { Building2 } from "lucide-react";
import ServicePage from "@/components/services/ServicePage";

// const relatedServices = [
//   { name: "ROC Filings", path: "/services/roc-filings" },
//   { name: "GST Registration & Filings", path: "/services/gst" },
//   { name: "MSME Registration", path: "/services/msme" },
//   { name: "DSC Services", path: "/services/dsc" },
//   { name: "Trademark Registration", path: "/services/trademark" },
// ];

export default function CompanyIncorporation() {
  return (
    <ServicePage
      icon={Building2}
      title="Company Incorporation"
      subtitle="End-to-end company registration services for Private Limited, LLP, OPC, and Startup entities."
      description="Starting a business begins with the right foundation. Our company incorporation services cover everything from name approval to certificate of incorporation. We guide you through the entire registration process, ensuring compliance with all regulatory requirements from day one."
      items={[
        "Private Limited Company Registration",
        "LLP (Limited Liability Partnership) Registration",
        "OPC (One Person Company) Registration",
        "Startup India Registration",
        "Name Approval & Reservation",
        "MOA & AOA Drafting",
      ]}
    />
  );
}