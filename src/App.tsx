import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react"
import { TranslationProvider } from "./contexts/TranslationContext";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import ProjectsPage from "./pages/ProjectsPage";
import ExperiencePage from "./pages/ExperiencePage";
import CertificationsPage from "./pages/CertificationsPage";
import ResourcesPage from "./pages/ResourcesPage";
import FeaturedPage from "./pages/FeaturedPage";
import UpdatesPage from "./pages/UpdatesPage";
import OpportunitiesPage from "./pages/OpportunitiesPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TranslationProvider>
      <TooltipProvider>
        <ScrollToTop />
        <Toaster />
        <Sonner />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/experience" element={<ExperiencePage />} />
          <Route path="/certifications" element={<CertificationsPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
          <Route path="/featured" element={<FeaturedPage />} />
          <Route path="/updates" element={<UpdatesPage />} />
          <Route path="/opportunities" element={<OpportunitiesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Analytics />
      </TooltipProvider>
    </TranslationProvider>
  </QueryClientProvider>
);

export default App;
