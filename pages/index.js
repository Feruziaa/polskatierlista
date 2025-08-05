import Head from 'next/head';
import { useState } from 'react';

const players = [
  {
    name: 'janekv',
    points: 360,
    skin: '/skins/janekv.png',
    tiers: ['HT1', 'HT1', 'RHT1', 'RHT1', 'RLT1', 'LT3']
  },
  {
    name: 'Obrotowiec',
    points: 246,
    skin: '/skins/Obrotowiec.png',
    tiers: ['HT1', 'RHT1', 'RHT1', 'HT2', 'RHT2', 'HT3']
  }
];

export default function Home() {
  const [search, setSearch] = useState('');

  const filteredPlayers = players.filter(player =>
    player.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div>
      <Head>
        <title>Minecraft Tierlist</title>
      </Head>

      <div className="bg-gray-900 min-h-screen text-white">
        <div className="p-4 flex justify-between items-center">
          <input
            type="text"
            placeholder="Wpisz nick..."
            className="p-2 rounded text-black"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        <div className="p-4">
          {filteredPlayers.map((player, index) => (
            <div key={index} className="bg-gray-800 p-4 mb-4 rounded flex items-center justify-between">
              <div className="flex items-center">
                <img src={player.skin} alt={player.name} className="w-12 h-12 mr-4" />
                <div>
                  <div className="text-lg font-bold">{player.name}</div>
                  <div>Punkty: {player.points}</div>
                </div>
              </div>
              <div className="flex space-x-2">
                {player.tiers.map((tier, i) => (
                  <div key={i} className="bg-gray-700 p-2 rounded">
                    <img src={`/icons/${tier}.png`} alt={tier} className="w-6 h-6" />
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
