import Image from 'next/image';

export default function PlayerCard({ player }) {
  return (
    <div className="bg-white/10 border border-white/20 rounded-2xl shadow-xl p-6 backdrop-blur-md hover:scale-105 transition transform duration-300">
      <Image
        src={`/skins/${player.skin}`}
        alt={player.name}
        width={100}
        height={100}
        className="mx-auto rounded-lg"
      />
      <h2 className="text-2xl font-bold text-center text-white mt-4">{player.name}</h2>
      <p className="text-center text-gray-300">Punkty: {player.points}</p>
      <div className="flex justify-center flex-wrap gap-3 mt-4">
        {player.tiers.map((tier, index) => (
          <Image
            key={index}
            src={`/tiers/${tier.icon}`}
            alt={tier.name}
            width={40}
            height={40}
            className="rounded"
          />
        ))}
      </div>
    </div>
  );
}
