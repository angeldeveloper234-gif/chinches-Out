"use client";
import React, { useState, useEffect } from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Users, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';


const Hero: React.FC = () => {

  const [clientCount, setClientCount] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setClientCount(prev => (prev < 1250 ? prev + 11 : prev));
    }, 20);
    return () => clearInterval(interval);
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-brand-dark">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://nmnofwinjufyyykyaelc.supabase.co/storage/v1/object/sign/Chinches Out/inicio.jpeg?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9hNzRlMzZmMy0wZDFhLTQ5NWMtYWMwMS0zNjMzMDY0Y2YwZTIiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJGdW1jb24vaW5pY2lvLmpwZWciLCJpYXQiOjE3Njg4NDc3MzMsImV4cCI6MTgwMDM4MzczM30.3qTbN3FgjjvPmn9MS-k89TnBUfdFRNPS2kkMOURe3zY"
          alt="Professional disinfection"
          className="w-full h-full object-cover opacity-50 scale-105 animate-pulse-slow"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent"></div>
        <div className="absolute inset-0 bg-gradient-to-r from-brand-dark via-brand-dark/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-12 lg:py-0">
        <div className="flex flex-col lg:flex-row items-start lg:items-center gap-12 lg:gap-20">
          
          {/* Content Column */}
          <div className="w-full lg:w-3/4 text-white space-y-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md px-4 py-2 rounded-full border border-white/20"
            >
              <span className="w-2 h-2 rounded-full bg-brand-yellow animate-pulse shadow-glow"></span>
              <span className="text-brand-yellow font-bold text-xs uppercase tracking-widest">Disponibilidad 24/7</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="text-[2.75rem] xs:text-5xl lg:text-8xl font-black leading-[0.95] tracking-tighter"
            >
              Control de Plagas <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-green to-brand-yellow drop-shadow-sm">
                Sin Riesgos
              </span>
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-base md:text-lg text-gray-300 max-w-xl leading-relaxed font-medium border-l-4 border-brand-green pl-6"
            >
              Servicio de fumigación certificado y seguro para tu familia y negocio. 
              Tecnología avanzada para un ambiente 100% libre de plagas.
            </motion.p>

            {/* Counter Section */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-4 bg-white/5 w-fit px-5 py-3 rounded-2xl border border-white/10"
            >
              <div className="flex -space-x-3">
                {[1,2,3].map(i => (
                  <div key={i} className="w-9 h-9 rounded-full border-2 border-brand-dark bg-brand-gray overflow-hidden">
                    <img src={`https://i.pravatar.cc/100?img=${i+10}`} alt="User" />
                  </div>
                ))}
              </div>
              <div className="text-sm">
                <p className="font-black text-brand-yellow">+{clientCount}</p>
                <p className="text-gray-400 text-[10px] font-bold uppercase tracking-wider">Clientes Satisfechos</p>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-4 pt-4"
            >

              
              <a
                href="#servicios"
                className="px-8 py-4 md:px-10 md:py-5 rounded-full font-black text-base md:text-lg text-white border-2 border-white/20 hover:bg-white/10 transition-all flex items-center gap-2"
              >
                Nuestros Servicios
              </a>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="pt-8 flex gap-8 border-t border-white/10"
            >
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-brand-yellow h-8 w-8" />
                <div className="text-sm">
                    <p className="font-bold text-white">Licencia Sanitaria</p>
                    <p className="text-gray-400">Vigente y Certificada</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                 <CheckCircle2 className="text-brand-yellow h-8 w-8" />
                <div className="text-sm">
                    <p className="font-bold text-white">Garantía por Escrito</p>
                    <p className="text-gray-400">Resultados Reales</p>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>
      </div>
      

    </section>
  );
};

export default Hero;
