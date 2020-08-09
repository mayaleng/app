import React from 'react';
import { Select, MenuItem, Paper } from '@material-ui/core';

class OuputRule extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      type: 'literal',
    };
  }

  render() {
    return (
      <Paper>
        <Select value={this.state.type} button>
          <MenuItem value="literal">Literal</MenuItem>
          <MenuItem value="direct-translation">Translation</MenuItem>
        </Select>
      </Paper>
    );
  }
}

export default OuputRule;
