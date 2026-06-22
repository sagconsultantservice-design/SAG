import React, { useState } from "react";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Send, CheckCircle, Loader2 } from "lucide-react";
import SEO from "@/components/SEO";
import emailjs from "@emailjs/browser";
const serviceOptions = [
  "ROC Filings", "Company Incorporation", "Income Tax Filing",
  "GST Filing", "TDS Filing", "MSME Registration",
  "DSC Services", "Trademark Registration", "Visa Turnover Certification",
];

const countryCodes = [
  { code: "+91", label: "India (+91)" },
  { code: "+1", label: "USA/Canada (+1)" },
  { code: "+44", label: "UK (+44)" },
  { code: "+61", label: "Australia (+61)" },
  { code: "+971", label: "UAE (+971)" },
  { code: "+65", label: "Singapore (+65)" }
];

const inputCls = "w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-accent text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-colors";
const selectCls = "w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-accent text-foreground font-body outline-none transition-colors cursor-pointer";

export default function Contact() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    countryCode: "+91",
    phone: "",
    service: "",
    address: "",
    message: "",
  });
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    // Validate that Full Name only accepts letters and spaces
    if (name === "fullName" && !/^[a-zA-Z\s]*$/.test(value)) {
      return;
    }

    // Validate that Phone only accepts numbers
    if (name === "phone" && !/^\d*$/.test(value)) {
      return;
    }

    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    // Additional validations
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (form.fullName.trim().length === 0) {
      setError("Please enter your full name.");
      return;
    }

    if (form.phone.length < 10) {
      setError("Please enter a valid phone number with at least 10 digits.");
      return;
    }

    setSending(true);

    try {
      await emailjs.send(
        "service_1rrdo0a",
        "template_3ct8g8l",
        {
          name: form.fullName,
          email: form.email,
          phone: `${form.countryCode} ${form.phone}`,
          service: form.service,
          address: form.address,
          message: form.message,
        },
        "MHgQpdLMVkCkXyWa_"
      );

      setSent(true);
      setForm({ fullName: "", email: "", countryCode: "+91", phone: "", service: "", address: "", message: "" });
    } catch (err) {
      console.error("EmailJS Error Object:", err);
      setError(`EmailJS Error: ${err?.text || err?.message || 'Unknown error'}`);
    } finally {
      setSending(false);
    }
  };

  return (
    <div className="pt-20">
      <SEO 
        title="Contact Us - SAG Consultancy Services"
        description="Get in touch with SAG Consultancy Services. Reach out for ROC Filings, GST Filing, Trademark Registration, and other business compliance services."
      />
      {/* Hero */}
      <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <span className="text-xs font-body tracking-[0.3em] uppercase text-accent font-semibold">Reach Out</span>
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-semibold text-primary-foreground mt-4 leading-tight">
              Contact <span className="italic text-accent">Us</span>
            </h1>
            <p className="mt-4 text-lg font-body text-primary-foreground/60 max-w-2xl">
              Have a question or need our services? We'd love to hear from you. Fill out the form below and our team will get back to you within 24 hours.
            </p>
            <div className="w-16 h-0.5 bg-accent mt-6" />
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-24 lg:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-2">
              <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                <h2 className="font-display text-2xl font-semibold text-foreground mb-8">
                  Get In <span className="italic text-accent">Touch</span>
                </h2>
                <div className="space-y-6">
                  <a href="tel:+918125719039" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                      <Phone className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-1">Phone</p>
                      <p className="font-body font-medium text-foreground">+91 8125719039</p>
                    </div>
                  </a>
                  <a href="mailto:sagconsultantservice@gmail.com" className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0 group-hover:bg-accent transition-colors">
                      <Mail className="w-5 h-5 text-accent group-hover:text-accent-foreground transition-colors" />
                    </div>
                    <div>
                      <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-1">Email</p>
                      <p className="font-body font-medium text-foreground">sagconsultantservice@gmail.com</p>
                    </div>
                  </a>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center flex-shrink-0">
                      <MapPin className="w-5 h-5 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs font-body text-muted-foreground uppercase tracking-wider mb-1">Location</p>
                      <p className="font-body font-medium text-foreground">Suryapet, Telangana, India</p>
                    </div>
                  </div>
                </div>
                <div className="mt-10 p-6 bg-muted/50 rounded-2xl border border-border">
                  <p className="text-sm font-body text-muted-foreground mb-4">
                    Prefer a quick chat? Reach us on WhatsApp for instant support.
                  </p>
                  <a
                    href="https://wa.me/8125719039"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-xl text-sm font-body font-semibold hover:bg-green-700 transition-colors"
                  >
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" /></svg>
                    Chat on WhatsApp
                  </a>
                </div>
              </motion.div>
            </div>

            {/* Form */}
            <div className="lg:col-span-3">
              <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }}>
                {sent ? (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <div className="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mb-6">
                      <CheckCircle className="w-10 h-10 text-green-600" />
                    </div>
                    <h3 className="font-display text-2xl font-semibold text-foreground mb-3">Inquiry Sent Successfully!</h3>
                    <p className="font-body text-muted-foreground max-w-md">
                      Thank you for reaching out. Our team will review your inquiry and get back to you within 24 hours.
                    </p>
                    <button onClick={() => setSent(false)} className="mt-8 px-6 py-3 text-sm font-body font-medium text-accent hover:underline">
                      Send Another Inquiry
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h2 className="font-display text-2xl font-semibold text-foreground mb-2">
                      Send an <span className="italic text-accent">Inquiry</span>
                    </h2>
                    <p className="text-sm font-body text-muted-foreground mb-8">
                      Fill in your details and we'll get back to you promptly.
                    </p>

                    {/* Name & Email */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">Full Name *</label>
                        <input type="text" name="fullName" value={form.fullName} onChange={handleChange} required className={inputCls} placeholder="Your full name" pattern="^[a-zA-Z\s]*$" title="Only letters and spaces are allowed" />
                      </div>
                      <div>
                        <label className="block text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">Email Address *</label>
                        <input type="email" name="email" value={form.email} onChange={handleChange} required className={inputCls} placeholder="you@example.com" />
                      </div>
                    </div>

                    {/* Phone with country code & Service */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">Phone Number *</label>
                        <div className="flex gap-2 border-b-2 border-border focus-within:border-accent transition-colors">
                          <select name="countryCode" value={form.countryCode} onChange={handleChange} className="bg-transparent border-0 text-foreground font-body text-sm outline-none py-3 pr-1 cursor-pointer flex-shrink-0">
                            {countryCodes.map((c) => (
                              <option key={c.code} value={c.code}>{c.label}</option>
                            ))}
                          </select>
                          <input type="tel" name="phone" value={form.phone} onChange={handleChange} required className="flex-1 bg-transparent border-0 py-3 text-foreground font-body placeholder:text-muted-foreground/50 outline-none" placeholder="XXXXX XXXXX" minLength={10} maxLength={15} pattern="^\d+$" title="Only digits are allowed" />
                        </div>
                      </div>
                      <div>
                        <label className="block text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">Service Required *</label>
                        <select name="service" value={form.service} onChange={handleChange} required className={selectCls}>
                          <option value="">Select a service</option>
                          {serviceOptions.map((s) => <option key={s} value={s}>{s}</option>)}
                        </select>
                      </div>
                    </div>

                    {/* Address & Message */}
                    <div>
                      <label className="block text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">Full Address *</label>
                      <textarea name="address" value={form.address} onChange={handleChange} required rows={2} className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-accent text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-colors resize-none" placeholder="Enter your complete address..." />
                    </div>

                    <div>
                      <label className="block text-xs font-body text-muted-foreground uppercase tracking-wider mb-2">Problem Description</label>
                      <textarea name="message" value={form.message} onChange={handleChange} rows={4} className="w-full px-0 py-3 bg-transparent border-0 border-b-2 border-border focus:border-accent text-foreground font-body placeholder:text-muted-foreground/50 outline-none transition-colors resize-none" placeholder="Describe your requirement..." />
                    </div>

                    {error && <p className="text-sm font-body text-destructive">{error}</p>}

                    <button type="submit" disabled={sending} className="group w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-accent text-accent-foreground rounded-xl text-base font-body font-semibold hover:shadow-xl hover:shadow-accent/20 disabled:opacity-50 transition-all">
                      {sending ? <><Loader2 className="w-5 h-5 animate-spin" />Sending...</> : <><Send className="w-5 h-5" />Send Inquiry</>}
                    </button>
                  </form>
                )}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
