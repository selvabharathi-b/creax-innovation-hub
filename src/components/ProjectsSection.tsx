import { Bot, ShoppingCart, Smartphone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ScrollReveal from "./ScrollReveal";
import { siteData } from "@/data/siteData";

const iconMap: Record<string, React.ComponentType<{ className?: string }>> = {
  Bot,
  ShoppingCart,
  Smartphone,
};

const ProjectsSection = () => {
  const { projects } = siteData;

  return (
    <section id="projects" className="py-24 relative">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
          <ScrollReveal direction="left">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
                <span className="text-xs text-primary font-medium">{projects.badge}</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold font-display">
                {projects.headline.prefix} <span className="text-gradient">{projects.headline.highlight}</span>
              </h2>
            </div>
          </ScrollReveal>
          
          <ScrollReveal direction="right">
            <Button 
              variant="outline" 
              className="border-border hover:bg-secondary group w-fit"
            >
              View All Projects
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </ScrollReveal>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-3 gap-6">
          {projects.items.map((project, index) => {
            const IconComponent = iconMap[project.icon];
            return (
              <ScrollReveal key={project.title} delay={index * 150} direction="up">
                <div className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group h-full">
                  {/* Project Header Image */}
                  <div className={`h-48 bg-gradient-to-br ${project.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 flex items-center justify-center">
                      {IconComponent && <IconComponent className="w-20 h-20 text-foreground/20 group-hover:scale-110 transition-transform duration-500" />}
                    </div>
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 rounded-full bg-background/80 backdrop-blur-sm text-xs font-medium text-foreground">
                        {project.category}
                      </span>
                    </div>
                  </div>
                  
                  {/* Project Content */}
                  <div className="p-6">
                    <h3 className="text-lg font-bold font-display mb-2 text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted-foreground mb-4">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-2 py-1 rounded-md bg-secondary text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
