"use client";
import React from 'react';
import { ShieldCheck, FileCheck, Droplets, Award, Truck, BadgeCheck } from 'lucide-react';
import { motion } from 'framer-motion';

const Certifications: React.FC = () => {
  const trustItems = [
    {
      icon: <FileCheck size={32} />,
      title: "Licencia Sanitaria",
      desc: "Documentación oficial COFEPRIS",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <BadgeCheck size={32} />,
      title: "Certificación Pro",
      desc: "Técnicos altamente capacitados",
      color: "bg-brand-green/10 text-brand-green"
    },
    {
      icon: <Truck size={32} />,
      title: "Envío Express",
      desc: "Productos en menos de 24h",
      color: "bg-orange-50 text-orange-600"
    },
    {
      icon: <Award size={32} />,
      title: "Garantía Total",
      desc: "Resultados por escrito",
      color: "bg-brand-yellow/10 text-brand-yellow"
    }
  ];

  return (
    <section id="certificaciones" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl md:text-5xl font-black text-brand-dark mb-6"
          >
            Sello de <span className="text-brand-green">Confianza</span> Profesional
          </motion.h2>
          <p className="text-gray-500 max-w-2xl mx-auto text-lg font-medium">
            No somos aficionados. Nuestro compromiso es tu tranquilidad y la seguridad de tu espacio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {trustItems.map((item, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ scale: 1.05 }}
              className="bg-brand-gray/30 p-8 rounded-[2.5rem] border border-brand-gray group transition-all"
            >
              <div className={`${item.color} w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform`}>
                {item.icon}
              </div>
              <h3 className="text-xl font-black text-brand-dark mb-2">{item.title}</h3>
              <p className="text-gray-500 text-sm font-bold uppercase tracking-wider leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 relative">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-brand-dark rounded-[2.5rem] md:rounded-[3rem] p-8 md:p-16 flex flex-col lg:flex-row items-center justify-between gap-12 overflow-hidden relative"
          >
            {/* Decorative background for the CTA box */}
            <div className="absolute inset-0 opacity-10 pointer-events-none">
              <div className="absolute top-0 right-0 w-64 h-64 bg-brand-green rounded-full blur-[100px]"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-yellow rounded-full blur-[100px]"></div>
            </div>

            <div className="text-center lg:text-left relative z-10">
              <h3 className="text-2xl md:text-4xl font-black text-white mb-4">
                ¿Plaga persistente? <br />
                <span className="text-brand-yellow text-xl md:text-4xl">La eliminamos hoy mismo.</span>
              </h3>
              <p className="text-gray-400 font-medium max-w-xl">
                Nuestro protocolo avanzado garantiza la eliminación total desde la primera aplicación.
              </p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-brand-green text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl shadow-brand-green/20 relative z-10"
            >
              Consultar Garantía
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certifications;
