import { Card, CardContent } from "@/components/ui/card";
import { Star, Quote } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "CEO, DataFlow AI",
      company: "Series A SaaS",
      content: "VicScale helped us book 25 qualified calls in our first month. We validated our product-market fit and closed our Series A with that traction.",
      rating: 5,
      avatar: "SC"
    },
    {
      name: "Michael Rodriguez",
      role: "Founder, TechBridge",
      company: "B2B Startup",
      content: "The quality of leads was exceptional. Every call was with a decision-maker who had a real need for our solution. Game-changing for our growth.",
      rating: 5,
      avatar: "MR"
    },
    {
      name: "Emily Watson",
      role: "Co-founder, CloudSync",
      company: "Tech Startup",
      content: "We went from zero to 20 paying customers in 6 weeks thanks to VicScale's qualified leads. The ROI was incredible.",
      rating: 5,
      avatar: "EW"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Trusted by{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">Growing Startups</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            See how other tech startups and SaaS companies have accelerated their growth with VicScale.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-border hover:shadow-medium transition-smooth group relative">
              <CardContent className="p-8">
                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/20 mb-4" />

                {/* Rating */}
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Content */}
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </p>

                {/* Author */}
                <div className="flex items-center">
                  <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-4">
                    {testimonial.avatar}
                  </div>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                    <div className="text-xs text-primary">{testimonial.company}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;