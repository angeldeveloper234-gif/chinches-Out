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
            className="text-3xl md:text-5xl font-black text-brand-dark mb-4 md:mb-6"
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

      </div>
    </section>
  );
};

export default Certifications;
