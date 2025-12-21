// Centralized site data - All content should be managed from this file

export const siteData = {
  // Company Information
  company: {
    name: "CreaX",
    logo: "C",
    tagline: "Build • Deploy • Dominate",
    description: "We are a strategic technology partner that builds market-defining digital products while forging the next generation of elite tech talent.",
    founded: "2019",
    email: "hello@creax.dev",
    phone: "+1 (555) 123-4567",
    address: "123 Innovation Drive, Tech City, TC 12345",
  },

  // Hero Section
  hero: {
    badge: "Build • Deploy • Dominate",
    headline: {
      line1: "The Future of Tech.",
      line2Prefix: "",
      line2Highlight: "Built & Trained",
      line2Suffix: "Here.",
    },
    description: "We are a strategic technology partner that builds market-defining digital products while forging the next generation of elite tech talent.",
    primaryCta: "Hire Our Agency",
    secondaryCta: "Watch Demo",
    trustedBy: ["TechCorp", "InnovateLabs", "FutureDev", "CloudScale", "DataFlow"],
  },

  // Navigation Links
  navigation: [
    { name: "Home", href: "/" },
    { name: "Projects", href: "/projects" },
    { name: "Products", href: "/products" },
    { name: "Team", href: "/team" },
    { name: "Blog", href: "/blog" },
    { name: "Roadmap", href: "/roadmap" },
    { name: "Verify", href: "/verify" },
  ],

  // Stats Section
  stats: [
    {
      icon: "Rocket",
      value: "50+",
      label: "Projects Shipped",
      description: "Global Clients",
    },
    {
      icon: "Target",
      value: "98%",
      label: "Job Placement",
      description: "Accelerator Grads",
    },
    {
      icon: "TrendingDown",
      value: "30%",
      label: "Cost Reduction",
      description: "For Agency Partners",
    },
    {
      icon: "Clock",
      value: "24/7",
      label: "Innovation",
      description: "Continuous Dev Cycle",
    },
  ],

  // About Section
  about: {
    badge: "About CreaX",
    headline: {
      prefix: "Bridging the Gap Between",
      highlight1: "Potential",
      middle: "and",
      highlight2: "Performance",
    },
    description: "CreaX isn't just a dev shop. We are an ecosystem operating a dual-engine model: delivering high-end B2B digital solutions while rigorously training aspiring developers on real-world projects.",
    mission: {
      title: "Engineering Outcomes, Cultivating Careers",
      description: "We don't just write code — we engineer outcomes and cultivate careers. Our unique approach combines enterprise-grade development with hands-on training, creating a sustainable pipeline of elite tech talent.",
    },
    quickStats: [
      { value: "5+", label: "Years" },
      { value: "24/7", label: "Support" },
      { value: "100%", label: "Commitment" },
    ],
    highlights: [
      { text: "Dual-engine model: B2B solutions + Developer training", icon: "Zap" },
      { text: "Real-world project experience for all trainees", icon: "Code2" },
      { text: "High-end digital solutions for enterprise clients", icon: "Shield" },
      { text: "Career cultivation alongside code engineering", icon: "Target" },
    ],
    stats: [
      { icon: "Rocket", value: "50+", label: "Projects Delivered", color: "from-primary to-amber-500" },
      { icon: "Users", value: "200+", label: "Developers Trained", color: "from-amber-500 to-orange-500" },
      { icon: "TrendingUp", value: "98%", label: "Client Satisfaction", color: "from-orange-500 to-red-500" },
      { icon: "Award", value: "15+", label: "Industry Awards", color: "from-red-500 to-primary" },
    ],
  },

  // Services Section
  services: {
    badge: "OUR SERVICES",
    headline: {
      prefix: "Who We",
      highlight: "Serve",
    },
    description: "From enterprises seeking cutting-edge solutions to aspiring developers building their future.",
    items: [
      {
        icon: "Building2",
        title: "Enterprises & Startups",
        description: "Custom AI/ML solutions, web platforms, and scalable architecture built for growth.",
        features: ["AI/ML Integration", "Web Platforms", "Scalable Architecture"],
      },
      {
        icon: "GraduationCap",
        title: "Aspiring Developers",
        description: "Project-based accelerator with real mentorship and hands-on experience.",
        features: ["Project-Based Learning", "1:1 Mentorship", "Real Experience"],
      },
      {
        icon: "Palette",
        title: "Design Partners",
        description: "UI/UX design, brand identity, and visual strategy that converts.",
        features: ["UI/UX Design", "Brand Identity", "Visual Strategy"],
      },
      {
        icon: "School",
        title: "Educational Institutions",
        description: "Curriculum partnership and placement preparation programs.",
        features: ["Curriculum Partnership", "Placement Prep", "Industry Connect"],
      },
    ],
  },

  // Projects Section
  projects: {
    badge: "LATEST WORK",
    headline: {
      prefix: "Featured",
      highlight: "Projects",
    },
    items: [
      {
        icon: "Bot",
        category: "AI/ML",
        title: "Intelligent Customer Support Agent",
        description: "A sophisticated RAG-based AI system for enterprise customer support automation.",
        tags: ["AI/ML", "RAG System", "Enterprise"],
        color: "from-blue-500/20 to-indigo-500/20",
      },
      {
        icon: "ShoppingCart",
        category: "Web Platform",
        title: "Next-Gen E-Commerce Platform",
        description: "Multi-vendor marketplace with advanced analytics and real-time inventory management.",
        tags: ["E-Commerce", "Multi-vendor", "Analytics"],
        color: "from-cyan-500/20 to-sky-500/20",
      },
      {
        icon: "Smartphone",
        category: "UI/UX",
        title: "Fintech Mobile App Redesign",
        description: "Complete UI/UX overhaul for a leading fintech mobile application.",
        tags: ["Fintech", "Mobile", "UI/UX"],
        color: "from-teal-500/20 to-emerald-500/20",
      },
    ],
  },

  // Team Members
  team: {
    badge: "OUR TEAM",
    headline: {
      prefix: "Meet the",
      highlight: "Innovators",
    },
    description: "A diverse team of experts passionate about building the future of technology.",
    members: [
      {
        name: "Alex Chen",
        role: "CEO & Founder",
        bio: "Visionary leader with 15+ years in tech innovation and startup ecosystems.",
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Sarah Johnson",
        role: "CTO",
        bio: "AI/ML expert and former Google engineer driving technical excellence.",
        image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop&crop=face",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Michael Park",
        role: "Head of Design",
        bio: "Award-winning designer creating experiences that delight users.",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop&crop=face",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Emily Rodriguez",
        role: "Head of Engineering",
        bio: "Systems architect scaling platforms to millions of users.",
        image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop&crop=face",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "David Kim",
        role: "Head of Accelerator",
        bio: "Passionate educator nurturing the next generation of developers.",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop&crop=face",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
      {
        name: "Lisa Wang",
        role: "Head of Operations",
        bio: "Strategic operator ensuring seamless delivery and client success.",
        image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&h=400&fit=crop&crop=face",
        social: {
          linkedin: "#",
          twitter: "#",
          github: "#",
        },
      },
    ],
  },

  // Footer
  footer: {
    cta: {
      headline: {
        prefix: "Ready to",
        highlight: "Dominate",
      },
      description: "Join the ecosystem where innovation meets execution. Subscribe to our newsletter for tech trends and hiring alerts.",
      buttonText: "Subscribe",
      placeholder: "Enter your email",
    },
    links: {
      Company: ["About", "Careers", "Press", "Blog"],
      Services: ["Agency", "Accelerator", "Design", "Education"],
      Resources: ["Documentation", "Help Center", "Community", "Contact"],
      Legal: ["Privacy", "Terms", "Cookies", "Licenses"],
    },
    social: [
      { platform: "Twitter", href: "#" },
      { platform: "Linkedin", href: "#" },
      { platform: "Github", href: "#" },
    ],
    copyright: "© 2024 CreaX. All rights reserved.",
    credit: "Designed & Developed with ❤️",
  },

  // Certification Verification Page
  certification: {
    title: "Certificate Verification",
    description: "Verify the authenticity of CreaX certificates. Enter the certificate ID to check if it's valid.",
    placeholder: "Enter Certificate ID (e.g., CRX-2024-001)",
    buttonText: "Verify",
    features: [
      {
        icon: "Shield",
        title: "Secure Verification",
        description: "All certificates are cryptographically signed and tamper-proof.",
      },
      {
        icon: "CheckCircle",
        title: "Instant Results",
        description: "Get verification results in seconds with our real-time system.",
      },
      {
        icon: "Award",
        title: "Official Recognition",
        description: "CreaX certificates are recognized by industry partners worldwide.",
      },
    ],
  },
};

export type SiteData = typeof siteData;
export default siteData;
