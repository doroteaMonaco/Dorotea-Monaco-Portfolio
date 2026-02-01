import { Badge } from "@/components/ui/badge";
import { useLanguageContext } from "@/contexts/TranslationContext";
import { Github, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import gan from "@/assets/projects/gan.png";
import participium from "@/assets/projects/participium.png";
import llm from "@/assets/projects/llm.png";
import ml from "@/assets/projects/ml.png";

export const FeaturedProjects = () => {
  const { t } = useLanguageContext();

  const featuredProjects = [
    {
      title: t('projects.gan.title'),
      description: t('projects.gan.description'),
      metrics: "🏆 Research-grade quality • 🔬 Clinical applications",
      image: gan,
      tech: ["Python", "PyTorch", "DCGAN", "ResNet", "scikit-learn"],
      link: "https://github.com/doroteaMonaco/GAN-for-Data-Augmentation-and-Domain-Adaptation",
    },
    {
      title: t('projects.participium.title'),
      description: t('projects.participium.description'),
      metrics: "🏛️ Production-ready • 🔐 Enterprise-grade security",
      image: participium,
      tech: ["TypeScript", "React", "Node.js", "PostgreSQL", "Prisma"],
      link: "https://github.com/doroteaMonaco/Participium-Software",
      video: "https://www.youtube.com/watch?v=bokMVa_Jtow",
    },
    {
      title: t('projects.llmarchitectures.title'),
      description: t('projects.llmarchitectures.description'),
      metrics: "🧠 Advanced AI systems • 💻 Code quality automation",
      image: llm,
      tech: ["Python", "LangGraph", "LLM", "Multi-Agent Systems"],
      link: "https://github.com/doroteaMonaco/Architectures-for-Code-Development-with-LLMs",
    },
    {
      title: t('projects.mlprojects.title'),
      description: t('projects.mlprojects.description'),
      metrics: "🎯 High-performance models • 📊 Data-driven insights",
      image: ml,
      tech: ["Python", "PyTorch", "TensorFlow", "scikit-learn", "XGBoost"],
      link: "https://github.com/doroteaMonaco/Machine-Learning-Projects",
    },
  ];

  return (
    <section id="featured-projects" className="py-12 md:py-20 relative">
      <div className="absolute top-20 left-1/4 w-48 h-48 md:w-64 md:h-64 bg-brand/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6">
            <span className="text-gradient">Featured Projects</span>
          </h2>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed px-4">
            Highlights from my portfolio showcasing AI/ML research and full-stack development
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto mb-8">
          {featuredProjects.map((p, index) => (
            <a
              key={p.title}
              href={p.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <article className="glass-floating rounded-2xl overflow-hidden hover-glow magnetic-hover h-full">
                <div className="aspect-[16/10] overflow-hidden bg-gradient-to-br from-brand/20 to-brand-secondary/20 relative">
                  <img 
                    src={p.image} 
                    alt={`${p.title} screenshot`} 
                    loading="lazy" 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    <div className="w-8 h-8 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Github className="w-4 h-4 text-white" />
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-3 group-hover:text-brand transition-colors duration-300">
                    {p.title}
                  </h3>
                  
                  <p className="text-sm text-muted-foreground mb-4 leading-relaxed line-clamp-2">
                    {p.description}
                  </p>

                  <div className="text-xs text-brand/80 mb-4 font-medium">
                    {p.metrics}
                  </div>
                  
                  <div className="flex flex-wrap gap-2">
                    {p.tech.slice(0, 5).map(tech => (
                      <Badge key={tech} variant="secondary" className="text-xs px-2 py-1">
                        {tech}
                      </Badge>
                    ))}
                    {p.tech.length > 5 && (
                      <Badge variant="outline" className="text-xs px-2 py-1">
                        +{p.tech.length - 5} more
                      </Badge>
                    )}
                  </div>
                  
                  {p.video && (
                    <div className="mt-4 border-t border-border/50 pt-4">
                      <a
                        href={p.video}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-red-50 dark:bg-red-950/30 hover:bg-red-100 dark:hover:bg-red-950/50 text-red-600 dark:text-red-400 border border-red-200 dark:border-red-800 transition-colors text-xs font-medium"
                        onClick={(e) => e.stopPropagation()}
                      >
                        <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
                        </svg>
                        <span>Watch Teaser</span>
                      </a>
                    </div>
                  )}
                </div>
              </article>
            </a>
          ))}
        </div>

        {/* View All Projects Link */}
        <div className="text-center">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-lg transition-all group"
          >
            View All Projects
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
