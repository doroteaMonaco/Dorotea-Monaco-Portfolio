import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Clock, MessageCircle, Mail, Linkedin } from "lucide-react";

export const ContactEnhancements = () => {
  const contactFAQ = [
    {
      question: "What types of projects are you interested in?",
      answer: "I'm particularly interested in full-stack web applications, AI/ML projects (especially in healthcare), and accessibility-focused solutions. I'm passionate about projects that have a positive social impact."
    },
    {
      question: "What's your typical response time?",
      answer: "I typically respond within 24-48 hours. For urgent matters, feel free to connect with me on LinkedIn for a faster response."
    },
    {
      question: "Are you available for freelance work?",
      answer: "Yes! I'm available for freelance projects, especially those involving React, TypeScript, Node.js, or Python/AI-ML. I can commit 10-20 hours per week during my studies."
    },
    {
      question: "Do you work on open source projects?",
      answer: "Absolutely! I'm always interested in contributing to meaningful open source projects, especially in the healthcare tech and accessibility domains."
    },
    {
      question: "What's your preferred way to communicate?",
      answer: "For detailed project inquiries, email works best. For quick questions or networking, LinkedIn is great. I'm also available on WhatsApp for ongoing project discussions."
    },
    {
      question: "Can you help with AI/ML consulting?",
      answer: "Yes! I have experience with PyTorch, TensorFlow, GANs, and LLMs. I can help with model development, data augmentation strategies, and AI system architecture."
    }
  ];

  const communicationPreferences = [
    {
      icon: <Mail className="w-5 h-5" />,
      method: "Email",
      use: "Detailed project inquiries",
      response: "24-48 hours",
      preferred: true
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      method: "LinkedIn",
      use: "Professional networking",
      response: "12-24 hours",
      preferred: false
    },
    {
      icon: <MessageCircle className="w-5 h-5" />,
      method: "WhatsApp",
      use: "Ongoing project discussions",
      response: "1-6 hours",
      preferred: false
    }
  ];

  return (
    <div className="space-y-8 mb-12">
      {/* Communication Preferences */}
      <div className="glass-floating rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
          <Clock className="w-5 h-5 text-brand" />
          Communication Preferences
        </h3>
        <div className="space-y-3">
          {communicationPreferences.map((pref, index) => (
            <div 
              key={index}
              className={`flex items-start gap-3 p-3 rounded-lg transition-colors ${
                pref.preferred ? 'bg-brand/5 border border-brand/20' : 'hover:bg-accent/5'
              }`}
            >
              <div className={`w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 ${
                pref.preferred ? 'bg-brand text-white' : 'bg-accent text-accent-foreground'
              }`}>
                {pref.icon}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <p className="font-semibold">{pref.method}</p>
                  {pref.preferred && (
                    <Badge className="bg-brand text-white text-xs">Preferred</Badge>
                  )}
                </div>
                <p className="text-sm text-muted-foreground">{pref.use}</p>
                <p className="text-xs text-brand mt-1">Response time: {pref.response}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ */}
      <div className="glass-floating rounded-2xl p-6">
        <h3 className="text-xl font-bold mb-4">Frequently Asked Questions</h3>
        <Accordion type="single" collapsible className="w-full">
          {contactFAQ.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left hover:text-brand transition-colors">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>

      {/* Social Proof */}
      <div className="glass-floating rounded-2xl p-6 text-center">
        <div className="grid grid-cols-3 gap-4">
          <div>
            <div className="text-2xl font-bold text-gradient">10+</div>
            <div className="text-xs text-muted-foreground">Projects Completed</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gradient">95%</div>
            <div className="text-xs text-muted-foreground">Response Rate</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-gradient">24h</div>
            <div className="text-xs text-muted-foreground">Avg Response Time</div>
          </div>
        </div>
      </div>
    </div>
  );
};
