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

function compileCoditional(raw) {}

class ConditionalTemplate extends React.Component {
  constructor() {
    super();
    this.state = {
      openEdit: false,
    };
  }

  handleOpenEdit = () => {
    this.setState({ openEdit: true });
  };

  handleCloseEdit = () => {
    this.setState({ openEdit: false });
  };

  render() {
    const { value } = this.props;
    // {{ if (eq .Word3.p.tense "S") }}x{{end}}

    const conditional = compileCoditional(value);

    return (
      <Grid p={0}>
        <Box display="flex">
          <InputBase
            readOnly
            placeholder="Path 2"
            style={{ marginLeft: 1 }}
          ></InputBase>
          <IconButton style={{ marginRight: 1 }} onClick={this.handleOpenEdit}>
            <EditIcon color="action" />
          </IconButton>
        </Box>
        <FormControl>
          <Button variant="outlined">Add new path</Button>
        </FormControl>
        {this.state.openEdit && (
          <EditConditionalTemplate
            open={this.state.openEdit}
            onClose={this.handleCloseEdit}
          ></EditConditionalTemplate>
        )}
      </Grid>
    );
  }
}

export default ConditionalTemplate;
