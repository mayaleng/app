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
} from '@material-ui/core';
import React from 'react';
import DeleteIcon from '@material-ui/icons/Delete';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import ProptTypes from 'prop-types';

function EditConditionalTemplate(props) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('xs'));
  const {
    operand = {}, words = [], open, onClose,
  } = props;

  const { or = [] } = operand;

  return (
    <Dialog
      fullScreen={fullScreen}
      fullWidth
      maxWidth="md"
      disableBackdropClick
      open={open}
      aria-labelledby="responsive-dialog-title"
      onClose={onClose}
    >
      <DialogTitle id="responsive-dialog-title">Rule setup</DialogTitle>
      <DialogContent style={{ flexGrow: 1 }}>
        {or.map((innerOperand, index) => {
          const { and = [] } = innerOperand;

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
                    operands = [{ word: 0, property: '' }, { literal: '' }],
                  } = condition;

                  const [{ word, property }, { literal }] = operands;

                  return (
                    <Grid container spacing={2}>
                      <Grid item xs={12} md={3}>
                        <FormControl fullWidth>
                          <InputLabel>Choose a word...</InputLabel>
                          <Select value={`${word}.${property}`}>
                            <MenuItem value="">
                              <em>None</em>
                            </MenuItem>
                            {words.map((innerWord, wordIndex) => (
                              <div>
                                <ListSubheader>
                                  Word
                                  {' '}
                                  {wordIndex + 1}
                                  {' '}
                                  (
                                  {innerWord.tag}
                                  )
                                </ListSubheader>
                                {Object.keys(innerWord.properties).map((key) => (
                                  <MenuItem
                                    value={`${wordIndex + 1}.${key}`}
                                  >
                                    {key}
                                  </MenuItem>
                                ))}
                              </div>
                            ))}
                          </Select>
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={4}>
                        <FormControl fullWidth>
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
                        <FormControl fullWidth>
                          <InputLabel>Enter value...</InputLabel>
                          <Input type="text" value={literal} />
                        </FormControl>
                      </Grid>
                      <Grid item xs={12} md={1}>
                        <FormControl>
                          <IconButton style={{ padding: '15px' }}>
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
                    style={{ margin: '10px' }}
                  >
                    + AND
                  </Button>
                  {index === or.length - 1 && (
                    <Button
                      color="primary"
                      variant="outlined"
                      style={{ margin: '5px' }}
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
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Ok</Button>
      </DialogActions>
    </Dialog>
  );
}

EditConditionalTemplate.propTypes = {
  onClose: ProptTypes.func.isRequired,
  operand: ProptTypes.shape.isRequired,
  words: ProptTypes.arrayOf(ProptTypes.shape).isRequired,
  open: ProptTypes.bool.isRequired,
};
export default EditConditionalTemplate;
