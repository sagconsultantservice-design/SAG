import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";

const features = [
  { label: "Trusted Partner", desc: "Reliable compliance for Startups & SMEs" },
  { label: "Expert Team", desc: "Professional tax and legal consultants" },
  { label: "Seamless Filings", desc: "Accurate and timely ROC & GST filings" },
  { label: "Client Focused", desc: "Dedicated to your business growth" },
];

export default function StatsSection() {
  const [inView, setInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setInView(true); },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 lg:py-24 bg-primary relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-6">
          {features.map((feature, i) => (
            <motion.div
              key={feature.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="text-center p-8 bg-card/5 backdrop-blur-sm rounded-2xl border border-primary-foreground/10 hover:border-accent/40 transition-colors"
            >
              <h3 className="font-display text-2xl font-bold text-accent mb-3">
                {feature.label}
              </h3>
              <p className="text-sm font-body text-primary-foreground/80 leading-relaxed">
                {feature.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}