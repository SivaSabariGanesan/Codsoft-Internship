import { motion } from 'framer-motion';
import { Gamepad, Trophy, Users, Zap } from 'lucide-react';

const features = [
  {
    icon: Gamepad,
    title: 'Endless Games',
    description: 'Access thousands of games across all genres'
  },
  {
    icon: Trophy,
    title: 'Tournaments',
    description: 'Compete in daily tournaments with real prizes'
  },
  {
    icon: Users,
    title: 'Community',
    description: 'Join millions of gamers worldwide'
  },
  {
    icon: Zap,
    title: 'Instant Play',
    description: 'No downloads required, play instantly'
  }
];

export function FeaturesSection() {
  return (
    <div id="features" className="bg-black py-24 px-4 scroll-mt-16">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Why Choose <span className="text-purple-500">GAMEHUB</span>
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Level up your gaming experience with our premium features
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-zinc-900/50 p-6 rounded-lg border border-purple-900/20 hover:border-purple-500/50 transition-colors"
            >
              <feature.icon className="w-12 h-12 text-purple-500 mb-4" />
              <h3 className="text-xl font-bold text-white mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-400">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}