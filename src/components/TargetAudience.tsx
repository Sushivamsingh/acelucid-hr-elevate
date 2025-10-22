import { Users, Building, Building2 } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const audiences = [
  {
    icon: Users,
    title: "Small Companies",
    size: "10-50 employees",
    description: "Perfect for growing teams looking to streamline HR processes without complexity. Get started quickly with easy setup and intuitive workflows."
  },
  {
    icon: Building,
    title: "SMEs",
    size: "51-500 employees",
    description: "Scale your HR operations efficiently with advanced features like role management, detailed reporting, and multi-level approvals."
  },
  {
    icon: Building2,
    title: "Large Enterprises",
    size: "1000+ employees",
    description: "Enterprise-grade HRMS with robust security, comprehensive analytics, and seamless integration capabilities for complex organizational structures."
  }
];

const TargetAudience = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Built for Organizations of All Sizes
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Whether you're a startup or an enterprise, Acelucid HRMS scales with your needs
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <Card 
                key={index} 
                className="shadow-card hover:shadow-card-hover transition-smooth group cursor-pointer border-border/50"
              >
                <CardHeader>
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <Icon className="h-7 w-7 text-primary-foreground" />
                  </div>
                  <CardTitle className="text-2xl">{audience.title}</CardTitle>
                  <CardDescription className="text-lg font-semibold text-primary">
                    {audience.size}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {audience.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
