import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import SectionHeading from '../ui/SectionHeading';
import Button from '../ui/Button';
import { Send, CheckCircle } from 'lucide-react';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const Contact: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  
  const { 
    register, 
    handleSubmit, 
    formState: { errors, isSubmitting },
    reset
  } = useForm<FormData>();
  
  const onSubmit = async (data: FormData) => {
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));
    console.log('Form submitted:', data);
    setIsSubmitted(true);
    reset();
    
    // Reset success message after a delay
    setTimeout(() => {
      setIsSubmitted(false);
    }, 5000);
  };

  return (
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading 
          title="Get In Touch"
          subtitle="Have a project in mind or want to connect? Reach out to me!"
          alignment="center"
        />
        
        <div className="max-w-2xl mx-auto mt-12">
          <motion.form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-white dark:bg-gray-900 rounded-lg shadow-md p-6 md:p-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {isSubmitted ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex flex-col items-center justify-center text-center py-8"
              >
                <CheckCircle size={48} className="text-success-500 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-600 dark:text-gray-400">
                  Thank you for reaching out. I'll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.name 
                          ? 'border-error-500 focus:ring-error-500' 
                          : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                      } focus:outline-none focus:ring-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                      placeholder="Your name"
                      {...register('name', { required: 'Name is required' })}
                    />
                    {errors.name && (
                      <p className="mt-1 text-sm text-error-500">{errors.name.message}</p>
                    )}
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Email
                    </label>
                    <input
                      id="email"
                      type="email"
                      className={`w-full px-4 py-2 rounded-lg border ${
                        errors.email 
                          ? 'border-error-500 focus:ring-error-500' 
                          : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                      } focus:outline-none focus:ring-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                      placeholder="Your email"
                      {...register('email', {
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address',
                        },
                      })}
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-error-500">{errors.email.message}</p>
                    )}
                  </div>
                </div>
                
                <div className="mb-6">
                  <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Subject
                  </label>
                  <input
                    id="subject"
                    type="text"
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.subject 
                        ? 'border-error-500 focus:ring-error-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                    } focus:outline-none focus:ring-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="Subject of your message"
                    {...register('subject', { required: 'Subject is required' })}
                  />
                  {errors.subject && (
                    <p className="mt-1 text-sm text-error-500">{errors.subject.message}</p>
                  )}
                </div>
                
                <div className="mb-6">
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className={`w-full px-4 py-2 rounded-lg border ${
                      errors.message 
                        ? 'border-error-500 focus:ring-error-500' 
                        : 'border-gray-300 dark:border-gray-700 focus:ring-primary-500'
                    } focus:outline-none focus:ring-2 bg-white dark:bg-gray-800 text-gray-900 dark:text-white`}
                    placeholder="Your message"
                    {...register('message', { 
                      required: 'Message is required',
                      minLength: {
                        value: 20,
                        message: 'Message should be at least 20 characters',
                      },
                    })}
                  />
                  {errors.message && (
                    <p className="mt-1 text-sm text-error-500">{errors.message.message}</p>
                  )}
                </div>
                
                <Button 
                  type="submit" 
                  className="w-full"
                  disabled={isSubmitting}
                  icon={<Send size={16} />}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </Button>
              </>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;