import { Button } from "@/components/ui/button";
import { ArrowRight, CheckCircle } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-secondary"></div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 py-20">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <div className="inline-flex items-center space-x-2 bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-medium mb-8">
            <CheckCircle className="w-4 h-4" />
            <span>Trusted by 200+ Tech Startups</span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            Book Your First{" "}
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              20 Qualified Calls
            </span>{" "}
            in 30 Days
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            We help Tech startups and SaaS companies validate faster and raise with traction 
            through proven lead generation systems.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button variant="hero" size="lg" className="px-8 py-4 text-lg">
              Get Your First 20 Calls
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-4 text-lg">
              See How It Works
            </Button>
          </div>

          {/* Social proof */}
          <div className="grid grid-cols-3 gap-8 max-w-md mx-auto text-center">
            <div>
              <div className="text-2xl font-bold text-primary">200+</div>
              <div className="text-sm text-muted-foreground">Startups Helped</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">30 Days</div>
              <div className="text-sm text-muted-foreground">Average Timeline</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-primary">95%</div>
              <div className="text-sm text-muted-foreground">Success Rate</div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-20 h-20 bg-primary/20 rounded-full blur-xl"></div>
      <div className="absolute bottom-20 right-10 w-32 h-32 bg-accent/20 rounded-full blur-xl"></div>
    </section>
  );
};

export default Hero;