import { FC } from 'react';
import { Draggable } from 'react-beautiful-dnd';

type Props = {
  id: string;
  ja: string;
  en: string;
  thumb: string;
  index: number;
};

const ListItem: FC<Props> = ({ id, ja, en, thumb, index }) => {
  return (
    <Draggable draggableId={id} index={index}>
      {(provided) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
        >
          <div className="characters-thumb">
            <img src={thumb} alt={`${en} thumb`} />
          </div>
          <p>
            {ja}
            <span>{en}</span>
          </p>
        </li>
      )}
    </Draggable>
  );
};

export default ListItem;
