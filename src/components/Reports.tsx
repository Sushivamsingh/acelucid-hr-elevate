import { FileSpreadsheet, TrendingUp, Calendar, Users } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const reportTypes = [
  {
    icon: Calendar,
    title: "Attendance Reports",
    description: "Detailed attendance tracking with exportable Excel reports, overtime calculations, and absence patterns"
  },
  {
    icon: Users,
    title: "Employee Data Reports",
    description: "Comprehensive employee information exports including demographics, performance, and organizational structure"
  },
  {
    icon: FileSpreadsheet,
    title: "Leave Dashboards",
    description: "Real-time leave status overview with balance tracking, trends, and forecasting capabilities"
  },
  {
    icon: TrendingUp,
    title: "Visual Analytics",
    description: "Interactive dashboards for managers and HR with charts, graphs, and key performance indicators"
  }
];

const Reports = () => {
  return (
    <section id="reports" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Reports & Analytics
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Transform HR data into actionable insights with powerful reporting and visualization tools
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {reportTypes.map((report, index) => {
            const Icon = report.icon;
            return (
              <Card 
                key={index}
                className="shadow-card hover:shadow-card-hover transition-smooth group border-border/50"
              >
                <CardHeader>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary to-secondary flex items-center justify-center group-hover:scale-110 transition-smooth">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    <CardTitle className="text-xl">{report.title}</CardTitle>
                  </div>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    {report.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Key Features */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 text-center">
            <div className="p-6 rounded-xl bg-card border border-border shadow-card">
              <div className="text-4xl font-bold text-primary mb-2">Excel Export</div>
              <p className="text-sm text-muted-foreground">One-click data exports</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border shadow-card">
              <div className="text-4xl font-bold text-secondary mb-2">Real-time</div>
              <p className="text-sm text-muted-foreground">Live dashboard updates</p>
            </div>
            <div className="p-6 rounded-xl bg-card border border-border shadow-card">
              <div className="text-4xl font-bold text-success mb-2">Custom</div>
              <p className="text-sm text-muted-foreground">Customizable reports</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reports;
