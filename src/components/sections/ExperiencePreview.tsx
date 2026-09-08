import { Link } from "react-router-dom";
import { ArrowRight, Briefcase, GraduationCap, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { useLanguageContext } from "@/contexts/TranslationContext";

export const ExperiencePreview = () => {
  const { t } = useLanguageContext();

  return (
    <section className="py-12 md:py-20 relative overflow-hidden">
      <div className="absolute top-10 right-1/4 w-72 h-72 bg-brand-secondary/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
            <div>
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">
                {t('experience.preview.eyebrow')}
              </p>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold">
                <span className="text-gradient">{t('experience.preview.title')}</span>
              </h2>
            </div>

            <Link
              to="/experience"
              className="inline-flex items-center gap-2 text-brand font-semibold hover:gap-3 transition-all"
            >
              {t('experience.preview.viewTimeline')}
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-[1.6fr_1fr] gap-6">
            <article className="glass-floating rounded-3xl p-7 sm:p-9 hover-glow relative overflow-hidden">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-brand via-brand-secondary to-brand-tertiary" />

              <div className="flex flex-wrap items-center justify-between gap-4 mb-7">
                <Badge className="bg-brand text-brand-foreground border-0">
                  {t('experience.preview.featured')}
                </Badge>
                <span className="text-sm font-semibold text-brand">
                  {t('experience.berkeley.period')}
                </span>
              </div>

              <div className="flex items-start gap-4 mb-5">
                <div className="w-12 h-12 rounded-2xl bg-gradient-primary flex items-center justify-center text-white flex-shrink-0 shadow-lg">
                  <Briefcase className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
                    {t('experience.berkeley.title')}
                  </h3>
                  <p className="flex items-start gap-2 text-sm sm:text-base font-medium text-brand-secondary">
                    <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    <span>{t('experience.berkeley.organization')}</span>
                  </p>
                </div>
              </div>

              <p className="text-muted-foreground leading-relaxed mb-6">
                {t('experience.berkeley.description')}
              </p>

              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary">{t('experience.tags.aiml')}</Badge>
                <Badge variant="secondary">{t('experience.tags.research')}</Badge>
                <Badge variant="secondary">{t('experience.tags.structuralEngineering')}</Badge>
              </div>
            </article>

            <div className="grid gap-6">
              <article className="glass-floating rounded-2xl p-6 hover-glow">
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-emerald-500 flex items-center justify-center text-white">
                    <Briefcase className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-semibold text-brand">
                    {t('experience.opensignal.period')}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-1">{t('experience.opensignal.title')}</h3>
                <p className="text-sm font-medium text-brand-secondary mb-3">
                  {t('experience.opensignal.organization')}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('experience.preview.opensignalSummary')}
                </p>
              </article>

              <article className="glass-floating rounded-2xl p-6 hover-glow">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-white mb-4">
                  <GraduationCap className="w-5 h-5" />
                </div>
                <h3 className="text-xl font-bold mb-1">{t('experience.masters.title')}</h3>
                <p className="text-sm font-medium text-brand-secondary mb-3">
                  {t('experience.masters.organization')}
                </p>
                <p className="text-sm text-muted-foreground leading-relaxed">
                  {t('experience.masters.description')}
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperiencePreview;
