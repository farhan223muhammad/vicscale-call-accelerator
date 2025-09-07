import { Card, CardContent } from "@/components/ui/card";
import { Target, Zap, TrendingUp, Users } from "lucide-react";

const ValueProposition = () => {
  const features = [
    {
      icon: Target,
      title: "Precision Targeting",
      description: "We identify and reach decision-makers at tech startups and SaaS companies who are actively looking for solutions."
    },
    {
      icon: Zap,
      title: "Rapid Results",
      description: "Our proven system delivers your first qualified calls within 30 days, helping you validate and iterate faster."
    },
    {
      icon: TrendingUp,
      title: "Scalable Growth",
      description: "Build sustainable pipelines that grow with your startup, from first customers to Series A and beyond."
    },
    {
      icon: Users,
      title: "Quality Focused",
      description: "Every call is pre-qualified and matches your ideal customer profile, ensuring high conversion rates."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Why Tech Startups Choose{" "}
            <span className="bg-gradient-primary bg-clip-text text-transparent">VicScale</span>
          </h2>
          <p className="text-xl text-muted-foreground">
            We understand the unique challenges of early-stage companies. 
            Our specialized approach helps you validate your product faster and build the traction investors want to see.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="text-center border-border hover:shadow-medium transition-smooth group">
              <CardContent className="p-8">
                <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-spring">
                  <feature.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-4">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;