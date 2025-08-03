import { Quote } from "lucide-react";

export const Testimonials = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Early customer feedback
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We've interviewed 15+ customers and onboarded 2 beta enterprise users already.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Customer Interest Stats */}
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border animate-fade-in-up">
            <div className="flex items-start gap-4 mb-6">
              <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-foreground italic leading-relaxed mb-4">
                  "We spend 40% of our time updating investor decks with new portfolio data. 
                  This would completely change our workflow."
                </p>
                <div className="text-sm text-muted-foreground">
                  <div className="font-semibold">Partner at Tier 1 VC</div>
                  <div>Customer Interview #7</div>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-card rounded-3xl p-8 shadow-lg border border-border animate-fade-in-up" 
               style={{ animationDelay: '0.1s' }}>
            <div className="flex items-start gap-4 mb-6">
              <Quote className="h-8 w-8 text-primary flex-shrink-0 mt-1" />
              <div>
                <p className="text-lg text-foreground italic leading-relaxed mb-4">
                  "Regulatory compliance documents become outdated the moment we publish them. 
                  An always-current solution is exactly what we need."
                </p>
                <div className="text-sm text-muted-foreground">
                  <div className="font-semibold">Policy Director</div>
                  <div>Enterprise Beta User</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Customer Traction */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <div className="bg-success-light rounded-2xl p-6 border border-success/20">
              <div className="text-3xl font-bold text-success mb-2">15+</div>
              <div className="text-success font-medium">Customer Interviews</div>
              <div className="text-sm text-muted-foreground mt-1">Validated pain points</div>
            </div>
            <div className="bg-success-light rounded-2xl p-6 border border-success/20">
              <div className="text-3xl font-bold text-success mb-2">2</div>
              <div className="text-success font-medium">Enterprise Beta Users</div>
              <div className="text-sm text-muted-foreground mt-1">Already onboarded</div>
            </div>
            <div className="bg-primary-light rounded-2xl p-6 border border-primary/20">
              <div className="text-3xl font-bold text-primary mb-2">100%</div>
              <div className="text-primary font-medium">Interested in Beta</div>
              <div className="text-sm text-muted-foreground mt-1">From customer interviews</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};