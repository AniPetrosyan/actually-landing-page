import { Zap, Brain, Clock } from "lucide-react";

const differentiators = [
  {
    icon: Zap,
    title: "Not just summaries—actionable edits",
    description:
      "While others provide summaries, Actually directly edits your documents with precise, contextual changes.",
    stat: "Direct edits",
    statDesc: "No copy-paste needed",
  },
  {
    icon: Brain,
    title: "Persistent agents that remember context",
    description:
      "Our AI agents understand your document history, tone, and objectives, collaborating with you over time.",
    stat: "Context-aware",
    statDesc: "Learns your style",
  },
  {
    icon: Clock,
    title: "Proactive, not reactive",
    description:
      "Your documents change as the world does. No waiting for updates or manual refresh cycles.",
    stat: "Real-time",
    statDesc: "Always current",
  },
];

export const WhyActually = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div
          className="absolute bottom-20 right-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-float"
          style={{ animationDelay: "2s" }}
        ></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-primary/8 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Actually?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We're creating the future of living documents that evolve with your
            business.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 mb-16">
          {differentiators.map((diff, index) => (
            <div
              key={index}
              className="text-center group animate-fade-in-up flex flex-col h-full"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              {/* Icon */}
              <div className="w-20 h-20 bg-gradient-primary text-primary-foreground rounded-3xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                <diff.icon className="h-10 w-10" />
              </div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-foreground mb-4 group-hover:text-primary transition-colors">
                {diff.title}
              </h3>

              {/* Description */}
              <p className="text-muted-foreground mb-6 leading-relaxed flex-grow min-h-[4.5rem] flex items-center justify-center">
                {diff.description}
              </p>

              {/* Stat */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-white/50 shadow-xl mt-auto">
                <div className="text-2xl font-bold text-primary mb-1">
                  {diff.stat}
                </div>
                <div className="text-sm text-muted-foreground">
                  {diff.statDesc}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
