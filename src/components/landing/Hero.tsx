import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Globe, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen">
      {/* Header Navigation */}
      <div className="container mx-auto px-6 pt-8">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <div className="text-2xl font-bold text-slate-800">Actually</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="max-w-4xl mx-auto text-center">
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 animate-fade-in-up">
            Intelligently monitors data &{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              updates your docs
            </span>
          </h1>

          {/* Subheading */}
          <p
            className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Actually's AI agents scour the web and your configured data sources
            to keep you & your docs up to date.
          </p>

          {/* CTA Buttons */}
          <div
            className="flex justify-center animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <Button
              variant="hero"
              size="hero"
              className="group"
              onClick={() => {
                const ctaSection = document.querySelector(
                  '[data-section="cta"]'
                );
                if (ctaSection) {
                  ctaSection.scrollIntoView({ behavior: "smooth" });
                }
              }}
            >
              Request Access
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
