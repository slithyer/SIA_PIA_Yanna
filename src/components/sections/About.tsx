import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionHeading from '../ui/SectionHeading';
import { personalInfo } from '../../data/personalInfo';
import { MapPin, Mail, Briefcase } from 'lucide-react';

const About: React.FC = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="About Me"
          subtitle="Get to know more about who I am and what drives me"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={containerVariants}
            className="space-y-6"
          >
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <MapPin className="text-primary-500" />
              <span className="text-gray-700 dark:text-gray-300">{personalInfo.location}</span>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <Mail className="text-primary-500" />
              <a href={`mailto:${personalInfo.email}`} className="text-gray-700 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400">
                {personalInfo.email}
              </a>
            </motion.div>
            
            <motion.div variants={itemVariants} className="flex items-center space-x-3">
              <Briefcase className="text-primary-500" />
              <span className="text-gray-700 dark:text-gray-300">{personalInfo.title}</span>
            </motion.div>
            
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 mt-6 leading-relaxed">
              I'm a dedicated professional with a passion for creating digital experiences that are both beautiful and functional. My journey in technology began with a curiosity about how things work, which evolved into a career focused on building innovative solutions.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 leading-relaxed">
              Whether I'm coding a complex application or designing an intuitive interface, I bring a problem-solving mindset and attention to detail to every project. I believe in continuous learning and staying updated with emerging technologies to deliver the best possible solutions.
            </motion.p>
            
            <motion.p variants={itemVariants} className="text-gray-600 dark:text-gray-400 leading-relaxed">
              When I'm not in front of a computer, you'll find me exploring nature trails, experimenting with new recipes, or immersing myself in a good book. These diverse interests help fuel my creativity and bring fresh perspectives to my work.
            </motion.p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="absolute -inset-4 bg-gradient-to-tr from-accent-500 to-secondary-500 rounded-lg opacity-20 blur-xl" />
            <div className="relative bg-white dark:bg-gray-800 rounded-lg p-6 shadow-xl">
              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">5+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 text-center">Years of Experience</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">50+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 text-center">Projects Completed</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">30+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 text-center">Happy Clients</span>
                </div>
                <div className="bg-gray-100 dark:bg-gray-700 rounded-lg p-4 flex flex-col items-center justify-center">
                  <span className="text-3xl font-bold text-primary-600 dark:text-primary-400">15+</span>
                  <span className="text-sm text-gray-600 dark:text-gray-400 text-center">Technologies</span>
                </div>
              </div>
              
              <div className="mt-6">
                <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">My Skills</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700 dark:text-gray-300">Front-end Development</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">90%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div 
                        className="bg-primary-600 h-2 rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: '90%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700 dark:text-gray-300">UI/UX Design</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div 
                        className="bg-secondary-600 h-2 rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: '85%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-sm text-gray-700 dark:text-gray-300">Back-end Development</span>
                      <span className="text-sm text-gray-700 dark:text-gray-300">75%</span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                      <motion.div 
                        className="bg-accent-600 h-2 rounded-full" 
                        initial={{ width: 0 }}
                        whileInView={{ width: '75%' }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.7 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;