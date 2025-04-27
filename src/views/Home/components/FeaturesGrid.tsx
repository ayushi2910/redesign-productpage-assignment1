import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { BiCreditCard, BiGlobeAlt, BiMessageSquare, BiSearch, BiTrendingUp } from 'react-icons/bi';
import { BsDatabase } from 'react-icons/bs';
import { FaUserSecret } from 'react-icons/fa';
import { FiFileText } from 'react-icons/fi';
import { LuLanguages } from 'react-icons/lu';

const solutions = [
  {
    icon: <BiGlobeAlt size={24} />,
    title: "Custom AI-Powered Website",
    description: "Intelligent, responsive websites tailored to healthcare providers with automated patient interactions.",
    category: "technology"
  },
  {
    icon: <FaUserSecret size={24} />,
    title: "Enhanced Patient Conversion",
    description: "Smart conversion optimization tools to turn visitors into patients with personalized experiences.",
    category: "business"
  },
  {
    icon: <BiMessageSquare size={24} />,
    title: "Real-Time Query Handling",
    description: "Instant response system for patient inquiries with AI-powered chat support.",
    category: "communication"
  },
  {
    icon: <FiFileText size={24} />,
    title: "Medical Report Analysis",
    description: "Advanced AI analysis of medical reports for quick and accurate patient assessments.",
    category: "medical"
  },
  {
    icon: <BiTrendingUp size={24} />,
    title: "Improved Lead Generation",
    description: "Data-driven lead generation strategies to attract and engage potential patients.",
    category: "business"
  },
  {
    icon: <BsDatabase size={24} />,
    title: "Comprehensive Healthcare Database",
    description: "Extensive medical information database for accurate patient guidance and support.",
    category: "medical"
  },
  {
    icon: <LuLanguages size={24} />,
    title: "Multilingual Support",
    description: "Breaking language barriers with comprehensive multilingual communication tools.",
    category: "communication"
  },
  {
    icon: <BiCreditCard size={24} />,
    title: "Seamless Payment Handling",
    description: "Secure and efficient payment processing for medical services globally.",
    category: "business"
  },
  {
    icon: <BiSearch size={24} />,
    title: "Marketing And SEO Support",
    description: "Optimized digital presence with advanced SEO and marketing strategies.",
    category: "technology"
  }
];

const categories = [
  { name: "all", label: "All Solutions" },
  { name: "medical", label: "Medical" },
  { name: "technology", label: "Technology" },
  { name: "business", label: "Business" },
  { name: "communication", label: "Communication" }
];

const getCategoryColor = (category) => {
  switch (category) {
    case "technology":
      return "from-emerald-300 to-teal-500";
    case "business":
      return "from-amber-300 to-orange-500";
    case "communication":
      return "from-fuchsia-300 to-purple-500";
    case "medical":
      return "from-sky-300 to-blue-500";
    default:
      return "from-gray-300 to-gray-500";
  }
};

const FeaturesGrid: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const filteredSolutions = activeCategory === "all" 
    ? solutions 
    : solutions.filter(solution => solution.category === activeCategory);

  return (
    <section className="py-24 px-4 md:px-8 relative overflow-hidden">
      {/* Abstract backgrounds */}
      <div className="absolute inset-0 -z-10 bg-[#111439]/5"></div>
      <div className="absolute top-0 left-0 w-full h-full -z-10">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 rounded-full bg-teal-100 opacity-30 blur-3xl"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 rounded-full bg-purple-100 opacity-30 blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          <span className="px-4 py-1.5 bg-[#111439] text-white text-sm rounded-full font-poppins">SOLUTIONS</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-6 mb-4 text-[#111439] font-poppins">
            Innovative Healthcare Technology
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto font-poppins">
            Discover our range of AI-powered solutions designed specifically for healthcare providers
          </p>
        </motion.div>

        {/* Category filter tabs */}
        <motion.div 
          className="mb-12 flex flex-wrap justify-center gap-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <button
              key={category.name}
              onClick={() => setActiveCategory(category.name)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 font-poppins
                ${activeCategory === category.name 
                  ? 'bg-[#111439] text-white shadow-lg' 
                  : 'bg-white/80 hover:bg-white text-gray-600 border border-gray-200'}`}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        {/* Hexagonal grid layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1
              }
            }
          }}
        >
          {filteredSolutions.map((solution, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: {
                  opacity: 1,
                  y: 0,
                  transition: { duration: 0.5 }
                }
              }}
              onMouseEnter={() => setHoveredCard(index)}
              onMouseLeave={() => setHoveredCard(null)}
              className="relative group"
            >
              <div className="relative bg-white/90 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg border border-white transition-all duration-500 h-full
                group-hover:shadow-xl group-hover:translate-y-[-5px]">
                
                {/* Hexagonal feature icon */}
                <div className="absolute -right-8 -top-8 overflow-hidden">
                  <div className={`bg-gradient-to-br ${getCategoryColor(solution.category)} 
                    shadow-lg w-24 h-24 rotate-45 flex items-center justify-center opacity-90
                    group-hover:opacity-100 transition-all duration-500`}>
                    <div className="-rotate-45 text-white">
                      {solution.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-8 pt-12">
                  <div className="mb-8 h-1 w-12 bg-gradient-to-r from-teal-400 to-purple-500 rounded-full"></div>
                  
                  <h3 className="text-xl font-semibold text-[#111439] mb-4 pr-12 font-poppins">
                    {solution.title}
                  </h3>
                  
                  <p className={`text-gray-600 font-poppins transition-all duration-500 ${hoveredCard === index ? 'line-clamp-none' : 'line-clamp-3'}`}>
                    {solution.description}
                  </p>
                  
                  <div className={`mt-6 flex items-center text-sm font-medium text-teal-600 
                    transition-all duration-300 ${hoveredCard === index ? 'opacity-100' : 'opacity-0'} cursor-pointer font-poppins`}>
                    <span>Explore solution</span>
                    <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
                
                {/* Category tag */}
                <div className="absolute bottom-4 right-4">
                  <span className="text-xs font-medium py-1 px-2 rounded-full bg-gray-100 text-gray-600 capitalize font-poppins">
                    {solution.category}
                  </span>
                </div>
              </div>

              {/* Animated connector lines between cards (only visible on larger screens) */}
              {index < filteredSolutions.length - 1 && (index + 1) % 3 !== 0 && (
                <div className="hidden lg:block absolute top-1/2 -right-4 w-8 h-px bg-gradient-to-r from-teal-400 to-transparent"></div>
              )}
            </motion.div>
          ))}
        </motion.div>

        {/* View all solutions button */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          viewport={{ once: true }}
        >
          <button className="group relative inline-flex items-center justify-center px-8 py-3 bg-[#111439] text-white text-base font-medium rounded-full overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 font-poppins">
            <span className="relative z-10">View All Solutions</span>
            <span className="absolute inset-0 bg-gradient-to-r from-teal-500 to-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturesGrid;