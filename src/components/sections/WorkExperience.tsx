import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import { ChevronDown, ChevronUp, Building2, Calendar } from 'lucide-react';
import { workExperiences } from '../../data/workExperience';

const WorkExperience: React.FC = () => {
  return (
    <section id="experience" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Work Experience"
          subtitle="A look at my professional journey and the roles I've held"
          alignment="center"
        />
        
        <div className="grid grid-cols-1 gap-8 mt-12">
          {workExperiences.map((experience) => (
            <ExperienceCard key={experience.id} experience={experience} />
          ))}
        </div>
      </div>
    </section>
  );
};

type ExperienceCardProps = {
  experience: {
    id: string;
    company: string;
    role: string;
    duration: string;
    description: string;
    technologies: string[];
  };
};

const ExperienceCard: React.FC<ExperienceCardProps> = ({ experience }) => {
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <Card className="overflow-hidden">
      <div className="p-6">
        <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-4">
          <div>
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">{experience.role}</h3>
            <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
              <Building2 size={16} className="mr-2" />
              <span>{experience.company}</span>
            </div>
          </div>
          
          <div className="flex items-center text-gray-600 dark:text-gray-400 bg-gray-100 dark:bg-gray-800 px-3 py-1 rounded-full">
            <Calendar size={16} className="mr-2" />
            <span>{experience.duration}</span>
          </div>
        </div>
        
        <motion.div
          className="text-gray-600 dark:text-gray-400 mb-4"
          initial={{ height: "auto" }}
          animate={{ height: isExpanded ? "auto" : "4.5rem" }}
          transition={{ duration: 0.3 }}
        >
          <div className={`${isExpanded ? '' : 'line-clamp-3'}`}>
            {experience.description}
          </div>
        </motion.div>
        
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex items-center text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 mb-4 transition-colors"
        >
          {isExpanded ? (
            <>
              <span className="mr-1">Show less</span>
              <ChevronUp size={16} />
            </>
          ) : (
            <>
              <span className="mr-1">Read more</span>
              <ChevronDown size={16} />
            </>
          )}
        </button>
        
        <div className="flex flex-wrap gap-2 mt-4">
          {experience.technologies.map((tech, index) => (
            <Badge key={index} variant="primary" size="sm">
              {tech}
            </Badge>
          ))}
        </div>
      </div>
    </Card>
  );
};

export default WorkExperience;