
import React, { useEffect } from 'react';
import { Heart, Users, Handshake, DollarSign, Phone, Mail, MapPin, Calendar, Clock, MapPinned } from 'lucide-react';
import { motion } from 'framer-motion';
import NavigationHeader from '@/components/NavigationHeader';
import { Button } from '@/components/ui/button';
import MouseFollower from '@/components/MouseFollower';

const Support = () => {
  useEffect(() => {
    document.title = "Support For Them - Medi Nova";
  }, []);

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  };

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      {/* Full screen background with higher z-index */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-slate-900/70 via-slate-900/50 to-medical-dark/30 z-[1]" />
        <iframe
          src="https://www.youtube.com/embed/Q40senBIrFI?autoplay=1&mute=1&controls=0&loop=1&playlist=Q40senBIrFI&showinfo=0&rel=0&modestbranding=1&disablekb=1&iv_load_policy=3"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          title="Healthcare background video"
          className="absolute w-[100vw] h-[100vh] top-0 left-0 object-cover"
          style={{ 
            transform: 'scale(1.1)',
            pointerEvents: 'none'
          }}
        ></iframe>
      </div>

      <MouseFollower />
      
      {/* Header */}
      <NavigationHeader />

      {/* Hero Section */}
      <div className="relative z-10 pt-28 pb-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeInUp}
            className="text-center mb-16"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
              <span className="shimmer-text">Support For Them</span>
            </h1>
            <p className="text-lg md:text-xl text-white/80 max-w-3xl mx-auto">
              Together we can make a difference in healthcare for those in need
            </p>
          </motion.div>

          {/* Forms Section */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Volunteers Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-medical/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Users className="text-medical w-6 h-6 mr-2" />
                <h2 className="text-2xl font-semibold text-white">Call For Volunteers</h2>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border bg-white/10 backdrop-blur-sm border-white/20 rounded-lg focus:ring-2 focus:ring-medical focus:border-medical text-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 border bg-white/10 backdrop-blur-sm border-white/20 rounded-lg focus:ring-2 focus:ring-medical focus:border-medical text-white"
                />
                <textarea
                  placeholder="How would you like to help?"
                  className="w-full p-2 border bg-white/10 backdrop-blur-sm border-white/20 rounded-lg focus:ring-2 focus:ring-medical focus:border-medical text-white"
                  rows={4}
                ></textarea>
                <Button className="w-full bg-medical hover:bg-medical-dark text-white">
                  Volunteer Now
                </Button>
              </form>
            </motion.div>

            {/* NGO Collaborations */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-medical/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Handshake className="text-medical w-6 h-6 mr-2" />
                <h2 className="text-2xl font-semibold text-white">NGO Collaborations</h2>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Organization Name"
                  className="w-full p-2 border bg-white/10 backdrop-blur-sm border-white/20 rounded-lg focus:ring-2 focus:ring-medical focus:border-medical text-white"
                />
                <input
                  type="email"
                  placeholder="Contact Email"
                  className="w-full p-2 border bg-white/10 backdrop-blur-sm border-white/20 rounded-lg focus:ring-2 focus:ring-medical focus:border-medical text-white"
                />
                <textarea
                  placeholder="Describe your organization and potential collaboration"
                  className="w-full p-2 border bg-white/10 backdrop-blur-sm border-white/20 rounded-lg focus:ring-2 focus:ring-medical focus:border-medical text-white"
                  rows={4}
                ></textarea>
                <Button className="w-full bg-medical hover:bg-medical-dark text-white">
                  Submit Proposal
                </Button>
              </form>
            </motion.div>

            {/* Donate Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20 hover:border-medical/30 transition-all duration-300"
            >
              <div className="flex items-center mb-4">
                <Heart className="text-medical w-6 h-6 mr-2" />
                <h2 className="text-2xl font-semibold text-white">Donate For Them</h2>
              </div>
              <form className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full p-2 border bg-white/10 backdrop-blur-sm border-white/20 rounded-lg focus:ring-2 focus:ring-medical focus:border-medical text-white"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full p-2 border bg-white/10 backdrop-blur-sm border-white/20 rounded-lg focus:ring-2 focus:ring-medical focus:border-medical text-white"
                />
                <select className="w-full p-2 border bg-white/10 backdrop-blur-sm border-white/20 rounded-lg focus:ring-2 focus:ring-medical focus:border-medical text-white">
                  <option value="" className="bg-gray-800">Select Amount</option>
                  <option value="25" className="bg-gray-800">$25</option>
                  <option value="50" className="bg-gray-800">$50</option>
                  <option value="100" className="bg-gray-800">$100</option>
                  <option value="custom" className="bg-gray-800">Custom Amount</option>
                </select>
                <Button className="w-full bg-medical hover:bg-medical-dark text-white">
                  Donate Now
                </Button>
              </form>
            </motion.div>
          </div>

          {/* Health Camps Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-12 text-white">Upcoming Health Camps</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Blood Donation Camp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-medical/30 transition-all duration-300"
              >
                <div className="h-48 relative">
                  <img
                    src="https://images.unsplash.com/photo-1615461066841-6116e61058f4?auto=format&fit=crop&w=800"
                    alt="Blood Donation Camp"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-medical text-white text-sm font-medium rounded-full">
                      Donation Drive
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Blood Donation Drive</h3>
                  <div className="space-y-2 text-white/80">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-medical" />
                      <span>March 15, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-medical" />
                      <span>9:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinned className="w-5 h-5 mr-2 text-medical" />
                      <span>City Community Center</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Health Awareness Camp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-medical/30 transition-all duration-300"
              >
                <div className="h-48 relative">
                  <img
                    src="https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?auto=format&fit=crop&w=800"
                    alt="Health Awareness Camp"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-medical text-white text-sm font-medium rounded-full">
                      Workshop
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Health Awareness Workshop</h3>
                  <div className="space-y-2 text-white/80">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-medical" />
                      <span>March 20, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-medical" />
                      <span>10:00 AM - 2:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinned className="w-5 h-5 mr-2 text-medical" />
                      <span>Public Library Hall</span>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Medical Checkup Camp */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="bg-white/10 backdrop-blur-lg rounded-xl overflow-hidden border border-white/20 hover:border-medical/30 transition-all duration-300"
              >
                <div className="h-48 relative">
                  <img
                    src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=800"
                    alt="Medical Checkup Camp"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
                  <div className="absolute bottom-4 left-4">
                    <span className="px-3 py-1 bg-medical text-white text-sm font-medium rounded-full">
                      Free Checkup
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-4 text-white">Free Medical Checkup</h3>
                  <div className="space-y-2 text-white/80">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 mr-2 text-medical" />
                      <span>March 25, 2024</span>
                    </div>
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-2 text-medical" />
                      <span>8:00 AM - 5:00 PM</span>
                    </div>
                    <div className="flex items-center">
                      <MapPinned className="w-5 h-5 mr-2 text-medical" />
                      <span>Central Park Medical Center</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.6 }}
            className="text-center bg-white/10 backdrop-blur-lg rounded-xl p-8 border border-white/20"
          >
            <Heart className="w-16 h-16 text-medical mx-auto mb-4" />
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-white">Need More Information?</h2>
            <p className="text-white/80 mb-6 max-w-2xl mx-auto">
              Contact our support team for more information about our charity programs and how you can contribute.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-medical hover:bg-medical-dark text-white">
                <Mail className="w-5 h-5 mr-2" />
                Contact Support Team
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/20">
                <Phone className="w-5 h-5 mr-2" />
                Call Helpline
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Support;
