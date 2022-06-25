import React from 'react';

export default function Goblin({ name, hp, color }) {
  return (
    // be sure you take a look at this component i'm handing you and figure out what props it will need to work correctly.
    <div 
      className='goblin'> 
    
      <h3>{name}</h3>  
      <img src="goblin.png" style={{ backgroundColor: color }} />
      <p>{hp} HP</p>
    </div>
  );
}
