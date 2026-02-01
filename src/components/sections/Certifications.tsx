import { Badge } from "@/components/ui/badge";
import { Award, Trophy, Star, ExternalLink } from "lucide-react";
import { useLanguageContext } from "@/contexts/TranslationContext";

export const Certifications = () => {
  const { t } = useLanguageContext();
  
  // This section is marked as Work in Progress
  const certifications = [
    {
      name: t('certifications.aws'),
      issuer: t('certifications.awsIssuer'),
      status: "planned",
      icon: <Award className="w-6 h-6" />
    },
    {
      name: t('certifications.tensorflow'),
      issuer: t('certifications.tensorflowIssuer'),
      status: "planned",
      icon: <Trophy className="w-6 h-6" />
    }
  ];

  const achievements = [
    {
      title: t('certifications.aism.title'),
      description: t('certifications.aism.description'),
      year: "2023-Present",
      type: "volunteer"
    },
    {
      title: t('certifications.masters.title'),
      description: t('certifications.masters.description'),
      year: "2025-Present",
      type: "education"
    },
    {
      title: t('certifications.portfolio.title'),
      description: t('certifications.portfolio.description'),
      year: "2024-2025",
      type: "projects"
    }
  ];

  return (
    <section id="certifications" className="py-20 md:py-32 relative">
      <div className="absolute top-20 right-1/4 w-96 h-96 bg-brand-tertiary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 mb-4">
            <h2 className="text-4xl md:text-6xl font-bold">
              <span className="text-gradient">{t('certifications.title')}</span>
            </h2>
            <Badge variant="outline" className="bg-yellow-100 text-yellow-800 border-yellow-300 dark:bg-yellow-900 dark:text-yellow-200 dark:border-yellow-600">
              {t('certifications.wip')}
            </Badge>
          </div>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('certifications.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Current Achievements */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold mb-6 text-center">{t('certifications.achievements')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index}
                  className="glass-floating rounded-2xl p-6 hover-glow text-center"
                >
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <Star className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="font-bold text-lg mb-2">{achievement.title}</h4>
                  <p className="text-sm text-muted-foreground mb-2">{achievement.description}</p>
                  <Badge variant="secondary" className="text-xs">{achievement.year}</Badge>
                </div>
              ))}
            </div>
          </div>

          {/* Planned Certifications */}
          <div>
            <h3 className="text-2xl font-bold mb-6 text-center">{t('certifications.planned')}</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div 
                  key={index}
                  className="glass-floating rounded-2xl p-6 hover-glow opacity-60"
                >
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                      {cert.icon}
                    </div>
                    <div className="flex-1">
                      <h4 className="font-bold mb-1">{cert.name}</h4>
                      <p className="text-sm text-muted-foreground mb-2">{cert.issuer}</p>
                      <Badge variant="outline" className="text-xs">
                        {t('certifications.plannedFor')}
                      </Badge>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* GitHub Stats Placeholder */}
          <div className="mt-12 glass-floating rounded-2xl p-8 text-center">
            <h3 className="text-xl font-bold mb-4">{t('certifications.githubContributions')}</h3>
            <p className="text-muted-foreground mb-4">{t('certifications.githubPrompt')}</p>
            <a 
              href="https://github.com/doroteaMonaco" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-brand hover:text-brand-secondary transition-colors"
            >
              {t('certifications.visitGithub')}
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
