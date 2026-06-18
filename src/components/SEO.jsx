import { useEffect } from 'react';

export default function SEO({ title, description, keywords }) {
  useEffect(() => {
    // Update title
    document.title = title || 'SAG Consultancy Services - Professional Legal & Tax Experts';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute('content', description || 'We specialize in ROC filings, Company Incorporation, Income Tax Filing, GST Filing, and MSME registration perfectly tailored to your business needs.');
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords && keywords) {
      metaKeywords.setAttribute('content', keywords);
    }

    // Update Open Graph tags dynamically
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
      ogTitle.setAttribute('content', title || 'SAG Consultancy Services');
    }

    const ogDesc = document.querySelector('meta[property="og:description"]');
    if (ogDesc) {
      ogDesc.setAttribute('content', description || 'Expert tax consultants for ROC, GST, income tax filings, company registrations, and legal compliances.');
    }

  }, [title, description, keywords]);

  return null;
}
