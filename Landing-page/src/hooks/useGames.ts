import { useState, useEffect } from 'react';
import type { Game } from '../types/game';

const SAMPLE_GAMES: Game[] = [
  {
    id: 1,
    title: "Cyber Warriors",
    description: "Fast-paced multiplayer combat in a cyberpunk world",
    image: "https://images.unsplash.com/photo-1538481199705-c710c4e965fc?auto=format&fit=crop&w=800&q=80",
    players: 1500,
    rating: 4.8
  },
  {
    id: 2,
    title: "Space Explorers",
    description: "Explore vast galaxies in this multiplayer space adventure",
    image: "https://images.unsplash.com/photo-1614728263952-84ea256f9679?auto=format&fit=crop&w=800&q=80",
    players: 2300,
    rating: 4.9
  },
  {
    id: 3,
    title: "Fantasy Realms",
    description: "Epic fantasy MMO with magical creatures and quests",
    image: "https://images.unsplash.com/photo-1511512578047-dfb367046420?auto=format&fit=crop&w=800&q=80",
    players: 3100,
    rating: 4.7
  }
];

export function useGames() {
  const [games, setGames] = useState<Game[]>(SAMPLE_GAMES);

  useEffect(() => {
    // In a real app, you would fetch games from an API here
    setGames(SAMPLE_GAMES);
  }, []);

  return { games };
}