import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background text-foreground px-4">
      <div className="max-w-xl text-center py-20 px-6 bg-card border border-border rounded-3xl shadow-xl">
        <p className="text-sm font-body uppercase tracking-[0.3em] text-accent">Page Not Found</p>
        <h1 className="mt-6 text-5xl font-display font-bold text-foreground">404</h1>
        <p className="mt-4 text-base font-body text-muted-foreground leading-relaxed">
          The page you are looking for does not exist or has been moved. Please use the navigation below to continue.
        </p>
        <Link
          to="/"
          className="inline-flex items-center justify-center mt-10 px-8 py-4 bg-accent text-accent-foreground rounded-2xl font-semibold transition hover:bg-accent/90"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
