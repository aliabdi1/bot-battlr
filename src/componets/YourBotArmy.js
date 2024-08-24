import React from 'react';

function YourBotArmy({ bots, releaseBot, dischargeBot }) {
  return (
    <div className='your-bot-army'>
      <h2>Your Bot Army</h2>
      <div className='bot-grid'>
        {bots.map(bot => (
          <div key={bot.id} className='bot-card'>
            <img src={bot.avatar_url} alt={bot.name} />
            <h3>{bot.name}</h3>
            <p>Class: {bot.not_class}</p>
            <p>Health: {bot.health}</p>
            <p>Damage: {bot.damage}</p>
            <p>Armor: {bot.armor}</p>
            <button onClick={() => releaseBot(bot)}>Release</button>
            <button onClick={() => dischargeBot(bot)}>X</button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default YourBotArmy;
