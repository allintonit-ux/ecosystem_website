import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlatformOpenMobile, setIsPlatformOpenMobile] = useState(false);
  const [isPOCOpenMobile, setIsPOCOpenMobile] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-brand-600 rounded-lg flex items-center justify-center text-white font-bold text-lg">
            X
          </div>
          <span className={`font-bold text-xl tracking-tight ${isScrolled ? 'text-slate-900' : 'text-slate-900'}`}>
            X
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <div className="relative group">
            <div className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-600 cursor-pointer">
              <span>Platform</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 shadow-lg rounded-lg p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <a href="#how" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 hover:text-brand-700">How it works</a>
              <a href="#faq" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 hover:text-brand-700">FAQ</a>
              <a href="#glossary" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 hover:text-brand-700">Glossary</a>
            </div>
          </div>

          <div className="relative group">
            <div className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-600 cursor-pointer">
              <span>POC</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div className="absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 shadow-lg rounded-lg p-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto">
              <a href="#roadmap" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 hover:text-brand-700">Roadmap</a>
              <a href="#impact" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 hover:text-brand-700">Impact</a>
              <a href="#tech" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 hover:text-brand-700">TechStack</a>
            </div>
          </div>

          <a href="#investor" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">investor</a>
          <a href="#buyer" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">buyer</a>
          <a href="#seller" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">seller</a>

          <a 
            href="#join"
            className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50"
          >
            Get Early Access
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-slate-700"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-100 shadow-lg p-4 flex flex-col gap-4">
          <div>
            <button 
              className="w-full flex items-center justify-between text-base font-medium text-slate-700"
              onClick={() => setIsPlatformOpenMobile(!isPlatformOpenMobile)}
            >
              <span>Platform</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isPlatformOpenMobile ? 'rotate-180' : ''}`} />
            </button>
            {isPlatformOpenMobile && (
              <div className="mt-2 pl-2 flex flex-col gap-2">
                <a href="#how" className="text-slate-600 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>How it works</a>
                <a href="#faq" className="text-slate-600 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>FAQ</a>
                <a href="#glossary" className="text-slate-600 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>Glossary</a>
              </div>
            )}
          </div>

          <div>
            <button 
              className="w-full flex items-center justify-between text-base font-medium text-slate-700"
              onClick={() => setIsPOCOpenMobile(!isPOCOpenMobile)}
            >
              <span>POC</span>
              <ChevronDown className={`w-4 h-4 transition-transform ${isPOCOpenMobile ? 'rotate-180' : ''}`} />
            </button>
            {isPOCOpenMobile && (
              <div className="mt-2 pl-2 flex flex-col gap-2">
                <a href="#roadmap" className="text-slate-600 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>Roadmap</a>
                <a href="#impact" className="text-slate-600 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>Impact</a>
                <a href="#tech" className="text-slate-600 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>TechStack</a>
              </div>
            )}
          </div>

          <a href="#investor" className="text-base font-medium text-slate-600 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>investor</a>
          <a href="#buyer" className="text-base font-medium text-slate-600 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>buyer</a>
          <a href="#seller" className="text-base font-medium text-slate-600 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>seller</a>

          <a 
            href="#join"
            className="bg-brand-600 text-white px-4 py-3 rounded-lg text-center font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Early Access
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
