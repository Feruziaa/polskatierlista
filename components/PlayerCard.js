import Image from 'next/image';

export default function PlayerCard({ player }) {
  return (
    <div className="border rounded-xl p-4 shadow-md text-center">
      <Image
        src={`/skins/${player.skin}`}
        alt={player.name}
        width={100}
        height={100}
        className="mx-auto"
      />
      <h2 className="text-xl font-bold mt-2">{player.name}</h2>
      <p className="text-gray-600">Punkty: {player.points}</p>
      <div className="flex justify-center flex-wrap gap-2 mt-2">
        {player.tiers.map((tier, index) => (
          <Image
            key={index}
            src={`/tiers/${tier.icon}`}
            alt={tier.name}
            width={40}
            height={40}
          />
        ))}
      </div>
    </div>
  );
}
