import React from 'react';
import { Box } from '@material-ui/core';
import Constraint from './Constraint';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

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
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {this.state.items.map((item) => (
          <Box style={{ width: '280px' }}>
            <Constraint key={item.id} ></Constraint>
          </Box>
        ))}
      </Box>
    );
  }
}

export default ConstraintsContainer;
