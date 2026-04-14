"import React, { useState, useEffect } from 'react';
import { Button } from './ui/button';
import { Menu, X } from 'lucide-react';
import { companyInfo } from '../data/mock';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { label: 'Home', id: 'hero' },
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Why Us', id: 'why-us' },
    { label: 'Team', id: 'team' },
    { label: 'Contact', id: 'contact' }
  ];

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? 'bg-slate-900/95 backdrop-blur-lg shadow-lg border-b border-slate-700/50' 
          : 'bg-transparent'
      }`}
    >
      <div className=\"max-w-7xl mx-auto px-6 py-4\">
        <div className=\"flex items-center justify-between\">
          <div 
            className=\"flex items-center space-x-3 cursor-pointer group\"
            onClick={() => scrollToSection('hero')}
          >
            <div className=\"w-12 h-12 bg-gradient-to-br from-amber-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg transform group-hover:scale-105 transition-transform duration-300\">
              <span className=\"text-slate-900 font-bold text-xl\">JR</span>
            </div>
            <div>
              <h1 className=\"text-xl font-bold text-white tracking-tight\">
                {companyInfo.name}
              </h1>
              <p className=\"text-xs text-slate-400\">{companyInfo.tagline}</p>
            </div>
          </div>

          <nav className=\"hidden lg:flex items-center space-x-8\">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollToSection(item.id)}
                className=\"text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium text-sm relative group\"
              >
                {item.label}
                <span className=\"absolute -bottom-1 left-0 w-0 h-0.5 bg-amber-400 group-hover:w-full transition-all duration-300\"></span>
              </button>
            ))}
            <Button 
              onClick={() => scrollToSection('contact')}
              className=\"bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold shadow-lg hover:shadow-amber-500/50 transition-all duration-300 transform hover:scale-105\"
            >
              Get Started
            </Button>
          </nav>

          <button
            className=\"lg:hidden text-white p-2\"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className=\"lg:hidden mt-6 pb-6 border-t border-slate-700/50 pt-6 animate-in slide-in-from-top duration-300\">
            <nav className=\"flex flex-col space-y-4\">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className=\"text-slate-300 hover:text-amber-400 transition-colors duration-300 font-medium text-left py-2\"
                >
                  {item.label}
                </button>
              ))}
              <Button 
                onClick={() => scrollToSection('contact')}
                className=\"bg-gradient-to-r from-amber-500 to-orange-600 hover:from-amber-600 hover:to-orange-700 text-white font-semibold w-full mt-4\"
              >
                Get Started
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
"
