import { Card, CardContent } from "@/components/ui/card";
import { Search, MessageSquare, Calendar } from "lucide-react";

const Process = () => {
  const steps = [
    {
      icon: Search,
      title: "1. Discovery & Research",
      description: "We analyze your ideal customer profile and identify high-value prospects in the tech startup ecosystem.",
      details: ["Market research", "ICP refinement", "Prospect identification", "Contact verification"]
    },
    {
      icon: MessageSquare,
      title: "2. Outreach & Engagement",
      description: "Our team crafts personalized outreach campaigns that resonate with startup founders and decision-makers.",
      details: ["Personalized messaging", "Multi-channel approach", "A/B testing", "Response optimization"]
    },
    {
      icon: Calendar,
      title: "3. Qualification & Booking",
      description: "We qualify each prospect and schedule high-quality calls with validated leads ready to discuss your solution.",
      details: ["Lead qualification", "Calendar booking", "Meeting preparation", "Handoff to your team"]
    }
  ];

  return (
    <section id="process" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Our Proven{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">3-Step Process</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            From research to qualified calls, we handle everything so you can focus on what matters most - 
            building your product and closing deals.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="border-border hover:shadow-large transition-smooth group relative overflow-hidden">
              <CardContent className="p-8">
                {/* Step number */}
                <div className="absolute top-4 right-4 w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                  <span className="text-primary font-bold text-sm">{index + 1}</span>
                </div>

                {/* Icon */}
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-spring">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>

                {/* Content */}
                <h3 className="text-2xl font-semibold text-foreground mb-4">
                  {step.title}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {step.description}
                </p>

                {/* Details */}
                <ul className="space-y-2">
                  {step.details.map((detail, detailIndex) => (
                    <li key={detailIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mr-3"></div>
                      {detail}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;