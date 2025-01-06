import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { TournamentBanner } from './components/TournamentBanner/TournamentBanner';
import { GameGrid } from './components/GameGrid/GameGrid';
import { FeaturesSection } from './components/FeaturesSection';
import { StatsSection } from './components/StatsSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-black">
      <Navbar />
      <HeroSection />
      <TournamentBanner />
      <GameGrid />
      <FeaturesSection />
      <StatsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
export default App;