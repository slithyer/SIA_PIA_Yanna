import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionHeading from '../ui/SectionHeading';
import Card from '../ui/Card';
import Badge from '../ui/Badge';
import Button from '../ui/Button';
import { ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';
import { projects } from '../../data/projects';

const Projects: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  const nextProject = () => {
    setActiveIndex((prev) => (prev + 1) % projects.length);
  };
  
  const prevProject = () => {
    setActiveIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };
  
  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'completed':
        return <Badge variant="success">Completed</Badge>;
      case 'in-progress':
        return <Badge variant="warning">In Progress</Badge>;
      case 'planned':
        return <Badge variant="secondary">Planned</Badge>;
      default:
        return null;
    }
  };

  return (
    <section id="projects" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Ongoing Projects"
          subtitle="Explore the projects I'm currently working on and have completed"
          alignment="center"
        />
        
        <div className="mt-12 relative">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.5 }}
              className="relative"
            >
              <Card className="md:flex overflow-hidden">
                <div className="md:w-1/2">
                  <img 
                    src={projects[activeIndex].imageUrl} 
                    alt={projects[activeIndex].title}
                    className="w-full h-64 md:h-full object-cover"
                  />
                </div>
                
                <div className="p-6 md:w-1/2">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                      {projects[activeIndex].title}
                    </h3>
                    {getStatusBadge(projects[activeIndex].status)}
                  </div>
                  
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {projects[activeIndex].description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {projects[activeIndex].technologies.map((tech, index) => (
                      <Badge key={index} variant="primary" size="sm">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  
                  {projects[activeIndex].link && (
                    <Button 
                      variant="outline"
                      icon={<ExternalLink size={16} />}
                      onClick={() => window.open(projects[activeIndex].link, '_blank')}
                    >
                      View Project
                    </Button>
                  )}
                </div>
              </Card>
            </motion.div>
          </AnimatePresence>
          
          <div className="flex justify-center mt-8 gap-4">
            <Button 
              variant="ghost" 
              onClick={prevProject}
              icon={<ChevronLeft size={20} />}
              className="p-2"
            >
              <span className="sr-only">Previous project</span>
            </Button>
            
            <div className="flex gap-2 items-center">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === activeIndex 
                      ? 'bg-primary-600 dark:bg-primary-400' 
                      : 'bg-gray-300 dark:bg-gray-700'
                  }`}
                  aria-label={`Go to project ${index + 1}`}
                />
              ))}
            </div>
            
            <Button 
              variant="ghost" 
              onClick={nextProject}
              icon={<ChevronRight size={20} />}
              className="p-2"
            >
              <span className="sr-only">Next project</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;