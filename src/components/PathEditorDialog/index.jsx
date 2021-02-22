import React from 'react';
import PropTypes from 'prop-types';
import {
  Button,
  Dialog, DialogActions, DialogContent, FormControl,
} from '@material-ui/core';
import PathsEditor from '../PathsEditor';

const PathEditorDialog = ({
  words = [], onCancel, onSave, open, fullWidth,
}) => (
  <Dialog open={open} maxWidth="lg" fullWidth={fullWidth} keepMounted>
    <DialogContent>
      <PathsEditor words={words} />
    </DialogContent>
    <DialogActions>
      <FormControl>
        <Button
          variant="contained"
          color="primary"
          onClick={() => {
            onSave();
          }}
        >
          Guardar
        </Button>
      </FormControl>
      <FormControl>
        <Button
          variant="contained"
          color="secondary"
          onClick={() => {
            onCancel();
          }}
        >
          Cancelar
        </Button>
      </FormControl>
    </DialogActions>
  </Dialog>
);

PathEditorDialog.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
  open: PropTypes.bool,
  fullWidth: PropTypes.bool,
};

PathEditorDialog.defaultProps = {
  open: false,
  fullWidth: false,
};

export default PathEditorDialog;
