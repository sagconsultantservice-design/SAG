import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, CheckCircle } from "lucide-react";

const SERVICES_IMG = "https://media.base44.com/images/public/6a337d0c6ec909387ed54f50/6a23b7c78_generated_2935e3cb.png";

export default function ServicePage({ icon: Icon, title, subtitle, description, items, relatedServices }) {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-20 lg:py-28 overflow-hidden">
        <div className="absolute inset-0">
          <img src={SERVICES_IMG} alt="Professional consultancy services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#082B5B]/95 to-[#082B5B]/70" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-14 h-14 rounded-xl bg-[#F4B223]/20 flex items-center justify-center">
                <Icon className="w-7 h-7 text-[#F4B223]" />
              </div>
            </div>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-white leading-tight">
              {title}
            </h1>
            <p className="mt-4 text-lg font-body text-white/60 max-w-2xl">
              {subtitle}
            </p>
            <div className="w-16 h-0.5 bg-[#F4B223] mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Main */}
            <div className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-foreground mb-6">
                  What We <span className="italic text-accent">Offer</span>
                </h2>
                <p className="font-body text-muted-foreground leading-relaxed mb-10">
                  {description}
                </p>

                <div className="space-y-4">
                  {items.map((item, i) => (
                    <motion.div
                      key={item}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.4, delay: i * 0.08 }}
                      className="flex items-start gap-4 p-5 bg-card border border-border rounded-xl hover:border-accent/30 hover:shadow-md transition-all"
                    >
                      <CheckCircle className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span className="font-body text-foreground font-medium">{item}</span>
                    </motion.div>
                  ))}
                </div>

                <div className="mt-12">
                  <Link
                    to="/contact"
                    className="group inline-flex items-center gap-3 px-10 py-5 bg-accent text-accent-foreground rounded-xl text-lg font-body font-semibold hover:shadow-2xl hover:shadow-accent/20 transition-all duration-300"
                  >
                    Contact For Service
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                {/* Quick Contact */}
                <div className="p-8 bg-primary rounded-2xl mb-8">
                  <h3 className="font-display text-xl font-semibold text-primary-foreground mb-4">
                    Need This Service?
                  </h3>
                  <p className="text-sm font-body text-primary-foreground/60 mb-6">
                    Get in touch with our experts for a free consultation on your requirements.
                  </p>
                  <a
                    href="tel:+918125719039"
                    className="flex items-center gap-3 px-6 py-4 bg-accent text-accent-foreground rounded-xl text-sm font-body font-semibold hover:opacity-90 transition-opacity mb-3"
                  >
                    Call: +91 8125719039
                  </a>
                  <a
                    href="https://wa.me/918125719039"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 px-6 py-4 bg-primary-foreground/10 text-primary-foreground rounded-xl text-sm font-body font-medium hover:bg-primary-foreground/20 transition-colors"
                  >
                    WhatsApp Us
                  </a>
                </div>

                {/* Other Services */}
                {relatedServices && (
                  <div className="p-8 bg-card border border-border rounded-2xl">
                    <h3 className="font-display text-lg font-semibold text-foreground mb-5">
                      Other Services
                    </h3>
                    <div className="space-y-2">
                      {relatedServices.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className="flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-body text-muted-foreground hover:text-foreground hover:bg-muted transition-all"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-accent" />
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}