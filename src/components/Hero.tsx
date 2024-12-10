import React from 'react';
import { motion } from 'framer-motion';
import { Users, MessageCircle, Calendar } from 'lucide-react';

interface HeroProps {
  onStudentClick: () => void;
  onAlumniClick: () => void;
}

export default function Hero({ onStudentClick, onAlumniClick }: HeroProps) {
  return (
    <div className="relative min-h-screen bg-gradient-to-br from-indigo-50 via-white to-purple-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
            Connect, Learn, and Grow Together
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            LUMI bridges the gap between alumni and students, creating meaningful connections
            that last a lifetime.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <button 
              onClick={onStudentClick}
              className="bg-indigo-600 text-white px-8 py-3 rounded-lg hover:bg-indigo-700 transition-colors text-lg font-semibold"
            >
              Join as Student
            </button>
            <button 
              onClick={onAlumniClick}
              className="bg-white text-indigo-600 px-8 py-3 rounded-lg border-2 border-indigo-600 hover:bg-indigo-50 transition-colors text-lg font-semibold"
            >
              Join as Alumni
            </button>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-20 grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Users className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Network Building</h3>
            <p className="text-gray-600">Connect with alumni and peers to build lasting professional relationships.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <MessageCircle className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Mentorship</h3>
            <p className="text-gray-600">Get guidance from experienced alumni in your field of interest.</p>
          </div>
          <div className="bg-white p-6 rounded-xl shadow-lg">
            <Calendar className="h-12 w-12 text-indigo-600 mb-4" />
            <h3 className="text-xl font-semibold mb-2">Events</h3>
            <p className="text-gray-600">Participate in exclusive networking events and workshops.</p>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-white to-transparent"></div>
    </div>
  );
}