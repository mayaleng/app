import React from 'react';
import { Select, MenuItem, Card, CardContent } from '@material-ui/core';

class OuputRule extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'literal',
    };
  }

  render() {
    return (
      <Card>
        <CardContent>

          {this.props.a}
        </CardContent>
        <CardContent>

          <Select value={this.state.type}>
            <MenuItem value="literal">Literal</MenuItem>
            <MenuItem value="direct-translation">Translation</MenuItem>
          </Select>
        </CardContent>
      </Card>
    );
  }
}

export default OuputRule;
