import { useState, useEffect } from 'react';
import PlayerCard from '../components/PlayerCard';
import SearchBar from '../components/SearchBar';
import Image from 'next/image';

export default function Home() {
  const [players, setPlayers] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetch('/players.json')
      .then((res) => res.json())
      .then((data) => setPlayers(data))
      .catch((err) => console.error('Failed to load players.json:', err));
  }, []);

  const filteredPlayers = players.filter((player) =>
    player.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container mx-auto p-4">
      <Image src="/logo.png" alt="Logo" width={200} height={100} className="mx-auto" />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-6">
        {filteredPlayers.map((player, index) => (
          <PlayerCard key={index} player={player} />
        ))}
      </div>
    </div>
  );
}
