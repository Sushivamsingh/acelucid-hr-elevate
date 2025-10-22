import { 
  Users, 
  Clock, 
  CalendarDays, 
  Umbrella, 
  DollarSign, 
  Shield, 
  BarChart3, 
  UserCircle,
  Sparkles
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const features = [
  {
    icon: Users,
    title: "Employee Management",
    description: "Complete employee lifecycle management from onboarding to exit. Store all employee information, documents, and history in one secure place."
  },
  {
    icon: Clock,
    title: "Attendance Management",
    description: "Track attendance seamlessly through web and mobile. Real-time monitoring, geofencing, and automated overtime calculations."
  },
  {
    icon: CalendarDays,
    title: "Leave Management",
    description: "Streamline leave requests and approvals. Automatic leave balance calculations, policy compliance, and instant notifications."
  },
  {
    icon: Umbrella,
    title: "Holiday Management",
    description: "Manage company-wide holidays and regional variations. Automated calendar sync and holiday balance tracking."
  },
  {
    icon: DollarSign,
    title: "Payroll Management",
    description: "Automate salary calculations, deductions, and tax compliance. Generate payslips and handle reimbursements efficiently."
  },
  {
    icon: Shield,
    title: "Role & Permission Management",
    description: "Granular access control with role-based permissions. Ensure data security while maintaining operational flexibility."
  },
  {
    icon: BarChart3,
    title: "Reports & Analytics",
    description: "Comprehensive dashboards and customizable reports. Export to Excel, visualize trends, and make data-driven decisions."
  },
  {
    icon: UserCircle,
    title: "Employee Self-Service Portal",
    description: "Empower employees to manage their own information, submit requests, and access payslips anytime, anywhere."
  },
  {
    icon: Sparkles,
    title: "Darpan AI Integration",
    description: "AI-powered assistant for instant leave management, policy queries, and HR support through simple prompts."
  }
];

const Features = () => {
  return (
    <section id="features" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Comprehensive HRMS Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need to manage your workforce effectively, all in one platform
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card 
                key={index}
                className="shadow-card hover:shadow-card-hover transition-smooth group cursor-pointer border-border/50"
              >
                <CardHeader>
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/10 to-secondary/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-smooth">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Features;
