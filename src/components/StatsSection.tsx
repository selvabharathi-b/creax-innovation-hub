import { Rocket, Target, TrendingDown, Clock, TrendingUp, Users, Award, Zap, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import ScrollReveal from "./ScrollReveal";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Rocket,
  Target,
  TrendingDown,
  TrendingUp,
  Clock,
  Users,
  Award,
  Zap,
};

interface Stat {
  id: string;
  label: string;
  value: string;
  icon: string;
  description: string | null;
  display_order: number;
  is_active: boolean;
}

const StatsSection = () => {
  const { stats: staticStats } = siteData;

  const { data: dbStats, isLoading } = useQuery({
    queryKey: ['stats'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('stats')
        .select('*')
        .eq('is_active', true)
        .order('display_order');
      if (error) throw error;
      return data as Stat[];
    },
    staleTime: 1000 * 60,
    refetchOnWindowFocus: true,
  });

  // Use database data if available, otherwise fall back to static data
  const displayStats = dbStats && dbStats.length > 0 
    ? dbStats 
    : staticStats;

  return (
    <section className="py-20 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-secondary/20 to-background" />
      
      <div className="container mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        {isLoading && (
          <div className="flex justify-center py-8">
            <Loader2 className="h-8 w-8 animate-spin text-primary" />
          </div>
        )}

        {!isLoading && (
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {displayStats.map((stat, index) => {
              const IconComponent = iconMap[stat.icon];
              return (
                <ScrollReveal key={stat.label} delay={index * 100} direction="up">
                  <div className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group">
                    <div className="w-14 h-14 mx-auto rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      {IconComponent && <IconComponent className="w-7 h-7 text-primary" />}
                    </div>
                    <div className="text-3xl md:text-4xl font-bold font-display text-foreground mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm font-medium text-foreground mb-1">{stat.label}</div>
                    <div className="text-xs text-muted-foreground">{stat.description}</div>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default StatsSection;
