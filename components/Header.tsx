import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, ChevronDown, Search as SearchIcon } from 'lucide-react';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isPlatformOpenMobile, setIsPlatformOpenMobile] = useState(false);
  const [isPOCOpenMobile, setIsPOCOpenMobile] = useState(false);
  const [isPlatformOpenDesktop, setIsPlatformOpenDesktop] = useState(false);
  const [isPOCOpenDesktop, setIsPOCOpenDesktop] = useState(false);
  const platformCloseTimer = useRef<number | null>(null);
  const pocCloseTimer = useRef<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [isSearchFocused, setIsSearchFocused] = useState(false);
  const searchCloseTimer = useRef<number | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    return () => {
      if (platformCloseTimer.current) {
        clearTimeout(platformCloseTimer.current);
      }
      if (pocCloseTimer.current) {
        clearTimeout(pocCloseTimer.current);
      }
      if (searchCloseTimer.current) {
        clearTimeout(searchCloseTimer.current);
      }
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm py-3' : 'bg-transparent py-5'
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
          <div
            className="relative"
            onMouseEnter={() => {
              if (searchCloseTimer.current) clearTimeout(searchCloseTimer.current);
              setIsSearchFocused(true);
            }}
            onMouseLeave={() => {
              searchCloseTimer.current = window.setTimeout(() => {
                setIsSearchFocused(false);
              }, 180);
            }}
          >
            <div className="flex items-center gap-2">
              <div className="relative">
                <SearchIcon className="w-4 h-4 absolute left-2 top-1/2 -translate-y-1/2 text-slate-400" />
                <input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => setIsSearchFocused(true)}
                  onBlur={() => {
                    searchCloseTimer.current = window.setTimeout(() => {
                      setIsSearchFocused(false);
                    }, 150);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const q = searchQuery.trim().toLowerCase();
                      const idx = [
                        { label: 'Modules', href: '#modules' },
                        { label: 'Roadmap', href: '#roadmap' },
                        { label: 'Impact', href: '#impact' },
                        { label: 'TechStack', href: '#tech' },
                        { label: 'Investor', href: '#investor' },
                        { label: 'Crowdfunding', href: '#funding' },
                        { label: 'Buyer', href: '#buyer' },
                        { label: 'Seller', href: '#seller' },
                        { label: 'How it works', href: '#how' },
                        { label: 'FAQ', href: '#faq' },
                        { label: 'Glossary', href: '#glossary' }
                      ];
                      const match = idx.find(i => i.label.toLowerCase().includes(q));
                      if (match) {
                        window.location.hash = match.href;
                        setIsSearchFocused(false);
                      }
                    }
                  }}
                  className="w-44 pl-7 pr-2 py-1.5 text-sm rounded-md border border-slate-200 focus:outline-none focus:border-brand-500 bg-white text-slate-700"
                  placeholder="Search"
                />
              </div>
            </div>
            <div
              className={`absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 shadow-lg rounded-lg p-2 transition-opacity duration-200 ${isSearchFocused && searchQuery.trim() ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
              {[
                { label: 'Modules', href: '#modules' },
                { label: 'Roadmap', href: '#roadmap' },
                { label: 'Impact', href: '#impact' },
                { label: 'TechStack', href: '#tech' },
                { label: 'Investor', href: '#investor' },
                { label: 'Crowdfunding', href: '#funding' },
                { label: 'Buyer', href: '#buyer' },
                { label: 'Seller', href: '#seller' },
                { label: 'How it works', href: '#how' },
                { label: 'FAQ', href: '#faq' },
                { label: 'Glossary', href: '#glossary' }
              ]
                .filter(i => i.label.toLowerCase().includes(searchQuery.trim().toLowerCase()))
                .map(i => (
                  <a key={i.href} href={i.href} className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 hover:text-brand-700">
                    {i.label}
                  </a>
                ))}
            </div>
          </div>

          <div
            className="relative"
            onMouseEnter={() => {
              if (pocCloseTimer.current) clearTimeout(pocCloseTimer.current);
              setIsPOCOpenDesktop(true);
            }}
            onMouseLeave={() => {
              pocCloseTimer.current = window.setTimeout(() => {
                setIsPOCOpenDesktop(false);
              }, 180);
            }}
          >
            <div className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-600 cursor-pointer">
              <span>POC</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div
              className={`absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 shadow-lg rounded-lg p-2 transition-opacity duration-200 ${isPOCOpenDesktop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
              <a href="#roadmap" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 hover:text-brand-700">Roadmap</a>
              <a href="#impact" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 hover:text-brand-700">Impact</a>
              <a href="#tech" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 hover:text-brand-700">TechStack</a>
            </div>
          </div>

          <a href="#sector" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Sector</a>
          <a href="#investor" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Investor</a>
          <a href="#funding" className="text-sm font-medium text-slate-600 hover:text-brand-600 transition-colors">Crowdfunding</a>

          <div
            className="relative"
            onMouseEnter={() => {
              if (platformCloseTimer.current) clearTimeout(platformCloseTimer.current);
              setIsPlatformOpenDesktop(true);
            }}
            onMouseLeave={() => {
              platformCloseTimer.current = window.setTimeout(() => {
                setIsPlatformOpenDesktop(false);
              }, 180);
            }}
          >
            <div className="flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-brand-600 cursor-pointer">
              <span>Platform</span>
              <ChevronDown className="w-4 h-4" />
            </div>
            <div
              className={`absolute top-full left-0 mt-2 w-56 bg-white border border-slate-100 shadow-lg rounded-lg p-2 transition-opacity duration-200 ${isPlatformOpenDesktop ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
                }`}
            >
              <a href="#how" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 hover:text-brand-700">How it works</a>
              <a href="#faq" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 hover:text-brand-700">FAQ</a>
              <a href="#glossary" className="block px-3 py-2 rounded-md text-slate-700 hover:bg-slate-50 hover:text-brand-700">Glossary</a>
            </div>
          </div>

          <a
            href="#contact"
            className="bg-brand-600 hover:bg-brand-700 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50"
          >
            Contact us
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

          <a href="#sector" className="text-base font-medium text-slate-600 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>Sector</a>
          <a href="#investor" className="text-base font-medium text-slate-600 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>Investor</a>
          <a href="#funding" className="text-base font-medium text-slate-600 hover:text-brand-600" onClick={() => setIsMobileMenuOpen(false)}>Crowdfunding</a>

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

          <a
            href="#contact"
            className="bg-brand-600 text-white px-4 py-3 rounded-lg text-center font-medium"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Contact us
          </a>
        </div>
      )}
    </header>
  );
};

export default Header;
