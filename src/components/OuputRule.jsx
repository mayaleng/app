import React from 'react';
import {
  Select, MenuItem, Card, CardContent, FormControl, Box,
} from '@material-ui/core';
import TemplateEditor from './TemplateEdidtor';

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
            && <TemplateEditor onChange={this.props.onChange} editorState={this.props.editorState}/>
          }
        </CardContent>
      </Card>
    );
  }
}

export default OuputRule;
