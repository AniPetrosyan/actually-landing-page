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
      
      {/* AI Document Monitoring Animation */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Base Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"></div>
        
        {/* Main Document Interface */}
        <div className="absolute top-1/2 right-1/6 transform -translate-y-1/2 w-80 h-96 bg-white/20 rounded-xl shadow-2xl backdrop-blur-sm border border-white/40 animate-float" 
             style={{ animationDuration: '6s' }}>
          {/* Document Header */}
          <div className="w-full h-8 bg-gradient-to-r from-blue-400/20 to-indigo-400/20 rounded-t-xl flex items-center px-4">
            <div className="w-3 h-3 bg-red-400/60 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-yellow-400/60 rounded-full mr-2"></div>
            <div className="w-3 h-3 bg-green-400/60 rounded-full mr-3"></div>
            <div className="text-xs text-white/80 font-medium">Q4 Market Analysis - Google Docs</div>
          </div>
          
          {/* Document Content */}
          <div className="p-6">
            {/* Title */}
            <div className="text-lg text-white/90 font-semibold mb-4">Market Analysis Report</div>
            
            {/* Section 1 - Static */}
            <div className="mb-4">
              <div className="text-sm text-white/70 mb-2">Executive Summary</div>
              <div className="text-xs text-white/60 leading-relaxed">
                Our analysis shows strong growth potential in the tech sector, with emerging trends in AI and cloud computing driving market expansion.
              </div>
            </div>
            
            {/* Section 2 - Updating Numbers */}
            <div className="mb-4">
              <div className="text-sm text-white/70 mb-2">Key Metrics</div>
              
              {/* Updating Metric 1 */}
              <div className="mb-2 relative">
                <div className="text-xs text-white/60">Market Cap: 
                  <span className="text-white/50 line-through ml-1">$2.1B</span>
                  <span className="text-green-400/90 ml-1 animate-pulse" style={{ animationDuration: '2s' }}>$2.3B</span>
                </div>
                {/* Source Bubble */}
                <div className="absolute -right-20 top-0 bg-blue-400/30 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-white/90 animate-pulse" 
                     style={{ animationDuration: '3s', animationDelay: '1s' }}>
                  WSJ · 2h ago
                </div>
              </div>
              
              {/* Updating Metric 2 */}
              <div className="mb-2 relative">
                <div className="text-xs text-white/60">Revenue Growth: 
                  <span className="text-white/50 line-through ml-1">12.5%</span>
                  <span className="text-green-400/90 ml-1 animate-pulse" style={{ animationDuration: '2s', animationDelay: '2s' }}>15.2%</span>
                </div>
                {/* Source Bubble */}
                <div className="absolute -right-24 top-0 bg-indigo-400/30 backdrop-blur-sm rounded-lg px-2 py-1 text-xs text-white/90 animate-pulse" 
                     style={{ animationDuration: '3s', animationDelay: '3s' }}>
                  Internal Report
                </div>
              </div>
              
              {/* Static Metric */}
              <div className="mb-2">
                <div className="text-xs text-white/60">P/E Ratio: <span className="text-white/70">18.5</span></div>
              </div>
            </div>
            
            {/* Section 3 - Chart Placeholder */}
            <div className="mb-4">
              <div className="text-sm text-white/70 mb-2">Performance Chart</div>
              <div className="w-full h-16 bg-gradient-to-r from-blue-400/10 to-indigo-400/10 rounded-lg border border-white/20 flex items-end justify-between px-3 py-2">
                <div className="w-1 bg-blue-400/40 rounded-full animate-pulse" style={{ height: '60%', animationDuration: '1.5s' }}></div>
                <div className="w-1 bg-blue-400/40 rounded-full animate-pulse" style={{ height: '40%', animationDuration: '1.5s', animationDelay: '0.2s' }}></div>
                <div className="w-1 bg-blue-400/40 rounded-full animate-pulse" style={{ height: '80%', animationDuration: '1.5s', animationDelay: '0.4s' }}></div>
                <div className="w-1 bg-blue-400/40 rounded-full animate-pulse" style={{ height: '30%', animationDuration: '1.5s', animationDelay: '0.6s' }}></div>
                <div className="w-1 bg-green-400/60 rounded-full animate-pulse" style={{ height: '90%', animationDuration: '1.5s', animationDelay: '0.8s' }}></div>
              </div>
            </div>
            
            {/* AI Status Indicator */}
            <div className="flex items-center justify-between">
              <div className="text-xs text-green-400/80">Actually AI · Active</div>
              <div className="w-2 h-2 bg-green-400/60 rounded-full animate-pulse" style={{ animationDuration: '1s' }}></div>
            </div>
          </div>
        </div>
        
        {/* Data Flow Streams */}
        <div className="absolute top-1/4 left-10 w-1 h-32 bg-gradient-to-b from-blue-400/50 via-indigo-400/40 to-transparent animate-pulse" 
             style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/4 left-10 w-1 h-24 bg-gradient-to-b from-indigo-400/45 via-purple-400/35 to-transparent animate-pulse" 
             style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
        
        {/* Source Icons */}
        <div className="absolute top-1/4 left-4 w-8 h-8 bg-blue-400/20 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <div className="w-4 h-4 bg-blue-400/40 rounded-sm"></div>
        </div>
        <div className="absolute bottom-1/4 left-4 w-8 h-8 bg-indigo-400/20 rounded-lg backdrop-blur-sm border border-white/20 flex items-center justify-center">
          <div className="w-4 h-4 bg-indigo-400/40 rounded-sm"></div>
        </div>
        
        {/* Scan Line Effect */}
        <div className="absolute top-1/2 right-1/6 transform -translate-y-1/2 w-80 h-0.5 bg-gradient-to-r from-transparent via-blue-400/50 to-transparent animate-pulse" 
             style={{ animationDuration: '4s' }}></div>
        
        {/* Highlight Glow */}
        <div className="absolute top-1/2 right-1/6 transform -translate-y-1/2 w-80 h-96 bg-gradient-to-b from-transparent via-blue-400/10 to-transparent animate-pulse" 
             style={{ animationDuration: '6s', animationDelay: '2s' }}></div>
        
        {/* Floating Data Particles */}
        <div className="absolute top-1/3 left-1/6 w-1 h-1 bg-blue-400/60 rounded-full animate-pulse" 
             style={{ animationDuration: '2s' }}></div>
        <div className="absolute bottom-1/3 left-1/6 w-1 h-1 bg-indigo-400/60 rounded-full animate-pulse" 
             style={{ animationDuration: '2.5s', animationDelay: '1s' }}></div>
        <div className="absolute top-2/3 left-1/8 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse" 
             style={{ animationDuration: '1.8s', animationDelay: '0.5s' }}></div>
        
        {/* Connection Lines */}
        <div className="absolute top-1/4 left-12 w-16 h-0.5 bg-gradient-to-r from-blue-400/40 to-transparent animate-pulse" 
             style={{ animationDuration: '3s' }}></div>
        <div className="absolute bottom-1/4 left-12 w-16 h-0.5 bg-gradient-to-r from-indigo-400/40 to-transparent animate-pulse" 
             style={{ animationDuration: '4s', animationDelay: '1s' }}></div>
      </div>
    </section>
  );
};