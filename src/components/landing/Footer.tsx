import { Mail, ExternalLink } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-gradient-hero py-8 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Bottom Bar */}
        <div className="flex justify-center">
          <div className="text-slate-500 text-sm">
            © 2025 Actually. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};