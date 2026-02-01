import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { LanguageToggle } from "@/components/ui/language-toggle";
import { useLanguageContext } from "@/contexts/TranslationContext";
import { Menu, X, Github, Linkedin, Mail, MessageCircle } from "lucide-react";

export const SiteHeader = () => {
  const [open, setOpen] = useState(false);
  const { t } = useLanguageContext();
  const location = useLocation();

  const navItems = [
    { href: "/projects", label: t('nav.projects'), type: "route" },
    { href: "/experience", label: "Experience", type: "route" },
    { href: "/#skills", label: t('nav.skills'), type: "scroll" },
    { href: "/resources", label: "Resources", type: "route" },
    { href: "/#contact", label: t('nav.contact'), type: "scroll" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full glass-floating border-b border-border/40 backdrop-blur-xl backdrop-saturate-150">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between flex-wrap gap-y-2">
          <Link to="/" className="flex items-center gap-3 font-semibold group">
            <div className="w-9 h-9 rounded-lg bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-md">
              <span className="text-white font-bold text-base">D</span>
            </div>
            <span className="text-gradient text-lg hidden sm:block">Dorotea Monaco</span>
            <span className="sr-only">Home</span>
          </Link>

          <nav className="hidden md:flex items-center gap-1" aria-label="Primary">
            {navItems.map((item) => (
              item.type === "route" ? (
                <Link
                  key={item.href}
                  to={item.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent/10 transition-all duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full"></span>
                </Link>
              ) : (
                <a
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground hover:text-foreground rounded-lg hover:bg-accent/10 transition-all duration-200 relative group"
                >
                  {item.label}
                  <span className="absolute bottom-1 left-3 right-3 h-0.5 bg-gradient-primary scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-full"></span>
                </a>
              )
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-2">
            <div className="flex items-center gap-2">
              <LanguageToggle />
              <ThemeToggle />
              <a 
                href="https://github.com/doroteaMonaco" 
                aria-label="GitHub" 
                className="w-9 h-9 rounded-lg bg-secondary/50 border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand/40 hover:bg-brand/5 transition-all duration-200"
              >
                <Github className="h-4 w-4" />
              </a>
              <a 
                href="https://www.linkedin.com/in/dorotea-monaco-0a0bba24a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRFm6%2B%2Fs5S0SKUdnILyDpcg%3D%3D" 
                aria-label="LinkedIn" 
                className="w-9 h-9 rounded-lg bg-secondary/50 border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand/40 hover:bg-brand/5 transition-all duration-200"
              >
                <Linkedin className="h-4 w-4" />
              </a>
              <a 
                href="https://wa.me/+393348504369" 
                aria-label="WhatsApp" 
                className="w-9 h-9 rounded-lg bg-secondary/50 border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand/40 hover:bg-brand/5 transition-all duration-200"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
              <a 
                href="mailto:dorotea.monaco@gmail.com" 
                aria-label="Email" 
                className="w-9 h-9 rounded-lg bg-secondary/50 border border-border/40 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand/40 hover:bg-brand/5 transition-all duration-200"
              >
                <Mail className="h-4 w-4" />
              </a>
            </div>
            
            <Link to="/#contact">
              <Button variant="gradient" size="sm" className="ml-2">
                <span className="hidden lg:inline">💼 {t('nav.hire')}</span>
                <span className="lg:hidden">{t('nav.hire')}</span>
              </Button>
            </Link>
          </div>

          <button
            className="md:hidden inline-flex items-center justify-center p-2 rounded-xl hover:bg-accent/50 focus:outline-none focus:ring-2 focus:ring-brand transition-all duration-300"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
        
        {open && (
          <div className="md:hidden pb-6 border-t border-border/20 mt-4 pt-4">
            <nav className="flex flex-col gap-3" aria-label="Mobile">
              {navItems.map((item) => (
                item.type === "route" ? (
                  <Link
                    key={item.href}
                    to={item.href}
                    className="text-base py-3 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </Link>
                ) : (
                  <a
                    key={item.href}
                    href={item.href}
                    className="text-base py-3 px-4 rounded-lg text-muted-foreground hover:text-foreground hover:bg-accent/50 transition-all duration-300 font-medium"
                    onClick={() => setOpen(false)}
                  >
                    {item.label}
                  </a>
                )
              ))}
              
              <div className="flex items-center justify-center gap-3 py-4">
                <LanguageToggle />
                <ThemeToggle />
                <a href="https://github.com/doroteaMonaco" aria-label="GitHub" className="w-10 h-10 rounded-lg bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand/50 transition-all duration-300">
                  <Github className="h-5 w-5" />
                </a>
                <a href="https://www.linkedin.com/in/dorotea-monaco-0a0bba24a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BRFm6%2B%2Fs5S0SKUdnILyDpcg%3D%3D" aria-label="LinkedIn" className="w-10 h-10 rounded-lg bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand/50 transition-all duration-300">
                  <Linkedin className="h-5 w-5" />
                </a>
                <a href="https://wa.me/+393456789012" aria-label="WhatsApp" className="w-10 h-10 rounded-lg bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand/50 transition-all duration-300">
                  <MessageCircle className="h-5 w-5" />
                </a>
                <a href="mailto:dorotea.monaco@gmail.com" aria-label="Email" className="w-10 h-10 rounded-lg bg-background/50 border border-border/50 flex items-center justify-center text-muted-foreground hover:text-foreground hover:border-brand/50 transition-all duration-300">
                  <Mail className="h-5 w-5" />
                </a>
              </div>
              
              <a href="#contact" onClick={() => setOpen(false)}>
                <Button className="w-full" variant="gradient">💼 {t('nav.hire')}</Button>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default SiteHeader;
