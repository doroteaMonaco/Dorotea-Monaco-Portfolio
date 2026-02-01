import { Badge } from "@/components/ui/badge";
import { useLanguageContext } from "@/contexts/TranslationContext";
import { Progress } from "@/components/ui/progress";
import { useState } from "react";

const technicalSkills = {
  "Frontend": {
    icon: "🎨",
    skills: [
      { name: "React", proficiency: 90, projects: 8 },
      { name: "TypeScript", proficiency: 85, projects: 7 },
      { name: "JavaScript", proficiency: 95, projects: 10 },
      { name: "HTML5", proficiency: 95, projects: 10 },
      { name: "Tailwind CSS", proficiency: 90, projects: 6 },
      { name: "Vite", proficiency: 80, projects: 5 }
    ]
  },
  "Backend": {
    icon: "⚙️",
    skills: [
      { name: "Node.js", proficiency: 85, projects: 6 },
      { name: "Express", proficiency: 80, projects: 5 },
      { name: "REST APIs", proficiency: 90, projects: 7 },
      { name: "MySQL", proficiency: 75, projects: 4 },
      { name: "PostgreSQL", proficiency: 80, projects: 5 },
      { name: "Prisma", proficiency: 85, projects: 4 },
      { name: "Redis", proficiency: 70, projects: 2 },
      { name: "Supabase", proficiency: 75, projects: 3 }
    ]
  },
  "Tools & DevOps": {
    icon: "🛠️",
    skills: [
      { name: "Git", proficiency: 90, projects: 10 },
      { name: "Docker", proficiency: 75, projects: 4 },
      { name: "CI/CD", proficiency: 70, projects: 3 },
      { name: "Testing", proficiency: 80, projects: 6 },
      { name: "Jest", proficiency: 75, projects: 5 }
    ]
  },
  "Data Science & AI": {
    icon: "🤖",
    skills: [
      { name: "PyTorch", proficiency: 85, projects: 4 },
      { name: "TensorFlow", proficiency: 80, projects: 3 },
      { name: "scikit-learn", proficiency: 85, projects: 5 },
      { name: "Pandas", proficiency: 90, projects: 6 },
      { name: "NumPy", proficiency: 90, projects: 6 },
      { name: "XGBoost", proficiency: 75, projects: 3 },
      { name: "LangGraph", proficiency: 70, projects: 2 },
      { name: "LLM", proficiency: 75, projects: 3 },
      { name: "GANs", proficiency: 80, projects: 2 }
    ]
  },
  "Languages": {
    icon: "💻",
    skills: [
      { name: "JavaScript", proficiency: 95, projects: 10 },
      { name: "TypeScript", proficiency: 85, projects: 7 },
      { name: "Python", proficiency: 90, projects: 8 },
      { name: "Java", proficiency: 80, projects: 5 },
      { name: "C", proficiency: 75, projects: 4 },
      { name: "SQL", proficiency: 85, projects: 6 },
      { name: "Rust", proficiency: 70, projects: 2 }
    ]
  }
};

const softSkills = [
  "skills.soft.communication",
  "skills.soft.problemSolving", 
  "skills.soft.adaptability",
  "skills.soft.criticalThinking",
  "skills.soft.creativity",
  "skills.soft.timeManagement",
  "skills.soft.projectManagement",
  "skills.soft.teamwork"
];

export const Skills = () => {
  const { t } = useLanguageContext();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [showProficiency, setShowProficiency] = useState(true);
  
  // Mappa delle traduzioni per le categorie
  const getCategoryTranslation = (category: string) => {
    const translations: { [key: string]: string } = {
      "Frontend": t('skills.web'),
      "Backend": t('skills.database'),
      "Tools & DevOps": t('skills.tools'),
      "Data Science & AI": "Data Science & AI",
      "Languages": t('skills.programming')
    };
    return translations[category] || category;
  };

  const getProficiencyLabel = (proficiency: number) => {
    if (proficiency >= 90) return "Expert";
    if (proficiency >= 80) return "Advanced";
    if (proficiency >= 70) return "Intermediate";
    return "Learning";
  };

  const getProficiencyColor = (proficiency: number) => {
    if (proficiency >= 90) return "text-green-600 dark:text-green-400";
    if (proficiency >= 80) return "text-blue-600 dark:text-blue-400";
    if (proficiency >= 70) return "text-yellow-600 dark:text-yellow-400";
    return "text-orange-600 dark:text-orange-400";
  };
  
  return (
    <section id="skills" className="py-20 md:py-32 relative">
      <div className="absolute bottom-20 right-1/4 w-96 h-96 bg-brand-secondary/10 rounded-full blur-3xl"></div>
      
      <div className="container mx-auto px-4 relative">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            <span className="text-gradient">{t('skills.title')}</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {t('skills.subtitle')}
          </p>
          
          {/* Toggle for proficiency view */}
          <div className="mt-6 flex items-center justify-center gap-4">
            <button
              onClick={() => setShowProficiency(!showProficiency)}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
            >
              <span className="text-sm font-medium">
                {showProficiency ? "Hide" : "Show"} Proficiency Levels
              </span>
            </button>
          </div>
        </div>
        
        {/* Technical Skills */}
        <div className="mb-20">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-lg">💻</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t('skills.programming')}</h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {Object.entries(technicalSkills).map(([category, data], index) => (
              <div 
                key={category} 
                className="glass-floating rounded-2xl p-6 hover-glow group"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-xl bg-gradient-primary flex items-center justify-center text-xl group-hover:scale-110 transition-transform duration-300">
                    {data.icon}
                  </div>
                  <h4 className="font-bold text-lg text-foreground group-hover:text-gradient transition-all duration-300">
                    {getCategoryTranslation(category)}
                  </h4>
                </div>
                
                <div className="space-y-4">
                  {data.skills.map((skill, skillIndex) => (
                    <div 
                      key={skill.name} 
                      className="group/skill"
                      style={{ animationDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                    >
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-sm font-medium text-foreground">
                          {skill.name}
                        </span>
                        {showProficiency && (
                          <span className={`text-xs font-medium ${getProficiencyColor(skill.proficiency)}`}>
                            {getProficiencyLabel(skill.proficiency)}
                          </span>
                        )}
                      </div>
                      {showProficiency && (
                        <div className="mb-1">
                          <Progress value={skill.proficiency} className="h-2" />
                        </div>
                      )}
                      <div className="flex items-center gap-2 text-xs text-muted-foreground">
                        <span>{skill.projects} projects</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Soft Skills */}
        <div className="text-center">
          <div className="flex items-center justify-center gap-3 mb-12">
            <div className="w-8 h-8 rounded-full bg-gradient-primary flex items-center justify-center">
              <span className="text-lg">🤝</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground">{t('skills.interpersonal')}</h3>
          </div>
          
          <div className="flex flex-wrap justify-center gap-3 max-w-4xl mx-auto">
            {softSkills.map((skill, index) => (
              <Badge 
                key={skill} 
                variant="outline" 
                className="text-sm px-4 py-2 rounded-full border-brand/30 text-brand bg-brand/5 hover:bg-brand hover:text-brand-foreground hover:scale-105 transition-all duration-300 cursor-default"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {t(skill)}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
