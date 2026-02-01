import React, { useState, useEffect, useRef } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User, 
  ChevronDown,
  ExternalLink,
  Mail,
  Github,
  Linkedin
} from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
  quickReplies?: string[];
}

interface FAQ {
  id: string;
  question: string;
  answer: string;
  keywords: string[];
  quickReplies?: string[];
}

const faqs: FAQ[] = [
  {
    id: 'about',
    question: 'Tell me about yourself',
    answer: `Hi! I'm Dorotea Monaco, a Master's student in Software Engineering at Politecnico di Torino. I'm passionate about building solutions that go beyond performance, creating technologies that truly make a difference in people's daily lives. 

I specialize in full-stack development with modern technologies like React, TypeScript, Node.js, and I'm particularly motivated to develop tools and applications that improve accessibility and support individuals with disabilities.

🤝 I'm also an active volunteer with AISM (Associazione Italiana Sclerosi Multipla), which has shaped my approach to technology design, teaching me the importance of empathy and inclusivity in creating human-centered solutions.`,
    keywords: ['about', 'who', 'yourself', 'dorotea', 'background', 'introduction', 'aism', 'volunteer'],
    quickReplies: ['Skills', 'Projects', 'Volunteer Work']
  },
  {
    id: 'skills',
    question: 'What are your technical skills?',
    answer: `My technical stack includes:
    
🖥️ **Frontend**: React, TypeScript, JavaScript, HTML5, Tailwind CSS, Vite
⚙️ **Backend**: Node.js, Express, REST APIs, MySQL, PostgreSQL, Prisma, Redis, Supabase
🗄️ **Databases**: MySQL, PostgreSQL, Supabase, Redis
🤖 **Data Science & AI**: PyTorch, TensorFlow, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, XGBoost, Machine Learning, Deep Learning, GANs, LangGraph, LLM
🛠️ **Tools & DevOps**: Git, Docker, CI/CD, Testing, Jest, Vite
💻 **Programming Languages**: Python, JavaScript, TypeScript, C, Java, Rust, SQL, Assembly ARM

💡 **Soft Skills**: Effective Communication, Problem Solving, Adaptability, Critical Thinking, Creativity, Time Management, Project Management, Cross-functional Teamwork

I'm always eager to learn new technologies and stay updated with industry trends, especially in AI, machine learning, and accessibility!`,
    keywords: ['skills', 'technologies', 'stack', 'programming', 'languages', 'tech', 'ai', 'machine learning', 'pytorch', 'tensorflow', 'scikit-learn', 'pandas', 'numpy', 'matplotlib', 'seaborn', 'xgboost', 'langgraph', 'llm', 'gan', 'prisma', 'rust'],
    quickReplies: ['Projects', 'Research Papers', 'Volunteer Work', 'Contact']
  },
  {
    id: 'projects',
    question: 'What projects have you worked on?',
    answer: `Here are some of my key projects:

🧠 **GAN for Data Augmentation and Domain Adaptation** (2025)
Research-grade medical imaging project using DCGANs and cDCGANs for data augmentation and domain adaptation in imbalanced medical image classification. Implemented with PyTorch, including comprehensive evaluation across ResNet-50, ResNet-18, and AlexNet architectures. Achieved clinical-quality results for melanoma detection in ISIC dataset (developed with Luigi Gonnella).

🏛️ **Participium** (2024)
Production-ready democratic participation platform with enterprise-grade security and scalable architecture. Citizens can report urban issues (streetlights, potholes, water leaks) through an interactive map interface. Features role-based access control (RBAC), real-time report management, internal comments, and external maintainer integration. Built with TypeScript, React, Node.js, Express, PostgreSQL, Prisma, Docker, Redis, and Leaflet.

🤖 **LLM Architectures for Code Development** (2025)
Advanced AI system implementing three architectural approaches for automated code generation: Naive Baseline (one-shot), Single-Agent Pipeline (multi-step reasoning with LangGraph), and Multi-Agent System (specialized roles: Planner, Coder, Critic). Implements workflow orchestration, code execution sandbox, and comprehensive quality metrics evaluation using Ollama, Qwen, and DeepSeek.

📊 **Machine Learning Projects** (2024-2025)
Comprehensive collection of ML/DL models across different domains: CIFAR-10 classification, California Housing prediction, Medical Insurance analytics, Transfer Learning with ResNet18, Flower Classification, and Diabetes Predictor. Built with PyTorch, TensorFlow, scikit-learn, XGBoost, pandas, numpy, and advanced visualizations.

🌍 **GeoControl** (2024)
Real-time environmental monitoring system with automated data collection from sensors, geographical data processing, mapping, and spatial analysis. Scalable architecture with TypeScript, Docker, MySQL, and Node.js for location-based management.

💬 **Ruggine** (2024)
Modern chat application built with Rust featuring native GUI (Iced framework), WebSocket for real-time messaging, and Redis for session management. Supports group chats, private messaging, group invitations, and friend requests (developed with Luigi Gonnella).

🎮 **Misfortune Game** (2023)
Gaming statistics application with real-time data visualization, user analytics, and interactive gameplay tracking. Features both demo and authenticated versions. Built with JavaScript, React, Node.js, Express, and Vite.

👾 **Pacman** (2023)
Classic Pacman arcade game for Landtiger LPC1768 board programmed in ARM assembly. Features authentic retro graphics, classic gameplay mechanics, and AI-driven ghost behavior.

🍳 **RecApp** (2024)
Recipe sharing forum under active development. Built with React Router, Prisma, PostgreSQL, Redis, Supabase, and Vercel. Community features and enhanced UI coming soon.

Each project demonstrates expertise across AI/ML, full-stack development, system architecture, and low-level programming!`,
    keywords: ['projects', 'work', 'portfolio', 'built', 'developed', 'gan', 'participium', 'llm', 'machine learning', 'ml', 'geocontrol', 'ruggine', 'misfortune', 'pacman', 'recapp', 'ai', 'deep learning', 'pytorch', 'rust', 'chat'],
    quickReplies: ['View Projects', 'Skills', 'Research Papers', 'Contact']
  },
  {
    id: 'volunteer',
    question: 'Tell me about your volunteer work',
    answer: `🤝 **AISM - Italian Multiple Sclerosis Association**
I'm an active volunteer with AISM, where I contribute to organizing informational events, fundraising campaigns, and awareness activities in schools and companies.

📚 **Activities I'm involved in**:
• **Informational Events**: Organization and coordination of events to raise awareness about multiple sclerosis
• **Fundraising**: Management of campaigns and initiatives to support research
• **School Outreach**: Awareness and education activities in educational institutions  
• **Corporate Partners**: Collaboration with companies for corporate social responsibility initiatives

💡 **Skills I've developed**:
Effective Communication, Teamwork, Leadership, Empathy, Organization, Adaptability

This experience has taught me the importance of empathy and inclusivity in technological design, shaping my approach to building human-centered solutions.`,
    keywords: ['volunteer', 'volunteering', 'aism', 'sclerosi', 'multiple', 'social', 'nonprofit', 'events', 'fundraising'],
    quickReplies: ['About Me', 'Skills', 'Accessibility']
  },
  {
    id: 'accessibility',
    question: 'What is your approach to accessibility?',
    answer: `♿ **Accessibility & Inclusive Design** is at the core of my development philosophy.

My volunteer experience with AISM (Italian Multiple Sclerosis Association) has deeply shaped my understanding of the importance of creating technology that works for everyone, including people with disabilities.

🎯 **My Focus Areas**:
• Building applications that improve accessibility and support individuals with disabilities
• Designing user interfaces that are intuitive and inclusive
• Implementing technologies that help people overcome challenges and gain independence
• Following WCAG guidelines and accessibility best practices

💡 **Philosophy**: I believe technology should go beyond performance metrics - it should genuinely improve people's daily lives and create equal opportunities for everyone.

This human-centered approach drives every project I work on, ensuring that solutions are not just technically excellent, but also meaningful and accessible.`,
    keywords: ['accessibility', 'inclusive', 'disability', 'wcag', 'inclusive design', 'human-centered', 'accessibility'],
    quickReplies: ['Volunteer Work', 'Projects', 'Contact']
  },
  {
    id: 'experience',
    question: 'What is your work experience?',
    answer: `I'm currently a Master's student in Software Engineering at Politecnico di Torino, where I'm building advanced expertise in software architecture, AI technologies, and system design. 

🎓 **Academic Experience**:
- Advanced software engineering principles
- Database design and optimization
- Cloud deployment and DevOps practices
- AI and machine learning applications
- Accessibility-focused design

🤝 **Volunteer Experience**: 
Active volunteer with AISM (Associazione Italiana Sclerosi Multipla), developing leadership, communication, and project management skills while contributing to meaningful social impact.

💻 **Technical Experience**:
Through my studies and personal projects, I've gained hands-on experience in full-stack development, modern web technologies, and human-centered design.

I'm actively seeking opportunities to apply my skills in innovative, impactful environments!`,
    keywords: ['experience', 'work', 'job', 'internship', 'career', 'university', 'education', 'master', 'volunteer'],
    quickReplies: ['Contact', 'Skills', 'Volunteer Work']
  },
  {
    id: 'contact',
    question: 'How can I contact you?',
    answer: `I'd love to hear from you! Here are the best ways to reach me:

📧 **Email**: dorotea.monaco@gmail.com
💼 **LinkedIn**: Connect with me for professional networking
🐙 **GitHub**: Check out my latest code and contributions
📝 **Contact Form**: Use the contact section below for project inquiries

I typically respond within 24 hours. Looking forward to connecting!`,
    keywords: ['contact', 'email', 'reach', 'connect', 'hire', 'collaborate'],
    quickReplies: ['Send Message', 'LinkedIn', 'GitHub']
  },
  {
    id: 'availability',
    question: 'Are you available for work?',
    answer: `Yes, I'm actively looking for opportunities! I'm available for:

🎯 **Internships**: Summer 2025 and beyond
💼 **Part-time roles**: While completing my studies
🚀 **Freelance projects**: Web development and consulting
🤝 **Collaborations**: Open source and personal projects

I'm particularly interested in roles involving modern web technologies, full-stack development, and innovative projects. Let's discuss how I can contribute to your team!`,
    keywords: ['available', 'hire', 'job', 'work', 'freelance', 'internship', 'opportunity'],
    quickReplies: ['Contact', 'CV Download', 'Skills']
  },
  {
    id: 'location',
    question: 'Where are you located?',
    answer: `I'm based in Turin, Italy, where I'm studying at Politecnico di Torino. I'm open to:

🏢 **Local opportunities** in Turin and surrounding areas
🌍 **Remote work** - I have experience with distributed teams
🛫 **Relocation** for the right opportunity, especially within Europe

I'm flexible and adaptable to different working arrangements!`,
    keywords: ['location', 'where', 'turin', 'italy', 'remote', 'relocate'],
    quickReplies: ['Contact', 'Availability', 'Remote Work']
  },
  {
    id: 'technologies',
    question: 'What technologies do you use?',
    answer: `I work with modern, industry-standard technologies:

🎨 **Frontend**: React, TypeScript, JavaScript, HTML5, Tailwind CSS, Vite
⚡ **Backend**: Node.js, Express, REST APIs, Python
🗄️ **Databases**: MySQL, PostgreSQL, Supabase, Redis, Prisma
🤖 **Data Science & AI**: PyTorch, TensorFlow, Pandas, NumPy, Matplotlib, Seaborn, Scikit-learn, XGBoost, LangGraph, LLM, GANs, Machine Learning, Deep Learning
🛠️ **Tools & DevOps**: Git, Docker, CI/CD, Testing, Jest, Vite
💻 **Programming Languages**: Python, JavaScript, TypeScript, C, Java, Rust, SQL, Assembly ARM
☁️ **Cloud & Deployment**: Vercel, Supabase, Docker

I stay updated with the latest trends in web development, AI technologies, and always eager to learn new tools that can improve project outcomes and user accessibility!`,
    keywords: ['technologies', 'tech', 'tools', 'framework', 'library', 'database', 'ai', 'machine learning', 'pytorch', 'tensorflow', 'xgboost', 'langgraph', 'llm', 'gan', 'prisma', 'rust'],
    quickReplies: ['View Projects', 'Skills', 'AI Experience', 'Research Papers']
  },
  {
    id: 'research-papers',
    question: 'What research papers have you worked on?',
    answer: `I've worked on academic research projects in AI/ML and software engineering:

📄 **GANs for Data Augmentation in Imbalanced Medical Image Classification** (2025)
Authors: Dorotea Monaco, Luigi Gonnella
Venue: Politecnico di Torino - Machine Learning for Visual and Multimedia Project

Systematic investigation of Generative Adversarial Networks (DCGANs and cDCGANs) for synthetic data augmentation in imbalanced medical image classification. The project evaluates multiple loss functions (Hinge, Wasserstein, BCE, MSE) to address malignant skin lesion detection in ISIC dataset. Includes hyperparameter optimization, domain adaptation analysis with DANN, and comprehensive evaluation across ResNet-50, ResNet-18, and AlexNet with both pre-trained and from-scratch training paradigms.

Tags: Machine Learning, Medical Imaging, GANs, Deep Learning, PyTorch, Domain Adaptation

📄 **Architectures for Code Development with LLMs** (2025)
Author: Dorotea Monaco
Venue: Politecnico di Torino - Large Language Models for Software Engineering Project

Comparative study of three architectural approaches for automated code generation using Large Language Models:
• Naive Baseline (one-shot generation)
• Single-Agent Pipeline (multi-step reasoning orchestrated with LangGraph)
• Multi-Agent System (collaborative system with specialized roles: Planner, Coder, and Critic)

The project implements workflow orchestration, code execution sandbox, quality metrics evaluation, and provides comprehensive performance analysis across different programming tasks using Ollama, Qwen, and DeepSeek.

Tags: Large Language Models, Software Engineering, Multi-Agent Systems, Code Generation, LangGraph, AI

Both projects demonstrate my research capabilities in AI/ML and software engineering, combining theoretical knowledge with practical implementation and rigorous evaluation.`,
    keywords: ['research', 'paper', 'papers', 'academic', 'gan', 'llm', 'medical imaging', 'code generation', 'writing'],
    quickReplies: ['View Research Papers', 'Projects', 'AI Experience', 'Contact']
  },
  {
    id: 'education',
    question: 'Tell me about your education',
    answer: `🎓 **Current Education**: 
Master's in Software Engineering at Politecnico di Torino (ongoing)

📚 **Key Areas of Study**:
• Advanced Software Engineering & Architecture
• Artificial Intelligence and Machine Learning
• Database Systems and Optimization
• Full-Stack Web Development
• Human-Computer Interaction
• System Design and Programming
• Cloud Computing and DevOps

🤝 **Complementary Experience**:
• Volunteer work with AISM developing leadership and communication skills
• Hands-on projects applying accessibility principles and inclusive design
• Continuous self-learning through technical documentation, courses, and open source contributions

My education combines technical excellence with a human-centered approach to technology development.`,
    keywords: ['education', 'university', 'degree', 'study', 'politecnico', 'torino', 'software engineering', 'master'],
    quickReplies: ['Skills', 'Volunteer Work', 'Experience']
  }
];

