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

function ConditionalTemplate() {
  return (
    <Grid p={0}>
      <Box display="flex">
        <InputBase
          readOnly
          placeholder="Path 1"
          style={{ marginLeft: 1 }}
        ></InputBase>
        <IconButton style={{ marginRight: 1 }}>
          <EditIcon color="action" />
        </IconButton>
      </Box>
      <Box display="flex">
        <InputBase
          readOnly
          placeholder="Path 2"
          style={{ marginLeft: 1 }}
        ></InputBase>
        <IconButton style={{ marginRight: 1 }}>
          <EditIcon color="action" />
        </IconButton>
      </Box>
      <FormControl>
        <Button variant="outlined">Add new path</Button>
      </FormControl>
    </Grid>
  );
}

export default ConditionalTemplate;
