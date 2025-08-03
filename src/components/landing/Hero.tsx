import { Button } from "@/components/ui/button";
import { ArrowRight, ArrowUpRight, Globe, Phone } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-hero min-h-screen">
      {/* Header Navigation */}
      <div className="container mx-auto px-6 pt-8">
        <div className="flex justify-between items-center">
          {/* Brand */}
          <div className="text-2xl font-bold text-slate-800">
            Actually
          </div>
        </div>
      </div>
      
      {/* Main Content */}
      <div className="container mx-auto px-6 relative z-10 flex items-center justify-center min-h-[calc(100vh-120px)]">
        <div className="max-w-4xl mx-auto text-center">
          
          {/* Main Headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-slate-800 mb-6 animate-fade-in-up">
            Automatically keep your{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">
              documents up-to-date
            </span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto mb-10 leading-relaxed animate-fade-in-up" 
             style={{ animationDelay: '0.2s' }}>
            Actually monitors public and private sources—then edits your memos, 
            pitch decks, and reports so you don't have to.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex justify-center animate-fade-in-up"
               style={{ animationDelay: '0.4s' }}>
            <Button 
              variant="hero" 
              size="hero" 
              className="group"
              onClick={() => {
                const ctaSection = document.querySelector('[data-section="cta"]');
                if (ctaSection) {
                  ctaSection.scrollIntoView({ behavior: 'smooth' });
                }
              }}
            >
              Request Access
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Button>
          </div>
          
          {/* Tagline */}
          <p className="text-slate-500 mt-8 animate-fade-in"
             style={{ animationDelay: '0.6s' }}>
            Your documents, always up-to-date.
          </p>
        </div>
      </div>
      

    </section>
  );
};