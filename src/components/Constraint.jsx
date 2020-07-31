import React from 'react';
import {
  Card, CardContent, CardActions, Typography, Chip,
} from '@material-ui/core';

class Constraint extends React.Component {
  render() {
    return (
      <Card variant="outlined">
        <CardContent>
          {this.props.a}
          <Typography color="textSecondary" gutterBottom>Word type</Typography>
          <Typography variant="h5" component="h2">Adj</Typography>
        </CardContent>
        <CardActions>
          <li style={ { listStyle: 'none' } }>
            <Chip style={ { margin: '5px' } } label="transitive" onDelete={() => (true)}/>
            <Chip style={ { margin: '5px' } } label="masculine" onDelete={() => (true)}/>
          </li>
        </CardActions>
      </Card>
    );
  }
}

export default Constraint;
