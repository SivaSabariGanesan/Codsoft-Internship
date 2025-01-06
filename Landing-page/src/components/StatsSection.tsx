import { motion } from 'framer-motion';

const stats = [
  { value: '10M+', label: 'Active Players' },
  { value: '1000+', label: 'Games Available' },
  { value: '24/7', label: 'Live Support' },
  { value: '99.9%', label: 'Uptime' }
];

export function StatsSection() {
  return (
    <div id="stats" className="bg-zinc-900/50 py-16 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl font-bold text-purple-500 mb-2">
                {stat.value}
              </div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}