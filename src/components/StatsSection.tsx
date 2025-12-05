import { Rocket, Target, TrendingDown, Clock } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Rocket,
      value: "50+",
      label: "Projects Shipped",
      description: "Global Clients",
    },
    {
      icon: Target,
      value: "98%",
      label: "Job Placement",
      description: "Accelerator Grads",
    },
    {
      icon: TrendingDown,
      value: "30%",
      label: "Cost Reduction",
      description: "For Agency Partners",
    },
    {
      icon: Clock,
      value: "24/7",
      label: "Innovation",
      description: "Continuous Dev Cycle",
    },
  ];

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group opacity-0 animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <stat.icon className="w-7 h-7 text-primary" />
              </div>
              <div className="text-3xl md:text-4xl font-bold font-display text-foreground mb-1">
                {stat.value}
              </div>
              <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
              <div className="text-xs text-muted-foreground">{stat.description}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
