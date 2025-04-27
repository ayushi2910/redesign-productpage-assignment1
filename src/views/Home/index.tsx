import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import HeroSection from "./components/HeroSection";
import HomeFAQs from './components/HomeFAQ';
import ContactForm from './components/ContactForm';
import MainFooter from "./components/MainFooter";
import InfoSection from './components/InfoSection';
import FeaturesGrid from "./components/FeaturesGrid";
import Testimonial from "./components/Testimonial";


const Home = () => {
	return (
	  <motion.div
		initial={{ opacity: 0 }}
		animate={{ opacity: 1 }}
		transition={{ duration: 0.5 }}
		className="font-poppins bg-gray-50 text-gray-900"
	  >
		
		<HeroSection />
		<FeaturesGrid />
		<InfoSection />
		<HomeFAQs />
		<Testimonial />
		<ContactForm />
		<MainFooter />
	  </motion.div>
	);
  };
  
  export default Home;