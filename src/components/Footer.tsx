import { Mail } from "lucide-react";

const Footer = () => {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent mb-4">
              Acelucid HRMS
            </h3>
            <p className="text-sm text-muted-foreground">
              Centralize, Automate, and Simplify Your HR Operations in One Intelligent Platform
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <button onClick={() => scrollToSection("features")} className="hover:text-primary transition-smooth">
                  Features
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("ai-section")} className="hover:text-primary transition-smooth">
                  AI Assistant
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("reports")} className="hover:text-primary transition-smooth">
                  Reports
                </button>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Pricing</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-smooth">About Us</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Careers</a>
              </li>
              <li>
                <button onClick={() => scrollToSection("demo-section")} className="hover:text-primary transition-smooth">
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-smooth">Security</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © 2025 Acelucid HRMS. All rights reserved.
          </p>
          <a 
            href="mailto:hello@acelucid.com"
            className="flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-smooth"
          >
            <Mail className="h-4 w-4" />
            hello@acelucid.com
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
