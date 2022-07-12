import React from 'react';

export default function Goblin({ name, hp, color }) {
  return (
    // be sure you take a look at this component i'm handing you and figure out what props it will need to work correctly.
    <div style={{ backgroundColor: color }}
      className='goblin'> 
    
      <h3>{name}</h3>  
      <img src="goblin.png" />
      <p>{hp} HP</p>
    </div>
  );
}
