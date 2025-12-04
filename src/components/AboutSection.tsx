import { CheckCircle } from "lucide-react";

const AboutSection = () => {
  const highlights = [
    "Dual-engine model: B2B solutions + Developer training",
    "Real-world project experience for all trainees",
    "High-end digital solutions for enterprise clients",
    "Career cultivation alongside code engineering",
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Visual */}
          <div className="relative opacity-0 animate-slide-in-left">
            <div className="relative">
              {/* Main card */}
              <div className="glass-card rounded-3xl p-8 relative z-10">
                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-gradient-primary rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold font-display text-primary-foreground">B2B</div>
                    <div className="text-sm text-primary-foreground/80 mt-1">Solutions</div>
                  </div>
                  <div className="bg-secondary rounded-2xl p-6 text-center">
                    <div className="text-3xl font-bold font-display text-foreground">Dev</div>
                    <div className="text-sm text-muted-foreground mt-1">Training</div>
                  </div>
                  <div className="col-span-2 bg-card rounded-2xl p-6 border border-border">
                    <div className="flex items-center justify-between">
                      <span className="text-muted-foreground">Ecosystem Integration</span>
                      <div className="flex gap-1">
                        {[...Array(5)].map((_, i) => (
                          <div key={i} className="w-2 h-8 rounded-full bg-primary/20 relative overflow-hidden">
                            <div 
                              className="absolute bottom-0 left-0 right-0 bg-primary rounded-full transition-all duration-500"
                              style={{ height: `${(i + 1) * 20}%` }}
                            />
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Decorative background */}
              <div className="absolute -inset-4 bg-gradient-to-r from-primary/20 to-transparent rounded-3xl blur-2xl -z-10" />
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 opacity-0 animate-slide-in-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20">
              <span className="text-xs text-primary font-medium">ABOUT US</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold font-display">
              Bridging the Gap Between{" "}
              <span className="text-gradient">Potential</span> and{" "}
              <span className="text-gradient">Performance</span>
            </h2>
            
            <p className="text-muted-foreground text-lg leading-relaxed">
              CreaX isn't just a dev shop. We are an ecosystem. We operate a dual-engine model: 
              delivering high-end B2B digital solutions for clients while rigorously training 
              aspiring developers on real-world projects.
            </p>
            
            <p className="text-muted-foreground">
              We don't just write code; we engineer outcomes and cultivate careers.
            </p>

            <div className="space-y-3 pt-4">
              {highlights.map((item, index) => (
                <div 
                  key={index} 
                  className="flex items-center gap-3 opacity-0 animate-fade-in-up"
                  style={{ animationDelay: `${index * 0.1 + 0.5}s` }}
                >
                  <CheckCircle className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
