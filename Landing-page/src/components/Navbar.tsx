import { useState } from 'react';
import { Menu, Gamepad2, X } from 'lucide-react';
import { motion } from 'framer-motion';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Games', href: '#features' },
    { name: 'Community', href: '#stats' },
    { name: 'Support', href: '#contact' }
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-black/90 border-b border-purple-600/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <motion.div 
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-purple-500 flex items-center gap-2"
          >
            <Gamepad2 className="w-6 h-6" />
            GAMEHUB
          </motion.div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <motion.button
                key={item.name}
                onClick={() => scrollToSection(item.href)}
                whileHover={{ scale: 1.05, color: '#9333ea' }}
                className="text-gray-300 hover:text-purple-500 transition-colors"
              >
                {item.name}
              </motion.button>
            ))}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
            >
              Play Now
            </motion.button>
          </div>
          
          {/* Mobile Menu Button */}
          <button 
            className="md:hidden text-gray-300"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden py-4"
          >
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.name}
                  onClick={() => scrollToSection(item.href)}
                  className="text-gray-300 hover:text-purple-500 transition-colors py-2"
                >
                  {item.name}
                </button>
              ))}
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="bg-purple-600 text-white px-6 py-2 rounded hover:bg-purple-700"
              >
                Play Now
              </motion.button>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
}