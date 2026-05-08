"use client";
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { Menu, X, MessageCircle } from 'lucide-react';
import { CONTACT_INFO } from '../constants';


const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Inicio', href: '/' },
    { label: 'Plagas', href: '/#servicios' },
    { label: 'Tienda', href: '/#tienda' },
  ];

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ease-in-out ${scrolled ? 'bg-white shadow-md py-3' : 'bg-white py-5 lg:py-6'
          }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            {/* Logo ChinchesOut */}
            <Link
              href="/"
              className="flex items-center gap-2 group select-none"
            >
              <div className="flex items-center">
                <span className="text-2xl md:text-3xl font-black tracking-tighter text-brand-dark">
                  CHINCHES
                </span>
                <span className="text-2xl md:text-3xl font-black tracking-tighter text-brand-green ml-1">
                  OUT
                </span>
              </div>
            </Link>

            {/* Desktop Nav */}
            <nav className={`hidden md:flex space-x-1 items-center px-2 py-1.5 rounded-full mx-4 transition-all duration-300 ${scrolled ? '' : 'bg-gray-50 border border-gray-100'}`}>
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-sm font-medium px-4 py-2 rounded-full transition-all duration-300 ${scrolled
                    ? 'text-gray-800 hover:text-brand-green hover:bg-gray-50'
                    : 'text-gray-700 hover:text-brand-green hover:bg-gray-100'
                    }`}
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            {/* CTA Button Desktop */}


            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 rounded-lg transition-colors text-brand-dark"
              >
                {isOpen ? <X size={28} /> : <Menu size={28} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isOpen && (
          <div className="md:hidden bg-white absolute w-full shadow-2xl rounded-b-3xl overflow-hidden animate-in slide-in-from-top-10 fade-in duration-300">
            <div className="px-4 pt-4 pb-6 space-y-2">
              {navLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  className="block px-4 py-3 rounded-xl text-base font-medium text-gray-700 hover:text-brand-green hover:bg-green-50 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {link.label}
                </Link>
              ))}

            </div>
          </div>
        )}
      </header>


    </>
  );
};

export default Header;
