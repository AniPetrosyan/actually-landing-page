import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar, Mail } from "lucide-react";

export const CallToAction = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden" data-section="cta">
      <div className="container mx-auto px-6 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">
            Be the first to experience Actually
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 mb-10 leading-relaxed">
            Join the waitlist and get early access when we launch. 
            No more stale information, no more manual updates.
          </p>
          
          {/* Email Signup */}
          <div className="max-w-md mx-auto mb-12">
            <div className="flex flex-col sm:flex-row gap-3">
              <input 
                type="email" 
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 rounded-xl border border-slate-300 bg-white/80 text-slate-800 placeholder:text-slate-500 focus:outline-none focus:border-primary focus:bg-white transition-all"
              />
              <Button variant="hero" size="hero" className="group px-8">
                Join Waitlist
                <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
              </Button>
            </div>
            <p className="text-slate-500 text-sm mt-3 text-center">
              We'll notify you when Actually is ready for beta testing
            </p>
          </div>
          

        </div>
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/8 rounded-full blur-3xl"></div>
      </div>
    </section>
  );
};