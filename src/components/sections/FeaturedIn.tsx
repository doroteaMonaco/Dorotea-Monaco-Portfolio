import { Badge } from "@/components/ui/badge";
import { FileText, BookOpen, Users, ExternalLink } from "lucide-react";
import { useLanguageContext } from "@/contexts/TranslationContext";

export const FeaturedIn = () => {
  const { t } = useLanguageContext();
  
  const features = [
    {
      title: t('featured.gan.title'),
      type: t('featured.gan.type'),
      publisher: t('featured.gan.publisher'),
      date: "2025",
      description: t('featured.gan.description'),
      link: "/GANs_for_Data_Augmentation_in_Imbalanced_Medical_Image_Classification.pdf",
      icon: <FileText className="w-6 h-6" />,
      tags: [t('featured.tags.ai'), t('featured.tags.healthcare'), t('featured.tags.gans')],
      external: true
    },
    {
      title: t('featured.llm.title'),
      type: t('featured.llm.type'),
      publisher: t('featured.llm.publisher'),
      date: "2025",
      description: t('featured.llm.description'),
      link: "/Architectures for Code Development with LLMs.pdf",
      icon: <BookOpen className="w-6 h-6" />,
      tags: [t('featured.tags.llms'), t('featured.tags.softwareEngineering'), t('featured.tags.ai')],
      external: true
    },
    {
      title: t('featured.aism.title'),
      type: t('featured.aism.type'),
      publisher: t('featured.aism.publisher'),
      date: "2023-Present",
      description: t('featured.aism.description'),
      link: "#volunteer",
      icon: <Users className="w-6 h-6" />,
      tags: [t('featured.tags.accessibility'), t('featured.tags.community'), t('featured.tags.leadership')]
    }
  ];

  return (
    <section id="featured" className="py-20 md:py-32 relative">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{t('featured.title')}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('featured.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => (
              <a
                key={index}
                href={feature.link}
                target={feature.external ? "_blank" : undefined}
                rel={feature.external ? "noopener noreferrer" : undefined}
                className="group glass-floating rounded-2xl p-6 hover-glow transition-all duration-300 hover:scale-[1.02] block"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                    {feature.icon}
                  </div>
                  <ExternalLink className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <Badge variant="secondary" className="mb-3">{feature.type}</Badge>
                
                <h3 className="font-bold text-lg mb-2 group-hover:text-brand transition-colors">
                  {feature.title}
                </h3>
                
                <p className="text-sm text-muted-foreground mb-3">
                  {feature.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted-foreground">{feature.publisher}</span>
                  <span className="text-muted-foreground">{feature.date}</span>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {feature.tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="outline" className="text-xs">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </a>
            ))}
          </div>

          {/* Call to Action */}
          <div className="mt-12 text-center glass-floating rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-3">{t('featured.wantFeature.title')}</h3>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              {t('featured.wantFeature.description')}
            </p>
            <a 
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-lg transition-all"
            >
              {t('featured.getInTouch')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedIn;
