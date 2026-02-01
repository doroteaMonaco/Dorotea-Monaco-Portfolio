import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, Award, Download, Star, Calendar, Target, Code } from "lucide-react";
import { useLanguageContext } from "@/contexts/TranslationContext";

export const ExploreCards = () => {
  const { t } = useLanguageContext();

  const cards = [
    {
      title: t('explore.allProjects.title'),
      description: t('explore.allProjects.description'),
      icon: <Code className="w-6 h-6" />,
      link: "/projects",
      gradient: "from-violet-500 to-purple-500"
    },
    {
      title: t('explore.updates.title'),
      description: t('explore.updates.description'),
      icon: <Calendar className="w-6 h-6" />,
      link: "/updates",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      title: t('explore.experience.title'),
      description: t('explore.experience.description'),
      icon: <Briefcase className="w-6 h-6" />,
      link: "/experience",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      title: t('explore.certifications.title'),
      description: t('explore.certifications.description'),
      icon: <Award className="w-6 h-6" />,
      link: "/certifications",
      gradient: "from-green-500 to-emerald-500"
    },
    {
      title: t('explore.featured.title'),
      description: t('explore.featured.description'),
      icon: <Star className="w-6 h-6" />,
      link: "/featured",
      gradient: "from-orange-500 to-red-500"
    },
    {
      title: t('explore.resources.title'),
      description: t('explore.resources.description'),
      icon: <Download className="w-6 h-6" />,
      link: "/resources",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      title: t('explore.opportunities.title'),
      description: t('explore.opportunities.description'),
      icon: <Target className="w-6 h-6" />,
      link: "/opportunities",
      gradient: "from-yellow-500 to-orange-500"
    }
  ];

  return (
    <section className="py-20 md:py-32 relative">
      <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">{t('explore.title')}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('explore.subtitle')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {cards.map((card, index) => (
            <Link
              key={index}
              to={card.link}
              className="group glass-floating rounded-2xl p-8 hover-glow transition-all duration-300 hover:scale-[1.02] block"
            >
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                {card.icon}
              </div>

              <h3 className="font-bold text-xl mb-3 group-hover:text-brand transition-colors">
                {card.title}
              </h3>

              <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
                {card.description}
              </p>

              <div className="inline-flex items-center gap-2 text-sm text-brand group-hover:gap-3 transition-all">
                {t('explore.action')}
                <ArrowRight className="w-4 h-4" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreCards;
