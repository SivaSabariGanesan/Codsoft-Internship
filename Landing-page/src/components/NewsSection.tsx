import { motion } from 'framer-motion';

const news = [
  {
    image: 'https://images.unsplash.com/photo-1627856014754-2907e2355d54?auto=format&fit=crop&w=600&q=80',
    title: 'New Biomes Update',
    date: 'March 1, 2024',
    description: 'Explore the new magical forests and crystal caves in our latest update!'
  },
  {
    image: 'https://images.unsplash.com/photo-1628277613967-6abca504d0ac?auto=format&fit=crop&w=600&q=80',
    title: 'Community Event',
    date: 'February 28, 2024',
    description: 'Join our building competition this weekend and win amazing prizes!'
  }
];

export function NewsSection() {
  return (
    <div className="py-24 px-4 bg-gray-800/30">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center" style={{ fontFamily: 'MinecraftFont, system-ui' }}>
          Latest News
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {news.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.2 }}
              className="bg-gray-900/50 rounded-lg overflow-hidden"
            >
              <img src={item.image} alt={item.title} className="w-full h-48 object-cover" />
              <div className="p-6">
                <div className="text-green-500 text-sm mb-2">{item.date}</div>
                <h3 className="text-xl font-bold text-white mb-2" style={{ fontFamily: 'MinecraftFont, system-ui' }}>
                  {item.title}
                </h3>
                <p className="text-gray-300 mb-4">{item.description}</p>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="minecraft-btn bg-green-600 text-white px-4 py-2 rounded text-sm"
                >
                  Read More
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}