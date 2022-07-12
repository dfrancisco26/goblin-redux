import React from 'react';
import Goblin from './Goblin';

export default function GoblinList({ visibleGoblins, handleDeleteGoblin }) {
  return (
    <div className='goblin-list quarter'>
      {visibleGoblins.map((goblin, i) => {
        return <div onClick={() => handleDeleteGoblin(i)} className='goblin' key={goblin.name + i + goblin.color}>
          <Goblin name = {goblin.name} hp = {goblin.hp} color = {goblin.color} />
        </div>;
      })}
      
      {/* map over your goblins and render out a Goblin component for each goblin. You've seen this before. The only difference here is that you need to pass handleDeleteGoblin (a prop that is a function), as well */}
    </div>
  );
}