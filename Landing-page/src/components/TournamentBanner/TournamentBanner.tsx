import { motion } from 'framer-motion';
import { Trophy, Clock } from 'lucide-react';

export function TournamentBanner() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      className="bg-gradient-to-r from-purple-900/50 to-purple-600/50 py-8 px-4"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-4">
          <Trophy className="w-12 h-12 text-yellow-400" />
          <div>
            <h3 className="text-2xl font-bold text-white">Weekly Tournament</h3>
            <p className="text-gray-300">Prize pool: $10,000</p>
          </div>
        </div>
        <div className="flex items-center gap-4">
          <Clock className="w-6 h-6 text-white" />
          <p className="text-white">Starts in: 2d 14h 33m</p>
        </div>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-purple-600 text-white px-6 py-2 rounded-lg hover:bg-purple-700"
        >
          Join Now
        </motion.button>
      </div>
    </motion.div>
  );
}