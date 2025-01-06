import { motion } from 'framer-motion';
import { MessageSquare, Mail, Send } from 'lucide-react';

export function ContactSection() {
  return (
    <div id="contact" className="bg-black py-24 px-4 scroll-mt-16">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-white mb-4">
            Need <span className="text-purple-500">Support?</span>
          </h2>
          <p className="text-gray-400">
            Our gaming support team is here to help 24/7
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-zinc-900/50 p-8 rounded-lg border border-purple-900/20"
        >
          <form className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">
                Email
              </label>
              <div className="relative">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" />
                <input
                  type="email"
                  id="email"
                  className="w-full bg-black border border-purple-900/20 rounded-lg py-2 pl-10 pr-4 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">
                Message
              </label>
              <div className="relative">
                <MessageSquare className="absolute left-3 top-3 text-gray-400 w-5 h-5" />
                <textarea
                  id="message"
                  rows={4}
                  className="w-full bg-black border border-purple-900/20 rounded-lg py-2 pl-10 pr-4 text-white focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                  placeholder="How can we help?"
                />
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="w-full bg-purple-600 text-white py-3 rounded-lg flex items-center justify-center gap-2 hover:bg-purple-700"
            >
              Send Message
              <Send className="w-4 h-4" />
            </motion.button>
          </form>
        </motion.div>

        <div className="text-center mt-16 text-gray-400">
          <p>Developed with ❤️ by <a href="https://github.com/sivasabariganesan" target="_blank" rel="noopener noreferrer" className="text-purple-500 hover:text-purple-400">Sivasabari Ganesan</a></p>
          <p className="mt-2 text-sm">Powering the future of gaming</p>
        </div>
      </div>
    </div>
  );
}