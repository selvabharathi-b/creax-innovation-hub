import { useState } from "react";
import { ArrowRight, Mail, Twitter, Linkedin, Github } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/hooks/use-toast";

const FooterCTA = () => {
  const [email, setEmail] = useState("");

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast({
        title: "Successfully subscribed!",
        description: "You'll receive our latest tech trends and hiring alerts.",
      });
      setEmail("");
    }
  };

  const socialLinks = [
    { icon: Twitter, href: "#", label: "Twitter" },
    { icon: Linkedin, href: "#", label: "LinkedIn" },
    { icon: Github, href: "#", label: "GitHub" },
  ];

  const footerLinks = {
    Company: ["About", "Careers", "Press", "Blog"],
    Services: ["Agency", "Accelerator", "Design", "Education"],
    Resources: ["Documentation", "Help Center", "Community", "Contact"],
    Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
  };

  return (
    <footer id="contact" className="pt-24 pb-8 relative">
      {/* CTA Section */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20 mb-20">
        <div className="glass-card rounded-3xl p-8 md:p-12 relative overflow-hidden">
          {/* Background decoration */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
          
          <div className="relative z-10 max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold font-display mb-4 opacity-0 animate-fade-in-up">
              Ready to <span className="text-gradient">Dominate</span>?
            </h2>
            
            <p className="text-muted-foreground mb-8 opacity-0 animate-fade-in-up delay-100">
              Join the ecosystem where innovation meets execution. Subscribe to our newsletter 
              for tech trends and hiring alerts.
            </p>
            
            <form 
              onSubmit={handleSubscribe} 
              className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto opacity-0 animate-fade-in-up delay-200"
            >
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 bg-secondary border-border h-12"
                  required
                />
              </div>
              <Button 
                type="submit" 
                className="bg-gradient-primary hover:opacity-90 text-primary-foreground h-12 px-6 group"
              >
                Subscribe
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </form>
          </div>
        </div>
      </div>

      {/* Footer Links */}
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8 pb-12 border-b border-border">
          {/* Brand */}
          <div className="col-span-2 md:col-span-1">
            <a href="#home" className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-xl font-display">C</span>
              </div>
              <span className="text-xl font-bold font-display text-foreground">CreaX</span>
            </a>
            <p className="text-sm text-muted-foreground mb-4">
              Build • Deploy • Dominate.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-9 h-9 rounded-lg bg-secondary flex items-center justify-center text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* Links */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="font-semibold text-foreground mb-4 text-sm">{category}</h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Copyright */}
        <div className="py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            © 2024 CreaX. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground">
            Designed & Developed with ❤️
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterCTA;
