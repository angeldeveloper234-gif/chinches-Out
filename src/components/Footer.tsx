"use client";
import React from 'react';
import { NAV_LINKS } from '../constants';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white text-brand-dark pt-20 pb-10 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center border-b border-gray-100 pb-12 mb-12">

          {/* Logo ChinchesOut */}
          <a href="/" className="flex flex-col items-start mb-8 md:mb-0 select-none cursor-pointer group">
            <div className="flex items-center mb-2">
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-brand-dark">
                CHINCHES
              </span>
              <span className="text-2xl md:text-3xl font-black tracking-tighter text-brand-green ml-1">
                OUT
              </span>
            </div>
          </a>

          <div className="flex flex-wrap gap-x-8 gap-y-4 text-sm font-medium text-gray-500">
            {[
              { label: 'Inicio', href: '/' },
              { label: 'Plagas', href: '/#servicios' },
              { label: 'Tienda', href: '/#tienda' },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="hover:text-brand-green transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-400 font-medium">
          <p>&copy; {new Date().getFullYear()} ChinchesOut del Sureste S.A. de C.V. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
