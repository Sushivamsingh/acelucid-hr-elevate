import { ShieldCheck, UserCog, Users2, User, Wallet } from "lucide-react";

const roles = [
  {
    icon: ShieldCheck,
    title: "Admin / Super Admin",
    description: "Complete system access with user management, configuration, and security controls"
  },
  {
    icon: UserCog,
    title: "HR Manager",
    description: "Manage employee data, process leave requests, generate reports, and handle HR operations"
  },
  {
    icon: Users2,
    title: "Manager / Team Lead",
    description: "Approve team leave requests, view team attendance, and access team analytics"
  },
  {
    icon: User,
    title: "Employee",
    description: "Submit leave requests, mark attendance, view payslips, and update personal information"
  },
  {
    icon: Wallet,
    title: "Finance / Payroll Officer",
    description: "Process payroll, manage reimbursements, and handle financial aspects of HR"
  }
];

const UserRoles = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Role-Based Access Control
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Secure, granular permissions tailored to each role in your organization
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-4">
          {roles.map((role, index) => {
            const Icon = role.icon;
            return (
              <div 
                key={index}
                className="flex items-start gap-6 p-6 rounded-xl bg-card border border-border shadow-card hover:shadow-card-hover transition-smooth group"
              >
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                  <Icon className="h-7 w-7 text-primary-foreground" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2">{role.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{role.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default UserRoles;