const defaultQuickReplies = [
  'About yourself',
  'Your skills', 
  'Your projects',
  'Contact info'
];

export const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      // Welcome message
      const welcomeMessage: Message = {
        id: '1',
        type: 'bot',
        content: `Hi there! 👋 I'm Dorotea's AI assistant. 

I can help you learn more about:
• Her background and experience
• Technical skills and expertise  
• Portfolio projects
• Contact information
• Availability for opportunities

What would you like to know?`,
        timestamp: new Date(),
        quickReplies: defaultQuickReplies
      };
      setMessages([welcomeMessage]);
    }
  }, [isOpen]);

  const findBestMatch = (userMessage: string): FAQ | null => {
    const lowercaseMessage = userMessage.toLowerCase();
    
    // Direct question match
    const directMatch = faqs.find(faq => 
      faq.question.toLowerCase().includes(lowercaseMessage) || 
      lowercaseMessage.includes(faq.question.toLowerCase())
    );
    
    if (directMatch) return directMatch;

    // Keyword matching
    const keywordMatch = faqs.find(faq =>
      faq.keywords.some(keyword => lowercaseMessage.includes(keyword))
    );

    return keywordMatch;
  };

  const handleSendMessage = async (message: string) => {
    if (!message.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: message,
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setIsTyping(true);

    // Simulate typing delay
    setTimeout(() => {
      const matchedFAQ = findBestMatch(message);
      
      let botResponse: Message;
      
      if (matchedFAQ) {
        botResponse = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: matchedFAQ.answer,
          timestamp: new Date(),
          quickReplies: matchedFAQ.quickReplies || defaultQuickReplies
        };
      } else {
        // Default response for unmatched queries
        botResponse = {
          id: (Date.now() + 1).toString(),
          type: 'bot',
          content: `I don't have specific information about that topic, but I'd be happy to help with questions about Dorotea's background, skills, projects, or experience. You can also reach out directly using the contact form below!`,
          timestamp: new Date(),
          quickReplies: [...defaultQuickReplies, 'Contact info']
        };
      }

      setMessages(prev => [...prev, botResponse]);
      setIsTyping(false);
    }, 1000 + Math.random() * 1000);
  };

  const handleQuickReply = (reply: string) => {
    handleSendMessage(reply);
  };

  const handleSpecialAction = (action: string) => {
    switch (action) {
      case 'View Projects':
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        break;
      case 'Send Message':
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
        setIsOpen(false);
        break;
      case 'CV Download':
        const link = document.createElement('a');
        link.href = '/cv.pdf';
        link.download = 'Dorotea_Monaco_CV.pdf';
        link.click();
        break;
      case 'LinkedIn':
        window.open('https://linkedin.com/in/dorotea-monaco-0a0bba24a', '_blank');
        break;
      case 'GitHub':
        window.open('https://github.com/doroteaMonaco', '_blank');
        break;
      default:
        handleSendMessage(action);
    }
  };

  return (
    <>
      {/* Floating Chat Button */}
      {!isOpen && (
        <Button
          onClick={() => setIsOpen(true)}
          className="fixed bottom-6 right-6 h-14 w-14 rounded-full shadow-lg z-50 bg-gradient-to-r from-brand to-brand-secondary hover:scale-110 transition-all duration-300 animate-pulse-glow"
          size="icon"
        >
          <MessageCircle className="h-6 w-6" />
        </Button>
      )}

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-6 right-6 w-96 h-[500px] z-50 chatbot-shadow border-2 border-brand/20 overflow-hidden backdrop-blur-sm animate-fade-in-up">
          {/* Header */}
          <CardHeader className="bg-gradient-to-r from-brand to-brand-secondary text-white p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <Bot className="h-6 w-6" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-blue-400 rounded-full animate-pulse" />
                </div>
                <div>
                  <CardTitle className="text-lg font-semibold">Dorotea's Assistant</CardTitle>
                  <p className="text-sm opacity-90">Online • Ask me anything!</p>
                </div>
              </div>
              <div className="flex space-x-1">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsMinimized(!isMinimized)}
                  className="h-8 w-8 text-white hover:bg-white/20 transition-colors"
                >
                  <ChevronDown className={`h-4 w-4 transition-transform ${isMinimized ? 'rotate-180' : ''}`} />
                </Button>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="h-8 w-8 text-white hover:bg-white/20 transition-colors"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardHeader>

          {/* Messages */}
          {!isMinimized && (
            <CardContent className="p-0 flex flex-col h-full">
              <ScrollArea className="flex-1 p-4">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                    >
                      <div
                        className={`max-w-[80%] rounded-lg p-3 ${
                          message.type === 'user'
                            ? 'bg-brand text-white'
                            : 'bg-muted'
                        }`}
                      >
                        <div className="flex items-start space-x-2">
                          {message.type === 'bot' && (
                            <Bot className="h-4 w-4 mt-0.5 text-brand" />
                          )}
                          {message.type === 'user' && (
                            <User className="h-4 w-4 mt-0.5" />
                          )}
                          <div className="flex-1">
                            <p className="text-sm whitespace-pre-line">{message.content}</p>
                            {message.quickReplies && message.type === 'bot' && (
                              <div className="mt-3 flex flex-wrap gap-2">
                                {message.quickReplies.map((reply, index) => (
                                  <Badge
                                    key={index}
                                    variant="secondary"
                                    className="cursor-pointer hover:bg-brand hover:text-white transition-colors text-xs"
                                    onClick={() => handleSpecialAction(reply)}
                                  >
                                    {reply}
                                  </Badge>
                                ))}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                  
                  {isTyping && (
                    <div className="flex justify-start">
                      <div className="bg-muted rounded-lg p-3 chatbot-bubble">
                        <div className="flex items-center space-x-3">
                          <Bot className="h-4 w-4 text-brand" />
                          <div className="flex space-x-1">
                            <div className="w-2 h-2 bg-brand rounded-full typing-animation" />
                            <div className="w-2 h-2 bg-brand rounded-full typing-animation" style={{ animationDelay: '0.2s' }} />
                            <div className="w-2 h-2 bg-brand rounded-full typing-animation" style={{ animationDelay: '0.4s' }} />
                          </div>
                          <span className="text-xs text-muted-foreground">Typing...</span>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </ScrollArea>

              {/* Input */}
              <div className="border-t p-4">
                <div className="flex space-x-2">
                  <Input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ask me anything..."
                    onKeyPress={(e) => {
                      if (e.key === 'Enter') {
                        handleSendMessage(inputValue);
                      }
                    }}
                    className="flex-1"
                  />
                  <Button
                    onClick={() => handleSendMessage(inputValue)}
                    size="icon"
                    className="bg-brand hover:bg-brand/90"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          )}
        </Card>
      )}
    </>
  );
};

export default Chatbot;
