import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Features from './components/Features';
import About from './components/About';
import Contact from './components/Contact';
import LoginModal from './components/auth/LoginModal';
import SignupModal from './components/auth/SignupModal';

function App() {
  const [isLoginOpen, setIsLoginOpen] = useState(false);
  const [isSignupOpen, setIsSignupOpen] = useState(false);
  const [signupType, setSignupType] = useState<'student' | 'alumni'>('student');

  const handleSignup = (type: 'student' | 'alumni') => {
    setSignupType(type);
    setIsSignupOpen(true);
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar onLoginClick={() => setIsLoginOpen(true)} />
      <Hero onStudentClick={() => handleSignup('student')} onAlumniClick={() => handleSignup('alumni')} />
      <Features />
      <About />
      <Contact />
      
      <LoginModal 
        isOpen={isLoginOpen} 
        onClose={() => setIsLoginOpen(false)} 
      />
      
      <SignupModal 
        isOpen={isSignupOpen} 
        onClose={() => setIsSignupOpen(false)}
        userType={signupType}
      />
    </div>
  );
}

export default App;