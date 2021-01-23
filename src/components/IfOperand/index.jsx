import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import WordSelector from '../WordSelector';
import OperationSelector from '../OperationSelector';

const IfOperand = ({ words = [], onDelete }) => {
  const [word, setWord] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [operator, setOperator] = React.useState('');

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={3} md={3}>
        <WordSelector words={words} value={word} onChange={(e) => setWord(e.target.value)} />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <WordSelector words={words} value={word} onChange={(e) => setWord(e.target.value)} />
      </Grid>
      <Grid item xs={12} sm={2} md={2}>
        <OperationSelector value={operation} onChange={(e) => setOperation(e.target.value)} />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <TextField value={operator} onChange={(e) => setOperator(e.target.value)} fullWidth />
      </Grid>
      <Grid item xs={12} sm={1} md={1}>
        <center>
          <Button fullWidth onClick={() => { onDelete(); }}><DeleteOutline /></Button>
        </center>
      </Grid>
    </Grid>
  );
};

IfOperand.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default IfOperand;
