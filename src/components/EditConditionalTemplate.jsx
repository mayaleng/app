import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  useTheme,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  Box,
  Divider,
  IconButton,
  Input,
  Typography,
  Grid,
  ListSubheader,
} from "@material-ui/core";
import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";
import useMediaQuery from "@material-ui/core/useMediaQuery";

function EditConditionalTemplate(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("xs"));
  const { operand = {}, words = [] } = props;
  console.log(words);
  const { or = [] } = operand;

  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth={true}
      maxWidth="md"
      disableBackdropClick={true}
      open={props.open}
      aria-labelledby="responsive-dialog-title"
      onClose={props.onClose}
    >
      <DialogTitle id="responsive-dialog-title">Rule setup</DialogTitle>
      <DialogContent style={{ flexGrow: 1 }}>
        {or.map((operand, index) => {
          const { and = [] } = operand;

          return (
            <Box mt={2}>
              {index === 0 && (
                <Typography align="left">Only set if...</Typography>
              )}

              {index > 0 && <Typography align="left">OR set if...</Typography>}

              <Box mt={1}>
                {and.map((condition) => {
                  const {
                    operation,
                    operands = [{ word: 0, property: "" }, { literal: "" }],
                  } = condition;

                  const [{ word, property }, { literal }] = operands;

                  console.log(word, property);
                  return (
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={3}>
                        <FormControl fullWidth={true}>
                          <InputLabel>Choose a word...</InputLabel>
                          <Select value={`${word}.${property}`}>
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {words.map((word, wordIndex) => {
                              return (
                                <div>
                                  <ListSubheader>
                                    Word {wordIndex + 1} ({word.tag})
                                  </ListSubheader>
                                  {Object.keys(word.properties).map((key) => {
                                    return (
                                      <MenuItem
                                        value={`${wordIndex + 1}.${key}`}
                                      >
                                        {key}
                                      </MenuItem>
                                    );
                                  })}
                                </div>
                              );
                            })}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <FormControl fullWidth={true}>
                          <InputLabel>Choose condition...</InputLabel>
                          <Select value={operation}>
                            <MenuItem value="eq">Equals</MenuItem>
                            <MenuItem value="contains">Contains</MenuItem>
                            <MenuItem value="exists">Exists</MenuItem>
                            <MenuItem value="startsWith">Starts with</MenuItem>
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <FormControl fullWidth={true}>
                          <InputLabel>Enter value...</InputLabel>
                          <Input type="text" value={literal}></Input>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={1}>
                        <FormControl>
                          <IconButton style={{ padding: "15px" }}>
                            <DeleteIcon />
                          </IconButton>
                        </FormControl>
                      </Grid>
                    </Grid>
                  );
                })}

                <Box textAlign="center" m={1}>
                  <Button
                    color="primary"
                    variant="outlined"
                    style={{ margin: "10px" }}
                  >
                    + AND
                  </Button>
                  {index === or.length - 1 && (
                    <Button
                      color="primary"
                      variant="outlined"
                      style={{ margin: "5px" }}
                    >
                      + OR
                    </Button>
                  )}
                </Box>
              </Box>
              <Divider />
            </Box>
          );
        })}
        {/* <Box mt={1}>
          <Typography align="left">Only set if...</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth={true}>
                <InputLabel>Choose a word...</InputLabel>
                <Select value={word}>
                  <MenuItem value="1">Word 1</MenuItem>
                  <MenuItem value="2">Word 2</MenuItem>
                  <MenuItem value="3">Word 3</MenuItem>
                  <MenuItem value="4">Word 4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth={true}>
                <InputLabel>Choose condition...</InputLabel>
                <Select value={operation}>
                  <MenuItem value="eq">Equals</MenuItem>
                  <MenuItem value="contains">Contains</MenuItem>
                  <MenuItem value="exists">Exists</MenuItem>
                  <MenuItem value="startsWith">Starts with</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth={true}>
                <InputLabel>Enter value...</InputLabel>
                <Input type="text" value={literal}></Input>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={1}>
              <FormControl>
                <IconButton style={{ padding: "15px" }}>
                  <DeleteIcon />
                </IconButton>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth={true}>
                <InputLabel>Choose a word...</InputLabel>
                <Select value="">
                  <MenuItem value=".W1">Word 1</MenuItem>
                  <MenuItem value=".W2">Word 2</MenuItem>
                  <MenuItem value=".W3">Word 3</MenuItem>
                  <MenuItem value=".W4">Word 4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth={true}>
                <InputLabel>Choose condition...</InputLabel>
                <Select value="">
                  <MenuItem value="contains">Contains</MenuItem>
                  <MenuItem value="exists">Exists</MenuItem>
                  <MenuItem value="startsWith">Starts with</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth={true}>
                <InputLabel>Enter value...</InputLabel>
                <Input type="text"></Input>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={1}>
              <FormControl>
                <IconButton style={{ padding: "15px" }}>
                  <DeleteIcon />
                </IconButton>
              </FormControl>
            </Grid>
          </Grid>
          <Box textAlign="center" m={1}>
            <Button
              color="primary"
              variant="outlined"
              style={{ margin: "10px" }}
            >
              + AND
            </Button>
          </Box>
        </Box>
        <Divider />
        <Box mt={1}>
          <Typography align="left">OR set if...</Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth={true}>
                <InputLabel>Choose a word...</InputLabel>
                <Select value="">
                  <MenuItem value=".W1">Word 1</MenuItem>
                  <MenuItem value=".W2">Word 2</MenuItem>
                  <MenuItem value=".W3">Word 3</MenuItem>
                  <MenuItem value=".W4">Word 4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth={true}>
                <InputLabel>Choose condition...</InputLabel>
                <Select value="">
                  <MenuItem value="contains">Contains</MenuItem>
                  <MenuItem value="exists">Exists</MenuItem>
                  <MenuItem value="startsWith">Starts with</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth={true}>
                <InputLabel>Enter value...</InputLabel>
                <Input type="text"></Input>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={1}>
              <FormControl>
                <IconButton style={{ padding: "15px" }}>
                  <DeleteIcon />
                </IconButton>
              </FormControl>
            </Grid>
          </Grid>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <FormControl fullWidth={true}>
                <InputLabel>Choose a word...</InputLabel>
                <Select value="">
                  <MenuItem value=".W1">Word 1</MenuItem>
                  <MenuItem value=".W2">Word 2</MenuItem>
                  <MenuItem value=".W3">Word 3</MenuItem>
                  <MenuItem value=".W4">Word 4</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth={true}>
                <InputLabel>Choose condition...</InputLabel>
                <Select value="">
                  <MenuItem value="contains">Contains</MenuItem>
                  <MenuItem value="exists">Exists</MenuItem>
                  <MenuItem value="startsWith">Starts with</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={4}>
              <FormControl fullWidth={true}>
                <InputLabel>Enter value...</InputLabel>
                <Input type="text"></Input>
              </FormControl>
            </Grid>
            <Grid item xs={12} md={1}>
              <FormControl>
                <IconButton style={{ padding: "15px" }}>
                  <DeleteIcon />
                </IconButton>
              </FormControl>
            </Grid>
          </Grid>
          <Box textAlign="center" m={1}>
            <Button
              color="primary"
              variant="outlined"
              style={{ margin: "10px" }}
            >
              + AND
            </Button>
            <Button
              color="primary"
              variant="outlined"
              style={{ margin: "5px" }}
            >
              + OR
            </Button>
          </Box>
        </Box>
        <Divider /> */}
      </DialogContent>
      <DialogActions>
        <Button onClick={props.onClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

export default EditConditionalTemplate;
