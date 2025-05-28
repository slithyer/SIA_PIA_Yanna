import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Twitter } from 'lucide-react';
import Button from '../ui/Button';
import TypewriterText from '../ui/TypewriterText';
import { personalInfo } from '../../data/personalInfo';

const Hero: React.FC = () => {
  const [typingComplete, setTypingComplete] = useState(false);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3,
      },
    },
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5 },
    },
  };

  const scrollToNextSection = () => {
    const aboutSection = document.querySelector('#about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen relative flex items-center">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-secondary-50 dark:from-gray-900 dark:to-gray-800 -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden -z-5">
        <div className="absolute top-1/4 right-1/4 w-64 h-64 bg-accent-400 rounded-full opacity-10 animate-pulse-slow" />
        <div className="absolute bottom-1/3 left-1/5 w-96 h-96 bg-primary-400 rounded-full opacity-10 animate-pulse-slow" />
      </div>
      
      <div className="container mx-auto px-4 py-16 md:py-24 lg:py-32">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <motion.div 
            className="md:w-1/2 mb-12 md:mb-0"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              <span className="block">Hello, I'm</span>
              <span className="text-primary-600 dark:text-primary-400">{personalInfo.name}</span>
            </motion.h1>
            
            <motion.div variants={itemVariants} className="mb-6">
              <TypewriterText
                text={personalInfo.title}
                speed={80}
                className="text-xl md:text-2xl text-gray-700 dark:text-gray-300"
                onComplete={() => setTypingComplete(true)}
              />
            </motion.div>
            
            <motion.p 
              className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-xl"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={typingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
            >
              {personalInfo.bio}
            </motion.p>
            
            <motion.div 
              className="flex space-x-4"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={typingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <Button onClick={scrollToNextSection}>View My Work</Button>
              <Button variant="outline" onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}>
                Contact Me
              </Button>
            </motion.div>
            
            <motion.div 
              className="flex mt-8 space-x-6"
              variants={itemVariants}
              initial={{ opacity: 0, y: 20 }}
              animate={typingComplete ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              <a 
                href={personalInfo.socials.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="GitHub"
              >
                <Github size={24} />
              </a>
              <a 
                href={personalInfo.socials.linkedin} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a 
                href={personalInfo.socials.twitter} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-600 dark:text-gray-400 dark:hover:text-primary-400 transition-colors"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="md:w-2/5"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-tr from-primary-500 to-secondary-500 rounded-full opacity-20 blur-xl animate-pulse-slow" />
              <img 
                src={personalInfo.profileImage} 
                alt={personalInfo.name} 
                className="relative rounded-full w-64 h-64 md:w-80 md:h-80 object-cover mx-auto border-4 border-white dark:border-gray-800"
              />
            </div>
          </motion.div>
        </div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2 cursor-pointer"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ 
            duration: 0.5, 
            delay: 1,
            repeat: Infinity,
            repeatType: "reverse",
            repeatDelay: 0.5
          }}
          onClick={scrollToNextSection}
        >
          <ArrowDown className="text-gray-600 dark:text-gray-400" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;