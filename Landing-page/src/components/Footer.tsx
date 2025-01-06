import { Twitter, MessageSquare, Youtube, Twitch } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    
    <footer className="bg-black text-gray-400 py-12 border-t border-purple-900/20">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold mb-4">GAMEHUB</h3>
            <p className="text-sm">
              Your ultimate gaming destination.
            </p>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Games</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-500">Action</a></li>
              <li><a href="#" className="hover:text-purple-500">Adventure</a></li>
              <li><a href="#" className="hover:text-purple-500">Strategy</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-white font-bold mb-4">Community</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#" className="hover:text-purple-500">Forums</a></li>
              <li><a href="#" className="hover:text-purple-500">Tournaments</a></li>
              <li><a href="#" className="hover:text-purple-500">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-purple-900/20 mt-8 pt-8 text-sm text-center">
        <p>© {currentYear} GAMEHUB. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}