import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import heroDashboard from "@/assets/hero-dashboard.png";

const Hero = () => {
  const scrollToDemo = () => {
    document.getElementById("demo-section")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Gradient Background */}
      <div className="absolute inset-0 gradient-hero opacity-10" />
      
      <div className="container mx-auto px-4 py-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-center lg:text-left animate-fade-in-up">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Acelucid <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">HRMS</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl">
              Centralize, Automate, and Simplify Your HR Operations in One Intelligent Platform
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button 
                size="lg" 
                className="bg-primary hover:bg-primary-hover text-primary-foreground transition-smooth shadow-lg hover:shadow-xl group"
                onClick={scrollToDemo}
              >
                Request a Demo
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-smooth" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-2 hover:bg-muted transition-smooth"
              >
                Get Started
              </Button>
            </div>
            
            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap gap-8 justify-center lg:justify-start items-center text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                Cloud-hosted SaaS
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                Enterprise-grade Security
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-success" />
                24/7 Support
              </div>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative animate-scale-in">
            <div className="relative rounded-2xl overflow-hidden shadow-card-hover">
              <img 
                src={heroDashboard} 
                alt="Acelucid HRMS Dashboard showcasing employee management, attendance tracking, and leave management features"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent" />
            </div>
            
            {/* Floating Elements */}
            <div className="absolute -top-6 -right-6 bg-success text-success-foreground px-6 py-3 rounded-full shadow-lg font-semibold animate-pulse">
              AI-Powered
            </div>
            <div className="absolute -bottom-6 -left-6 bg-card text-card-foreground px-6 py-3 rounded-full shadow-card border border-border">
              Trusted by 500+ Companies
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  );
};

export default Hero;
