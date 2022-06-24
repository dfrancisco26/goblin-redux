import './App.css';
import { useState } from 'react';
import GoblinForm from './GoblinForm';
import GoblinList from './GoblinList';
import Goblin from './Goblin';

function App() {
  const [name, setName] = useState('');
  const [hp, setHp] = useState(1);
  const [color, setColor] = useState('');
  const [visibleGoblins, setVisibleGoblins] = useState(allGoblins);
  const [search, setSearch] = useState('');
  const [allGoblins, setAllGoblins] = useState([
    {
      name: 'Gobert Downy Jr',
      HP: 4,
      color: 'lightblue',
    },
    {
      name: 'Gob Sagat',
      HP: 12,
      color: 'orange',
    },
    {
      name: 'Gob the Guilder',
      HP: 5,
      color: 'lightgreen'
    }
  ]);


  /* 
    track: 
      allGoblins, an array of all goblins
      visibleGoblins, a second array of goblins: this one is the filtered version of the above allGoblins array
      goblinFormName, which is how we track the user input for the current name of the goblin in the form
      goblinFormHP, which is how we track the user input for the current HP of the goblin in the form
      goblinFormColor, which is how we track the user input for the current color of the goblin in the form
*/
  
  function submitGoblin(e) {
    e.preventDefault();

    const goblin = {
      name: name,
      hp: hp,
      color: color,
    };
    const updatedGoblins = [...allGoblins, goblin];
    setAllGoblins(updatedGoblins);
    // on submit, make a new goblin object with a name that comes from the form state, an hp that comes from the form state, and a color that comes from the form state

    // update the allGoblins array. Add the new goblin to the allGoblins array immutably.
    
    // clear out the goblin form state items by setting them to empty strings. This will cause the form to reset in the UI.
  }

//  function handleDeleteGoblin(name) {
    // find the index of the goblin in allGoblins with this name

    // use splice to delete the goblin object at this index

    // update the allGoblins array immutably to this new, smaller array
//  }

  function handleFilterGoblins(search) {
    setSearch(search);
    const updatedGoblins = allGoblins
      .filter(goblin => goblin.name.includes(search));

    setVisibleGoblins(updatedGoblins);
    // use the filter method to get an array of goblins whose name includes this search argument

    // if there is a search argument, set the visible goblins to the filtered goblins
    // if the search argument is undefined, set the visible goblins in state to just be the array of all goblins
  }


  return (
    <div className="App">
      <div className='current-goblin quarter'>
        <Goblin goblin={{
          /* 
            use the goblin form state to make a goblin object and to display it. 
            This will let the user see the current form state 
          */
        }}/>
      </div>
      <div className='goblin-filter quarter'>
        Filter Goblins
        {/* note that handleFilterGoblins is defined upstairs. This is where the allGoblins array gets filtered */}
        <input onChange={(e) => handleFilterGoblins(e.target.value)} />
      </div>
      <GoblinForm 
        submitGoblin={submitGoblin}
        name={name}
        setName={setName}
        color={color}
        setColor={setColor}
        hp={hp}
        setHp={setHp} 
        /*
        This component takes in a ton of props! 
        Here is the list of props to pass:
          submitGoblin,
          goblinFormName, 
          setGoblinFormName,
          goblinFormColor, 
          setGoblinFormColor,
          goblinFormHP, 
          setGoblinFormHP,
        */
      />
      <GoblinList 
        allGoblins={allGoblins} visibleGoblins={visibleGoblins} // this takes in an array of goblins. If the filteredGoblins has a length, use that array. Otherwise, use the allGoblins array 
         // note that the goblin list has access to the ability to delete
      />
    </div>
  );
}

export default App;
