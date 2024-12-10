import React, { useRef, useEffect } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { 
  BookOpen, 
  Users, 
  MessageCircle, 
  Calendar,
  Briefcase,
  Award
} from 'lucide-react';

const features = [
  {
    icon: BookOpen,
    title: "Knowledge Sharing",
    description: "Access a wealth of experience and insights from alumni across various industries."
  },
  {
    icon: Users,
    title: "Network Building",
    description: "Connect with professionals and build meaningful relationships for career growth."
  },
  {
    icon: MessageCircle,
    title: "Direct Messaging",
    description: "Communicate directly with mentors and peers through our secure messaging system."
  },
  {
    icon: Calendar,
    title: "Events & Workshops",
    description: "Participate in exclusive events, workshops, and networking sessions."
  },
  {
    icon: Briefcase,
    title: "Job Opportunities",
    description: "Access exclusive job postings and internship opportunities from alumni networks."
  },
  {
    icon: Award,
    title: "Mentorship Program",
    description: "Get paired with experienced alumni mentors in your field of interest."
  }
];

export default function Features() {
  const controls = useAnimation();
  const featuresRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleHash = () => {
      if (window.location.hash === '#features' && featuresRef.current) {
        featuresRef.current.scrollIntoView({ behavior: 'smooth' });
        // Trigger highlight animation
        controls.start(i => ({
          scale: [1, 1.05, 1],
          transition: { 
            duration: 0.5,
            delay: i * 0.1,
          }
        }));
      }
    };

    // Handle initial load
    handleHash();

    // Listen for hash changes
    window.addEventListener('hashchange', handleHash);
    return () => window.removeEventListener('hashchange', handleHash);
  }, [controls]);

  return (
    <section ref={featuresRef} id="features" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            LUMI provides all the tools and connections you need to build your professional network
            and advance your career.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={index}
                custom={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                animate={controls}
                className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow group"
              >
                <div className="relative overflow-hidden">
                  <Icon className="h-12 w-12 text-indigo-600 mb-4 transform group-hover:scale-110 transition-transform" />
                  <motion.div
                    className="absolute inset-0 bg-indigo-100 rounded-full"
                    initial={{ scale: 0, opacity: 0 }}
                    whileHover={{ scale: 2, opacity: 0.1 }}
                    transition={{ duration: 0.3 }}
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}