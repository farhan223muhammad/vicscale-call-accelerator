import { Button } from "@/components/ui/button";
import { ArrowRight, Calendar } from "lucide-react";

const CTA = () => {
  return (
    <section id="contact" className="py-20 bg-gradient-hero relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-90"></div>
      
      <div className="relative z-10 container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6">
            Ready to Book Your First 20 Qualified Calls?
          </h2>
          
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 leading-relaxed">
            Join 200+ tech startups who've accelerated their growth with VicScale. 
            Start validating your product and building traction today.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-12">
            <Button 
              variant="secondary" 
              size="lg" 
              className="px-8 py-4 text-lg bg-background text-foreground hover:bg-background/90 shadow-large"
            >
              <Calendar className="w-5 h-5" />
              Book Strategy Call
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="px-8 py-4 text-lg border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              Learn More
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="text-primary-foreground/80 text-sm">
            ✅ No setup fees • ✅ 30-day results guarantee • ✅ Cancel anytime
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 left-10 w-32 h-32 bg-primary-foreground/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-10 right-10 w-40 h-40 bg-primary-foreground/10 rounded-full blur-3xl"></div>
    </section>
  );
};

export default CTA;