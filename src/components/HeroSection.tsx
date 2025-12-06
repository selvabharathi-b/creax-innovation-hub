import { ArrowRight, Play, Sparkles, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-primary/5" />
      
      {/* Animated grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,131,47,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,131,47,0.03)_1px,transparent_1px)] bg-[size:60px_60px] animate-[pulse_4s_ease-in-out_infinite]" />
      
      {/* Floating orbs with animations */}
      <div className="absolute top-20 left-[10%] w-72 h-72 bg-primary/20 rounded-full blur-[100px] animate-pulse" />
      <div className="absolute bottom-20 right-[10%] w-96 h-96 bg-amber-400/15 rounded-full blur-[120px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-[100px]" />

      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(6)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-primary/30 rounded-full animate-float"
            style={{
              left: `${15 + i * 15}%`,
              top: `${20 + (i % 3) * 25}%`,
              animationDelay: `${i * 0.5}s`,
              animationDuration: `${3 + i * 0.5}s`
            }}
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top badge with shine effect */}
          <div className="flex justify-center mb-8 opacity-0 animate-fade-in-up">
            <div className="relative inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary/10 border border-primary/20 backdrop-blur-sm overflow-hidden group hover:border-primary/40 transition-colors cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/10 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <Sparkles className="w-4 h-4 text-primary animate-pulse" />
              <span className="text-sm text-primary font-semibold">Build • Deploy • Dominate</span>
              <div className="w-px h-4 bg-primary/30" />
              <span className="text-xs text-muted-foreground">Est. 2024</span>
            </div>
          </div>

          {/* Main headline with staggered animation */}
          <div className="text-center mb-10 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.15s' }}>
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display leading-[1.05] tracking-tight mb-8">
              <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                The Future of Tech.
              </span>
              <br />
              <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.35s' }}>
                <span className="text-gradient relative">
                  Built & Trained
                  <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                    <path 
                      d="M2 10C50 4 100 2 150 6C200 10 250 4 298 8" 
                      stroke="hsl(var(--primary))" 
                      strokeWidth="3" 
                      strokeLinecap="round"
                      className="animate-[dash_1.5s_ease-out_forwards]"
                      style={{ 
                        strokeDasharray: 300,
                        strokeDashoffset: 300,
                        animationDelay: '0.8s'
                      }}
                    />
                  </svg>
                </span>
                {" "}Here.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
              We are a strategic technology partner that builds market-defining digital products 
              while forging the next generation of elite tech talent.
            </p>
          </div>

          {/* CTA Buttons with hover effects */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <Button 
              size="lg" 
              className="relative bg-gradient-primary hover:opacity-90 transition-all text-primary-foreground group h-14 px-8 text-base glow overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Hire Our Agency
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-primary via-amber-500 to-primary bg-[length:200%_100%] animate-[shimmer_2s_linear_infinite] opacity-0 group-hover:opacity-100 transition-opacity" />
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border bg-card/50 backdrop-blur-sm hover:bg-secondary hover:border-primary/30 transition-all h-14 px-8 text-base group"
            >
              <Play className="mr-2 h-4 w-4 group-hover:scale-110 transition-transform" />
              Watch Demo
            </Button>
          </div>

          {/* Trust badges with staggered reveal */}
          <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.75s' }}>
            <p className="text-sm text-muted-foreground mb-6">Trusted by innovative companies</p>
            <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
              {['TechCorp', 'InnovateLabs', 'FutureDev', 'CloudScale', 'DataFlow'].map((company, i) => (
                <div 
                  key={company} 
                  className="text-lg font-bold font-display text-muted-foreground/40 hover:text-primary transition-colors duration-300 cursor-default opacity-0 animate-fade-in"
                  style={{ animationDelay: `${0.9 + i * 0.1}s` }}
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator with bounce */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1.2s' }}>
        <div className="flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary/70 transition-colors cursor-pointer group">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <ChevronDown className="w-5 h-5 animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
