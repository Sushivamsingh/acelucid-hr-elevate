import { Sparkles, Zap, Brain, MessageSquare } from "lucide-react";
import aiAssistant from "@/assets/ai-assistant.png";

const aiFeatures = [
  {
    icon: MessageSquare,
    title: "Single-Prompt Operations",
    description: "Apply, withdraw, accept, or reject leave requests with simple natural language commands"
  },
  {
    icon: Brain,
    title: "Policy Information",
    description: "Get instant answers about company policies, leave balances, and HR procedures"
  },
  {
    icon: Zap,
    title: "Automatic Calculations",
    description: "AI handles complex leave calculations, attendance tracking, and balance updates automatically"
  },
  {
    icon: Sparkles,
    title: "Personal Assistant",
    description: "24/7 HR assistant available to every employee for instant support and guidance"
  }
];

const AISection = () => {
  return (
    <section id="ai-section" className="py-20 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/10 text-secondary mb-6">
              <Sparkles className="h-4 w-4" />
              <span className="text-sm font-semibold">AI-Powered Automation</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meet Darpan AI Agent
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Your intelligent HR assistant that understands natural language and automates routine tasks, making HR operations effortless for everyone.
            </p>

            <div className="space-y-6">
              {aiFeatures.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <div key={index} className="flex gap-4 items-start">
                    <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-secondary to-primary flex items-center justify-center flex-shrink-0">
                      <Icon className="h-5 w-5 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <div className="mt-8 p-6 rounded-xl bg-card shadow-card border border-border">
              <p className="text-sm text-muted-foreground mb-2">Example prompt:</p>
              <p className="font-medium italic">"Apply for 3 days leave from May 15th for vacation"</p>
            </div>
          </div>

          {/* Right Image */}
          <div className="order-1 lg:order-2 relative">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img 
                src={aiAssistant} 
                alt="Darpan AI Assistant helping with HR tasks and leave management"
                className="w-full h-auto"
              />
            </div>
            
            {/* Floating Badge */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-br from-secondary to-primary text-primary-foreground px-6 py-3 rounded-full shadow-lg font-semibold animate-pulse">
              AI-Powered
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AISection;
