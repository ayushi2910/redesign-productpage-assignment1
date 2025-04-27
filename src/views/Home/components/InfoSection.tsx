import React from 'react';
import { motion } from 'framer-motion';
import { 
  FaSearch, 
  FaCalendarAlt, 
  FaVideo, 
  FaClipboardCheck
} from 'react-icons/fa';

interface StepProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  stepNumber: number;
}

const Step: React.FC<StepProps> = ({ icon, title, description, stepNumber }) => {
  return (
    <div className="flex items-start md:items-center mb-12 md:mb-0">
      {/* Step number and icon */}
      <div className="relative">
        <div className="bg-indigo-600 rounded-full w-12 h-12 flex items-center justify-center text-white text-xl font-semibold">
          {stepNumber}
        </div>
        <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-3">
          <div className="bg-white rounded-full w-10 h-10 flex items-center justify-center text-indigo-600 shadow-md">
            {icon}
          </div>
        </div>
      </div>
      
      {/* Step content */}
      <div className="ml-6">
        <h3 className="font-poppins font-semibold text-xl text-gray-800 mb-2">{title}</h3>
        <p className="font-poppins text-gray-600">{description}</p>
      </div>
    </div>
  );
};

const InfoSection: React.FC = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  // Steps data
  const steps = [
    {
      icon: <FaSearch />,
      title: 'Find Specialists',
      description: 'Search for doctors based on specialization, location, and availability. Filter by ratings and experience.',
      stepNumber: 1
    },
    {
      icon: <FaCalendarAlt />,
      title: 'Book Appointment',
      description: 'Select your preferred date and time slot. Receive instant confirmation and reminders.',
      stepNumber: 2
    },
    {
      icon: <FaVideo />,
      title: 'Virtual Consultation',
      description: 'Connect with your doctor through our secure video platform or visit in person.',
      stepNumber: 3
    },
    {
      icon: <FaClipboardCheck />,
      title: 'Follow-up Care',
      description: 'Access prescriptions and follow-up instructions. Schedule follow-up appointments if needed.',
      stepNumber: 4
    }
  ];

  return (
    <div className="container mx-auto px-4">
      {/* Section header */}
      <motion.div 
        className="text-center mb-16"
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        
        <h2 className="font-poppins font-bold text-3xl md:text-4xl text-gray-800 mb-4">
          How It Works
        </h2>
        <p className="font-poppins text-lg text-gray-600 max-w-2xl mx-auto">
          Get quality healthcare in four simple steps through our streamlined platform.
        </p>
      </motion.div>

      {/* Process steps */}
      <motion.div 
        className="relative"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
      >
        {/* Connection line */}
        <div className="hidden md:block absolute top-6 left-0 right-0 h-1 bg-gray-200 z-0">
          <div className="absolute left-0 top-0 h-full bg-indigo-600 w-1/4 transition-all duration-500"></div>
        </div>

        {/* Steps */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-y-12 gap-x-8 relative z-10">
          {steps.map((step, index) => (
            <motion.div 
              key={index} 
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <Step 
                icon={step.icon} 
                title={step.title} 
                description={step.description} 
                stepNumber={step.stepNumber} 
              />
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Call to action */}
      <motion.div 
        className="text-center mt-16"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <motion.button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-poppins font-medium px-8 py-3 rounded-lg inline-flex items-center"
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          Get Started Now
        </motion.button>
      </motion.div>
    </div>
  );
};

export default InfoSection;