import { Hero } from "@/components/landing/Hero";
import { UseCases } from "@/components/landing/UseCases";
import { WhyActually } from "@/components/landing/WhyActually";

import { CallToAction } from "@/components/landing/CallToAction";
import { Footer } from "@/components/landing/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <UseCases />
      <WhyActually />
      
      <CallToAction />
      <Footer />
    </div>
  );
};

export default Index;
