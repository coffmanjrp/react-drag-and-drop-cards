import { useState, useEffect } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import charactersData from './charactersData';
import { List } from './components';
import './App.css';

function App() {
  const [characters, setCharacters] = useState(charactersData);

  const handleOnDragEnd = (result) => {
    const items = Array.from(characters);
    const [reorderedItem] = items.splice(result.source.index, 1);

    if (!result.destination) {
      return false;
    } else {
      items.splice(result.destination.index, 0, reorderedItem);

      setCharacters(items);

      localStorage.setItem('characters', JSON.stringify(items));
    }

    console.log(result);
  };

  useEffect(() => {
    const ls = localStorage.getItem('characters');

    if (ls) {
      setCharacters(JSON.parse(ls));
    }
  }, []);

  return (
    <div className="App">
      <header className="App-header">
        <h1>React Drag &amp; Drop</h1>
        <DragDropContext onDragEnd={handleOnDragEnd}>
          <List characters={characters} />
        </DragDropContext>
      </header>
    </div>
  );
}

export default App;
