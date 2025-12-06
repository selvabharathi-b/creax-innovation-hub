import { ArrowRight, Zap, Code2, Rocket, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const AboutSection = () => {
  return (
    <section id="about" className="py-20 md:py-28 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/30 to-transparent" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[150px] -translate-y-1/2" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left - Content */}
          <div className="opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-primary font-medium">About CreaX</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-bold font-display leading-tight mb-6">
              We <span className="text-gradient">Build</span> Products &{" "}
              <span className="text-gradient">Train</span> Talent
            </h2>
            
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              CreaX operates a dual-engine model: delivering enterprise B2B solutions while training developers on real-world projects. We engineer outcomes and cultivate careers.
            </p>

            <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground group h-12 px-6">
              Learn More
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>

          {/* Right - Feature cards */}
          <div className="grid grid-cols-2 gap-4 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {[
              { icon: Zap, title: "B2B Solutions", desc: "Enterprise-grade digital products", gradient: "from-primary to-amber-500" },
              { icon: Code2, title: "Dev Training", desc: "Real-world project experience", gradient: "from-amber-500 to-orange-500" },
              { icon: Users, title: "200+ Devs", desc: "Trained & placed globally", gradient: "from-orange-500 to-red-500" },
              { icon: Rocket, title: "50+ Projects", desc: "Delivered successfully", gradient: "from-red-500 to-primary" },
            ].map((item, i) => (
              <div 
                key={item.title}
                className="group bg-card rounded-2xl p-5 border border-border hover:border-primary/30 hover:shadow-lg transition-all duration-300 cursor-default"
              >
                <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                  <item.icon className="w-5 h-5 text-white" />
                </div>
                <h3 className="font-bold font-display text-foreground mb-1">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
