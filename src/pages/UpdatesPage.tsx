import SEO from "@/components/SEO";
import { TranslationProvider } from "@/contexts/TranslationContext";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import LatestUpdates from "@/components/sections/LatestUpdates";

const UpdatesPage = () => {
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
          title="Latest Updates — Dorotea Monaco"
          description="Recent milestones, achievements, and activities"
        />
        <SiteHeader />
        <main id="main-content" className="pt-16">
          <LatestUpdates />
        </main>
        <SiteFooter />
      </div>
    </TranslationProvider>
  );
};

export default UpdatesPage;
