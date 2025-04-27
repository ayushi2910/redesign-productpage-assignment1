import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { RiRobot2Line, RiGlobalLine, RiMessage3Line, RiLineChartLine } from 'react-icons/ri';
import { HiUsers, HiLockClosed, HiSparkles } from 'react-icons/hi';
import { MdOutlineLocalHospital, MdHealthAndSafety } from 'react-icons/md';

// This is a placeholder - you'd need to replace with your actual import
// import PatientSignUpPopup from '@/views/auth/PatientSignUp/Popup';

const ClaimLandingSection = () => {
  const [domainName, setDomainName] = useState('');
  const [isInView, setIsInView] = useState(false);

  // For intersection observer animation trigger
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    const section = document.querySelector('.landing-section');
    if (section) {
      observer.observe(section);
    }

    return () => {
      if (section) {
        observer.unobserve(section);
      }
    };
  }, []);

  // Features with enhanced descriptions and icons
  const features = [
    {
      icon: <RiGlobalLine className="w-7 h-7 text-[#7b68ee]" />,
      title: 'AI-Powered Website',
      description: 'Launch your professional digital presence instantly',
      delay: 0.1
    },
    {
      icon: <MdOutlineLocalHospital className="w-7 h-7 text-[#7b68ee]" />,
      title: 'Digital Healthcare Hub',
      description: 'Centralize your medical tourism operations',
      delay: 0.2
    },
    {
      icon: <RiMessage3Line className="w-7 h-7 text-[#7b68ee]" />,
      title: 'Smart Patient Interaction',
      description: 'Automated communication that feels personal',
      delay: 0.3
    },
    {
      icon: <RiLineChartLine className="w-7 h-7 text-[#7b68ee]" />,
      title: 'Revenue Optimization',
      description: 'Maximize earnings with intelligent lead conversion',
      delay: 0.4
    },
    {
      icon: <HiUsers className="w-7 h-7 text-[#7b68ee]" />,
      title: 'Lead Generation Engine',
      description: 'Turn visitors into confirmed patients seamlessly',
      delay: 0.5
    },
    {
      icon: <HiLockClosed className="w-7 h-7 text-[#7b68ee]" />,
      title: 'Always-