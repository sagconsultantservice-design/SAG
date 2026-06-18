import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Target, Eye, Heart, Shield, Sparkles, Users, Award } from "lucide-react";
import SEO from "@/components/SEO";

const ABOUT_IMG = "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&q=80";
const values = [
  { icon: Shield, name: "Integrity" },
  { icon: Eye, name: "Transparency" },
  { icon: Award, name: "Professionalism" },
  { icon: Heart, name: "Commitment" },
  { icon: Sparkles, name: "Client Satisfaction" },
];

const founders = [
  { name: "Akhil K", designation: "Founder & Managing Director", color: "bg-accent" },
  { name: "Srikanth G", designation: "Co-Founder & Tax Consultant", color: "bg-primary" },
  { name: "Ganesh M", designation: "Co-Founder & Compliance Head", color: "bg-accent" },
];

export default function About() {
  const [activeFounder, setActiveFounder] = useState(null);

  return (
    <div className="pt-20">
      <SEO 
        title="About Us - SAG Consultancy Services"
        description="Learn more about SAG Consultancy Services. Built on friendship and driven by purpose, we help startups, SMEs, and established businesses stay compliant."
      />
      {/* Hero */}
      <section className="relative py-24 lg:py-32 overflow-hidden">
        <div className="absolute inset-0">
          <img src={ABOUT_IMG} alt="Professional office workspace" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082B5B]/95 to-[#082B5B]/70" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="text-xs font-body tracking-[0.3em] uppercase text-[#F4B223] font-semibold">
              Our Story
            </span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white mt-4 leading-tight">
              About SAG <span className="italic text-[#F4B223]">Consultancy</span> Services
            </h1>
            <div className="w-16 h-0.5 bg-[#F4B223] mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-xs font-body tracking-[0.3em] uppercase text-accent font-semibold">
                Who We Are
              </span>
              <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mt-4 leading-tight">
                Built on <span className="italic text-accent">Friendship,</span> Driven by <span className="italic text-accent">Purpose</span>
              </h2>
              <div className="w-16 h-0.5 bg-accent mt-6 mb-8" />
              <div className="space-y-5 text-base font-body text-muted-foreground leading-relaxed">
                <p>
                  SAG Consultancy Services was founded by three passionate friends who shared a common vision — to simplify legal, taxation, and business compliance services for entrepreneurs and businesses.
                </p>
                <p>
                  With years of experience in finance, taxation, and regulatory compliance, the founders established the company to provide reliable, transparent, and professional consultancy solutions.
                </p>
                <p>
                  Today, SAG Consultancy Services helps startups, SMEs, and established businesses stay compliant and grow confidently. Our team combines deep expertise with a personal touch, ensuring every client receives the attention and guidance they deserve.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img src="/images/3_members.png" alt="SAG Consultancy team" className="w-full h-80 lg:h-96 object-cover" />
              </div>
              {/* <div className="absolute -bottom-6 -left-6 w-24 h-24 rounded-xl bg-accent flex items-center justify-center shadow-xl">
                <div className="text-center">
                  <span className="font-display text-2xl font-bold text-accent-foreground">5+</span>
                  <span className="block text-[10px] font-body text-accent-foreground/70 uppercase tracking-wide">Years</span>
                </div>
              </div> */}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="p-10 bg-primary rounded-2xl"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/20 flex items-center justify-center mb-6">
                <Target className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-primary-foreground mb-4">Our Mission</h3>
              <p className="text-base font-body text-primary-foreground/70 leading-relaxed">
                To provide accurate, timely, and professional consultancy services that empower businesses to succeed. We strive to be the backbone of every business we serve, handling their compliance needs with precision and care.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="p-10 bg-card border border-border rounded-2xl"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7 text-accent" />
              </div>
              <h3 className="font-display text-2xl font-semibold text-foreground mb-4">Our Vision</h3>
              <p className="text-base font-body text-muted-foreground leading-relaxed">
                To become one of the most trusted consultancy firms in India. We envision a future where every business, regardless of size, has access to world-class compliance and advisory services.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-body tracking-[0.3em] uppercase text-accent font-semibold">
              Our Principles
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mt-4">
              Core <span className="italic text-accent">Values</span>
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4 lg:gap-6">
            {values.map((value, i) => (
              <motion.div
                key={value.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-3 px-6 py-4 bg-card border border-border rounded-xl hover:border-accent/30 hover:shadow-lg transition-all duration-300"
              >
                <value.icon className="w-5 h-5 text-accent" />
                <span className="text-sm font-body font-medium text-foreground">{value.name}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Founders */}
      <section className="py-24 lg:py-32 bg-muted/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <span className="text-xs font-body tracking-[0.3em] uppercase text-accent font-semibold">
              Leadership
            </span>
            <h2 className="font-display text-3xl sm:text-4xl font-semibold text-foreground mt-4">
              Meet Our <span className="italic text-accent">Founders</span>
            </h2>
            <div className="w-16 h-0.5 bg-accent mx-auto mt-6" />
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {founders.map((founder, i) => (
              <motion.div
                key={founder.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.15 }}
                onMouseEnter={() => setActiveFounder(i)}
                onMouseLeave={() => setActiveFounder(null)}
                className={`group relative p-8 rounded-2xl bg-card border border-border overflow-hidden transition-all duration-500 ${activeFounder === i ? "shadow-2xl scale-105 border-accent/30" : ""
                  }`}
              >
                <div className={`w-20 h-20 rounded-2xl ${founder.color} flex items-center justify-center mb-6 mx-auto group-hover:scale-110 transition-transform duration-500`}>
                  <Users className="w-10 h-10 text-primary-foreground" />
                </div>
                <div className="text-center">
                  <h3 className="font-display text-xl font-semibold text-foreground">
                    {founder.name}
                  </h3>
                  <p className="text-sm font-body text-accent mt-2 font-medium">
                    {founder.designation}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-display text-3xl sm:text-4xl font-semibold text-primary mb-6">
            Ready to Work with <span className="italic text-accent">Experts?</span>
          </h2>
          <p className="text-base font-body text-primary/80 mb-10 max-w-2xl mx-auto">
            Get in touch today and let us handle your compliance needs with precision and care.
          </p>
          <Link
            to="/contact"
            className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground rounded-xl text-lg font-body font-semibold hover:shadow-2xl hover:shadow-accent/30 transition-all duration-300"
          >
            Get In Touch
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </section>
    </div>
  );
}