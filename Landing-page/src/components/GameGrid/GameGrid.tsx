import { motion } from 'framer-motion';
import { GameCard } from '../GameCard/GameCard';
import { useGames } from '../../hooks/useGames';

export function GameGrid() {
  const { games } = useGames();

  return (
    <div className="py-16 px-4" id="games">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-white mb-8">
          Popular <span className="text-purple-500">Games</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {games.map((game) => (
            <GameCard key={game.id} game={game} />
          ))}
        </div>
      </motion.div>
    </div>
  );
}