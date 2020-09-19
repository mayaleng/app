import React from 'react';
import {
  Select, MenuItem, Card, CardContent, FormControl, Box, TextField,
} from '@material-ui/core';

class OuputRule extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'literal',
    };
  }

  onChange = (e) => {
    const {
      value,
      name,
    } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      type,
      literalValue,
    } = this.state;

    return (
      <Card>
        <CardContent>
          <Box mb={2}>
            <FormControl fullWidth={true} >
              <Select value={type} onChange={this.onChange} name="type" >
                <MenuItem value="literal">Literal</MenuItem>
                <MenuItem value="conditional">Conditional</MenuItem>
              </Select>
            </FormControl>
          </Box>
          {type === 'literal'
            && <FormControl>
              <TextField value={literalValue} onChange={this.onChange} name="literalValue"/>
            </FormControl>
          }
        </CardContent>
      </Card>
    );
  }
}

export default OuputRule;
