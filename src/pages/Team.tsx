import { Linkedin, Twitter, Github, Loader2 } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { siteData } from "@/data/siteData";

interface TeamMember {
  id: string;
  name: string;
  role: string;
  bio: string | null;
  image_url: string | null;
  linkedin_url: string | null;
  twitter_url: string | null;
  github_url: string | null;
  display_order: number;
  is_active: boolean;
}

const Team = () => {
  const { team } = siteData;

  const { data: dbMembers, isLoading } = useQuery({
    queryKey: ['team-members'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('team_members')
        .select('*')
        .eq('is_active', true)
        .order('display_order');
      if (error) throw error;
      return data as TeamMember[];
    },
    staleTime: 1000 * 60,
    refetchOnWindowFocus: true,
  });

  // Use database data if available, otherwise fall back to static data
  const displayMembers = dbMembers && dbMembers.length > 0 
    ? dbMembers.map(m => ({
        name: m.name,
        role: m.role,
        bio: m.bio || '',
        image: m.image_url || 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
        social: {
          linkedin: m.linkedin_url || '#',
          twitter: m.twitter_url || '#',
          github: m.github_url || '#',
        }
      }))
    : team.members;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Header */}
          <ScrollReveal direction="up">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="text-xs text-primary font-medium">{team.badge}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
                {team.headline.prefix} <span className="text-gradient">{team.headline.highlight}</span>
              </h1>
              <p className="text-muted-foreground text-lg">
                {team.description}
              </p>
            </div>
          </ScrollReveal>

          {/* Loading State */}
          {isLoading && (
            <div className="flex justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-primary" />
            </div>
          )}

          {/* Team Grid */}
          {!isLoading && (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {displayMembers.map((member, index) => (
                <ScrollReveal key={member.name} delay={index * 100} direction="up">
                  <div className="glass-card rounded-2xl p-6 text-center hover:border-primary/30 transition-all duration-300 group">
                    <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden ring-4 ring-primary/20 group-hover:ring-primary/40 transition-all">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-bold font-display text-foreground mb-1">
                      {member.name}
                    </h3>
                    <p className="text-primary font-medium text-sm mb-3">{member.role}</p>
                    <p className="text-muted-foreground text-sm mb-4">{member.bio}</p>
                    <div className="flex justify-center gap-3">
                      {member.social.linkedin && member.social.linkedin !== '#' && (
                        <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                          <Linkedin className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.twitter && member.social.twitter !== '#' && (
                        <a href={member.social.twitter} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                          <Twitter className="w-4 h-4" />
                        </a>
                      )}
                      {member.social.github && member.social.github !== '#' && (
                        <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          )}
        </div>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Team;
