import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown, Sun, Moon } from "lucide-react";

const services = [
  { name: "ROC Filings", path: "/services/roc-filings" },
  { name: "Company Incorporation", path: "/services/company-incorporation" },
  { name: "Income Tax Filings", path: "/services/income-tax" },
  { name: "GST Registration & Filings", path: "/services/gst" },
  { name: "TDS Filings", path: "/services/tds" },
  { name: "MSME Registration", path: "/services/msme" },
  { name: "DSC Services", path: "/services/dsc" },
  { name: "Trademark Registration", path: "/services/trademark" },
  { name: "Visa Turnover Certification", path: "/services/visa-turnover" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();
  const dropdownRef = useRef(null);

  useEffect(() => {
    const saved = localStorage.getItem("sag-dark-mode");
    if (saved === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const toggleDark = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle("dark");
    localStorage.setItem("sag-dark-mode", (!darkMode).toString());
  };

  const isActive = (path) => location.pathname === path;
  const isServiceActive = services.some((s) => location.pathname === s.path);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-background/80 backdrop-blur-md shadow-md border-b border-border" : "bg-background shadow-lg border-b border-border"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-lg overflow-hidden">
              <img
                src="/images/logo.png"
                alt="SAG Consultancy Logo"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-lg lg:text-xl font-semibold text-foreground tracking-wide">SAG</span>
              <span className="block text-[10px] lg:text-xs font-body text-foreground/60 tracking-[0.2em] uppercase -mt-1">
                Consultancy
              </span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center gap-1">
            <Link
              to="/"
              className={`px-4 py-2 text-sm font-body font-medium transition-colors rounded-lg ${isActive("/")
                  ? "text-accent"
                  : "text-foreground/80 hover:text-foreground hover:bg-foreground/10"
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`px-4 py-2 text-sm font-body font-medium transition-colors rounded-lg ${isActive("/about")
                  ? "text-accent"
                  : "text-foreground/80 hover:text-foreground hover:bg-foreground/10"
                }`}
            >
              About Us
            </Link>

            {/* Services Dropdown */}
            <div ref={dropdownRef} className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className={`px-4 py-2 text-sm font-body font-medium transition-colors rounded-lg flex items-center gap-1 ${isServiceActive
                    ? "text-accent"
                    : "text-foreground/80 hover:text-foreground hover:bg-foreground/10"
                  }`}
              >
                Our Services
                <ChevronDown
                  className={`w-4 h-4 transition-transform duration-300 ${servicesOpen ? "rotate-180" : ""
                    }`}
                />
              </button>

              {servicesOpen && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 bg-card border border-border rounded-xl shadow-2xl p-3 animate-in fade-in slide-in-from-top-2 duration-200"
                  style={{ width: "560px" }}
                >
                  <div className="grid grid-cols-3 gap-1">
                    {services.map((service) => (
                      <Link
                        key={service.path}
                        to={service.path}
                        className={`block px-3 py-2.5 text-sm font-body rounded-lg transition-colors ${isActive(service.path)
                            ? "bg-accent/10 text-accent font-medium"
                            : "text-foreground/80 hover:bg-muted hover:text-foreground"
                          }`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`px-4 py-2 text-sm font-body font-medium transition-colors rounded-lg ${isActive("/contact")
                  ? "text-accent"
                  : "text-foreground/80 hover:text-foreground hover:bg-foreground/10"
                }`}
            >
              Contact Us
            </Link>
          </div>

          {/* Right Actions */}
          <div className="flex items-center gap-2 lg:gap-3">
            <button
              onClick={toggleDark}
              className="p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors"
              aria-label="Toggle dark mode"
            >
              {/* {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />} */}
            </button>

            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="lg:hidden p-2 rounded-lg text-foreground/70 hover:text-foreground hover:bg-foreground/10 transition-colors"
              aria-label="Toggle menu"
            >
              {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-background border-t border-border animate-in slide-in-from-top-2 duration-300 shadow-lg">
          <div className="max-w-7xl mx-auto px-4 py-4 space-y-1">
            <Link
              to="/"
              className={`block px-4 py-3 text-sm font-body font-medium rounded-lg ${isActive("/") ? "bg-accent/20 text-accent" : "text-foreground/80 hover:bg-foreground/10 hover:text-foreground"
                }`}
            >
              Home
            </Link>
            <Link
              to="/about"
              className={`block px-4 py-3 text-sm font-body font-medium rounded-lg ${isActive("/about") ? "bg-accent/20 text-accent" : "text-foreground/80 hover:bg-foreground/10 hover:text-foreground"
                }`}
            >
              About Us
            </Link>

            <div>
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="w-full flex items-center justify-between px-4 py-3 text-sm font-body font-medium rounded-lg text-foreground/80 hover:bg-foreground/10 hover:text-foreground"
              >
                Our Services
                <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? "rotate-180" : ""}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-0.5">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className={`block px-4 py-2.5 text-sm font-body rounded-lg ${isActive(service.path)
                          ? "text-accent font-medium"
                          : "text-foreground/60 hover:text-foreground hover:bg-foreground/10"
                        }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              to="/contact"
              className={`block px-4 py-3 text-sm font-body font-medium rounded-lg ${isActive("/contact") ? "bg-accent/20 text-accent" : "text-foreground/80 hover:bg-foreground/10 hover:text-foreground"
                }`}
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}