import { Shield, Lock, Cloud, Database } from "lucide-react";

const securityFeatures = [
  {
    icon: Cloud,
    title: "Cloud-Hosted SaaS",
    description: "Reliable infrastructure with 99.9% uptime guarantee"
  },
  {
    icon: Lock,
    title: "Role-Based Access Control",
    description: "Granular permissions ensuring data security"
  },
  {
    icon: Shield,
    title: "Encrypted Data Storage",
    description: "End-to-end encryption for all sensitive information"
  },
  {
    icon: Database,
    title: "Automated Backups",
    description: "Daily backups with disaster recovery protocols"
  }
];

const Security = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-success/10 text-success mb-6">
            <Shield className="h-4 w-4" />
            <span className="text-sm font-semibold">Enterprise-Grade Security</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Your Data is Safe with Us
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Bank-level security measures to protect your most sensitive HR data
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {securityFeatures.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <div 
                key={index}
                className="text-center p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-smooth group"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-success/20 to-success/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-smooth">
                  <Icon className="h-8 w-8 text-success" />
                </div>
                <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </div>
            );
          })}
        </div>

        {/* Compliance Badges */}
        <div className="mt-12 flex flex-wrap justify-center gap-8 items-center">
          <div className="px-6 py-3 rounded-lg bg-card border border-border text-sm font-semibold">
            ISO 27001 Compliant
          </div>
          <div className="px-6 py-3 rounded-lg bg-card border border-border text-sm font-semibold">
            GDPR Ready
          </div>
          <div className="px-6 py-3 rounded-lg bg-card border border-border text-sm font-semibold">
            SOC 2 Type II
          </div>
        </div>
      </div>
    </section>
  );
};

export default Security;
