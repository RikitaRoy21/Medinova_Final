
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

// Using the requested image of hungry children
const imageUrl = "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aHVuZ2VyJTIwY2hpbGRyZW58ZW58MHx8MHx8fDA%3D";

const VideoSection = () => {
  // Function to scroll to the helpline button in the header
  const scrollToHelpline = (e: React.MouseEvent) => {
    e.preventDefault();
    const helplineButton = document.getElementById('helpline-button') || document.getElementById('mobile-helpline-button');
    
    if (helplineButton) {
      helplineButton.scrollIntoView({ behavior: 'smooth' });
      
      // Add a highlight effect to make it noticeable
      helplineButton.classList.add('animate-pulse');
      setTimeout(() => {
        helplineButton.classList.remove('animate-pulse');
      }, 2000);
      
      // Simulate a click after scrolling
      setTimeout(() => {
        const link = helplineButton.querySelector('a');
        if (link) link.click();
      }, 1000);
    }
  };

  return (
    <section className="py-24 bg-gradient-to-br from-medical/5 to-blue-50">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <motion.span
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="inline-block text-sm font-medium text-medical uppercase tracking-wider mb-2"
            >
              Healthcare Challenges
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-gray-900 mb-4"
            >
              Helping Those <span className="text-medical">Most In Need</span>
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              viewport={{ once: true }}
              className="mx-auto max-w-2xl mb-10"
            >
              <p className="text-gray-600">
                Millions of people in rural areas lack access to basic healthcare services.
                At Medi Nova, we're committed to bringing quality healthcare to underserved communities
                and addressing the challenges they face.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
            className="relative aspect-video rounded-2xl overflow-hidden shadow-xl group"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent z-10 group-hover:from-black/60 transition-all duration-300" />
            
            <motion.img
              src={imageUrl}
              alt="Hungry children in need of aid"
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 10 }}
            />
            
            <div className="absolute bottom-6 left-6 z-20 text-white">
              <h3 className="text-xl font-semibold mb-2">Children in Need</h3>
              <p className="text-white/90 text-sm max-w-md">
                Millions of children worldwide lack access to proper nutrition and healthcare, creating a humanitarian crisis.
              </p>
            </div>
            
            <div className="absolute bottom-6 right-6 z-20">
              <Button 
                onClick={scrollToHelpline}
                className="bg-red-600 hover:bg-red-700 text-white"
              >
                Support Our Mission
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
