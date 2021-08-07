import React, { useState } from 'react';
import {
  Button, Dialog, DialogActions, DialogContent, FormControl,
} from '@material-ui/core';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';
import Alternative from '../Alternative';

const AlternativeContainer = ({
  alternative = {},
  inputWords = [],
  open = false,
  fullWidth = false,
  onCancel,
  onSave,
}) => {
  const { t } = useTranslation();
  const [localAlternative, setAlternative] = useState(alternative);

  return (
    <Dialog open={open} maxWidth="lg" fullWidth={fullWidth} keepMounted>
      <DialogContent>
        <Alternative
          alternative={localAlternative}
          inputWords={inputWords}
          onChange={(newValue) => {
            setAlternative(newValue);
          }}
        />
      </DialogContent>
      <DialogActions>
        <FormControl>
          <Button
            variant="contained"
            color="primary"
            onClick={() => {
              onSave(localAlternative);
            }}
          >
            {`${t('ConditionalDialog.save')}`}
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
            {`${t('ConditionalDialog.cancel')}`}
          </Button>
        </FormControl>
      </DialogActions>
    </Dialog>
  );
};

AlternativeContainer.propTypes = {
  alternative: PropTypes.shape().isRequired,
  inputWords: PropTypes.arrayOf(PropTypes.shape).isRequired,
  open: PropTypes.bool.isRequired,
  fullWidth: PropTypes.bool,
  onCancel: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

AlternativeContainer.defaultProps = {
  fullWidth: false,
};

export default AlternativeContainer;
