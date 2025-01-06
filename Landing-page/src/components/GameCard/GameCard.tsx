import { motion } from 'framer-motion';
import { Users, Star } from 'lucide-react';
import type { Game } from '../../types/game';

export function GameCard({ game }: { game: Game }) {
  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      className="bg-zinc-900/50 rounded-lg overflow-hidden border border-purple-900/20"
    >
      <img src={game.image} alt={game.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-bold text-white mb-2">{game.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{game.description}</p>
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-2 text-gray-400">
            <Users className="w-4 h-4" />
            <span className="text-sm">{game.players}+ playing</span>
          </div>
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-500" />
            <span className="text-white">{game.rating}</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}