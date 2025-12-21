import { ArrowRight, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center pt-20 pb-12 relative overflow-hidden">
      {/* Layered background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      
      {/* Decorative circles */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[1200px] rounded-full border border-primary/5" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full border border-primary/10" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] rounded-full border border-primary/10" />
      
      {/* Animated gradient orbs */}
      <div className="absolute top-1/4 left-[5%] w-80 h-80 bg-primary/25 rounded-full blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 right-[5%] w-96 h-96 bg-amber-500/20 rounded-full blur-[140px] animate-pulse" style={{ animationDelay: '1s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px]" />

      {/* Floating geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[15%] left-[8%] w-16 h-16 border-2 border-primary/20 rounded-2xl rotate-12 animate-float" />
        <div className="absolute top-[25%] right-[12%] w-12 h-12 bg-primary/10 rounded-full animate-float" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-[30%] left-[15%] w-8 h-8 bg-amber-500/20 rounded-lg rotate-45 animate-float" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-[20%] right-[8%] w-20 h-20 border border-primary/15 rounded-full animate-float" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-[40%] left-[3%] w-6 h-6 bg-primary/30 rounded-full animate-pulse" />
        <div className="absolute top-[60%] right-[5%] w-4 h-4 bg-amber-500/40 rounded-full animate-pulse" style={{ animationDelay: '0.7s' }} />
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 xl:px-32 relative z-10">
        <div className="max-w-6xl mx-auto">
          {/* Top badge */}
          <div className="flex justify-center mb-10 opacity-0 animate-fade-in-up">
            <div className="relative inline-flex items-center gap-3 px-6 py-3 rounded-full bg-card/80 border border-border backdrop-blur-md shadow-lg overflow-hidden group hover:border-primary/40 transition-all duration-300 cursor-default">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/5 to-transparent translate-x-[-200%] group-hover:translate-x-[200%] transition-transform duration-1000" />
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs font-medium text-emerald-600">Active</span>
              </div>
              <div className="w-px h-5 bg-border" />
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-foreground">Build • Deploy • Dominate</span>
            </div>
          </div>

          {/* Main headline */}
          <div className="text-center mb-12">
            <h1 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold font-display leading-[1.02] tracking-tight mb-8">
              <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                The Future of Tech.
              </span>
              <br />
              <span className="inline-block opacity-0 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
                <span className="text-gradient">Built & Trained</span>
                {" "}Here.
              </span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed opacity-0 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              We are a strategic technology partner that builds market-defining digital products 
              while forging the next generation of elite tech talent.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap justify-center gap-4 mb-16 opacity-0 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button 
              size="lg" 
              className="relative bg-gradient-primary hover:shadow-xl hover:shadow-primary/25 transition-all duration-300 text-primary-foreground group h-14 px-8 text-base overflow-hidden"
            >
              <span className="relative z-10 flex items-center font-semibold">
                Hire Our Agency
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-border bg-card/80 backdrop-blur-sm hover:bg-card hover:border-primary/40 hover:shadow-lg transition-all duration-300 h-14 px-8 text-base group"
            >
              <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                <Play className="h-3.5 w-3.5 text-primary ml-0.5" fill="currentColor" />
              </div>
              Watch Demo
            </Button>
          </div>

          {/* Trust badges */}
          <div className="text-center opacity-0 animate-fade-in-up" style={{ animationDelay: '0.7s' }}>
            <p className="text-sm text-muted-foreground mb-6 font-medium">Trusted by innovative companies worldwide</p>
            <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10">
              {['TechCorp', 'InnovateLabs', 'FutureDev', 'CloudScale', 'DataFlow'].map((company, i) => (
                <div 
                  key={company} 
                  className="px-4 py-2 rounded-lg bg-secondary/50 border border-transparent hover:border-primary/20 text-base font-bold font-display text-muted-foreground/50 hover:text-primary transition-all duration-300 cursor-default"
                >
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 opacity-0 animate-fade-in-up" style={{ animationDelay: '1s' }}>
        <a href="#about" className="flex flex-col items-center gap-2 text-muted-foreground/60 hover:text-primary transition-colors cursor-pointer group">
          <span className="text-xs font-medium tracking-widest uppercase">Explore</span>
          <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-1.5">
            <div className="w-1.5 h-3 bg-current rounded-full animate-bounce" />
          </div>
        </a>
      </div>
    </section>
  );
};

export default HeroSection;
