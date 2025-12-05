import { CheckCircle, ArrowRight, Layers, Users, Rocket, Target } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const highlights = [
    "Dual-engine model: B2B solutions + Developer training",
    "Real-world project experience for all trainees",
    "High-end digital solutions for enterprise clients",
    "Career cultivation alongside code engineering",
  ];

  const metrics = [
    { icon: Layers, value: "50+", label: "Enterprise Projects" },
    { icon: Users, value: "200+", label: "Trained Developers" },
    { icon: Rocket, value: "30%", label: "Cost Reduction" },
    { icon: Target, value: "98%", label: "Success Rate" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/10 rounded-full blur-[120px]" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Left - Visual */}
          <div className="relative opacity-0 animate-slide-in-left order-2 lg:order-1">
            <div className="relative">
              {/* Main visual container */}
              <div className="relative bg-gradient-to-br from-card to-secondary/30 rounded-3xl p-8 border border-border/50 shadow-xl">
                {/* Top row */}
                <div className="grid grid-cols-2 gap-4 mb-4">
                  <div className="bg-gradient-primary rounded-2xl p-6 text-center transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold font-display text-white mb-1">B2B</div>
                    <div className="text-sm text-white/80">Solutions</div>
                  </div>
                  <div className="bg-card rounded-2xl p-6 text-center border border-border transform hover:scale-105 transition-transform duration-300">
                    <div className="text-4xl font-bold font-display text-gradient mb-1">Dev</div>
                    <div className="text-sm text-muted-foreground">Training</div>
                  </div>
                </div>
                
                {/* Center visual */}
                <div className="bg-card rounded-2xl p-6 border border-border mb-4">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium text-foreground">Ecosystem Integration</span>
                    <span className="text-xs text-primary font-medium">Active</span>
                  </div>
                  <div className="flex gap-2">
                    {[85, 70, 90, 60, 95].map((height, i) => (
                      <div key={i} className="flex-1 h-20 rounded-lg bg-secondary relative overflow-hidden">
                        <div 
                          className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-primary to-primary/60 rounded-lg transition-all duration-700"
                          style={{ height: `${height}%` }}
                        />
                      </div>
                    ))}
                  </div>
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>Design</span>
                    <span>Dev</span>
                    <span>Deploy</span>
                    <span>Train</span>
                    <span>Scale</span>
                  </div>
                </div>

                {/* Bottom metrics */}
                <div className="grid grid-cols-2 gap-4">
                  {metrics.slice(0, 2).map((metric) => (
                    <div key={metric.label} className="bg-secondary/50 rounded-xl p-4 flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <metric.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="text-lg font-bold font-display text-foreground">{metric.value}</div>
                        <div className="text-xs text-muted-foreground">{metric.label}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Floating accent card */}
              <div className="absolute -top-6 -right-6 glass-card rounded-2xl p-4 animate-float shadow-lg">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-sm font-medium text-foreground">Live Projects: 12</span>
                </div>
              </div>

              {/* Bottom floating card */}
              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 animate-float shadow-lg" style={{ animationDelay: '1s' }}>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
                    <Rocket className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative glow */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 via-transparent to-cyan-400/20 rounded-3xl blur-3xl -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 opacity-0 animate-slide-in-right order-1 lg:order-2">
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-primary font-medium">About CreaX</span>
              </div>
              
              <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6">
                Bridging the Gap Between{" "}
                <span className="text-gradient">Potential</span> and{" "}
                <span className="text-gradient">Performance</span>
              </h2>
              
              <p className="text-lg text-muted-foreground leading-relaxed mb-4">
                CreaX isn't just a dev shop. We are an ecosystem. We operate a dual-engine model: 
                delivering high-end B2B digital solutions for clients while rigorously training 
                aspiring developers on real-world projects.
              </p>
              
              <p className="text-muted-foreground">
                We don't just write code — we engineer outcomes and cultivate careers.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-start gap-4 p-4 rounded-xl bg-secondary/30 hover:bg-secondary/50 transition-colors opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                >
                  <div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4 text-primary" />
                  </div>
                  <span className="text-foreground font-medium">{item}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.9s' }}>
              <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground group h-12 px-6">
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
