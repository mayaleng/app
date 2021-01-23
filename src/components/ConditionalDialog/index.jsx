import React from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, FormControl,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import Conditional from '../Conditional';

const ConditionalDialog = ({
  words = [], open = false, fullWidth = false, onCancel, onSave,
}) => (
  <Dialog open={open} maxWidth="lg" fullWidth={fullWidth} keepMounted>
    <DialogContent>
      <Conditional words={words} />
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

ConditionalDialog.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
  open: PropTypes.bool.isRequired,
  fullWidth: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

ConditionalDialog.defaultProps = {
  fullWidth: false,
};

export default ConditionalDialog;
