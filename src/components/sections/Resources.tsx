import { Badge } from "@/components/ui/badge";
import { Download, FileText, Code, BookOpen, ExternalLink, Github } from "lucide-react";
import { useLanguageContext } from "@/contexts/TranslationContext";

export const Resources = () => {
  const { t } = useLanguageContext();
  
  const resources = [
    {
      category: t('resources.category.resume'),
      icon: <FileText className="w-6 h-6" />,
      items: [
        {
          title: t('resources.resume'),
          description: t('resources.resumeDesc'),
          format: "PDF",
          size: "150 KB",
          link: "/DOROTEA MONACO CV ENG.pdf",
          available: true
        },
        {
          title: t('resources.academicCV'),
          description: t('resources.academicCVDesc'),
          format: "PDF",
          size: "200 KB",
          link: "/Academic.pdf",
          available: true
        }
      ]
    },
    {
      category: t('resources.category.papers'),
      icon: <BookOpen className="w-6 h-6" />,
      items: [
        {
          title: t('resources.ganPaper'),
          description: t('resources.ganPaperDesc'),
          format: "PDF",
          size: "2.5 MB",
          link: "/GANs_for_Data_Augmentation_in_Imbalanced_Medical_Image_Classification.pdf",
          available: true
        },
        {
          title: t('resources.llmPaper'),
          description: t('resources.llmPaperDesc'),
          format: "PDF",
          size: "2.8 MB",
          link: "/Architectures for Code Development with LLMs.pdf",
          available: true
        }
      ]
    },
    {
      category: t('resources.category.code'),
      icon: <Code className="w-6 h-6" />,
      items: [
        {
          title: t('resources.ganCode'),
          description: t('resources.ganCodeDesc'),
          format: "GitHub",
          size: "—",
          link: "https://github.com/doroteaMonaco/GAN-for-Data-Augmentation-and-Domain-Adaptation",
          available: true
        },
        {
          title: t('resources.participiumCode'),
          description: t('resources.participiumCodeDesc'),
          format: "GitHub",
          size: "—",
          link: "https://github.com/doroteaMonaco/Participium-Software",
          available: true
        },
        {
          title: t('resources.llmCode'),
          description: t('resources.llmCodeDesc'),
          format: "GitHub",
          size: "—",
          link: "https://github.com/doroteaMonaco/Architectures-for-Code-Development-with-LLMs",
          available: true
        }
      ]
    },
    {
      category: t('resources.category.presentations'),
      icon: <FileText className="w-6 h-6" />,
      items: [
        {
          title: t('resources.aiPresentation'),
          description: t('resources.aiPresentationDesc'),
          format: "PDF",
          size: "5 MB",
          link: "#",
          available: false,
          comingSoon: true
        },
        {
          title: t('resources.llmPresentation'),
          description: t('resources.llmPresentationDesc'),
          format: "PDF",
          size: "4 MB",
          link: "#",
          available: false,
          comingSoon: true
        }
      ]
    }
  ];

  const getFormatBadge = (format: string) => {
    const colors: { [key: string]: string } = {
      "PDF": "bg-red-100 text-red-800 border-red-300 dark:bg-red-900 dark:text-red-200",
      "GitHub": "bg-purple-100 text-purple-800 border-purple-300 dark:bg-purple-900 dark:text-purple-200",
      "ZIP": "bg-blue-100 text-blue-800 border-blue-300 dark:bg-blue-900 dark:text-blue-200"
    };
    return colors[format] || "bg-gray-100 text-gray-800 border-gray-300 dark:bg-gray-900 dark:text-gray-200";
  };

  return (
    <section id="resources" className="py-20 md:py-32 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-brand-tertiary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{t('resources.title')}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('resources.subtitle')}
          </p>
        </div>

        <div className="max-w-6xl mx-auto space-y-12">
          {resources.map((category, categoryIndex) => (
            <div key={categoryIndex}>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-lg bg-gradient-primary flex items-center justify-center text-white">
                  {category.icon}
                </div>
                <h3 className="text-2xl font-bold">{category.category}</h3>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className={`glass-floating rounded-2xl p-6 hover-glow transition-all duration-300 ${
                      item.available ? 'hover:scale-[1.02]' : 'opacity-60'
                    }`}
                  >
                    <div className="flex items-start justify-between mb-4">
                      <Badge variant="outline" className={getFormatBadge(item.format)}>
                        {item.format}
                      </Badge>
                      {item.available ? (
                        item.format === "GitHub" ? (
                          <Github className="w-5 h-5 text-muted-foreground" />
                        ) : (
                          <Download className="w-5 h-5 text-muted-foreground" />
                        )
                      ) : (
                        <span className="text-xs text-yellow-600 dark:text-yellow-400 font-medium">
                          {t('resources.comingSoon')}
                        </span>
                      )}
                    </div>

                    <h4 className="font-bold text-lg mb-2">{item.title}</h4>
                    <p className="text-sm text-muted-foreground mb-4">{item.description}</p>

                    <div className="flex items-center justify-between text-sm">
                      <span className="text-muted-foreground">{item.size}</span>
                      {item.available && (
                        <a
                          href={item.link}
                          target={item.format === "GitHub" ? "_blank" : "_blank"}
                          rel={item.format === "GitHub" ? "noopener noreferrer" : "noopener noreferrer"}
                          download={item.format !== "GitHub"}
                          className="inline-flex items-center gap-1 text-brand hover:text-brand-secondary transition-colors"
                        >
                          {item.format === "GitHub" ? t('resources.view') : t('resources.download')}
                          <ExternalLink className="w-3 h-3" />
                        </a>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 text-center glass-floating rounded-2xl p-8 max-w-3xl mx-auto">
          <h3 className="text-2xl font-bold mb-4">{t('resources.needSpecific.title')}</h3>
          <p className="text-muted-foreground mb-6">
            {t('resources.needSpecific.description')}
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white rounded-lg hover:shadow-lg transition-all"
          >
            {t('resources.contactMe')}
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>

        {/* Quick Links */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          <a
            href="https://github.com/doroteaMonaco"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-floating rounded-xl p-6 text-center hover-glow transition-all hover:scale-105"
          >
            <Github className="w-8 h-8 mx-auto mb-3 text-brand" />
            <h4 className="font-bold mb-1">{t('resources.quickLinks.github')}</h4>
            <p className="text-sm text-muted-foreground">{t('resources.quickLinks.githubDesc')}</p>
          </a>

          <a
            href="#research-papers"
            className="glass-floating rounded-xl p-6 text-center hover-glow transition-all hover:scale-105"
          >
            <BookOpen className="w-8 h-8 mx-auto mb-3 text-brand" />
            <h4 className="font-bold mb-1">{t('resources.quickLinks.papers')}</h4>
            <p className="text-sm text-muted-foreground">{t('resources.quickLinks.papersDesc')}</p>
          </a>

          <a
            href="#projects"
            className="glass-floating rounded-xl p-6 text-center hover-glow transition-all hover:scale-105"
          >
            <Code className="w-8 h-8 mx-auto mb-3 text-brand" />
            <h4 className="font-bold mb-1">{t('resources.quickLinks.projects')}</h4>
            <p className="text-sm text-muted-foreground">{t('resources.quickLinks.projectsDesc')}</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Resources;
