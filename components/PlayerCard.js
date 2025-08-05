// components/PlayerCard.js
export default function PlayerCard({ player }) {
  return (
    <div className="player-card">
      <div className="player-info">
        <img src={`/skins/${player.skin}`} alt={player.name} />
        <div>
          <div>{player.name}</div>
          <div>Punkty: {player.points}</div>
        </div>
      </div>
      <div className="tiers">
        {player.tiers.map((tier, index) => (
          <div key={index}>
            <img src={`/icons/${tier.icon}`} alt={tier.name} className="tier-icon" />
          </div>
        ))}
      </div>
    </div>
  );
}
