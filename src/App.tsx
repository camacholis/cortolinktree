/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Facebook, MessageCircle, Music2, Instagram, Share2, Globe, ChevronRight } from 'lucide-react';

const SOCIAL_LINKS = [
  {
    name: 'TikTok',
    icon: <Music2 className="w-6 h-6" />,
    url: 'https://www.tiktok.com/@cortocircuito3',
    color: 'hover:bg-[#00f2ea]' ,
    accent: 'group-hover:shadow-[0_0_15px_rgba(0,242,234,0.5)]',
    textColor: 'hover:text-black'
  },
  {
    name: 'Instagram',
    icon: <Instagram className="w-6 h-6" />,
    url: 'https://www.instagram.com/corto____circuito/',
    color: 'hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7]',
    accent: 'group-hover:shadow-[0_0_15px_rgba(238,42,123,0.5)]',
    textColor: 'hover:text-white'
  },
  {
    name: 'WhatsApp',
    icon: <MessageCircle className="w-6 h-6" />,
    url: 'https://wa.me/+573142435764',
    color: 'hover:bg-[#25D366]',
    accent: 'group-hover:shadow-[0_0_15px_rgba(37,211,102,0.5)]',
    textColor: 'hover:text-black'
  },
  {
    name: 'Facebook',
    icon: <Facebook className="w-6 h-6" />,
    url: 'https://www.facebook.com/corto.circuito.818336',
    color: 'hover:bg-[#1877F2]',
    accent: 'group-hover:shadow-[0_0_15px_rgba(24,119,242,0.5)]',
    textColor: 'hover:text-white'
  },
];

const BackgroundElements = () => {
  return (
    <>
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-20 -left-20 w-[600px] h-[600px] bg-blue-500/10 rounded-full blur-[120px]" />
        <div className="absolute -bottom-20 -right-20 w-[600px] h-[600px] bg-purple-500/10 rounded-full blur-[120px]" />
      </div>
      
      {/* Geometric Shapes */}
      <motion.div 
        animate={{ rotate: 12 }}
        className="geometric-shape w-64 h-64 -top-10 right-20 rotate-12 hidden md:block" 
      />
      <motion.div 
        animate={{ rotate: -45 }}
        className="geometric-shape w-96 h-96 bottom-20 -left-20 -rotate-45 hidden md:block" 
      />
      <motion.div 
        animate={{ rotate: 45 }}
        className="geometric-shape w-32 h-32 top-40 left-40 rotate-45 rounded-full border-dashed hidden md:block" 
      />
    </>
  );
};

export default function App() {
  const [logoError, setLogoError] = useState(false);

  return (
    <div className="min-h-screen bg-[#101115] text-white font-sans flex items-center justify-center p-4">
      <BackgroundElements />

      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="glass-card z-10 w-full max-w-md p-10 rounded-[40px] text-center"
      >
        {/* Profile Section */}
        <div className="relative inline-block mb-8">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-500 to-purple-600 p-1"
          >
            <div className="w-full h-full rounded-full bg-[#101115] flex items-center justify-center overflow-hidden border-2 border-[#101115]">
              {!logoError ? (
                <img 
                  src="/src/logo.png" 
                  alt="CortoCircuito Logo" 
                  className="w-full h-full object-cover"
                  onError={() => setLogoError(true)}
                />
              ) : (
                <Share2 className="w-10 h-10 text-white/80" />
              )}
            </div>
          </motion.div>
          <div className="absolute bottom-1 right-1 w-5 h-5 bg-green-500 border-4 border-[#101115] rounded-full shadow-lg" />
        </div>

        <motion.h1 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-white text-3xl font-bold tracking-tight mb-3"
        >
          CortoCircuito
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="text-slate-400 text-sm mb-10 px-4 leading-relaxed"
        >
          Somos distribuidores de materiales y herramientas eléctricas con sede en Paipa Boyacá. Visítanos en:
        </motion.p>

        {/* Social Buttons */}
        <div className="space-y-4">
          <AnimatePresence>
            {SOCIAL_LINKS.map((link, index) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 + index * 0.1 }}
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.98 }}
                className={`
                  group flex items-center justify-between w-full p-4 rounded-2xl bg-white/5 border border-white/10 
                  transition-all duration-300 ${link.color} ${link.textColor}
                `}
                id={`social-${link.name.toLowerCase()}`}
              >
                <div className="flex items-center gap-4">
                  <div className={`p-2 bg-black/40 rounded-lg transition-all duration-300 ${link.accent}`}>
                    {link.icon}
                  </div>
                  <span className="font-medium text-lg">{link.name}</span>
                </div>
                <ChevronRight className="w-5 h-5 text-slate-500 group-hover:text-current transition-colors" />
              </motion.a>
            ))}
          </AnimatePresence>
        </div>

        {/* Footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-10 pt-6 border-t border-white/5 flex flex-col items-center gap-6"
        >
          <div className="flex gap-8 text-slate-500">
            <Instagram className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
            <Globe className="w-5 h-5 hover:text-white cursor-pointer transition-colors" />
          </div>
          <p className="text-[10px] uppercase tracking-[0.2em] text-slate-500 font-semibold font-mono">
           
          </p>
        </motion.div>
      </motion.div>
    </div>
  );
}
