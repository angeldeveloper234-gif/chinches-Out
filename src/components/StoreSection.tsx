"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MessageCircle, 
  Search, 
  Bug, 
  Sparkles, 
  ShieldCheck, 
  ShoppingCart, 
  X, 
  Plus, 
  Minus, 
  Trash2,
  ShoppingBag
} from 'lucide-react';
import { PRODUCTS } from '../constants';
import { Product, CartItem } from '../types';

const StoreSection = () => {
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const categories = ['Todos', ...Array.from(new Set(PRODUCTS.map(p => p.category)))];

  const filteredProducts = activeCategory === 'Todos' 
    ? PRODUCTS 
    : PRODUCTS.filter(p => p.category === activeCategory);

  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === product.id);
      if (existingItem) {
        return prevCart.map(item => 
          item.id === product.id 
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // Optional: Open cart or show feedback
    // setIsCartOpen(true);
  };

  const removeFromCart = (productId: string) => {
    setCart(prevCart => prevCart.filter(item => item.id !== productId));
  };

  const updateQuantity = (productId: string, delta: number) => {
    setCart(prevCart => 
      prevCart.map(item => {
        if (item.id === productId) {
          const newQuantity = Math.max(1, item.quantity + delta);
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  };

  const cartTotal = cart.reduce((acc, item) => acc + (item.price * item.quantity), 0);
  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  const openWhatsApp = () => {
    const cartDetails = cart.map(item => `• ${item.name} (x${item.quantity}) - $${item.price * item.quantity} MXN`).join('\n');
    const message = `*NUEVO PEDIDO - CHINCHESOUT*\n\nHola! Me gustaría realizar el siguiente pedido:\n\n${cartDetails}\n\n*TOTAL: $${cartTotal} MXN*\n\n¿Podrían confirmar disponibilidad y método de entrega?`;
    const url = `https://wa.me/529991234567?text=${encodeURIComponent(message)}`;
    window.open(url, '_blank');
  };

  return (
    <section id="tienda" className="py-24 bg-white overflow-hidden relative">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 bg-brand-green/10 text-brand-green px-4 py-2 rounded-full text-sm font-black uppercase tracking-widest mb-6"
          >
            <Sparkles size={16} />
            Catálogo Profesional
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-3xl md:text-6xl font-black text-brand-dark mb-6 leading-tight"
          >
            Equípate contra las <span className="text-brand-green">Plagas</span>
          </motion.h2>
          <p className="text-gray-500 text-lg">
            Productos de grado industrial ahora a tu alcance. 
            Calidad certificada para resultados profesionales en casa o negocio.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16 px-4">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`relative px-4 md:px-8 py-2 md:py-3 rounded-2xl font-black transition-all overflow-hidden text-xs md:text-base ${
                activeCategory === cat 
                  ? 'text-white' 
                  : 'text-brand-dark bg-brand-gray/50 hover:bg-brand-gray'
              }`}
            >
              {activeCategory === cat && (
                <motion.div 
                  layoutId="activeTab"
                  className="absolute inset-0 bg-brand-green shadow-lg shadow-brand-green/30"
                  transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                />
              )}
              <span className="relative z-10 flex items-center gap-2">
                {cat === 'Todos' ? <Search size={18} /> : <Bug size={18} />}
                {cat}
              </span>
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
          <AnimatePresence mode='popLayout'>
            {filteredProducts.map((product) => (
              <motion.div
                layout
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                whileHover={{ y: -12 }}
                className="bg-white rounded-[2rem] p-6 shadow-xl shadow-brand-dark/5 border border-brand-gray group relative flex flex-col h-full"
              >
                {product.stock === 0 && (
                  <div className="absolute inset-0 bg-white/80 backdrop-blur-[2px] z-20 flex items-center justify-center">
                    <span className="bg-red-500 text-white px-6 py-2 font-black text-sm rounded-full shadow-2xl -rotate-12 border-4 border-white">
                      AGOTADO
                    </span>
                  </div>
                )}
                
                {/* Image Container */}
                <div className="relative aspect-[4/5] mb-6 rounded-[1.5rem] overflow-hidden bg-brand-gray/30">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur px-4 py-2 rounded-xl font-black text-[10px] uppercase tracking-widest text-brand-dark shadow-sm">
                    {product.category}
                  </div>
                  
                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 bg-brand-dark/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center p-6">
                    <button 
                      onClick={() => addToCart(product)}
                      className="bg-white text-brand-dark px-6 py-3 rounded-xl font-black flex items-center gap-2 scale-90 group-hover:scale-100 transition-transform shadow-2xl"
                    >
                      <ShoppingCart size={20} className="text-brand-green" />
                      Agregar al Carrito
                    </button>
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-black text-brand-dark group-hover:text-brand-green transition-colors leading-tight">
                      {product.name}
                    </h3>
                  </div>
                  
                  <p className="text-gray-500 text-sm mb-6 line-clamp-2 font-medium">
                    {product.description}
                  </p>
                  
                  <div className="mt-auto pt-6 border-t border-brand-gray flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="text-[10px] text-gray-400 font-black uppercase tracking-widest">Inversión</span>
                      <span className="text-3xl font-black text-brand-dark">${product.price}</span>
                    </div>
                    
                    <button
                      disabled={product.stock === 0}
                      onClick={() => addToCart(product)}
                      className="relative overflow-hidden bg-brand-green text-white p-4 rounded-2xl transition-all shadow-lg shadow-brand-green/20 hover:scale-110 active:scale-95 group/btn"
                    >
                      <div className="absolute inset-0 animate-shimmer pointer-events-none opacity-0 group-hover/btn:opacity-100"></div>
                      <Plus size={24} className="relative z-10" />
                    </button>
                  </div>
                </div>
                
                {/* Certification Badge */}
                <div className="absolute -top-3 -right-3 bg-brand-yellow text-brand-dark px-3 py-1 rounded-lg text-[10px] font-black shadow-lg flex items-center gap-1">
                  <ShieldCheck size={12} />
                  CALIDAD PRO
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* Trust Footer */}
        <div className="mt-20 pt-10 border-t border-brand-gray flex flex-wrap justify-center gap-12 opacity-50 grayscale hover:grayscale-0 transition-all">
          <div className="flex items-center gap-2 font-black text-sm text-brand-dark uppercase tracking-widest">
            <ShieldCheck size={20} className="text-brand-green" />
            Compra Segura
          </div>
          <div className="flex items-center gap-2 font-black text-sm text-brand-dark uppercase tracking-widest">
            <Bug size={20} className="text-brand-green" />
            Efectividad 100%
          </div>
          <div className="flex items-center gap-2 font-black text-sm text-brand-dark uppercase tracking-widest">
            <Sparkles size={20} className="text-brand-green" />
            Grado Industrial
          </div>
        </div>
      </div>

      {/* Floating Cart Button */}
      <AnimatePresence>
        {cartCount > 0 && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            onClick={() => setIsCartOpen(true)}
            className="fixed bottom-8 right-8 z-40 bg-brand-green text-white p-5 rounded-full shadow-2xl shadow-brand-green/40 flex items-center justify-center"
          >
            <ShoppingCart size={28} />
            <span className="absolute -top-2 -right-2 bg-brand-yellow text-brand-dark w-8 h-8 rounded-full flex items-center justify-center font-black text-sm border-4 border-white shadow-lg">
              {cartCount}
            </span>
          </motion.button>
        )}
      </AnimatePresence>

      {/* Cart Sidebar */}
      <AnimatePresence>
        {isCartOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-brand-dark/40 backdrop-blur-sm z-50"
            />
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed right-0 top-0 bottom-0 w-full md:max-w-md bg-white z-[60] shadow-2xl flex flex-col"
            >
              <div className="p-4 md:p-8 border-b border-brand-gray flex items-center justify-between">
                <div>
                  <h3 className="text-lg md:text-2xl font-black text-brand-dark">Tu Carrito</h3>
                  <p className="text-[10px] md:text-sm text-gray-500 font-bold uppercase tracking-wider">{cartCount} productos</p>
                </div>
                <button 
                  onClick={() => setIsCartOpen(false)}
                  className="p-1.5 md:p-3 bg-brand-gray/50 hover:bg-brand-gray rounded-xl transition-colors"
                >
                  <X size={18} className="md:w-6 md:h-6 text-brand-dark" />
                </button>
              </div>

              <div className="flex-1 overflow-y-auto p-4 md:p-8 space-y-4 md:space-y-6">
                {cart.length === 0 ? (
                  <div className="h-full flex flex-col items-center justify-center text-center">
                    <div className="w-24 h-24 bg-brand-gray/50 rounded-full flex items-center justify-center mb-6">
                      <ShoppingBag size={40} className="text-gray-400" />
                    </div>
                    <h4 className="text-xl font-black text-brand-dark mb-2">Carrito vacío</h4>
                    <p className="text-gray-500 font-medium mb-8">Parece que aún no has agregado nada.</p>
                    <button 
                      onClick={() => setIsCartOpen(false)}
                      className="bg-brand-green text-white px-8 py-3 rounded-2xl font-black shadow-lg shadow-brand-green/20 hover:scale-105 transition-transform"
                    >
                      Seguir Comprando
                    </button>
                  </div>
                ) : (
                  cart.map((item) => (
                    <motion.div 
                      key={item.id}
                      layout
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex gap-4 p-4 rounded-2xl border border-brand-gray hover:border-brand-green/30 transition-colors"
                    >
                      <div className="w-20 h-20 rounded-xl overflow-hidden bg-brand-gray/30 shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start mb-1">
                          <h4 className="font-black text-brand-dark text-lg truncate">{item.name}</h4>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-gray-400 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        <p className="text-brand-green font-black text-sm mb-3">${item.price} c/u</p>
                        
                        <div className="flex items-center gap-3">
                          <div className="flex items-center bg-brand-gray/50 rounded-lg p-1">
                            <button 
                              onClick={() => updateQuantity(item.id, -1)}
                              className="p-1 hover:bg-white rounded-md transition-colors"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-8 text-center font-black text-sm">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, 1)}
                              className="p-1 hover:bg-white rounded-md transition-colors"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <span className="ml-auto font-black text-brand-dark">
                            ${item.price * item.quantity}
                          </span>
                        </div>
                      </div>
                    </motion.div>
                  ))
                )}
              </div>

              <div className="p-4 md:p-8 bg-brand-gray/30 border-t border-brand-gray">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-xs md:text-sm text-gray-500 font-black uppercase tracking-widest">Total Estimado</span>
                  <span className="text-2xl md:text-3xl font-black text-brand-dark">${cartTotal} <span className="text-sm">MXN</span></span>
                </div>
                
                <button
                  disabled={cart.length === 0}
                  onClick={openWhatsApp}
                  className="w-full bg-[#25D366] text-white py-4 md:py-5 rounded-[1.5rem] font-black text-base md:text-lg flex items-center justify-center gap-3 shadow-xl shadow-brand-green/20 hover:scale-[1.02] active:scale-[0.98] transition-all disabled:opacity-50 disabled:grayscale disabled:scale-100"
                >
                  <MessageCircle size={22} className="md:w-6 md:h-6" />
                  Confirmar por WhatsApp
                </button>
                <p className="text-center text-[10px] text-gray-400 font-black uppercase tracking-widest mt-4">
                  Finaliza tu compra directamente con un asesor
                </p>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  );
};

export default StoreSection;
