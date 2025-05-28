import React from 'react';
import { motion } from 'framer-motion';

type SectionHeadingProps = {
  title: string;
  subtitle?: string;
  alignment?: 'left' | 'center' | 'right';
  className?: string;
};

const SectionHeading: React.FC<SectionHeadingProps> = ({
  title,
  subtitle,
  alignment = 'left',
  className = '',
}) => {
  const alignmentClasses = {
    left: 'text-left',
    center: 'text-center',
    right: 'text-right',
  };

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 10 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <motion.div
      className={`mb-12 ${alignmentClasses[alignment]} ${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.3 }}
      variants={containerVariants}
    >
      <motion.h2
        className="font-heading text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-3"
        variants={itemVariants}
      >
        {title}
      </motion.h2>
      
      {subtitle && (
        <motion.p
          className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
          variants={itemVariants}
        >
          {subtitle}
        </motion.p>
      )}
      
      <motion.div
        className={`h-1 w-20 bg-accent-500 mt-4 rounded ${alignment === 'center' ? 'mx-auto' : alignment === 'right' ? 'ml-auto' : ''}`}
        variants={itemVariants}
      />
    </motion.div>
  );
};

export default SectionHeading;