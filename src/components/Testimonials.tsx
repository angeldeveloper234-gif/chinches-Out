"use client";
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const REVIEWS = [
  {
    name: "Carlos Rodríguez",
    role: "Dueño de Restaurante",
    content: "Excelente servicio. Teníamos un problema persistente de cucarachas y en una sola sesión lo resolvieron. Muy profesionales.",
    image: "https://i.pravatar.cc/150?u=carlos",
    stars: 5
  },
  {
    name: "Ana Martínez",
    role: "Administradora de Hoteles",
    content: "La discreción y eficacia son su sello. Certifican cada fumigación, lo cual es vital para nuestras auditorías sanitarias.",
    image: "https://i.pravatar.cc/150?u=ana",
    stars: 5
  },
  {
    name: "Roberto Silva",
    role: "Residente Particular",
    content: "Chinches eliminadas por completo. Habíamos probado de todo y nada funcionaba hasta que los llamamos a ellos. Gracias!",
    image: "https://i.pravatar.cc/150?u=roberto",
    stars: 5
  }
];

const Testimonials: React.FC = () => {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % REVIEWS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="testimonios" className="py-24 bg-brand-dark overflow-hidden relative">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-5 pointer-events-none">
        <Quote size={400} className="text-white absolute -top-20 -left-20 rotate-12" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-brand-green font-black tracking-[0.2em] uppercase text-xs mb-4 block"
          >
            Casos de Éxito
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-6xl font-black text-white mb-4"
          >
            Confianza <span className="text-brand-yellow underline decoration-brand-green/30">Certificada</span>
          </motion.h2>
          <div className="flex justify-center items-center gap-2">
            <div className="flex">
              {[1, 2, 3, 4, 5].map(i => <Star key={i} size={16} className="fill-brand-yellow text-brand-yellow" />)}
            </div>
            <span className="text-gray-400 font-bold ml-2">4.9/5 basado en +500 servicios</span>
          </div>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
              className="bg-white/5 backdrop-blur-xl border border-white/10 p-6 md:p-16 rounded-[2.5rem] md:rounded-[3rem] text-center"
            >
              <div className="mb-10 relative inline-block">
                <div className="w-24 h-24 rounded-full border-4 border-brand-green overflow-hidden mx-auto shadow-2xl">
                  <img src={REVIEWS[index].image} alt={REVIEWS[index].name} className="w-full h-full object-cover" />
                </div>
                <div className="absolute -bottom-2 -right-2 bg-brand-yellow text-brand-dark p-2 rounded-lg">
                  <Quote size={16} />
                </div>
              </div>
              
              <p className="text-base md:text-3xl font-medium text-gray-200 mb-6 md:mb-10 italic leading-relaxed">
                "{REVIEWS[index].content}"
              </p>
              
              <div>
                <h4 className="text-2xl font-black text-white">{REVIEWS[index].name}</h4>
                <p className="text-brand-green font-bold uppercase tracking-widest text-xs mt-1">{REVIEWS[index].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Navigation Controls */}
          <div className="flex justify-center gap-4 mt-12">
            <button 
              onClick={() => setIndex((prev) => (prev - 1 + REVIEWS.length) % REVIEWS.length)}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-brand-green transition-all"
            >
              <ChevronLeft size={24} />
            </button>
            <button 
              onClick={() => setIndex((prev) => (prev + 1) % REVIEWS.length)}
              className="p-4 rounded-2xl bg-white/5 border border-white/10 text-white hover:bg-brand-green transition-all"
            >
              <ChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
