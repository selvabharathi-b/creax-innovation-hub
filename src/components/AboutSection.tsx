import { CheckCircle, ArrowRight, Code2, Users, Rocket, Target, Zap, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  const highlights = [
    { text: "Dual-engine model: B2B solutions + Developer training", icon: Zap },
    { text: "Real-world project experience for all trainees", icon: Code2 },
    { text: "High-end digital solutions for enterprise clients", icon: Shield },
    { text: "Career cultivation alongside code engineering", icon: Target },
  ];

  return (
    <section id="about" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-primary/[0.02] to-transparent" />
      <div className="absolute top-1/2 -translate-y-1/2 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[150px]" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-[100px]" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16 opacity-0 animate-fade-in-up">
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

        {/* Main content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Interactive visual */}
          <div className="relative opacity-0 animate-slide-in-left">
            <div className="relative">
              {/* Main card container */}
              <div className="relative bg-card rounded-3xl p-8 border border-border shadow-xl overflow-hidden">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-amber-500/5" />
                
                {/* Content */}
                <div className="relative z-10">
                  {/* Top metrics row */}
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    <div className="group bg-gradient-primary rounded-2xl p-6 text-center transform hover:scale-[1.02] transition-all duration-300 cursor-default">
                      <div className="text-5xl font-bold font-display text-white mb-2">B2B</div>
                      <div className="text-sm text-white/80 font-medium">Enterprise Solutions</div>
                      <div className="mt-3 flex justify-center gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-2 h-2 rounded-full bg-white/40 group-hover:bg-white/70 transition-colors" style={{ transitionDelay: `${i * 50}ms` }} />
                        ))}
                      </div>
                    </div>
                    <div className="group bg-secondary rounded-2xl p-6 text-center border border-border transform hover:scale-[1.02] hover:border-primary/30 transition-all duration-300 cursor-default">
                      <div className="text-5xl font-bold font-display text-gradient mb-2">Dev</div>
                      <div className="text-sm text-muted-foreground font-medium">Elite Training</div>
                      <div className="mt-3 flex justify-center gap-1">
                        {[1,2,3,4,5].map(i => (
                          <div key={i} className="w-2 h-2 rounded-full bg-primary/30 group-hover:bg-primary/70 transition-colors" style={{ transitionDelay: `${i * 50}ms` }} />
                        ))}
                      </div>
                    </div>
                  </div>
                  
                  {/* Progress visualization */}
                  <div className="bg-secondary/50 rounded-2xl p-6 border border-border/50 mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-sm font-semibold text-foreground">Project Pipeline</span>
                      <div className="flex items-center gap-2">
                        <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                        <span className="text-xs text-emerald-600 font-medium">Live</span>
                      </div>
                    </div>
                    <div className="flex gap-3">
                      {[
                        { label: 'Design', value: 85, color: 'from-primary to-amber-500' },
                        { label: 'Develop', value: 70, color: 'from-amber-500 to-orange-500' },
                        { label: 'Deploy', value: 90, color: 'from-orange-500 to-red-500' },
                        { label: 'Train', value: 60, color: 'from-red-500 to-pink-500' },
                        { label: 'Scale', value: 95, color: 'from-pink-500 to-primary' },
                      ].map((item, i) => (
                        <div key={i} className="flex-1 group">
                          <div className="h-24 rounded-xl bg-muted relative overflow-hidden">
                            <div 
                              className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${item.color} rounded-xl transition-all duration-1000 ease-out`}
                              style={{ 
                                height: `${item.value}%`,
                                transitionDelay: `${i * 100}ms`
                              }}
                            />
                            <div className="absolute inset-0 flex items-end justify-center pb-2">
                              <span className="text-xs font-bold text-white drop-shadow-sm">{item.value}%</span>
                            </div>
                          </div>
                          <span className="block text-[10px] text-muted-foreground text-center mt-2 font-medium">{item.label}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Bottom stats */}
                  <div className="grid grid-cols-3 gap-3">
                    {[
                      { icon: Rocket, value: "50+", label: "Projects" },
                      { icon: Users, value: "200+", label: "Developers" },
                      { icon: Target, value: "98%", label: "Success" },
                    ].map((stat) => (
                      <div key={stat.label} className="bg-background rounded-xl p-4 text-center border border-border/50 hover:border-primary/30 transition-colors group cursor-default">
                        <stat.icon className="w-5 h-5 text-primary mx-auto mb-2 group-hover:scale-110 transition-transform" />
                        <div className="text-xl font-bold font-display text-foreground">{stat.value}</div>
                        <div className="text-xs text-muted-foreground">{stat.label}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Floating cards */}
              <div className="absolute -top-4 -right-4 glass-card rounded-2xl p-4 animate-float shadow-lg">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center">
                    <Zap className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">12 Active</div>
                    <div className="text-xs text-muted-foreground">Live Projects</div>
                  </div>
                </div>
              </div>

              <div className="absolute -bottom-4 -left-4 glass-card rounded-2xl p-4 animate-float shadow-lg" style={{ animationDelay: '1.5s' }}>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/10 flex items-center justify-center">
                    <Shield className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-foreground">99.9%</div>
                    <div className="text-xs text-muted-foreground">Uptime SLA</div>
                  </div>
                </div>
              </div>
              
              {/* Decorative glow */}
              <div className="absolute -inset-8 bg-gradient-to-r from-primary/15 via-transparent to-amber-400/15 rounded-3xl blur-3xl -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-8 opacity-0 animate-slide-in-right">
            <div>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We don't just write code — we <span className="text-foreground font-semibold">engineer outcomes</span> and <span className="text-foreground font-semibold">cultivate careers</span>. Our unique approach combines enterprise-grade development with hands-on training, creating a sustainable pipeline of elite tech talent.
              </p>
            </div>

            <div className="space-y-4">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="group flex items-center gap-4 p-5 rounded-2xl bg-card border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 opacity-0 animate-fade-in-up cursor-default"
                  style={{ animationDelay: `${index * 0.1 + 0.3}s` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <item.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-foreground font-medium flex-1">{item.text}</span>
                  <CheckCircle className="w-5 h-5 text-emerald-500 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
              ))}
            </div>

            <div className="pt-6 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.8s' }}>
              <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground group h-14 px-8 text-base glow">
                Discover Our Story
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
