import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { interests } from '../../data/interests';
import * as LucideIcons from 'lucide-react';

const Interests: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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

  // Dynamic icon component
  const IconComponent = ({ name }: { name: string }) => {
    // @ts-ignore - dynamic access
    const Icon = LucideIcons[name.charAt(0).toUpperCase() + name.slice(1)];
    return Icon ? <Icon size={24} /> : null;
  };

  return (
    <section id="interests" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Personal Interests"
          subtitle="Discover the hobbies and activities that fuel my creativity outside of work"
          alignment="center"
        />
        
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 mt-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
        >
          {interests.map((interest) => (
            <motion.div
              key={interest.id}
              variants={itemVariants}
              className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 transform transition-transform duration-300 hover:scale-105"
            >
              <div className="w-12 h-12 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center text-primary-600 dark:text-primary-400 mb-4">
                <IconComponent name={interest.icon} />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                {interest.name}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-400">
                {interest.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Interests;