import { motion } from 'framer-motion';
import { Gamepad2 } from 'lucide-react';

export function HeroSection() {
  return (
    <div className="min-h-screen bg-black flex items-center relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,_#9333ea_0%,_transparent_20%),radial-gradient(circle_at_70%_70%,_#6b21a8_0%,_transparent_20%)] opacity-20" />
      
      <div className="max-w-7xl mx-auto px-4 py-32 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Level Up Your <span className="text-purple-500">Gaming</span> Experience
            </h1>
            <p className="text-gray-400 text-lg mb-8">
              Join millions of players worldwide in the most immersive gaming experience ever created.
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-purple-600 text-white px-8 py-3 rounded-lg flex items-center gap-2 hover:bg-purple-700"
            >
              Play Now
              <Gamepad2 className="w-5 h-5" />
            </motion.button>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="aspect-square rounded-full bg-purple-500/20 absolute -inset-4 blur-3xl" />
            <img
              src="https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80"
              alt="Gaming Setup"
              className="rounded-lg relative z-10"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
}