import { Badge } from "@/components/ui/badge";
import { useLanguageContext } from "@/contexts/TranslationContext";
import { FileText, ExternalLink } from "lucide-react";

export const Publications = () => {
  const { t } = useLanguageContext();

  const publications = [
    {
      title: t('publications.gan.title'),
      authors: t('publications.gan.authors'),
      venue: t('publications.gan.venue'),
      year: "2025",
      abstract: t('publications.gan.abstract'),
      pdfLink: "/GANs_for_Data_Augmentation_in_Imbalanced_Medical_Image_Classification.pdf",
      tags: ["Machine Learning", "Medical Imaging", "GANs", "Deep Learning"],
    },
    {
      title: t('publications.llm.title'),
      authors: t('publications.llm.authors'),
      venue: t('publications.llm.venue'),
      year: "2025",
      abstract: t('publications.llm.abstract'),
      pdfLink: "/Architectures for Code Development with LLMs.pdf",
      tags: ["Large Language Models", "Software Engineering", "Multi-Agent Systems", "Code Generation"],
    },
  ];

  return (
    <section id="publications" className="py-20 md:py-32 relative">
      <div className="absolute top-1/2 right-10 w-96 h-96 bg-brand/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{t('publications.title')}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('publications.subtitle')}
          </p>
        </div>

        <div className="max-w-5xl mx-auto space-y-8">
          {publications.map((pub, index) => (
            <article 
              key={index}
              className="glass-floating rounded-2xl p-8 hover-glow group"
              style={{ animationDelay: `${index * 200}ms` }}
            >
              <div className="flex items-start gap-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-primary flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <FileText className="w-8 h-8 text-white" />
                </div>

                <div className="flex-1">
                  <div className="flex items-start justify-between gap-4 mb-3">
                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                      {pub.title}
                    </h3>
                    <span className="text-sm font-semibold text-brand whitespace-nowrap">
                      {pub.year}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground mb-2">
                    {pub.authors}
                  </p>

                  <p className="text-sm font-medium text-brand mb-4">
                    {pub.venue}
                  </p>

                  <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                    {pub.abstract}
                  </p>

                  <div className="flex flex-wrap items-center gap-3">
                    <a
                      href={pub.pdfLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-primary text-white font-medium hover:scale-105 transition-transform duration-300"
                    >
                      <FileText className="w-4 h-4" />
                      {t('publications.viewPdf')}
                      <ExternalLink className="w-3 h-3" />
                    </a>

                    <div className="flex flex-wrap gap-2">
                      {pub.tags.map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary"
                          className="text-xs"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Publications;
