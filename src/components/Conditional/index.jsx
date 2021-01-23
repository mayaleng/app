import React from 'react';
import PropTypes from 'prop-types';
import { Grid, TextField, Typography } from '@material-ui/core';
import IfOr from '../IfOr';

const Conditional = ({ words = [] }) => {
  const [text, setText] = React.useState('');
  return (
    <Grid container>
      <Typography>Usar:</Typography>
      <Grid item xs={12} md={12}>
        <TextField fullWidth value={text} onChange={(e) => { setText(e.target.value); }} placeholder="Insert value" />
      </Grid>

      <Typography>Solo si las siguientes condiciones se cumplen:</Typography>
      <Grid item xs={12} md={12}>
        <IfOr words={words} />
      </Grid>

    </Grid>
  );
};

Conditional.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Conditional;
