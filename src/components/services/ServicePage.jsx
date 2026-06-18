import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";
import SEO from "@/components/SEO";

const placeholderImage = "https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1400&q=80";

export default function ServicePage({ icon: Icon, title, subtitle, description, items, relatedServices }) {
  return (
    <div className="pt-20 bg-background text-foreground min-h-screen">
      <SEO 
        title={`${title} - SAG Consultancy Services`}
        description={subtitle}
      />
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={placeholderImage} alt={title} className="w-full h-full object-cover opacity-30" />
          <div className="absolute inset-0 bg-[#082B5B]/90" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <div className="inline-flex items-center justify-center mb-6 w-16 h-16 rounded-3xl bg-[#F4B223]/20 text-[#F4B223]">
              <Icon className="w-8 h-8" />
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-display font-bold text-white mb-4">{title}</h1>
            <p className="max-w-3xl text-lg font-body text-white/70">{subtitle}</p>
          </motion.div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 grid gap-12 lg:grid-cols-5">
          <div className="lg:col-span-3">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
              <h2 className="text-3xl font-display font-semibold text-foreground mb-6">What We Offer</h2>
              <p className="text-base font-body text-muted-foreground leading-relaxed mb-10">{description}</p>
              <div className="grid gap-4">
                {items.map((item) => (
                  <div key={item} className="flex items-start gap-4 p-5 bg-card border border-border rounded-3xl">
                    <CheckCircle className="w-5 h-5 text-[#F4B223] mt-1" />
                    <p className="font-body text-foreground">{item}</p>
                  </div>
                ))}
              </div>
              <Link to="/contact" className="inline-flex items-center gap-3 mt-10 px-8 py-4 rounded-3xl bg-[#F4B223] text-[#082B5B] font-semibold hover:opacity-90 transition">
                Contact For Service
                <ArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          
        </div>
      </section>
    </div>
  );
}
