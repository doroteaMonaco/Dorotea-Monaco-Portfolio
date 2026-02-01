import { useState, useCallback, type CSSProperties } from "react";
import { Button } from "@/components/ui/button";
import { CvDropdown } from "@/components/ui/cv-dropdown";
import { useLanguageContext } from "@/contexts/TranslationContext";
import { Stats } from "@/components/ui/stats";

export const Hero = () => {
  const [pos, setPos] = useState({ x: "50%", y: "50%" });
  const { t } = useLanguageContext();

  const handleMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setPos({ x: `${x}%`, y: `${y}%` });
  }, []);

  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Effects - Subtle */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-10"></div>
      <div className="floating-orb w-[32rem] h-[32rem] top-20 -left-32 opacity-40"></div>
      <div className="floating-orb w-96 h-96 bottom-20 -right-32 opacity-30" style={{ animationDelay: '3s' }}></div>
      
      <div
        className="absolute inset-0 spotlight pointer-events-none opacity-50"
        style={{ ["--spot-x" as any]: pos.x, ["--spot-y" as any]: pos.y } as CSSProperties}
      />
      
      <div className="container mx-auto px-4 py-20 relative z-10" onMouseMove={handleMove}>
        <div className="max-w-5xl mx-auto text-center">
          <div className="animate-fade-in-up">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-floating mb-8 shadow-sm">
              <div className="w-2 h-2 rounded-full bg-brand animate-pulse-glow shadow-lg shadow-brand/50"></div>
              <span className="text-sm font-medium">Available for Hiring</span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.1] mb-6 tracking-tight">
              <span className="block font-display">Dorotea Monaco</span>
              <span className="gradient-text block text-3xl sm:text-4xl md:text-5xl mt-2">{t('hero.role')}</span>
            </h1>
            
            <p className="text-lg md:text-xl font-medium text-foreground/80 mb-3 tracking-tight">
              Politecnico di Torino • {t('hero.currentVolunteer')}
            </p>
            
            <p className="text-base md:text-lg text-muted-foreground max-w-2xl mx-auto mb-12 leading-relaxed">
              {t('hero.description')}
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center items-center gap-3 max-w-lg mx-auto">
              <a href="#projects" className="w-full sm:w-auto">
                <Button variant="gradient" size="lg" className="w-full group">
                  <span>{t('hero.viewProjects')}</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Button>
              </a>
              <a href="#contact" className="w-full sm:w-auto">
                <Button variant="outline" size="lg" className="w-full">{t('hero.letsConnect')}</Button>
              </a>
              <div className="w-full sm:w-auto">
                <CvDropdown />
              </div>
            </div>

            {/* Stats */}
            <Stats 
              stats={[
                { value: 10, label: "Projects Completed", suffix: "+", icon: "🚀" },
                { value: 2, label: "Research Papers", icon: "📄" },
                { value: 3, label: "Years Volunteering", suffix: "+", icon: "❤️" },
                { value: 8, label: "Tech Stacks", suffix: "+", icon: "💻" }
              ]}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
