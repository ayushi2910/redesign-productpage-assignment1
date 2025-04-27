import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiChevronDown, FiHelpCircle } from 'react-icons/fi';

interface FAQItemProps {
  question: string;
  answer: string;
  isOpen: boolean;
  index: number;
  toggleFAQ: (index: number) => void;
}

const HomeFAQ = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredFAQs, setFilteredFAQs] = useState<Array<{question: string; answer: string}>>(faqData);

  // Animation control for smooth scrolling
  useEffect(() => {
    const scrollReveal = () => {
      const revealElements = document.querySelectorAll('.faq-reveal');
      
      const revealCallback = (entries: IntersectionObserverEntry[]) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('faq-visible');
          }
        });
      };
      
      const observer = new IntersectionObserver(revealCallback, {
        threshold: 0.1
      });
      
      revealElements.forEach(element => {
        observer.observe(element);
      });
      
      return () => {
        revealElements.forEach(element => {
          observer.unobserve(element);
        });
      };
    };
    
    scrollReveal();
  }, []);

  // Filter FAQs based on search query
  useEffect(() => {
    const filtered = faqData.filter(faq => 
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) || 
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredFAQs(filtered);
  }, [searchQuery]);

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#e8f4ff] to-[#f5f0ff] py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header with animated background */}
        <div className="relative mb-16 faq-reveal opacity-0 transition-all duration-1000">
          <div 
            className="absolute inset-0 bg-gradient-to-r from-[#7b68ee] to-[#4169e1] opacity-10 rounded-3xl"
            style={{
              clipPath: "polygon(0% 0%, 100% 0%, 100% 70%, 80% 100%, 0% 100%)"
            }}
          />
          
          <div className="relative text-center py-12 px-6">
            <FiHelpCircle className="w-16 h-16 text-[#4169e1] mx-auto mb-6" />
            <h1 className="text-4xl font-bold text-[#2a3b80] mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-lg text-[#516096] max-w-2xl mx-auto mb-8">
              Everything you need to know about our healthcare platform and services
            </p>
            <div className="h-1 w-24 bg-gradient-to-r from-[#7b68ee] to-[#4169e1] mx-auto rounded-full" />
          </div>
        </div>

        {/* Search Bar */}
        <div className="mb-12 faq-reveal opacity-0 transition-all duration-1000">
          <div className="relative max-w-lg mx-auto">
            <input
              type="text"
              placeholder="Search questions..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full px-5 py-4 pl-12 bg-white border-2 border-[#e9e3ff] rounded-full focus:outline-none focus:border-[#7b68ee] text-[#2a3b80] transition-all duration-300 shadow-md focus:shadow-lg"
            />
            <div className="absolute left-4 top-1/2 transform -translate-y-1/2">
              <svg className="w-5 h-5 text-[#7b68ee]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
          </div>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4 faq-reveal opacity-0 transition-all duration-1000">
          {filteredFAQs.length > 0 ? (
            filteredFAQs.map((faq, index) => (
              <FAQItem
                key={index}
                question={faq.question}
                answer={faq.answer}
                isOpen={activeIndex === index}
                index={index}
                toggleFAQ={toggleFAQ}
              />
            ))
          ) : (
            <div className="text-center py-10">
              <p className="text-[#516096] text-lg">No matching questions found. Try a different search term.</p>
            </div>
          )}
        </div>

        {/* Still Have Questions Section */}
        <div className="mt-16 text-center faq-reveal opacity-0 transition-all duration-1000">
          <h3 className="text-2xl font-semibold text-[#2a3b80] mb-4">
            Still have questions?
          </h3>
          <p className="text-[#516096] mb-6">
            Our support team is here to help you with any other queries
          </p>
          <button className="px-8 py-3 bg-gradient-to-r from-[#7b68ee] to-[#4169e1] text-white rounded-full hover:shadow-lg transition-all duration-300 font-medium">
            Contact Support
          </button>
        </div>
      </div>
    </div>
  );
};

