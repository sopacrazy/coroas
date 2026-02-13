
import React, { useState, useEffect } from 'react';
import { 
  Crown, 
  Moon, 
  Sparkles, 
  Sword, 
  ScrollText, 
  Users, 
  ShieldAlert, 
  ChevronDown,
  Menu,
  X,
  Dices
} from 'lucide-react';

// Components
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Synopsis from './components/Synopsis';
import Gameplay from './components/Gameplay';
import HistorySection from './components/HistorySection';
import Footer from './components/Footer';

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('inicio');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['inicio', 'sinopse', 'jogabilidade', 'historia'];
      const scrollPos = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPos >= offsetTop && scrollPos < offsetTop + offsetHeight) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen selection:bg-yellow-900 selection:text-white">
      <Navbar activeSection={activeSection} />
      
      <main>
        <Hero />
        <Synopsis />
        <Gameplay />
        <HistorySection />
      </main>

      <Footer />
    </div>
  );
};

export default App;
