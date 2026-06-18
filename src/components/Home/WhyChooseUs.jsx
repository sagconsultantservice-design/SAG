import React from "react";
import { motion } from "framer-motion";
import { Shield, Zap, CheckCircle, IndianRupee, Users, Award } from "lucide-react";

const reasons = [
  { icon: Users, title: "Experienced Professionals", desc: "A team of seasoned experts with deep domain knowledge in taxation, compliance, and business advisory." },
  { icon: Zap, title: "Fast Service Delivery", desc: "Quick turnaround on all filings and registrations, ensuring you never miss a deadline." },
  { icon: CheckCircle, title: "Complete Compliance Support", desc: "End-to-end compliance management for your business, from incorporation to annual filings." },
  { icon: IndianRupee, title: "Affordable Pricing", desc: "Transparent and competitive pricing with no hidden charges or surprise fees." },
  { icon: Shield, title: "Personalized Guidance", desc: "Every client receives dedicated attention with tailored solutions for their unique needs." },
  { icon: Award, title: "Trusted Business Partner", desc: "A reliable partner committed to your business success with integrity and professionalism." },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      {/* Grid lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="max-w-7xl mx-auto h-full px-4 sm:px-6 lg:px-8 relative">
          {[0, 1, 2, 3].map((i) => (
            <div
              key={i}
              className="absolute top-0 bottom-0 w-px bg-border/50"
              style={{ left: `${25 * (i + 1)}%` }}
            />
          ))}
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-accent font-semibold">
            Why Choose Us
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4">
            Why Choose SAG <span className="italic text-accent">Consultancy</span> Services?
          </h2>
          <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group p-8 rounded-2xl bg-card border border-border hover:border-accent/30 hover:shadow-xl hover:shadow-accent/5 transition-all duration-500"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6 group-hover:bg-accent group-hover:scale-110 transition-all duration-500">
                <reason.icon className="w-7 h-7 text-accent group-hover:text-accent-foreground transition-colors duration-500" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                {reason.title}
              </h3>
              <p className="text-sm font-body text-muted-foreground leading-relaxed">
                {reason.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}