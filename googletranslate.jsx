import React, { useState, useEffect, useRef } from "react";
import { Languages, X } from "lucide-react";

const languages = [
  { code: "en", name: "English" },
  { code: "te", name: "తెలుగు (Telugu)" },
  { code: "hi", name: "हिन्दी (Hindi)" },
  { code: "mr", name: "मराठी (Marathi)" },
  { code: "ta", name: "தமிழ் (Tamil)" },
  { code: "kn", name: "ಕನ್ನಡ (Kannada)" },
  { code: "ml", name: "മലയാളം (Malayalam)" },
  { code: "bn", name: "বাংলা (Bengali)" },
  { code: "gu", name: "ગુજરાતી (Gujarati)" },
  { code: "pa", name: "ਪੰਜਾਬੀ (Punjabi)" },
  { code: "ur", name: "اردو (Urdu)" },
];

export default function GoogleTranslate() {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState("en");
  const ref = useRef(null);

  useEffect(() => {
    const handleClick = (e) => {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false);
    };
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const translate = (langCode) => {
    setSelected(langCode);
    setOpen(false);

    if (langCode === "en") {
      // Reset to English — reload without translate cookie
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
      document.cookie = "googtrans=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/; domain=" + window.location.hostname;
      window.location.reload();
      return;
    }

    // Set Google Translate cookie
    const cookieVal = `/en/${langCode}`;
    document.cookie = `googtrans=${cookieVal}; path=/`;
    document.cookie = `googtrans=${cookieVal}; path=/; domain=${window.location.hostname}`;

    // Trigger Google Translate if loaded
    if (window.google && window.google.translate) {
      const select = document.querySelector(".goog-te-combo");
      if (select) {
        select.value = langCode;
        select.dispatchEvent(new Event("change"));
      }
    } else {
      window.location.reload();
    }
  };

  const currentLang = languages.find((l) => l.code === selected);

  return (
    <div ref={ref} className="fixed bottom-6 left-6 z-50">
      {/* Popup list */}
      {open && (
        <div className="absolute bottom-14 left-0 bg-card border border-border rounded-2xl shadow-2xl overflow-hidden w-52 animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between px-4 py-3 border-b border-border">
            <span className="text-xs font-body font-semibold text-muted-foreground uppercase tracking-wider">Language</span>
            <button onClick={() => setOpen(false)} className="text-muted-foreground hover:text-foreground">
              <X className="w-4 h-4" />
            </button>
          </div>
          <div className="max-h-72 overflow-y-auto py-1">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => translate(lang.code)}
                className={`w-full text-left px-4 py-2.5 text-sm font-body transition-colors ${
                  selected === lang.code
                    ? "bg-accent/10 text-accent font-medium"
                    : "text-foreground hover:bg-muted"
                }`}
              >
                {lang.name}
              </button>
            ))}
          </div>
        </div>
      )}

      {/* Trigger Button */}
      <button
        onClick={() => setOpen(!open)}
        className="flex items-center gap-2 px-4 py-3 bg-primary text-primary-foreground rounded-2xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 font-body text-sm font-medium"
        title="Translate Website"
      >
        <Languages className="w-5 h-5" />
        <span className="hidden sm:inline">{currentLang?.name.split(" ")[0] ?? "Translate"}</span>
      </button>

      {/* Hidden Google Translate element */}
      <div id="google_translate_element" className="hidden" />
    </div>
  );
}