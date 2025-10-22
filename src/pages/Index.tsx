import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import TargetAudience from "@/components/TargetAudience";
import Features from "@/components/Features";
import AISection from "@/components/AISection";
import Reports from "@/components/Reports";
import UserRoles from "@/components/UserRoles";
import DemoSection from "@/components/DemoSection";
import Security from "@/components/Security";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <TargetAudience />
      <Features />
      <AISection />
      <Reports />
      <UserRoles />
      <DemoSection />
      <Security />
      <Footer />
    </div>
  );
};

export default Index;
