import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputBase,
} from "@material-ui/core";
import EditIcon from "@material-ui/icons/Edit";

import React from "react";
import EditConditionalTemplate from "./EditConditionalTemplate";

class ConditionalTemplate extends React.Component {
  constructor() {
    super();
    this.state = {
      openedIndex: -1,
    };
  }

  openEditForm = (index) => {
    this.setState({
      openedIndex: index,
    });
  };

  handleCloseEdit = () => {
    this.setState({
      openedIndex: -1,
    });
  };

  render() {
    const {
      raw = {
        conditional: {
          or: [],
        },
      },
    } = this.props.rule;

    const {
      conditional: { or = [] },
    } = raw;

    return (
      <Grid p={0}>
        {or.map((_, index) => (
          <Box display="flex">
            <InputBase
              readOnly
              placeholder={`Path ${index + 1}`}
              style={{ marginLeft: 1 }}
            ></InputBase>
            <IconButton
              style={{ marginRight: 1 }}
              onClick={() => this.openEditForm(index)}
            >
              <EditIcon color="action" />
            </IconButton>
          </Box>
        ))}

        <FormControl>
          <Button variant="outlined">Add new path</Button>
        </FormControl>
        {this.state.openedIndex >= 0 && (
          <EditConditionalTemplate
            open={true}
            operand={or[this.state.openedIndex]}
            words={this.props.words}
            onClose={this.handleCloseEdit}
          ></EditConditionalTemplate>
        )}
      </Grid>
    );
  }
}

export default ConditionalTemplate;
