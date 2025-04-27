import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaArrowRight, FaCheck } from 'react-icons/fa';
import { HiOutlineChevronDown } from 'react-icons/hi';
import smallBG from '@/assets/images/main-bg-small.png';
import { Button } from '@/components/ui';
import HomeNavbar from '@/components/shared/HomeNav';
import HcfSignupPopup from '@/components/shared/Popups/HcfSignupPopup';

// Import fonts in your main CSS file or index.html:
// @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

interface HeroSectionProps {
    scrollToSection: (ref: React.RefObject<HTMLElement>) => void;
    featuresRef: React.RefObject<HTMLElement>;
    contactRef: React.RefObject<HTMLElement>;
    aboutRef: React.RefObject<HTMLElement>;
}

const HeroSection: React.FC<HeroSectionProps> = ({
    scrollToSection,
    featuresRef,
    contactRef,
    aboutRef,
}) => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        setIsVisible(true);
    }, []);

    const scrollToFeatures = () => {
        scrollToSection(featuresRef);
    };

    // Animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.5,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { duration: 0.5 }
        }
    };

    const statVariants = {
        hidden: { scale: 0.8, opacity: 0 },
        visible: { 
            scale: 1, 
            opacity: 1,
            transition: { type: "spring", stiffness: 100 }
        }
    };

    return (
        <div className="w-full relative flex flex-col py-2 md:py-5 overflow-hidden font-[Poppins]" 
            style={{ 
                background: 'linear-gradient(135deg, #111439 0%, #0a0c26 100%)',
                fontFamily: 'Poppins, sans-serif'
            }}>
            <HomeNavbar
                scrollToSection={scrollToSection}
                featuresRef={featuresRef}
                contactRef={contactRef}
                aboutRef={aboutRef}
            />

            {/* Hero Section */}
            <div className='min-h-[90vh] flex items-center relative'>
                {/* Background particles effect (CSS) */}
                <div className="stars-container absolute inset-0 z-0 overflow-hidden">
                    <div className="stars"></div>
                    <div className="stars2"></div>
                    <div className="stars3"></div>
                </div>
                
                {/* Background image for mobile */}
                <img
                    src={smallBG}
                    alt="background_image"
                    className="md:hidden h-full w-full object-cover absolute top-0 left-0 z-[-1] opacity-20"
                />

                {/* Gradient overlay */}
                <div 
                    className="absolute top-0 left-0 w-full h-full z-[-1]"
                    style={{
                        background: 'linear-gradient(135deg, rgba(17, 20, 57, 0.9) 0%, rgba(2, 6, 36, 0.95) 100%)'
                    }}
                ></div>

                <motion.div 
                    className="relative z-10 text-white w-full flex flex-col lg:flex-row items-center justify-between px-4 max-w-[1400px] mx-auto"
                    variants={containerVariants}
                    initial="hidden"
                    animate={isVisible ? "visible" : "hidden"}
                >
                    {/* Content Section */}
                    <motion.div 
                        className="lg:w-1/2 lg:pr-12 text-center lg:text-left"
                        variants={itemVariants}
                    >
                        <motion.h1 
                            className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 tracking-tight"
                            variants={itemVariants}
                        >
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-indigo-500">
                                AI Front Office
                            </span> <br />
                            for Healthcare Agents
                        </motion.h1>
                        
                        <motion.p 
                            className="text-lg md:text-xl font-light text-white/90 mb-8 leading-relaxed"
                            variants={itemVariants}
                        >
                            Revolutionize your healthcare business with AI-powered solutions that automate patient engagement and streamline operations.
                        </motion.p>

                        <motion.div 
                            className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-10"
                            variants={itemVariants}
                        >
                            <HcfSignupPopup 
                                popupButtonStatus 
                                buttonChildren={
                                    <Button 
                                        block 
                                        variant='solid' 
                                        className='rounded-full py-3 px-8 text-md font-medium transition-all shadow-lg hover:shadow-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 flex items-center justify-center gap-2 min-w-[180px]'
                                    >
                                        Get Started <FaArrowRight className="ml-1" />
                                    </Button>
                                } 
                            />
                            
                            <Button 
                                className='rounded-full py-3 px-8 text-md font-medium border-2 border-blue-400 text-white hover:bg-blue-500/10 transition-all flex items-center justify-center min-w-[180px]'
                                onClick={scrollToFeatures}
                            >
                                See Features
                            </Button>
                        </motion.div>

                        <motion.div 
                            className="flex flex-row flex-wrap justify-center lg:justify-start gap-2 mb-8"
                            variants={itemVariants}
                        >
                            <div className="flex items-center text-sm text-white/80 mr-4">
                                <FaCheck className="text-blue-400 mr-2" /> 2-minute setup
                            </div>
                            <div className="flex items-center text-sm text-white/80 mr-4">
                                <FaCheck className="text-blue-400 mr-2" /> HIPAA compliant
                            </div>
                            <div className="flex items-center text-sm text-white/80">
                                <FaCheck className="text-blue-400 mr-2" /> No coding required
                            </div>
                        </motion.div>
                    </motion.div>

                    {/* 3D/Glass Effect Card */}
                    <motion.div 
                        className="lg:w-1/2 mt-10 lg:mt-0"
                        variants={itemVariants}
                    >
                        <div className="relative mx-auto max-w-md">
                            {/* Glass card effect */}
                            <div className="rounded-2xl backdrop-blur-xl bg-white/10 p-6 shadow-2xl border border-white/20 transform perspective-1000 hover:rotate-y-3 hover:rotate-x-3 transition-transform duration-500">
                                <div className="space-y-6">
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-semibold text-white">AI Virtual Receptionist</h3>
                                            <p className="text-white/70">Handles patient inquiries 24/7</p>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                    
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-semibold text-white">Automated Scheduling</h3>
                                            <p className="text-white/70">Seamless appointment booking</p>
                                        </div>
                                    </div>
                                    
                                    <div className="h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
                                    
                                    <div className="flex items-center">
                                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-400 to-indigo-500 flex items-center justify-center">
                                            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                                            </svg>
                                        </div>
                                        <div className="ml-4">
                                            <h3 className="text-xl font-semibold text-white">Analytics Dashboard</h3>
                                            <p className="text-white/70">Real-time business insights</p>
                                        </div>
                                    </div>
                                </div>
                                
                                <div className="mt-8 text-center">
                                    <HcfSignupPopup 
                                        popupButtonStatus 
                                        buttonChildren={
                                            <button className="py-2 px-6 rounded-full bg-white text-indigo-800 font-medium hover:bg-white/90 transition-all">
                                                Create Your AI Store Now
                                            </button>
                                        } 
                                    />
                                </div>
                            </div>
                            
                            {/* Decorative elements */}
                            <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full blur-2xl opacity-20"></div>
                            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full blur-3xl opacity-20"></div>
                        </div>
                    </motion.div>
                </motion.div>

                {/* Stats Section */}
                <div className="absolute bottom-10 left-0 right-0 w-full z-10">
                    <motion.div 
                        className="flex flex-wrap justify-center gap-8 md:gap-16 max-w-[1400px] mx-auto px-4"
                        initial="hidden"
                        animate={isVisible ? "visible" : "hidden"}
                        variants={containerVariants}
                    >
                        <motion.div variants={statVariants} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">
                                2,100<span className="text-blue-400 ml-1">+</span>
                            </div>
                            <p className="text-white/80 font-light">Qualified Doctors</p>
                        </motion.div>
                        
                        <motion.div variants={statVariants} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">
                                1,000<span className="text-blue-400 ml-1">+</span>
                            </div>
                            <p className="text-white/80 font-light">Partner Hospitals</p>
                        </motion.div>
                        
                        <motion.div variants={statVariants} className="text-center">
                            <div className="text-3xl md:text-4xl font-bold text-white">
                                800<span className="text-blue-400 ml-1">+</span>
                            </div>
                            <p className="text-white/80 font-light">Treatment Plans</p>
                        </motion.div>
                    </motion.div>
                </div>

                {/* Scroll down indicator */}
                <motion.div 
                    className="absolute bottom-5 left-1/2 transform -translate-x-1/2 cursor-pointer z-20"
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                    onClick={scrollToFeatures}
                >
                    <HiOutlineChevronDown className="text-white/80 text-3xl" />
                </motion.div>
            </div>
        </div>
    );
};

export default HeroSection;