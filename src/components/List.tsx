import { FC } from 'react';
import { Droppable } from 'react-beautiful-dnd';
import { ListItem } from '.';
import { CharactersData } from 'App';

type Props = {
  characters: CharactersData[];
};

const List: FC<Props> = ({ characters }) => {
  console.log('characters', characters);

  return (
    <Droppable droppableId="characters">
      {(provided) => (
        <ul
          className="characters"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {characters &&
            characters.map(({ id, ja, en, thumb }, index) => (
              <ListItem key={id} {...{ id, ja, en, thumb, index }} />
            ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default List;
