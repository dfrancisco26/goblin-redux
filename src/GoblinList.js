import React from 'react';
import Goblin from './Goblin';

export default function GoblinList(goblin, visibleGoblins) {
  return (
    {
      visibleGoblins((name, i) => 
      
      <div className='goblin-list quarter'
      onClick={() => handleDeleteGoblin(goblin.name)}
      key={goblin.name + i}
      style={{ background: goblin.color }}>
      <h2>{goblin.name}</h2>
      <h3>{goblin.hp}</h3>

    </div>)
    }
  );
}
