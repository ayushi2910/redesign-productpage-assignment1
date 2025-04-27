import { useState } from 'react';
import { motion } from 'framer-motion';
import { toast } from '@/components/ui';
import { FiUser, FiMail, FiSend, FiMapPin, FiPhone } from 'react-icons/fi';
import { FaTwitter, FaLinkedinIn } from 'react-icons/fa';

const ContactForm = () => {
  const [formState, setFormState] = useState({
    fullname: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [activeField, setActiveField] = useState('');

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: 'spring', stiffness: 100 }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsSubmitting(true);
      // Simulating API call
      await new Promise(resolve => setTimeout(resolve, 1000));
      // await apiContactUs(formState)
      setIsSubmitting(false);
      toast.success('Message sent successfully!');
      setFormState({
        fullname: '',
        email: '',
        message: ''
      });
    } catch (err) {
      setIsSubmitting(false);
      toast.error('Failed to send message. Please try again.');
    }
  };

  const handleChange = (e) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-50 to-purple-50 py-16 px-4 sm:px-6 lg:px-8">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 opacity-30">
        <div className="absolute top-0 left-0 w-64 h-64 rounded-full bg-blue-200 blur-3xl" />
        <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-purple-100 blur-3xl" />
      </div>
      
      <motion.div 
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="relative z-10 max-w-7xl mx-auto"
      >
        {/* Section header */}
        <motion.div 
          variants={itemVariants}
          className="text-center mb-16"
        >
          <h2 className="text-5xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            Get in Touch
          </h2>
          <p className="mt-4 text-gray-700 max-w-lg mx-auto text-lg">
            Have questions or ideas? We'd love to hear from you. Reach out and let's start a conversation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Form - Left section on desktop */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-7 order-2 lg:order-1"
          >
            <div className="bg-white backdrop-filter backdrop-blur-sm bg-opacity-80 rounded-3xl shadow-xl overflow-hidden">
              <form onSubmit={handleSubmit}>
                <div className="p-8">
                  <h3 className="text-2xl font-semibold text-blue-900 mb-6">Send us a message</h3>
                  
                  <div className="space-y-5">
                    {/* Name input */}
                    <div className="relative">
                      <motion.div 
                        initial={{ scale: 1 }}
                        animate={{ 
                          scale: activeField === 'fullname' ? 1.1 : 1,
                          color: activeField === 'fullname' ? '#2563EB' : '#9CA3AF'
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2"
                      >
                        <FiUser className="w-5 h-5" />
                      </motion.div>
                      <input
                        type="text"
                        name="fullname"
                        placeholder="Your Name"
                        value={formState.fullname}
                        onChange={handleChange}
                        onFocus={() => setActiveField('fullname')}
                        onBlur={() => setActiveField('')}
                        className="w-full pl-12 pr-4 py-4 bg-blue-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-300"
                        required
                      />
                    </div>
                    
                    {/* Email input */}
                    <div className="relative">
                      <motion.div 
                        initial={{ scale: 1 }}
                        animate={{ 
                          scale: activeField === 'email' ? 1.1 : 1,
                          color: activeField === 'email' ? '#2563EB' : '#9CA3AF'
                        }}
                        className="absolute left-4 top-1/2 -translate-y-1/2"
                      >
                        <FiMail className="w-5 h-5" />
                      </motion.div>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formState.email}
                        onChange={handleChange}
                        onFocus={() => setActiveField('email')}
                        onBlur={() => setActiveField('')}
                        className="w-full pl-12 pr-4 py-4 bg-blue-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-300"
                        required
                      />
                    </div>
                    
                    {/* Message textarea */}
                    <div>
                      <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formState.message}
                        onChange={handleChange}
                        onFocus={() => setActiveField('message')}
                        onBlur={() => setActiveField('')}
                        rows={5}
                        className="w-full p-4 bg-blue-50 border-2 border-transparent rounded-xl focus:outline-none focus:border-blue-400 focus:bg-white transition-all duration-300"
                        required
                      />
                    </div>
                    
                    {/* Submit button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full flex items-center justify-center bg-gradient-to-r from-blue-700 to-blue-500 hover:from-blue-800 hover:to-blue-600 text-white py-4 px-6 rounded-xl font-medium shadow-lg hover:shadow-xl transition-all duration-300"
                    >
                      {isSubmitting ? (
                        <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <>
                          <span>Send Message</span>
                          <FiSend className="ml-2 w-5 h-5" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Contact Info - Right section on desktop */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-5 order-1 lg:order-2"
          >
            <div className="bg-gradient-to-br from-blue-700 to-blue-500 text-white p-8 rounded-3xl shadow-xl h-full flex flex-col justify-between">
              <div>
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <p className="text-blue-100 mb-8">
                  Reach out to us for assistance or to learn more about how we can help you achieve your health and wellness goals.
                </p>
                
                <div className="space-y-6">
                  {/* Phone */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                      <FiPhone className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Phone</p>
                      <a href="tel:+919811396858" className="text-white hover:underline transition-all">
                        +91 9811396858
                      </a>
                    </div>
                  </div>
                  
                  {/* Email */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                      <FiMail className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Email</p>
                      <a href="mailto:hello@gogetwell.ai" className="text-white hover:underline transition-all">
                        hello@gogetwell.ai
                      </a>
                    </div>
                  </div>
                  
                  {/* Location */}
                  <div className="flex items-start space-x-4">
                    <div className="bg-white/20 p-3 rounded-lg backdrop-blur-sm">
                      <FiMapPin className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-blue-100 text-sm">Location</p>
                      <p className="text-white">
                        Bengaluru, India
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Social links */}
              <div className="mt-12">
                <p className="font-medium mb-4">Connect with us</p>
                <div className="flex space-x-4">
                  <motion.a 
                    href="https://x.com/gogetwellai" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    className="bg-white/20 p-3 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all"
                  >
                    <FaTwitter className="w-5 h-5" />
                  </motion.a>
                  <motion.a 
                    href="https://www.linkedin.com/company/gogetwellai/" 
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.3)' }}
                    className="bg-white/20 p-3 rounded-lg backdrop-blur-sm hover:bg-white/30 transition-all"
                  >
                    <FaLinkedinIn className="w-5 h-5" />
                  </motion.a>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
};

export default ContactForm;