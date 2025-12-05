import { ArrowRight, Play, Sparkles, Code2, Zap, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:60px_60px]" />
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-cyan-400/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top badge */}
          <div className="flex justify-center mb-8 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm text-primary font-medium">Build • Deploy • Dominate</span>
              <div className="w-px h-4 bg-primary/30" />
              <span className="text-xs text-muted-foreground">Est. 2024</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="text-center mb-8 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display leading-[1.1] tracking-tight mb-6">
              The Future of Tech.
              <br />
              <span className="text-gradient">Built & Trained</span> Here.
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              We are a strategic technology partner that builds market-defining digital products 
              while forging the next generation of elite tech talent.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <Button 
              size="lg" 
              className="bg-gradient-primary hover:opacity-90 transition-all text-primary-foreground group h-14 px-8 text-base glow"
            >
              Hire Our Agency
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border/50 bg-background/50 backdrop-blur-sm hover:bg-secondary hover:text-foreground transition-all h-14 px-8 text-base"
            >
              <Play className="mr-2 h-4 w-4" />
              Watch Demo
            </Button>
          </div>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-4xl mx-auto opacity-0 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {[
              { icon: Code2, value: "50+", label: "Projects Delivered", color: "from-blue-500 to-cyan-500" },
              { icon: Zap, value: "200+", label: "Developers Trained", color: "from-violet-500 to-purple-500" },
              { icon: TrendingUp, value: "98%", label: "Client Satisfaction", color: "from-emerald-500 to-teal-500" },
              { icon: Sparkles, value: "Top 1%", label: "Elite Talent", color: "from-amber-500 to-orange-500" },
            ].map((stat, index) => (
              <div 
                key={stat.label}
                className="group relative"
              >
                <div className="glass-card rounded-2xl p-5 md:p-6 text-center hover:border-primary/30 transition-all duration-300 h-full">
                  <div className={`w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br ${stat.color} flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity`}>
                    <stat.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-2xl md:text-3xl font-bold font-display text-foreground mb-1">
                    {stat.value}
                  </div>
                  <div className="text-xs md:text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Trust badges */}
          <div className="mt-16 text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12 opacity-50">
              {['TechCorp', 'InnovateLabs', 'FutureDev', 'CloudScale', 'DataFlow'].map((company) => (
                <div key={company} className="text-lg font-bold font-display text-muted-foreground/60 hover:text-muted-foreground transition-colors">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
        <div className="w-6 h-10 rounded-full border-2 border-muted-foreground/30 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-muted-foreground/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
