import React from 'react';
import { motion } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import { timelineEvents } from '../../data/timelineEvents';

const FamilyTimeline: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  return (
    <section id="family" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Family Background"
          subtitle="A journey through the events and people that shaped who I am today"
          alignment="center"
        />
        
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={containerVariants}
          className="relative mt-12"
        >
          {/* Timeline line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-200 dark:bg-primary-900 rounded-full" />
          
          {timelineEvents.map((event, index) => (
            <TimelineItem 
              key={event.id} 
              event={event} 
              isEven={index % 2 === 0} 
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

type TimelineItemProps = {
  event: {
    id: string;
    year: string;
    title: string;
    description: string;
    imageUrl?: string;
  };
  isEven: boolean;
};

const TimelineItem: React.FC<TimelineItemProps> = ({ event, isEven }) => {
  const itemVariants = {
    hidden: { opacity: 0, x: isEven ? -50 : 50 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.6 },
    },
  };

  return (
    <div className="flex flex-col md:flex-row items-center md:justify-center mb-16 relative">
      {/* Dot indicator */}
      <div className="absolute left-1/2 transform -translate-x-1/2 w-5 h-5 bg-primary-500 rounded-full z-10 shadow-md" />
      
      <motion.div 
        variants={itemVariants}
        className={`flex flex-col md:flex-row items-center md:w-full gap-8 ${
          isEven ? 'md:flex-row-reverse' : ''
        }`}
      >
        <div className="flex flex-col md:w-1/2 items-center md:items-end text-center md:text-right">
          {isEven ? (
            <div className="md:pl-12">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-3">
                  {event.year}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
              </div>
            </div>
          ) : (
            <div className="md:pr-12">
              {event.imageUrl && (
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              )}
            </div>
          )}
        </div>
        
        <div className="flex flex-col md:w-1/2 items-center md:items-start text-center md:text-left">
          {isEven ? (
            <div className="md:pr-12">
              {event.imageUrl && (
                <img 
                  src={event.imageUrl} 
                  alt={event.title} 
                  className="w-full h-48 object-cover rounded-lg shadow-md"
                />
              )}
            </div>
          ) : (
            <div className="md:pl-12">
              <div className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md">
                <span className="inline-block px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 rounded-full text-sm font-medium mb-3">
                  {event.year}
                </span>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">{event.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{event.description}</p>
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </div>
  );
};

export default FamilyTimeline;