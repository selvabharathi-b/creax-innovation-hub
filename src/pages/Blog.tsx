import { Calendar, Clock, ArrowRight, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FooterCTA from "@/components/FooterCTA";

const Blog = () => {
  const articles = [
    {
      title: "The Future of AI in Enterprise Software",
      excerpt: "Exploring how artificial intelligence is reshaping business operations and decision-making processes.",
      category: "AI/ML",
      author: "Sarah Johnson",
      date: "Dec 1, 2024",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&h=400&fit=crop",
      featured: true,
    },
    {
      title: "Building Scalable Microservices Architecture",
      excerpt: "Best practices for designing and implementing microservices that scale with your business.",
      category: "Engineering",
      author: "Emily Rodriguez",
      date: "Nov 28, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop",
    },
    {
      title: "Design Systems That Scale",
      excerpt: "How to create and maintain design systems that grow with your product and team.",
      category: "Design",
      author: "Michael Park",
      date: "Nov 25, 2024",
      readTime: "5 min read",
      image: "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop",
    },
    {
      title: "From Junior to Senior: A Developer's Journey",
      excerpt: "Key milestones and learnings from our accelerator program graduates.",
      category: "Career",
      author: "David Kim",
      date: "Nov 22, 2024",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop",
    },
    {
      title: "The Rise of Edge Computing",
      excerpt: "Understanding the shift towards distributed computing and its implications.",
      category: "Technology",
      author: "Alex Chen",
      date: "Nov 18, 2024",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop",
    },
    {
      title: "Securing Modern Web Applications",
      excerpt: "Essential security practices every developer should implement in 2024.",
      category: "Security",
      author: "Emily Rodriguez",
      date: "Nov 15, 2024",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?w=600&h=400&fit=crop",
    },
  ];

  const featuredArticle = articles.find(a => a.featured);
  const regularArticles = articles.filter(a => !a.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-24 pb-12">
        <div className="container mx-auto px-6 md:px-12 lg:px-20">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto mb-16 opacity-0 animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
              <span className="text-xs text-primary font-medium">BLOG & INSIGHTS</span>
            </div>
            <h1 className="text-4xl md:text-5xl font-bold font-display mb-4">
              Latest <span className="text-gradient">Articles</span>
            </h1>
            <p className="text-muted-foreground text-lg">
              Insights, tutorials, and thoughts from our team of experts.
            </p>
          </div>

          {/* Featured Article */}
          {featuredArticle && (
            <div className="glass-card rounded-3xl overflow-hidden mb-12 opacity-0 animate-fade-in-up">
              <div className="grid lg:grid-cols-2">
                <div className="h-64 lg:h-auto">
                  <img
                    src={featuredArticle.image}
                    alt={featuredArticle.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-8 lg:p-12 flex flex-col justify-center">
                  <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium w-fit mb-4">
                    {featuredArticle.category}
                  </span>
                  <h2 className="text-2xl lg:text-3xl font-bold font-display text-foreground mb-4">
                    {featuredArticle.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featuredArticle.excerpt}</p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-6">
                    <div className="flex items-center gap-2">
                      <User className="w-4 h-4" />
                      {featuredArticle.author}
                    </div>
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      {featuredArticle.date}
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4" />
                      {featuredArticle.readTime}
                    </div>
                  </div>
                  <Button className="bg-gradient-primary hover:opacity-90 text-primary-foreground group w-fit">
                    Read Article
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </div>
          )}

          {/* Articles Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article, index) => (
              <article
                key={article.title}
                className="glass-card rounded-2xl overflow-hidden hover:border-primary/30 transition-all duration-300 group opacity-0 animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6">
                  <span className="px-2 py-1 rounded-md bg-primary/10 text-primary text-xs font-medium">
                    {article.category}
                  </span>
                  <h3 className="text-lg font-bold font-display text-foreground mt-3 mb-2 group-hover:text-primary transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{article.excerpt}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span>{article.author}</span>
                    <span>{article.readTime}</span>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <FooterCTA />
    </div>
  );
};

export default Blog;
