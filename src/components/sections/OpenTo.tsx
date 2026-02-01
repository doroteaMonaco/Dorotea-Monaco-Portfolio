import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { useLanguageContext } from "@/contexts/TranslationContext";
import { Briefcase, Clock, MapPin, Users, Code, Heart, Zap } from "lucide-react";

export const OpenTo = () => {
  const { t } = useLanguageContext();

  const opportunities = [
    {
      icon: <Briefcase className="w-5 h-5" />,
      title: t('opportunities.internships.title'),
      description: t('opportunities.internships.description'),
      availability: t('opportunities.internships.availability'),
      preferred: true
    },
    {
      icon: <Clock className="w-5 h-5" />,
      title: t('opportunities.partTime.title'),
      description: t('opportunities.partTime.description'),
      availability: t('opportunities.partTime.availability')
    },
    {
      icon: <Code className="w-5 h-5" />,
      title: t('opportunities.freelance.title'),
      description: t('opportunities.freelance.description'),
      availability: t('opportunities.freelance.availability')
    },
    {
      icon: <Users className="w-5 h-5" />,
      title: t('opportunities.openSource.title'),
      description: t('opportunities.openSource.description'),
      availability: t('opportunities.openSource.availability')
    }
  ];

  const techStack = [
    "React", "TypeScript", "Node.js", "Python", "PyTorch", 
    "PostgreSQL", "Docker", "AWS", "AI/ML"
  ];

  const preferences = [
    { icon: <MapPin className="w-4 h-4" />, label: t('opportunities.location'), value: t('opportunities.locationValue') },
    { icon: <Heart className="w-4 h-4" />, label: t('opportunities.passion'), value: t('opportunities.passionValue') },
    { icon: <Users className="w-4 h-4" />, label: t('opportunities.culture'), value: t('opportunities.cultureValue') },
    { icon: <Zap className="w-4 h-4" />, label: t('opportunities.focus'), value: t('opportunities.focusValue') }
  ];

  return (
    <section id="open-to" className="py-20 md:py-32 relative">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{t('opportunities.title')}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('opportunities.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto">
          {/* Opportunity Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {opportunities.map((opp, index) => (
              <div 
                key={index}
                className={`glass-floating rounded-2xl p-6 hover-glow ${opp.preferred ? 'border-2 border-brand/30' : ''}`}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {opp.preferred && (
                  <Badge className="mb-3 bg-brand text-white">{t('opportunities.preferred')}</Badge>
                )}
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-lg bg-gradient-primary flex items-center justify-center text-white flex-shrink-0">
                    {opp.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-foreground mb-2">{opp.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-3">
                      {opp.description}
                    </p>
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand/10 text-brand text-xs font-medium">
                      <Clock className="w-3 h-3" />
                      {opp.availability}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Preferences Grid */}
          <div className="glass-floating rounded-2xl p-8 mb-8">
            <h3 className="text-2xl font-bold mb-6 text-center">
              <span className="text-gradient">{t('opportunities.preferences')}</span>
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {preferences.map((pref, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-lg bg-brand/10 flex items-center justify-center text-brand flex-shrink-0 mt-1">
                    {pref.icon}
                  </div>
                  <div>
                    <p className="text-sm font-semibold text-muted-foreground mb-1">{pref.label}</p>
                    <p className="text-base text-foreground">{pref.value}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="glass-floating rounded-2xl p-8 mb-8">
            <h3 className="text-xl font-bold mb-4 text-center">{t('opportunities.techStack')}</h3>
            <div className="flex flex-wrap justify-center gap-2">
              {techStack.map((tech, index) => (
                <Badge 
                  key={index} 
                  variant="secondary"
                  className="text-sm py-1.5 px-4 hover:bg-brand hover:text-white transition-colors"
                >
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <p className="text-lg text-muted-foreground mb-6">
              {t('opportunities.interested.description')}
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <a href="#contact">
                <Button variant="gradient" size="lg" className="group">
                  <span>{t('opportunities.letsConnect')}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/dorotea-monaco-0a0bba24a" target="_blank" rel="noopener noreferrer">
                <Button variant="outline" size="lg">
                  {t('updates.connectLinkedin')}
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenTo;
