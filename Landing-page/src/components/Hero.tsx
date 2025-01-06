import { motion } from 'framer-motion';
import { Pickaxe } from 'lucide-react';

export function Hero() {
  return (
    <div className="relative z-10 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="space-y-6"
      >
        <h1 className="text-6xl font-bold text-white drop-shadow-lg" style={{ fontFamily: 'MinecraftFont, system-ui' }}>
          Welcome to Minicraft
        </h1>
        <p className="text-xl text-gray-200 max-w-2xl mx-auto">
          Build, explore, and survive in a world of endless possibilities
        </p>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-green-600 text-white px-8 py-3 rounded-lg font-bold flex items-center gap-2 mx-auto hover:bg-green-700 transition-colors"
        >
          <Pickaxe className="w-5 h-5" />
          Start Playing
        </motion.button>
      </motion.div>
    </div>
  );
}