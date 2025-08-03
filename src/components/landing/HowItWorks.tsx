import { FileText, Database, Bot, GitBranch } from "lucide-react";

const steps = [
  {
    icon: FileText,
    title: "Connect your documents",
    description: "Link Google Docs, Slides, and other workspace files you want to keep current.",
    step: "01"
  },
  {
    icon: Database,
    title: "Add sources",
    description: "Connect news feeds, Gmail, Drive, data rooms, and any relevant information streams.",
    step: "02"
  },
  {
    icon: Bot,
    title: "AI agents track & edit",
    description: "Our persistent agents monitor changes and automatically rewrite your documents with context.",
    step: "03"
  },
  {
    icon: GitBranch,
    title: "Review & approve",
    description: "See diffs, approve changes, and maintain full control over your document updates.",
    step: "04"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How it works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Set up once, then watch your documents evolve automatically as the world changes.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-8">
          {steps.map((step, index) => (
            <div key={index} 
                 className="bg-card rounded-2xl p-8 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 animate-fade-in-up relative"
                 style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Step Number */}
              <div className="absolute -top-4 -right-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-lg">
                {step.step}
              </div>
              
              {/* Icon */}
              <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mb-6">
                <step.icon className="h-8 w-8 text-primary" />
              </div>
              
              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-4">
                {step.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};