import { ArrowRight, Users, Briefcase, Award } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-16 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/20" />
      
      {/* Decorative elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-primary/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4 opacity-0 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-sm text-primary font-medium">Build • Deploy • Dominate</span>
              </div>
              
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-display leading-tight">
                The Future of Tech.{" "}
                <span className="text-gradient">Built & Trained</span> Here.
              </h1>
              
              <p className="text-lg text-muted-foreground max-w-xl">
                We are a strategic technology partner that builds market-defining digital products 
                while forging the next generation of elite tech talent.
              </p>
            </div>

            <div className="flex flex-wrap gap-4 opacity-0 animate-fade-in-up delay-200">
              <Button 
                size="lg" 
                className="bg-gradient-primary hover:opacity-90 transition-all text-primary-foreground group glow"
              >
                Hire Our Agency
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-border hover:bg-secondary hover:text-foreground transition-all"
              >
                Join Accelerator
              </Button>
            </div>
          </div>

          {/* Right Content - Floating Cards */}
          <div className="relative h-[400px] lg:h-[500px] flex items-center justify-center">
            {/* Central circle */}
            <div className="w-64 h-64 md:w-72 md:h-72 rounded-full border-2 border-dashed border-border/50 flex items-center justify-center animate-scale-in">
              <div className="w-48 h-48 md:w-56 md:h-56 rounded-full bg-gradient-to-br from-card to-secondary flex items-center justify-center glass-card">
                <div className="text-center">
                  <div className="text-4xl md:text-5xl font-bold text-gradient font-display">CreaX</div>
                  <p className="text-sm text-muted-foreground mt-2">Innovation Hub</p>
                </div>
              </div>
            </div>

            {/* Floating stat cards */}
            <div className="absolute -top-4 right-4 md:right-0 animate-fade-in-up animate-float" style={{ animationDelay: '0.2s' }}>
              <div className="glass-card rounded-xl p-4 min-w-[140px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold font-display text-foreground">200+</div>
                    <div className="text-xs text-muted-foreground">Developers Trained</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -left-4 md:-left-16 top-1/2 -translate-y-1/2 animate-fade-in-up animate-float" style={{ animationDelay: '0.4s' }}>
              <div className="glass-card rounded-xl p-4 min-w-[140px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold font-display text-foreground">50+</div>
                    <div className="text-xs text-muted-foreground">Enterprise Projects</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="absolute -bottom-4 right-8 md:right-12 animate-fade-in-up animate-float" style={{ animationDelay: '0.6s' }}>
              <div className="glass-card rounded-xl p-4 min-w-[130px]">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
                    <Award className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-xl font-bold font-display text-foreground">Top 1%</div>
                    <div className="text-xs text-muted-foreground">Elite Talent</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
