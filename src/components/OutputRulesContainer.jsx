import React, { forwardRef } from 'react';
import { Box } from '@material-ui/core';
import { ReactSortable } from 'react-sortablejs';
import OuputRule from './OuputRule';

const CustomBox = forwardRef((props, ref) => (
  <Box display="flex" flexWrap="wrap" justifyContent="center" ref={ref}>{props.children}</Box>
));

class OutputRulesContainer extends React.Component {
  constructor() {
    super();
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
      ],
    };
  }

  setList = (items) => {
    this.setState({ items });
  }

  render() {
    return (
      <ReactSortable tag={CustomBox} list={this.state.items} setList={this.setList} animation="200">
        {this.state.items.map((item) => (
          <Box key={item.id} style={{ width: '240px' }} m={1}>
            <OuputRule a={item.id}></OuputRule>
          </Box>
        ))}
      </ReactSortable>
    );
  }
}

export default OutputRulesContainer;