const FAQItem: React.FC<FAQItemProps> = ({ question, answer, isOpen, index, toggleFAQ }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
    >
      <button
        onClick={() => toggleFAQ(index)}
        className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors hover:bg-[#f8f6ff]"
      >
        <h3 className="text-lg font-medium text-[#2a3b80]">{question}</h3>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.3 }}
          className="flex-shrink-0 ml-2"
        >
          <FiChevronDown className="w-6 h-6 text-[#4169e1]" />
        </motion.div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="px-6 py-5 border-t border-[#e9e3ff] bg-[#f8f6ff]">
              <p className="text-[#516096] leading-relaxed">{answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

// FAQ Data
const faqData = [
  {
    question: 'What is gogetwell.ai?',
    answer: 'gogetwell.ai is an AI-powered platform that revolutionizes healthcare facilitation. We combine cutting-edge artificial intelligence with a user-friendly interface to help healthcare facilitators streamline their operations, build customized websites, manage patient leads, and enhance communication for a seamless medical tourism experience.'
  },
  {
    question: 'What is the AI Front Office for Healthcare Agents?',
    answer: 'The AI Front Office is an intelligent digital assistant that transforms how healthcare facilitators operate. It efficiently manages patient leads, automates appointment booking, creates professional websites, and handles routine tasks—all powered by advanced AI technology. This allows healthcare professionals to focus on what matters most: providing exceptional patient care while growing their business.'
  },
  {
    question: 'How does the AI Agent assist me in my healthcare business?',
    answer: 'Our AI Agent functions as your dedicated virtual assistant, available 24/7 to answer patient inquiries, schedule consultations, and manage appointments in real-time. It intelligently automates administrative tasks, prioritizes leads, and streamlines communication, significantly boosting your productivity and allowing you to scale your healthcare practice without increasing overhead.'
  },
  {
    question: 'Can I customize the website for my healthcare services?',
    answer: 'Absolutely! Our platform offers complete website customization tailored specifically for healthcare providers. You can personalize every aspect—from design themes and color schemes to content layout and featured services—creating a professional digital presence that perfectly represents your brand and attracts your ideal patients. The intuitive interface makes updates simple, even without technical expertise.'
  },
  {
    question: 'How does this platform support independent healthcare facilitators?',
    answer: 'Our platform is purpose-built for independent healthcare facilitators and small teams navigating the gig economy. It integrates AI technology to automate front-office operations, streamline patient lead management, and process payments securely. This comprehensive solution allows independent practitioners to operate with the efficiency of larger organizations while maintaining the personal touch that makes their services unique.'
  },
  {
    question: 'How does the platform help me manage patient leads?',
    answer: 'Our AI-powered system revolutionizes patient lead management by automatically capturing, organizing, and prioritizing incoming inquiries. It intelligently follows up with prospects, schedules consultations, and maintains engagement throughout the patient journey. The system provides valuable analytics on conversion rates and patient acquisition channels, helping you optimize your marketing efforts and maximize every opportunity.'
  },
  {
    question: 'Is it easy to integrate the platform with the hospitals I work with?',
    answer: 'Yes, our platform features seamless integration capabilities with hospital systems and healthcare providers. The intuitive interface simplifies managing billing processes, facilitating clear communication, and maintaining productive partnerships with minimal effort. Our integration specialists can help customize connections to your specific network of healthcare partners for maximum efficiency.'
  },
  {
    question: 'Is the platform secure and compliant with healthcare regulations?',
    answer: 'Security and compliance are foundational to our platform. We implement bank-level encryption, rigorous authentication protocols, and comprehensive data protection measures that align with international healthcare regulations. Your patients sensitive information remains protected at all times, giving both you and them peace of mind while using our services.'
  },
  {
    question: 'How quickly can I get started with the platform?',
    answer: 'Getting started is remarkably fast and straightforward. Most users can set up their AI-powered front office and professional website within hours, not weeks. Our intuitive onboarding process guides you through each step, and our dedicated support team is always available to help you configure the platform to your specific needs and preferences.'
  },
  {
    question: 'What kind of customer support is available if I need help?',
    answer: 'We provide comprehensive 24/7 customer support through multiple channels including live chat, email, and phone. Our knowledge base offers detailed tutorials, video demonstrations, and practical guides. For more complex needs, our technical specialists can provide personalized assistance to ensure you maximize the platforms capabilities and resolve any issues promptly.'
  },
  {
    question: 'How does the platform help me attract more patients?',
    answer: 'Our platform boosts your patient acquisition through several powerful features: an SEO-optimized custom website that improves your digital visibility, automated patient communication that increases engagement and conversion rates, reputation management tools that showcase your expertise, and data analytics that help you refine your marketing strategy. These combined capabilities significantly expand your reach and appeal to potential patients.'
  }
];

// Add CSS for animations
const style = document.createElement('style');
style.innerHTML = `
  .faq-reveal {
    transform: translateY(30px);
    transition: all 1s ease;
  }
  
  .faq-visible {
    opacity: 1 !important;
    transform: translateY(0);
  }
`;
document.head.appendChild(style);

export default HomeFAQ;