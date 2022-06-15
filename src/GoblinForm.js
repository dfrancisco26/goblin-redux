import React from 'react';

export default function GoblinForm({
  submitGoblin,
  name,
  setName,
  hp,
  setHp,
  color, 
  setColor
}) {
  return (
    <div className='goblin-form-container quarter'>
      <form className='goblin-form' onSubmit={submitGoblin}>
        <label>
            Name
          
          <input value={name} onChange={e => setName(e.target.value)} />
        </label>
        <label>
            HP
          <input type="number" value={hp} onChange={e => setHp(e.target.value)} />
        </label>
        <label>
            Color
          <select value={color} onChange={e => setColor(e.target.value)}>
            <option value="lightgreen">Green</option>
            <option value="lightblue">Blue</option>
            <option value="pink">Pink</option>
            <option value="purple">Purple</option>
            <option value="orange">Orange</option>
          </select>
        </label>
        <button>Add Goblin</button>

      </form>  
    </div>
  );
}

/* onChange, use the prop setGoblinFormName to set the parent state */
{/* onChange, use the prop setGoblinFormColor to set the parent state */}
{/* note that we're controlling the input's value from parent state */}

{/* note that we're controlling the input's value from parent state */}
{/* onChange, use the prop setGoblinFormHP to set the parent state */}

{/* note that we're controlling the input's value from parent state */}

/* on submit, call the submitGoblin function, passed in as a prop.
      Note that you don't need to define an anonymous function--you can just name the submitGoblin prop here and it will work.
      Take a minute to try and puzzle out why that is: how is this function different from other functions, 
      where you do need to create an anonymous function in the `onClick` or `onSubmit` spot? */