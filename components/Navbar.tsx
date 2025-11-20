import React, { useState, useEffect } from 'react';
import { Menu, X, Terminal } from 'lucide-react';
import { NavLinks } from '../types';

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setIsOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navItems = [
    { label: '~/Home', id: NavLinks.HOME },
    { label: './About', id: NavLinks.ABOUT },
    { label: './Stats', id: NavLinks.STATS },
    { label: './Projects', id: NavLinks.PROJECTS },
    { label: './Contact', id: NavLinks.CONTACT },
  ];

  return (
    <nav className={`fixed w-full z-50 transition-all duration-0 border-b border-primary/30 ${
      scrolled ? 'bg-black border-primary/50' : 'bg-black/90'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0 flex items-center cursor-pointer group" onClick={() => scrollToSection(NavLinks.HOME)}>
            <span className="text-primary font-bold text-xl mr-1 group-hover:animate-pulse">{'>'}</span>
            <span className="font-bold text-xl tracking-tight text-white">aashu.singh<span className="animate-cursor text-primary">_</span></span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-6">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="text-gray-400 hover:text-primary px-3 py-2 text-sm font-medium transition-colors duration-100 hover:bg-primary/10 border border-transparent hover:border-primary/50 rounded-none"
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
          
          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 text-primary hover:text-black hover:bg-primary focus:outline-none rounded-none border border-primary transition-colors"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden border-b border-primary/30 bg-black ${isOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="text-gray-300 hover:text-black hover:bg-primary block px-3 py-2 text-base font-medium w-full text-left rounded-none border-l-2 border-transparent hover:border-black transition-colors"
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};