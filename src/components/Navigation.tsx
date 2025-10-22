import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { useState } from "react";

const Navigation = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMobileMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center">
            <h2 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
              Acelucid HRMS
            </h2>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <button onClick={() => scrollToSection("features")} className="text-foreground hover:text-primary transition-smooth">
              Features
            </button>
            <button onClick={() => scrollToSection("ai-section")} className="text-foreground hover:text-primary transition-smooth">
              AI Assistant
            </button>
            <button onClick={() => scrollToSection("reports")} className="text-foreground hover:text-primary transition-smooth">
              Reports
            </button>
            <button onClick={() => scrollToSection("demo-section")} className="text-foreground hover:text-primary transition-smooth">
              Contact
            </button>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <Button 
              onClick={() => scrollToSection("demo-section")}
              className="bg-primary hover:bg-primary-hover text-primary-foreground transition-smooth"
            >
              Request Demo
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden py-4 space-y-4 animate-fade-in-up">
            <button onClick={() => scrollToSection("features")} className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-smooth">
              Features
            </button>
            <button onClick={() => scrollToSection("ai-section")} className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-smooth">
              AI Assistant
            </button>
            <button onClick={() => scrollToSection("reports")} className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-smooth">
              Reports
            </button>
            <button onClick={() => scrollToSection("demo-section")} className="block w-full text-left px-4 py-2 hover:bg-muted rounded-lg transition-smooth">
              Contact
            </button>
            <div className="px-4">
              <Button 
                onClick={() => scrollToSection("demo-section")}
                className="w-full bg-primary hover:bg-primary-hover text-primary-foreground transition-smooth"
              >
                Request Demo
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
