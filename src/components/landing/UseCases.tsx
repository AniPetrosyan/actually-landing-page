import { TrendingUp, Shield, PenTool, Building2 } from "lucide-react";

const useCases = [
  {
    icon: TrendingUp,
    title: "Venture Capital",
    highlights: [
      "Auto-update memos with latest portfolio news",
      "Track regulatory or financial changes across companies", 
      "Keep investor reports synced with market events"
    ]
  },
  {
    icon: Shield,
    title: "Policy & Government",
    highlights: [
      "Monitor legislation and edit briefs in real time",
      "Sync internal docs with agency announcements",
      "Track geopolitical or economic shifts for impact analysis"
    ]
  },
  {
    icon: PenTool,
    title: "Media & Journalism",
    highlights: [
      "Update draft articles with breaking news",
      "Sync fact sheets or backgrounders across stories",
      "Maintain evolving coverage timelines and summaries"
    ]
  },
  {
    icon: Building2,
    title: "Enterprise Ops",
    highlights: [
      "Keep internal pitch decks updated with recent stats",
      "Monitor competitors and adjust strategy docs accordingly",
      "Sync compliance docs with new filings or announcements"
    ]
  }
];

export const UseCases = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float" 
             style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/8 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <p className="text-lg text-primary mb-4 uppercase tracking-wider font-semibold">
            Practical Applications
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Use cases
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {useCases.map((useCase, index) => (
            <div key={index} 
                 className="group bg-white/80 backdrop-blur-sm rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300 animate-fade-in-up border border-white/50 hover:border-primary/20 hover:-translate-y-2"
                 style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <useCase.icon className="h-8 w-8 text-primary-foreground" />
              </div>
              
              {/* Content */}
              <h3 className="text-2xl font-bold text-foreground mb-6 group-hover:text-primary transition-colors">
                {useCase.title}
              </h3>
              
              {/* Highlights */}
              <ul className="space-y-3">
                {useCase.highlights.map((highlight, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-muted-foreground">
                    <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                    <span className="text-sm leading-relaxed">{highlight}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};