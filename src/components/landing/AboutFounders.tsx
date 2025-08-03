import { GraduationCap, Code, Globe } from "lucide-react";

const founders = [
  {
    name: "Helena",
    role: "Co-founder",
    image: "/api/placeholder/120/120",
    background: "CS @ UPenn, Amazon SWE Intern"
  },
  {
    name: "Ani", 
    role: "Co-founder",
    image: "/api/placeholder/120/120",
    background: "CS @ UPenn, AI Teaching in Beijing"
  }
];

const highlights = [
  {
    icon: GraduationCap,
    title: "CS Students at UPenn",
    description: "Deep technical background in computer science and AI"
  },
  {
    icon: Code,
    title: "4 Years, 6+ Projects",
    description: "Proven track record of building and shipping together"
  },
  {
    icon: Globe,
    title: "Amazon & Beijing Experience",
    description: "Industry experience at scale and international AI education"
  }
];

export const AboutFounders = () => {
  return (
    <section className="py-24 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Meet the founders
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Helena and Ani have been building together for 4 years across 6+ projects, 
            bringing deep technical expertise and a proven partnership.
          </p>
        </div>
        
        {/* Founders */}
        <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto mb-16">
          {founders.map((founder, index) => (
            <div key={index} 
                 className="bg-card rounded-3xl p-8 text-center shadow-lg border border-border group hover:shadow-xl transition-all duration-300 animate-fade-in-up"
                 style={{ animationDelay: `${index * 0.1}s` }}>
              {/* Profile Image Placeholder */}
              <div className="w-24 h-24 bg-gradient-primary rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                <span className="text-2xl font-bold text-primary-foreground">
                  {founder.name[0]}
                </span>
              </div>
              
              <h3 className="text-2xl font-semibold text-foreground mb-2">
                {founder.name}
              </h3>
              <p className="text-primary font-medium mb-4">
                {founder.role}
              </p>
              <p className="text-muted-foreground">
                {founder.background}
              </p>
            </div>
          ))}
        </div>
        
        {/* Highlights */}
        <div className="grid lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div key={index} 
                 className="text-center group animate-fade-in-up"
                 style={{ animationDelay: `${index * 0.15}s` }}>
              <div className="w-16 h-16 bg-primary-light rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                <highlight.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {highlight.title}
              </h3>
              <p className="text-muted-foreground">
                {highlight.description}
              </p>
            </div>
          ))}
        </div>
        
        {/* Partnership Note */}
        <div className="text-center mt-16 bg-card rounded-3xl p-8 shadow-lg border border-border max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-foreground mb-4">
            A proven partnership
          </h3>
          <p className="text-lg text-muted-foreground leading-relaxed">
            From hackathons to internships to teaching AI abroad, Helena and Ani have 
            consistently delivered together. They understand both the technical challenges 
            and the real-world needs that Actually addresses.
          </p>
        </div>
      </div>
    </section>
  );
};