import SEO from "@/components/SEO";
import { TranslationProvider } from "@/contexts/TranslationContext";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Resources from "@/components/sections/Resources";

const ResourcesPage = () => {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-background text-foreground">
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-brand focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary"
        >
          Skip to main content
        </a>
        
        <SEO
          title="Resources & Downloads — Dorotea Monaco"
          description="Download resume, research papers, code samples, and presentations"
        />
        <SiteHeader />
        <main id="main-content" className="pt-16">
          <Resources />
        </main>
        <SiteFooter />
      </div>
    </TranslationProvider>
  );
};

export default ResourcesPage;
