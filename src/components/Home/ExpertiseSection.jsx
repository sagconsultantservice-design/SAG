import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  FileText, Building2, Receipt, Percent,
  FileCheck, Factory, KeyRound, Stamp, Globe
} from "lucide-react";

const expertise = [
  { icon: FileText, title: "ROC Filings", desc: "Company filing and compliance services.", path: "/services/roc-filings" },
  { icon: Building2, title: "Company Incorporation", desc: "Private Limited, LLP, OPC & Startup registration.", path: "/services/company-incorporation" },
  { icon: Receipt, title: "Income Tax", desc: "Tax planning and filing assistance.", path: "/services/income-tax" },
  { icon: Percent, title: "GST Services", desc: "Registration, filing, and consultation.", path: "/services/gst" },
  { icon: FileCheck, title: "TDS Filings", desc: "Registration and quarterly returns.", path: "/services/tds" },
  { icon: Factory, title: "MSME Registration", desc: "Government benefits for businesses.", path: "/services/msme" },
  { icon: KeyRound, title: "DSC Services", desc: "Digital Signature Certificates.", path: "/services/dsc" },
  { icon: Stamp, title: "Trademark Registration", desc: "Protect your brand identity.", path: "/services/trademark" },
  { icon: Globe, title: "Visa Turnover Certification", desc: "Financial and turnover certifications.", path: "/services/visa-turnover" },
];

export default function ExpertiseSection() {
  return (
    <section className="py-24 lg:py-32 bg-muted/50 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-accent font-semibold">
            Our Services
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
            Our <span className="italic text-accent">Expertise</span>
          </h2>
          <p className="mt-4 text-muted-foreground font-body max-w-2xl mx-auto">
            From incorporation to compliance, we offer comprehensive consultancy services tailored to your business needs.
          </p>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {expertise.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.06 }}
            >
              <Link
                to={item.path}
                className="group block p-6 bg-card rounded-2xl border border-border hover:border-accent/30 hover:shadow-lg hover:shadow-accent/5 transition-all duration-500"
              >
                <div className="flex items-start gap-5">
                  <div className="w-12 h-12 rounded-xl bg-primary flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors duration-500">
                    <item.icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-display text-lg font-semibold text-foreground group-hover:text-accent transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-sm font-body text-muted-foreground mt-1">{item.desc}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}