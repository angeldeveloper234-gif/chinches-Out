"use client";
import React, { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import LocationModal from './LocationModal';

const FloatingWhatsApp: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <div className="fixed bottom-8 right-8 z-50 flex flex-col items-end gap-4">
        {/* Notification Bubble */}
        <motion.div
          initial={{ opacity: 0, y: 20, scale: 0.8 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ delay: 2 }}
          className="bg-white px-4 py-2 rounded-2xl shadow-2xl border border-brand-gray relative mb-2 hidden md:block"
        >
          <p className="text-brand-dark text-xs font-black">¿Necesitas ayuda inmediata? 👋</p>
          <div className="absolute -bottom-2 right-6 w-4 h-4 bg-white border-b border-r border-brand-gray rotate-45"></div>
        </motion.div>

        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setIsModalOpen(true)}
          className="relative flex items-center justify-center bg-[#25D366] text-white rounded-full shadow-[0_10px_30px_rgba(37,211,102,0.4)] hover:bg-[#20bd5a] transition-all duration-300 group p-4 overflow-hidden"
          aria-label="Contactar por WhatsApp"
        >
          <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-50"></div>
          <MessageCircle size={32} className="relative z-10" />
          
          {/* Badge */}
          <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white flex items-center justify-center text-[8px] font-bold">1</span>
        </motion.button>
      </div>

      <LocationModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
};

export default FloatingWhatsApp;
