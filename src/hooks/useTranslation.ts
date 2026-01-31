import { useState, useEffect } from 'react';

export type Language = 'it' | 'en';

const translations = {
  it: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Progetti',
    'nav.about': 'Chi Sono',
    'nav.skills': 'Competenze',
    'nav.volunteer': 'Volontariato',
    'nav.contact': 'Contatti',
    'nav.hire': 'Assumimi',
    
    // Hero Section
    'hero.role': 'Software Engineering • Artificial Intelligence • Computer Vision',
    'hero.currentVolunteer': 'Volontaria AISM',
    'hero.description': 'Il mio obiettivo è costruire soluzioni che vadano oltre le prestazioni, creando tecnologie che fanno davvero la differenza nella vita quotidiana delle persone. Sono particolarmente motivata a sviluppare strumenti e applicazioni che migliorano l\'accessibilità e supportano le persone con disabilità, aiutandole a superare le sfide e a raggiungere l’indipendenza.',
    'hero.viewProjects': 'Vedi Progetti',
    'hero.letsConnect': 'Connettiamoci',
    'hero.downloadCV': 'Scarica CV',
    
    // About Section
    'about.title': 'Chi Sono',
    'about.subtitle': 'Ingegnere del software con specializzazione in AI, computer vision e sviluppo full-stack, dedicata a creare soluzioni tecnologiche innovative e accessibili.',
    'about.journey': 'Il Mio Percorso',
    'about.content': '🎯 Competenze Tecniche Chiave\n\n• Sviluppo Full-Stack: Architetture production-ready con React, Node.js, TypeScript e PostgreSQL\n• AI/ML Engineering: GANs per augmentation di dati medici, sistemi multi-agente LLM, CNN per computer vision\n• Ingegneria del Software: Design pattern enterprise, sistemi distribuiti, containerizzazione Docker\n• Ricerca Applicata: Analisi in medical imaging, domain adaptation, ottimizzazione algoritmica\n\n🎓 Formazione Accademica\n\nMaster\'s Degree in Ingegneria del Software - Politecnico di Torino\nFocus: AI/ML, Architetture Software, Sistemi Distribuiti\nProgetti: GANs per classificazione di immagini mediche, sistemi multi-agente per code generation, piattaforme civic engagement\n\n💼 Esperienza di Progetto\n\nHo guidato e contribuito allo sviluppo di sistemi complessi che spaziano dalla ricerca in medical imaging (GAN per rilevamento melanoma con valutazione DANN) a piattaforme production-ready (Participium: sistema RBAC con gestione utenti enterprise). La mia esperienza include l\'implementazione di architetture multi-agente con LangGraph, pipeline ML con PyTorch, e applicazioni web scalabili.\n\n🤝 Impatto Sociale\n\nVolontaria attiva con AISM (Associazione Italiana Sclerosi Multipla), applico principi di design inclusivo e accessibilità in ogni progetto. Questa esperienza ha plasmato il mio approccio allo sviluppo software, integrando empatia e competenza tecnica per creare tecnologie che migliorano concretamente la vita delle persone.\n\n🚀 Obiettivi Professionali\n\nCerco opportunità in ambienti innovativi dove posso contribuire a progetti che uniscono eccellenza tecnica e impatto sociale. Particolarmente interessata a ruoli in AI/ML engineering, software architecture, e sviluppo di sistemi che affrontano sfide reali nel healthcare, accessibility, e civic tech.',
    
    
    // Skills Section
    'skills.title': 'Competenze & Expertise',
    'skills.subtitle': 'Un toolkit completo di tecnologie moderne e competenze interpersonali affinate attraverso l\'eccellenza accademica e l\'esperienza pratica.',
    'skills.programming': 'Linguaggi di Programmazione',
    'skills.web': 'Tecnologie Web',
    'skills.database': 'Database e Backend',
    'skills.tools': 'Strumenti e Platform',
    'skills.interpersonal': 'Competenze Interpersonali',
    'skills.soft.communication': 'Comunicazione Efficace',
    'skills.soft.problemSolving': 'Problem Solving',
    'skills.soft.adaptability': 'Adattabilità',
    'skills.soft.criticalThinking': 'Pensiero Critico',
    'skills.soft.creativity': 'Creatività',
    'skills.soft.timeManagement': 'Gestione del Tempo',
    'skills.soft.projectManagement': 'Gestione Progetti',
    'skills.soft.teamwork': 'Lavoro di Squadra',
    
    // Projects Section
    'projects.title': 'Progetti in Evidenza',
    'projects.subtitle': 'Una vetrina di soluzioni innovative che combinano tecnologie moderne con design accurato. Ogni progetto dimostra capacità di problem-solving e competenza tecnica.',
    'projects.viewProject': 'Vedi Progetto',
    'projects.techStack': 'Stack Tecnologico',
    'projects.misfortune.title': 'Misfortune Tracker',
    'projects.misfortune.description': 'Un\'applicazione completa per le statistiche di gioco con visualizzazione dei dati in tempo reale, analisi degli utenti e monitoraggio delle prestazioni. Costruita con React e tecnologie moderne per un\'esperienza utente fluida.',
    'projects.geocontrol.title': 'GeoControl',
    'projects.geocontrol.description': 'Sistema avanzato di gestione basato sulla posizione per l\'elaborazione di dati geografici, mappatura e analisi spaziale. Integra API moderne per fornire insight geografici accurati.',
    'projects.ruggine.title': 'Ruggine',
    'projects.ruggine.description': 'Applicazione di chat moderna sviluppata in Rust con interfaccia grafica nativa, sviluppata in collaborazione con Luigi Gonnella 💜. Utilizza WebSocket e Redis per supportare chat di gruppo, messaggi privati, inviti ai gruppi e richieste di amicizia per una comunicazione fluida e sicura.',
  'projects.pacman.title': 'Pacman',
  'projects.pacman.description': 'Un clone di Pacman sviluppato per la scheda Landtiger LPC1768, programmato in Assembly ARM. Gameplay classico, grafica retrò e intelligenza artificiale per i fantasmi.',
  'projects.recapp.title': 'RecApp',
  'projects.recapp.description': 'Forum di ricette sviluppato con React Router, Prisma, PostgreSQL, Redis, Supabase, Vercel, React e JavaScript. ⚠️ Progetto ancora in fase di sviluppo: l\'interfaccia utente e le funzionalità social devono essere implementate.',
  'projects.mlprojects.title': 'Machine Learning Projects',
  'projects.mlprojects.description': 'Collezione completa di progetti di machine learning e deep learning focalizzati sulla modellazione predittiva in diversi domini: computer vision, diagnosi medica, analisi assicurativa e classificazione multi-classe. Include CIFAR-10, California Housing, Medical Insurance, Transfer Learning con ResNet18, Flower Classification e Diabetes Predictor.',
  'projects.llmarchitectures.title': 'Architectures for Code Development with LLMs',
  'projects.llmarchitectures.description': 'Sistema di generazione automatica di codice utilizzando Large Language Models con tre approcci architetturali: Naive Baseline (one-shot), Single-Agent Pipeline (ragionamento multi-step con LangGraph), e Multi-Agent System (sistema collaborativo con ruoli specializzati: Planner, Coder e Critic). Implementa orchestrazione di workflow, esecuzione di codice in sandbox e metriche di qualità.',  'projects.participium.title': 'Participium',
  'projects.participium.description': 'Piattaforma web completa per facilitare l\'impegno dei cittadini con i servizi municipali. Permette ai residenti di segnalare problemi urbani (illuminazione, buche, rifiuti, perdite d\'acqua) attraverso un\'interfaccia basata su mappa interattiva. Include controllo degli accessi basato sui ruoli, gestione report in tempo reale, sistema di commenti interni e integrazione con manutentori esterni.',
  'projects.gan.title': 'GAN for Data Augmentation and Domain Adaptation',
  'projects.gan.description': 'Investigazione sistematica di Generative Adversarial Networks per l\'aumento di dati sintetici nella classificazione di immagini mediche con grave squilibrio di classe, sviluppato in collaborazione con Luigi Gonnella 💜. Valuta architetture DCGAN e cDCGAN attraverso multiple funzioni di loss per affrontare il rilevamento di lesioni cutanee maligne nel dataset ISIC. Include ottimizzazione degli iperparametri, analisi dell\'adattamento del dominio con DANN e valutazione su ResNet, AlexNet.',    
    // Volunteer Section
    'volunteer.title': 'Volontariato',
    'volunteer.subtitle': 'Un percorso di crescita personale e professionale attraverso l\'impegno sociale e la formazione di competenze trasversali.',
    'volunteer.aism.title': 'AISM - Associazione Italiana Sclerosi Multipla',
    'volunteer.aism.role': 'Volontaria attiva',
    'volunteer.aism.description': 'Durante la mia esperienza di volontariato con AISM, ho contribuito attivamente all\'organizzazione di eventi informativi, campagne di raccolta fondi e attività di sensibilizzazione nelle scuole e nelle aziende. Questa esperienza mi ha insegnato l\'importanza dell\'empatia e dell\'inclusività nel design tecnologico.',
    'volunteer.activities.events.title': 'Eventi Informativi',
    'volunteer.activities.events.description': 'Organizzazione e coordinamento di eventi per sensibilizzare sulla sclerosi multipla',
    'volunteer.activities.fundraising.title': 'Raccolta Fondi',
    'volunteer.activities.fundraising.description': 'Gestione di campagne e iniziative per il supporto alla ricerca',
    'volunteer.activities.schools.title': 'Promozione nelle Scuole',
    'volunteer.activities.schools.description': 'Attività di sensibilizzazione e educazione negli istituti scolastici',
    'volunteer.activities.companies.title': 'Aziende Partner',
    'volunteer.activities.companies.description': 'Collaborazione con aziende per iniziative di responsabilità sociale',
    'volunteer.skillsTitle': 'Competenze Acquisite',
    'volunteer.skillsDescription': 'L\'esperienza di volontariato mi ha permesso di sviluppare competenze trasversali fondamentali per il lavoro di squadra e la gestione di progetti complessi.',
    'volunteer.skills.communication': 'Comunicazione Efficace',
    'volunteer.skills.teamwork': 'Lavoro di Squadra',
    'volunteer.skills.leadership': 'Leadership',
    'volunteer.skills.empathy': 'Empatia',
    'volunteer.skills.organization': 'Organizzazione',
    'volunteer.skills.adaptability': 'Adattabilità',
    
    // Contact Section
    'contact.title': 'Mettiti in Contatto',
    'contact.subtitle': 'Sono sempre aperta a discutere nuove opportunità, progetti interessanti, o semplicemente fare una chiacchierata sulla tecnologia.',
    'contact.ready': 'Pronta per Collaborare?',
    'contact.motivation1': 'Sono sempre entusiasta di discutere nuove opportunità, progetti innovativi, o semplicemente avere una conversazione significativa sulla tecnologia e il suo impatto.',
    'contact.motivation2': 'Che tu stia cercando un membro dedicato del team, abbia un\'idea per un progetto, o voglia esplorare come possiamo creare soluzioni accessibili insieme, mi piacerebbe sentirti!',
    'contact.responseTime': 'Di solito risponde entro 24 ore',
    'contact.stats.responseTime': 'Tempo di Risposta',
    'contact.stats.commitment': 'Impegno',
    'contact.success.title': 'Messaggio Inviato con Successo!',
    'contact.success.description': 'Grazie per avermi contattato. Ti risponderò presto!',
    'contact.together': 'Creiamo Qualcosa di Straordinario Insieme',
    'contact.form.title': 'Invia un Messaggio',
    'contact.form.name': 'Nome',
    'contact.form.email': 'Email',
    'contact.form.message': 'Messaggio',
    'contact.form.namePlaceholder': 'Il tuo nome',
    'contact.form.emailPlaceholder': 'tu@azienda.com',
    'contact.form.messagePlaceholder': 'Ciao! Vorrei discutere...',
    'contact.form.send': 'Invia Messaggio',
    'contact.form.sending': 'Invio in corso...',
    'contact.form.sent': 'Messaggio inviato!',
    'contact.info.title': 'Informazioni di Contatto',
    
    // CV Dropdown
    'cv.english': 'Scarica CV (Inglese)',
    'cv.italian': 'Scarica CV (Italiano)',
    
    // Language
    'language.italian': 'Italiano',
    'language.english': 'Inglese',
    
    // Footer
    'footer.rights': 'Tutti i diritti riservati.'
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.projects': 'Projects',
    'nav.about': 'About',
    'nav.skills': 'Skills',
    'nav.volunteer': 'Volunteer',
    'nav.contact': 'Contact',
    'nav.hire': 'Hire Me',
    
    // Hero Section
    'hero.role': 'Software Engineering • Artificial Intelligence • Computer Vision',
    'hero.currentVolunteer': 'AISM Volunteer',
    'hero.description': 'My goal is to build solutions that go beyond performance, creating technologies that truly make a difference in people\'s daily lives. I am especially motivated to develop tools and applications that improve accessibility and support individuals with disabilities, helping them overcome challenges and gain independence.',
    'hero.viewProjects': 'View Projects',
    'hero.letsConnect': 'Let\'s Connect',
    'hero.downloadCV': 'Download CV',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Software engineer specializing in AI, computer vision, and full-stack development, dedicated to building innovative and accessible technology solutions.',
    'about.journey': 'My Journey',
    'about.content': '🎯 Core Technical Expertise\n\n• Full-Stack Development: Production-ready architectures with React, Node.js, TypeScript, and PostgreSQL\n• AI/ML Engineering: GANs for medical data augmentation, multi-agent LLM systems, CNN for computer vision\n• Software Engineering: Enterprise design patterns, distributed systems, Docker containerization\n• Applied Research: Medical imaging analysis, domain adaptation, algorithmic optimization\n\n🎓 Academic Background\n\nMaster\'s Degree in Software Engineering - Politecnico di Torino\nFocus: AI/ML, Software Architectures, Distributed Systems\nProjects: GANs for medical image classification, multi-agent systems for code generation, civic engagement platforms\n\n💼 Project Experience\n\nI have led and contributed to the development of complex systems ranging from medical imaging research (GANs for melanoma detection with DANN evaluation) to production-ready platforms (Participium: RBAC system with enterprise user management). My experience includes implementing multi-agent architectures with LangGraph, ML pipelines with PyTorch, and scalable web applications.\n\n🤝 Social Impact\n\nActive volunteer with AISM (Italian Multiple Sclerosis Association), I apply inclusive design and accessibility principles to every project. This experience has shaped my approach to software development, integrating empathy with technical expertise to create technologies that tangibly improve people\'s lives.\n\n🚀 Professional Goals\n\nSeeking opportunities in innovative environments where I can contribute to projects that unite technical excellence with social impact. Particularly interested in roles in AI/ML engineering, software architecture, and developing systems that address real challenges in healthcare, accessibility, and civic tech.',
    
    
    // Skills Section
    'skills.title': 'Skills & Expertise',
    'skills.subtitle': 'A comprehensive toolkit of modern technologies and interpersonal skills honed through academic excellence and practical experience.',
    'skills.programming': 'Programming Languages',
    'skills.web': 'Web Technologies',
    'skills.database': 'Database & Backend',
    'skills.tools': 'Tools & Platforms',
    'skills.interpersonal': 'Interpersonal Skills',
    'skills.soft.communication': 'Effective Communication',
    'skills.soft.problemSolving': 'Problem Solving',
    'skills.soft.adaptability': 'Adaptability',
    'skills.soft.criticalThinking': 'Critical Thinking',
    'skills.soft.creativity': 'Creativity',
    'skills.soft.timeManagement': 'Time Management',
    'skills.soft.projectManagement': 'Project Management',
    'skills.soft.teamwork': 'Cross-functional Teamwork',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.subtitle': 'A showcase of innovative solutions combining modern technologies with thoughtful design. Each project demonstrates problem-solving skills and technical expertise.',
    'projects.viewProject': 'View Project',
    'projects.techStack': 'Tech Stack',
    'projects.misfortune.title': 'Misfortune Tracker',
    'projects.misfortune.description': 'A comprehensive gaming statistics application featuring real-time data visualization, user analytics, and performance tracking. Built with React and modern technologies for a seamless user experience.',
    'projects.geocontrol.title': 'GeoControl',
    'projects.geocontrol.description': 'Advanced location-based management system for geographical data processing, mapping, and spatial analysis. Integrates modern APIs to provide accurate geographical insights.',
    'projects.ruggine.title': 'Ruggine',
    'projects.ruggine.description': 'Modern chat application built with Rust featuring native GUI interface, developed in collaboration with Luigi Gonnella 💜. Uses WebSocket and Redis to support group chats, private messaging, group invitations, and friend requests for seamless and secure communication.',
  'projects.pacman.title': 'Pacman',
  'projects.pacman.description': 'A Pacman clone developed for the Landtiger LPC1768 board, programmed in ARM assembly. Features classic gameplay, retro graphics, and AI-driven ghosts.',
  'projects.recapp.title': 'RecApp',
  'projects.recapp.description': 'Recipe forum built with React Router, Prisma, PostgreSQL, Redis, Supabase, Vercel, React and JavaScript. ⚠️ Project under active development: UI and social features are still to be implemented.',
  'projects.mlprojects.title': 'Machine Learning Projects',
  'projects.mlprojects.description': 'Comprehensive collection of machine learning and deep learning projects focused on predictive modeling across different domains: computer vision, medical diagnosis, insurance analytics, and multi-class classification. Includes CIFAR-10, California Housing, Medical Insurance, Transfer Learning with ResNet18, Flower Classification, and Diabetes Predictor.',
  'projects.llmarchitectures.title': 'Architectures for Code Development with LLMs',
  'projects.llmarchitectures.description': 'Automated code generation system using Large Language Models with three architectural approaches: Naive Baseline (one-shot), Single-Agent Pipeline (multi-step reasoning with LangGraph), and Multi-Agent System (collaborative system with specialized roles: Planner, Coder, and Critic). Implements workflow orchestration, code execution sandbox, and quality metrics.',  'projects.participium.title': 'Participium',
  'projects.participium.description': 'Comprehensive web platform facilitating citizen engagement with municipal services. Enables residents to report urban issues (streetlights, potholes, garbage, water leaks) through an interactive map-based interface. Features role-based access control, real-time report management, internal comments system, and external maintainer integration.',
  'projects.gan.title': 'GAN for Data Augmentation and Domain Adaptation',
  'projects.gan.description': 'Systematic investigation of Generative Adversarial Networks for synthetic data augmentation in imbalanced medical image classification, developed in collaboration with Luigi Gonnella 💜. Evaluates DCGAN and cDCGAN architectures across multiple loss functions to address malignant skin lesion detection in ISIC dataset. Includes hyperparameter optimization, domain adaptation analysis with DANN, and evaluation across ResNet, AlexNet.',    
    // Volunteer Section
    'volunteer.title': 'Volunteer Work',
    'volunteer.subtitle': 'A journey of personal and professional growth through social commitment and the development of cross-functional skills.',
    'volunteer.aism.title': 'AISM - Italian Multiple Sclerosis Association',
    'volunteer.aism.role': 'Active Volunteer',
    'volunteer.aism.description': 'During my volunteer experience with AISM, I actively contributed to organizing informational events, fundraising campaigns, and awareness activities in schools and companies. This experience taught me the importance of empathy and inclusivity in technological design.',
    'volunteer.activities.events.title': 'Informational Events',
    'volunteer.activities.events.description': 'Organization and coordination of events to raise awareness about multiple sclerosis',
    'volunteer.activities.fundraising.title': 'Fundraising',
    'volunteer.activities.fundraising.description': 'Management of campaigns and initiatives to support research',
    'volunteer.activities.schools.title': 'School Outreach',
    'volunteer.activities.schools.description': 'Awareness and education activities in educational institutions',
    'volunteer.activities.companies.title': 'Corporate Partners',
    'volunteer.activities.companies.description': 'Collaboration with companies for corporate social responsibility initiatives',
    'volunteer.skillsTitle': 'Skills Acquired',
    'volunteer.skillsDescription': 'The volunteer experience allowed me to develop essential cross-functional skills for teamwork and complex project management.',
    'volunteer.skills.communication': 'Effective Communication',
    'volunteer.skills.teamwork': 'Teamwork',
    'volunteer.skills.leadership': 'Leadership',
    'volunteer.skills.empathy': 'Empathy',
    'volunteer.skills.organization': 'Organization',
    'volunteer.skills.adaptability': 'Adaptability',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.subtitle': 'I\'m always open to discussing new opportunities, interesting projects, or just having a chat about technology.',
    'contact.ready': 'Ready to Collaborate?',
    'contact.motivation1': 'I\'m always excited to discuss new opportunities, innovative projects, or just have a meaningful conversation about technology and its impact.',
    'contact.motivation2': 'Whether you\'re looking for a dedicated team member, have a project idea, or want to explore how we can create accessible solutions together, I\'d love to hear from you!',
    'contact.responseTime': 'Usually responds within 24 hours',
    'contact.stats.responseTime': 'Response Time',
    'contact.stats.commitment': 'Commitment',
    'contact.success.title': 'Message Sent Successfully!',
    'contact.success.description': 'Thanks for reaching out. I\'ll get back to you soon!',
    'contact.together': 'Let\'s Create Something Amazing Together',
    'contact.form.title': 'Send a Message',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailPlaceholder': 'you@company.com',
    'contact.form.messagePlaceholder': 'Hi! I\'d like to discuss...',
    'contact.form.send': 'Send Message',
    'contact.form.sending': 'Sending...',
    'contact.form.sent': 'Message sent!',
    'contact.info.title': 'Contact Information',
    
    // CV Dropdown
    'cv.english': 'Download CV (English)',
    'cv.italian': 'Download CV (Italian)',
    
    // Language
    'language.italian': 'Italian',
    'language.english': 'English',
    
    // Footer
    'footer.rights': 'All rights reserved.'
  }
};

export const useTranslation = () => {
  const [language, setLanguage] = useState<Language>('it');

  useEffect(() => {
    // Carica la lingua salvata dal localStorage
    const savedLanguage = localStorage.getItem('portfolio-language') as Language;
    if (savedLanguage && (savedLanguage === 'it' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
    }
  }, []);

  const changeLanguage = (newLanguage: Language) => {
    setLanguage(newLanguage);
    localStorage.setItem('portfolio-language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return {
    language,
    changeLanguage,
    t
  };
};
