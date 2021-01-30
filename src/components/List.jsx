import { Droppable } from 'react-beautiful-dnd';
import ListItem from './ListItem';

const List = ({ characters }) => {
  return (
    <Droppable droppableId="characters">
      {(provided) => (
        <ul
          className="characters"
          ref={provided.innerRef}
          {...provided.droppableProps}
        >
          {characters.map(({ id, ja, en, thumb }, index) => (
            <ListItem
              key={id}
              id={id}
              ja={ja}
              en={en}
              thumb={thumb}
              index={index}
            />
          ))}
          {provided.placeholder}
        </ul>
      )}
    </Droppable>
  );
};

export default List;
