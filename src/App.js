import React, { useState, useEffect } from 'react';
import './App.css';
import BotCollection from './componets/BotCollection';
import YourBotArmy from './componets/YourBotArmy';

function App() {
  const [bots, setBots] = useState([]);
  const [botArmy, setBotArmy] = useState([]); 

  useEffect(() => {
    fetch('http://localhost:3000/bots')
      .then(res => res.json())
      .then(data => setBots(data))
      .catch(error => console.error('Error fetching bots:', error));
  }, []);

  const enlistBot = (bot) => {
    if (!botArmy.find(b => b.id === bot.id)) {
      setBotArmy(prevArmy => [...prevArmy, bot]);
    }
  };

  const releaseBot = (bot) => {
    setBotArmy(prevArmy => prevArmy.filter(b => b.id !== bot.id));
  };

  const dischargeBot = (bot) => {
    const updatedBots = bots.filter(b => b.id !== bot.id);
    setBots(updatedBots);
    setBotArmy(prevArmy => prevArmy.filter(b => b.id !== bot.id));
  };

  return (
    <div className='App'>
      <h1>Bot Battlr</h1>
      <YourBotArmy
        bots={botArmy}
        releaseBot={releaseBot}
        dischargeBot={dischargeBot}
      />
      <BotCollection
      
        bots={bots}
        enlistBot={enlistBot}
        dischargeBot={dischargeBot}
      />
    </div>
  );
}

export default App;
