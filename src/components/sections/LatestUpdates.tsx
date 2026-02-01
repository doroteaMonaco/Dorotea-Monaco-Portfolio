import { Badge } from "@/components/ui/badge";
import { Calendar, ArrowRight, GitBranch, FileText, Award, Code, Users } from "lucide-react";
import { useLanguageContext } from "@/contexts/TranslationContext";

export const LatestUpdates = () => {
  const { t } = useLanguageContext();
  
  const updates = [
    {
      date: "2024-12",
      type: "project",
      title: t('updates.participium.title'),
      description: t('updates.participium.description'),
      icon: <Code className="w-5 h-5" />,
      link: "#projects",
      category: t('updates.category.project')
    },
    {
      date: "2024-11",
      type: "project",
      title: t('updates.gan.title'),
      description: t('updates.gan.description'),
      icon: <GitBranch className="w-5 h-5" />,
      link: "#projects",
      category: t('updates.category.project')
    },
    {
      date: "2024-10",
      type: "learning",
      title: t('updates.llm.title'),
      description: t('updates.llm.description'),
      icon: <Award className="w-5 h-5" />,
      link: "#projects",
      category: t('updates.category.learning')
    },
    {
      date: "2024-09",
      type: "volunteer",
      title: t('updates.aism.title'),
      description: t('updates.aism.description'),
      icon: <Users className="w-5 h-5" />,
      link: "#volunteer",
      category: t('updates.category.volunteer')
    },
    {
      date: "2024-08",
      type: "project",
      title: t('updates.ruggine.title'),
      description: t('updates.ruggine.description'),
      icon: <Code className="w-5 h-5" />,
      link: "#projects",
      category: t('updates.category.project')
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "project":
        return "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-200";
      case "learning":
        return "bg-green-100 text-green-800 border-green-300 dark:bg-green-900 dark:text-green-200";
      case "volunteer":
        return "bg-orange-100 text-orange-800 border-orange-300 dark:bg-orange-900 dark:text-orange-200";
      default:
        return "bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-900 dark:text-gray-200";
    }
  };

  return (
    <section id="updates" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/3 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{t('updates.title')}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('updates.subtitle')}
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand via-brand-secondary to-transparent"></div>

            <div className="space-y-8">
              {updates.map((update, index) => (
                <div
                  key={index}
                  className={`relative flex items-start gap-6 ${
                    index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
                >
                  {/* Date Badge */}
                  <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-24 h-24 rounded-full bg-background border-4 border-brand items-center justify-center z-10">
                    <div className="text-center">
                      <Calendar className="w-5 h-5 mx-auto mb-1 text-brand" />
                      <span className="text-xs font-medium">{update.date}</span>
                    </div>
                  </div>

                  {/* Content Card */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'} text-left`}>
                    <a
                      href={update.link}
                      className="group glass-floating rounded-2xl p-6 hover-glow transition-all duration-300 hover:scale-[1.02] block"
                    >
                      <div className={`flex items-start gap-4 ${index % 2 === 0 ? 'md:flex-row-reverse' : 'md:flex-row'} flex-row`}>
                        <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white flex-shrink-0">
                          {update.icon}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center gap-2 mb-2 md:hidden">
                            <Calendar className="w-4 h-4 text-muted-foreground" />
                            <span className="text-sm text-muted-foreground">{update.date}</span>
                          </div>
                          <Badge variant="outline" className={`mb-3 ${getTypeColor(update.type)}`}>
                            {update.category}
                          </Badge>
                          <h3 className="font-bold text-lg mb-2 group-hover:text-brand transition-colors">
                            {update.title}
                          </h3>
                          <p className="text-sm text-muted-foreground mb-3">
                            {update.description}
                          </p>
                          <span className="inline-flex items-center gap-1 text-sm text-brand group-hover:gap-2 transition-all">
                            {t('updates.learnMore')}
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        </div>
                      </div>
                    </a>
                  </div>

                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1"></div>
                </div>
              ))}
            </div>
          </div>

          {/* View All Link */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              {t('updates.followPrompt')}
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <a
                href="https://github.com/doroteaMonaco"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass-floating rounded-lg hover-glow transition-all"
              >
                {t('updates.followGithub')}
                <ArrowRight className="w-4 h-4" />
              </a>
              <a
                href="https://linkedin.com/in/dorotea-monaco-0a0bba24a"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 glass-floating rounded-lg hover-glow transition-all"
              >
                {t('updates.connectLinkedin')}
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LatestUpdates;
