import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <span className="text-xs font-body tracking-[0.3em] uppercase text-accent font-semibold">
            Get Started
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-foreground mt-4 leading-tight">
            Need <span className="italic text-accent">Professional</span> Consultancy?
          </h2>
          <p className="mt-6 text-lg font-body text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Let our experts handle your tax, compliance, and business registration needs while you focus on what matters most — growing your business.
          </p>
          <div className="mt-10">
            <Link
              to="/contact"
              className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground rounded-xl text-lg font-body font-semibold hover:shadow-2xl hover:shadow-accent/20 hover:scale-105 transition-all duration-300"
            >
              Contact Us Today
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}