import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowDown } from "lucide-react";
import { motion } from "framer-motion";

const HERO_IMG = "/public/images/img_1.png"; 
export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={HERO_IMG}
          alt="Modern glass skyscraper reflecting golden sunrise"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#082B5B]/95 via-[#082B5B]/80 to-[#082B5B]/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#082B5B]/60 to-transparent" />
      </div>

      {/* Watermark */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 pointer-events-none select-none">
        <span className="text-white/[0.03] font-display text-[40rem] font-bold leading-none">S</span>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full mb-8 border border-white/10">
              <div className="w-2 h-2 rounded-full bg-[#F4B223] animate-pulse" />
              <span className="text-sm font-body text-white/80 tracking-wide">
                Trusted by 500+ Businesses Across India
              </span>
            </div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-[1.1] mb-6"
          >
            Your Business,{" "}
            <span className="italic text-[#F4B223]">Our Expertise.</span>
            <br />
            Your Growth,{" "}
            <span className="italic text-[#F4B223]">Our Priority.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            className="text-lg sm:text-xl font-body text-white/70 leading-relaxed mb-10 max-w-2xl"
          >
            We simplify every legal, tax, and compliance process so you can focus on growing your business.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link
              to="/services/roc-filings"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#F4B223] text-[#082B5B] rounded-xl text-base font-body font-semibold hover:bg-[#F4B223]/90 transition-all"
            >
              Explore Services
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              to="/contact"
              className="group inline-flex items-center justify-center gap-2 px-8 py-4 bg-white/10 backdrop-blur-sm text-white border border-white/20 rounded-xl text-base font-body font-semibold hover:bg-white/20 transition-all"
            >
              Contact Now
            </Link>
          </motion.div>

          {/* Trust badges */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1 }}
            className="mt-16 flex flex-wrap items-center gap-8 text-white/40"
          >
            {["100% Compliant", "Timely Delivery", "Data Security", "Expert Support"].map((badge) => (
              <div key={badge} className="flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-[#F4B223]" />
                <span className="text-xs font-body tracking-widest uppercase">{badge}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        {/* <div className="flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs font-body tracking-widest uppercase">Scroll</span>
          <ArrowDown className="w-4 h-4 animate-bounce" />
        </div> */}
      </motion.div>
    </section>
  );
}