import React from 'react';
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import Constraint from './Constraint';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

const grid = 8;

const getItemStyle = (draggableStyle, isDragging) => ({
  // some basic styles to make the items look a bit nicer
  userSelect: 'none',
  padding: grid * 2,
  margin: `0 0 ${grid}px 0`,

  // change background colour if dragging
  background: isDragging ? 'lightgreen' : 'grey',

  // styles we need to apply on draggables
  ...draggableStyle,
});

const getListStyle = (isDraggingOver) => ({
  background: isDraggingOver ? 'lightblue' : 'lightgrey',
  padding: grid,
  width: 340,
});

class ConstraintsContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      items: [
        {
          id: 'item-1',
        },
        {
          id: 'item-2',
        },
        {
          id: 'item-3',
        },
        {
          id: 'item-4',
        },
        {
          id: 'item-5',
        },
        {
          id: 'item-6',
        },
        {
          id: 'item-7',
        },
        {
          id: 'item-8',
        },
        {
          id: 'item-9',
        },
        {
          id: 'item-10',
        },
      ],
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index,
    );

    this.setState({
      items,
    });
  }

  render() {
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Droppable droppableId="contraints" direction="vertical">
          {(dprovided, dsnapshot) => (
            <div
              ref={dprovided.innerRef}
              style={getListStyle(dsnapshot.isDraggingOver)}
              {...dprovided.droppableProps}
            >
              {this.state.items.map((item, index) => (
                <Draggable
                  key={item.id}
                  draggableId={item.id}
                  index={index}
                >
                  {(provided, snapshot) => (
                    <div>
                      <div
                        ref={provided.innerRef}
                        {...provided.dragHandleProps}
                        {...provided.draggableProps}
                        style={getItemStyle(
                          provided.draggableProps.style,
                          snapshot.isDragging,
                        )}
                      >
                        <Constraint></Constraint>
                      </div>
                      {provided.placeholder}
                    </div>
                  )}
                </Draggable>
              ))}
              {dprovided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>
    );
  }
}

export default ConstraintsContainer;
