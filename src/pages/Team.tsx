import { Linkedin, Twitter, Github } from "lucide-react";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";
import ScrollReveal from "@/components/ScrollReveal";
import { siteData } from "@/data/siteData";

const Team = () => {
  const { team } = siteData;

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

          {/* Team Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {team.members.map((member, index) => (
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
                    <a href={member.social.linkedin} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                      <Linkedin className="w-4 h-4" />
                    </a>
                    <a href={member.social.twitter} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                      <Twitter className="w-4 h-4" />
                    </a>
                    <a href={member.social.github} className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors">
                      <Github className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Team;
