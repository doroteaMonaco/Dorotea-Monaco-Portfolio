import SEO from "@/components/SEO";
import { TranslationProvider } from "@/contexts/TranslationContext";
import SiteHeader from "@/components/layout/SiteHeader";
import SiteFooter from "@/components/layout/SiteFooter";
import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import FeaturedProjects from "@/components/sections/FeaturedProjects";
import Publications from "@/components/sections/Publications";
import Skills from "@/components/sections/Skills";
import Volunteer from "@/components/sections/Volunteer";
import Contact from "@/components/sections/Contact";
import ExploreCards from "@/components/sections/ExploreCards";
import { Chatbot } from "@/components/ui/chatbot";

const Index = () => {
  return (
    <TranslationProvider>
      <div className="min-h-screen bg-background text-foreground">
        {/* Skip to main content link for accessibility */}
        <a 
          href="#main-content" 
          className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-6 focus:py-3 focus:bg-brand focus:text-white focus:rounded-lg focus:shadow-lg focus:outline-none focus:ring-2 focus:ring-brand-secondary"
        >
          Skip to main content
        </a>
        
        <SEO
          title="Dorotea Monaco — Software Engineer Portfolio"
          description="Portfolio di Dorotea Monaco, ingegnere software: progetti innovativi, competenze tecniche e informazioni di contatto."
          person={{
            name: "Dorotea Monaco",
            jobTitle: "Software Engineer",
            email: "dorotea.monaco@gmail.com",
            sameAs: [
              "https://github.com/doroteaMonaco",
              "https://www.linkedin.com/in/dorotea-monaco-0a0bba24a",
            ],
          }}
        />
        <SiteHeader />
        <main id="main-content">
          <Hero />
          <ExploreCards />
          <FeaturedProjects />
          <Publications />
          <Skills />
          <About />
          <Volunteer />
          <Contact />
        </main>
        <SiteFooter />
        <Chatbot />
      </div>
    </TranslationProvider>
  );
};

export default Index;
