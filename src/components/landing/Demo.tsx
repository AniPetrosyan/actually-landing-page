import { Button } from "@/components/ui/button";
import { Play, ExternalLink } from "lucide-react";

export const Demo = () => {
  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            See Actually in action
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Watch how we help Nexus Bay Capital keep their portfolio documents up-to-date automatically.
          </p>
        </div>
        
        {/* Demo Video Placeholder */}
        <div className="max-w-5xl mx-auto">
          <div className="relative bg-gradient-primary rounded-3xl overflow-hidden shadow-hero group cursor-pointer">
            <div className="aspect-video flex items-center justify-center bg-gradient-to-br from-primary to-primary-hover">
              {/* Video Placeholder */}
              <div className="text-center text-primary-foreground">
                <div className="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Play className="h-12 w-12 ml-1" />
                </div>
                <h3 className="text-2xl font-bold mb-2">
                  Nexus Bay Capital Demo
                </h3>
                <p className="text-lg opacity-90">
                  Watch how Actually automatically updates their quarterly investor reports
                </p>
              </div>
            </div>
            
            {/* Play Overlay */}
            <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                <Play className="h-10 w-10 text-white ml-1" />
              </div>
            </div>
          </div>
          
        </div>
        
        {/* Demo Features */}
        <div className="grid md:grid-cols-3 gap-6 mt-16 max-w-4xl mx-auto">
          <div className="text-center bg-card rounded-2xl p-6 shadow-md border border-border">
            <h4 className="font-semibold text-foreground mb-2">Real Portfolio Data</h4>
            <p className="text-sm text-muted-foreground">See how we track actual portfolio company metrics and market changes</p>
          </div>
          <div className="text-center bg-card rounded-2xl p-6 shadow-md border border-border">
            <h4 className="font-semibold text-foreground mb-2">Live Document Edits</h4>
            <p className="text-sm text-muted-foreground">Watch documents update in real-time as new information becomes available</p>
          </div>
          <div className="text-center bg-card rounded-2xl p-6 shadow-md border border-border">
            <h4 className="font-semibold text-foreground mb-2">Diff & Approval Flow</h4>
            <p className="text-sm text-muted-foreground">Review exactly what changed and approve updates with full control</p>
          </div>
        </div>
      </div>
    </section>
  );
};