import { CheckCircle, ArrowRight, Code2, Users, Rocket, Target, Zap, Shield, TrendingUp, Award } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";

const AboutSection = () => {
  const highlights = [
    { text: "Dual-engine model: B2B solutions + Developer training", icon: Zap },
    { text: "Real-world project experience for all trainees", icon: Code2 },
    { text: "High-end digital solutions for enterprise clients", icon: Shield },
    { text: "Career cultivation alongside code engineering", icon: Target },
  ];

  const stats = [
    { icon: Rocket, value: "50+", label: "Projects Delivered", color: "from-primary to-amber-500" },
    { icon: Users, value: "200+", label: "Developers Trained", color: "from-amber-500 to-orange-500" },
    { icon: TrendingUp, value: "98%", label: "Client Satisfaction", color: "from-orange-500 to-red-500" },
    { icon: Award, value: "15+", label: "Industry Awards", color: "from-red-500 to-primary" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        {/* Section header */}
        <ScrollReveal direction="up">
          <div className="text-center mb-20">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">About CreaX</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight mb-6">
              Bridging the Gap Between{" "}
              <span className="text-gradient">Potential</span>
              <br className="hidden md:block" />
              {" "}and <span className="text-gradient">Performance</span>
            </h2>
            
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              CreaX isn't just a dev shop. We are an ecosystem operating a dual-engine model: 
              delivering high-end B2B digital solutions while rigorously training aspiring developers on real-world projects.
            </p>
          </div>
        </ScrollReveal>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-20">
          {stats.map((stat, index) => (
            <ScrollReveal key={stat.label} delay={index * 100} direction="up">
              <div className="group relative bg-card rounded-2xl p-6 md:p-8 border border-border hover:border-primary/30 hover:shadow-xl transition-all duration-500 cursor-default overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${stat.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                
                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 group-hover:shadow-xl transition-all duration-500`}>
                    <stat.icon className="w-7 h-7 text-white" />
                  </div>
                  <div className="text-3xl md:text-4xl font-bold font-display text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Main content - Two columns */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start">
          {/* Left - Mission Statement */}
          <ScrollReveal direction="left">
            <div className="bg-card rounded-3xl p-8 md:p-10 border border-border relative overflow-hidden">
              {/* Decorative gradient */}
              <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-primary/10 to-transparent rounded-bl-full" />
              
              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Target className="w-4 h-4" />
                  Our Mission
                </div>
                
                <h3 className="text-2xl md:text-3xl font-bold font-display text-foreground mb-6">
                  Engineering Outcomes, Cultivating Careers
                </h3>
                
                <p className="text-muted-foreground leading-relaxed mb-8">
                  We don't just write code — we <span className="text-foreground font-semibold">engineer outcomes</span> and <span className="text-foreground font-semibold">cultivate careers</span>. Our unique approach combines enterprise-grade development with hands-on training, creating a sustainable pipeline of elite tech talent.
                </p>
                
                {/* Visual divider */}
                <div className="flex items-center gap-4 mb-8">
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                  <div className="w-3 h-3 rounded-full bg-primary/20 border border-primary/30" />
                  <div className="flex-1 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
                </div>
                
                {/* Quick stats row */}
                <div className="grid grid-cols-3 gap-4">
                  {[
                    { value: "5+", label: "Years" },
                    { value: "24/7", label: "Support" },
                    { value: "100%", label: "Commitment" },
                  ].map((item) => (
                    <div key={item.label} className="text-center">
                      <div className="text-2xl font-bold font-display text-gradient">{item.value}</div>
                      <div className="text-xs text-muted-foreground">{item.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Right - Highlights */}
          <div className="space-y-4">
            {highlights.map((item, index) => (
              <ScrollReveal key={index} delay={index * 100} direction="right">
                <div className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-default">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 group-hover:scale-110 transition-all duration-300">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-medium flex-1">{item.text}</span>
                  <CheckCircle className="w-5 h-5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              </ScrollReveal>
            ))}

            <ScrollReveal delay={500} direction="up">
              <div className="pt-6">
                <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground group h-14 px-8 text-base glow w-full sm:w-auto">
                  Discover Our Story
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
