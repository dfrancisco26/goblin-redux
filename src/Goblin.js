import React from 'react';

export default function Goblin({ goblin }) {
  return (
    // be sure you take a look at this component i'm handing you and figure out what props it will need to work correctly.
    <div 
      className='goblin' 
      onClick={() => name.handleDeleteGoblin(goblin.name)/*props.handleDeleteGoblin(props.goblin.name)*/ }>
      <h3>{goblin.name}</h3>  
      <img src="goblin.png" style={{ backgroundColor: goblin.color }} />
      <p>{goblin.hp} HP</p>
    </div>
  );
}
