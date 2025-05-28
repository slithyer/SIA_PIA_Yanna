import React from 'react';
import { motion } from 'framer-motion';

type CardProps = {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  hoverEffect?: boolean;
  glassEffect?: boolean;
};

const Card: React.FC<CardProps> = ({
  children,
  className = '',
  onClick,
  hoverEffect = true,
  glassEffect = false,
}) => {
  const baseStyles = 'rounded-xl overflow-hidden shadow-md';
  
  const glassStyles = glassEffect 
    ? 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm border border-gray-200 dark:border-gray-800' 
    : 'bg-white dark:bg-gray-900';
  
  const hoverStyles = hoverEffect 
    ? 'transition-all duration-300 hover:shadow-lg' 
    : '';
  
  return (
    <motion.div
      className={`${baseStyles} ${glassStyles} ${hoverStyles} ${className}`}
      onClick={onClick}
      whileHover={hoverEffect ? { y: -5 } : {}}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
};

export default Card;