import React, { useEffect, useState } from 'react';
import { FaQuoteLeft, FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

// Sample testimonial data - replace with your actual data
const testimonialData = [
  {
    id: 1,
    name: "Sarah Johnson",
    role: "Marketing Director",
    company: "TechFlow Inc.",
    image: "/api/placeholder/80/80",
    text: "The platform transformed our customer engagement strategy. We've seen a 40% increase in retention rates since implementation.",
    rating: 5,
  },
  {
    id: 2,
    name: "David Chen",
    role: "Chief Medical Officer",
    company: "HealthSync",
    image: "/api/placeholder/80/80",
    text: "Integrating this solution into our patient care workflow has streamlined our operations and improved patient outcomes significantly.",
    rating: 5,
  },
  {
    id: 3,
    name: "Michelle Rodriguez",
    role: "Head of Operations",
    company: "Vitality Health",
    image: "/api/placeholder/80/80",
    text: "The intuitive interface and powerful analytics have made a tremendous difference in how we deliver care. Highly recommended!",
    rating: 4,
  },
];

const TestimonialSection: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const [isAutoplay, setIsAutoplay] = useState(true);
  
  // Handle autoplay functionality
  useEffect(() => {
    if (!isAutoplay) return;
    
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonialData.length);
    }, 5000);
    
    return () => clearInterval(interval);
  }, [isAutoplay]);
  
  const nextTestimonial = () => {
    setIsAutoplay(false);
    setCurrent((prev) => (prev + 1) % testimonialData.length);
  };
  
  const prevTestimonial = () => {
    setIsAutoplay(false);
    setCurrent((prev) => (prev - 1 + testimonialData.length) % testimonialData.length);
  };
  
  // Generate star rating
  const renderStars = (rating: number) => {
    return Array(5).fill(0).map((_, i) => (
      <svg key={i} className={`w-5 h-5 ${i < rating ? 'text-yellow-400' : 'text-gray-300'}`} 
        fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
      </svg>
    ));
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-indigo-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-poppins">
            What Our Clients Say
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-400 to-indigo-600 mx-auto"></div>
          <p className="mt-6 text-lg text-gray-600 max-w-2xl mx-auto font-poppins">
            Discover how we've helped healthcare providers transform their patient care experience
          </p>
        </div>
        
        {/* Main testimonial showcase */}
        <div className="relative">
          <div className="relative h-full overflow-hidden">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="w-full"
              >
                <div className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 rounded-2xl shadow-xl p-8 md:p-12 border border-white border-opacity-20">
                  <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
                    {/* Testimonial profile */}
                    <div className="flex flex-col items-center">
                      <div className="relative">
                        <div className="absolute inset-0 bg-gradient-to-br from-blue-400 to-indigo-600 rounded-full transform -rotate-6 scale-105"></div>
                        <img 
                          src={testimonialData[current].image} 
                          alt={testimonialData[current].name} 
                          className="w-20 h-20 object-cover rounded-full relative z-10 border-4 border-white"
                        />
                      </div>
                      <div className="mt-4 text-center">
                        <h4 className="font-bold text-gray-900 text-lg font-poppins">{testimonialData[current].name}</h4>
                        <p className="text-sm text-gray-600 font-poppins">{testimonialData[current].role}</p>
                        <p className="text-sm font-medium text-indigo-600 font-poppins">{testimonialData[current].company}</p>
                        <div className="flex justify-center mt-2">
                          {renderStars(testimonialData[current].rating)}
                        </div>
                      </div>
                    </div>
                    
                    {/* Testimonial content */}
                    <div className="flex-1">
                      <div className="relative">
                        <FaQuoteLeft className="text-indigo-200 text-4xl absolute -top-4 -left-2" />
                        <p className="text-gray-700 text-lg leading-relaxed pl-8 pr-4 italic font-poppins">
                          {testimonialData[current].text}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
          
          {/* Navigation buttons */}
          <div className="flex justify-center mt-8 gap-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 rounded-full p-3 text-indigo-600 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
              aria-label="Previous testimonial"
            >
              <FaChevronLeft />
            </button>
            
            {/* Indicators */}
            <div className="flex items-center gap-2">
              {testimonialData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoplay(false);
                    setCurrent(index);
                  }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 focus:outline-none ${
                    current === index ? 'bg-indigo-600 w-6' : 'bg-indigo-200 hover:bg-indigo-400'
                  }`}
                  aria-label={`Go to testimonial ${index + 1}`}
                />
              ))}
            </div>
            
            <button 
              onClick={nextTestimonial}
              className="bg-white backdrop-filter backdrop-blur-lg bg-opacity-80 rounded-full p-3 text-indigo-600 shadow-md hover:shadow-lg transition-all duration-300 hover:bg-indigo-50 focus:outline-none focus:ring-2 focus:ring-indigo-400 focus:ring-opacity-50"
              aria-label="Next testimonial"
            >
              <FaChevronRight />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

// CSS to be included in your global styles or component
const GlobalStyles = () => (
  <style jsx global>{`
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
    
    .font-poppins {
      font-family: 'Poppins', sans-serif;
    }
  `}</style>
);

export default function TestimonialsWithStyles() {
  return (
    <>
      <GlobalStyles />
      <TestimonialSection />
    </>
  );
}