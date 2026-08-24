import { Button } from "@/components/ui/button";
import { Download } from "lucide-react";
import { useLanguageContext } from "@/contexts/TranslationContext";

export const CvDropdown = () => {
  const { t } = useLanguageContext();

  return (
    <Button variant="outline" size="lg" className="w-full" asChild>
      <a href="/Dorotea-Monaco-CV.pdf" download="Dorotea-Monaco-CV.pdf">
          <Download className="w-4 h-4 mr-2" />
          {t('hero.downloadCV')}
      </a>
    </Button>
  );
};

export default CvDropdown;
