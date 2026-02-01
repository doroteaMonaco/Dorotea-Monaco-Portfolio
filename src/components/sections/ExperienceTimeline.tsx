import { Badge } from "@/components/ui/badge";
import { useLanguageContext } from "@/contexts/TranslationContext";
import { GraduationCap, Briefcase, Heart, Award } from "lucide-react";

interface TimelineItem {
  year: string;
  title: string;
  organization: string;
  description: string;
  type: 'education' | 'work' | 'volunteer' | 'achievement';
  tags?: string[];
  ongoing?: boolean;
}

export const ExperienceTimeline = () => {
  const { t } = useLanguageContext();

  const timelineData: TimelineItem[] = [
    {
      year: "2024 - Present",
      title: t('experience.masters.title'),
      organization: t('experience.masters.organization'),
      description: t('experience.masters.description'),
      type: "education",
      tags: [t('experience.tags.aiml'), t('experience.tags.softwareEngineering'), t('experience.tags.research')],
      ongoing: true
    },
    {
      year: "2023 - Present",
      title: t('experience.aism.title'),
      organization: t('experience.aism.organization'),
      description: t('experience.aism.description'),
      type: "volunteer",
      tags: [t('experience.tags.leadership'), t('experience.tags.communication'), t('experience.tags.socialImpact')],
      ongoing: true
    },
    {
      year: "2024",
      title: t('experience.portfolio.title'),
      organization: t('experience.portfolio.organization'),
      description: t('experience.portfolio.description'),
      type: "achievement",
      tags: [t('experience.tags.fullStack'), t('experience.tags.aiml'), t('experience.tags.systems')]
    },
    {
      year: "2021 - 2024",
      title: t('experience.bachelors.title'),
      organization: t('experience.bachelors.organization'),
      description: t('experience.bachelors.description'),
      type: "education",
      tags: [t('experience.tags.computerScience'), t('experience.tags.programming'), t('experience.tags.systems')]
    }
  ];

  const getIcon = (type: TimelineItem['type']) => {
    switch (type) {
      case 'education':
        return <GraduationCap className="w-5 h-5" />;
      case 'work':
        return <Briefcase className="w-5 h-5" />;
      case 'volunteer':
        return <Heart className="w-5 h-5" />;
      case 'achievement':
        return <Award className="w-5 h-5" />;
    }
  };

  const getColor = (type: TimelineItem['type']) => {
    switch (type) {
      case 'education':
        return 'from-blue-500 to-blue-600';
      case 'work':
        return 'from-green-500 to-green-600';
      case 'volunteer':
        return 'from-pink-500 to-pink-600';
      case 'achievement':
        return 'from-yellow-500 to-yellow-600';
    }
  };

  return (
    <section id="experience" className="py-20 md:py-32 relative">
      <div className="absolute bottom-20 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{t('experience.title')}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('experience.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand via-brand-secondary to-brand-tertiary"></div>

            {timelineData.map((item, index) => (
              <div 
                key={index}
                className={`relative mb-12 ${index % 2 === 0 ? 'md:pr-1/2 md:text-right' : 'md:pl-1/2 md:ml-auto'} md:w-1/2`}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className={`absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-r ${getColor(item.type)} border-4 border-background transform -translate-x-1/2 z-10 shadow-lg`}></div>
                
                {item.ongoing && (
                  <div className="absolute left-8 md:left-1/2 top-6 w-4 h-4 rounded-full bg-gradient-to-r from-brand to-brand-secondary transform -translate-x-1/2 animate-ping"></div>
                )}

                <div className={`glass-floating rounded-2xl p-6 hover-glow ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-8' : 'md:ml-8'}`}>
                  <div className="flex items-start gap-3 mb-3">
                    <div className={`w-10 h-10 rounded-lg bg-gradient-to-r ${getColor(item.type)} flex items-center justify-center text-white flex-shrink-0`}>
                      {getIcon(item.type)}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1 flex-wrap">
                        <span className="text-sm font-semibold text-brand">{item.year}</span>
                        {item.ongoing && (
                          <Badge variant="outline" className="text-xs bg-brand/10 text-brand border-brand/30">
                            {t('experience.ongoing')}
                          </Badge>
                        )}
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-1">{item.title}</h3>
                      <p className="text-sm font-medium text-brand-secondary mb-2">{item.organization}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                    {item.description}
                  </p>

                  {item.tags && (
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag, tagIndex) => (
                        <Badge 
                          key={tagIndex} 
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceTimeline;
