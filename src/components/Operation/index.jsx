import React from 'react';
import { Grid, TextField } from '@material-ui/core';
import WordSelector from '../WordSelector';
import OperationSelector from '../OperationSelector';

const Operation = () => {
  const [word, setWord] = React.useState('');
  const [operation, setOperation] = React.useState('');
  const [operator, setOperator] = React.useState('');

  const words = [
    {
      tag: 'NOUN',
      type: 'C',
      properties: {
        type: 'C',
      },
    },
    {
      tag: 'NOUN',
      type: 'P',
      properties: {
        type: 'P',
      },
    },
  ];

  return (
    <div>
      <Grid container>
        <Grid item xs={12} sm={12} md={3}>
          <WordSelector words={words} value={word} onChange={(e) => setWord(e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <WordSelector words={words} value={word} onChange={(e) => setWord(e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <OperationSelector value={operation} onChange={(e) => setOperation(e.target.value)} />
        </Grid>
        <Grid item xs={12} sm={12} md={3}>
          <TextField value={operator} onChange={(e) => setOperator(e.target.value)} fullWidth />
        </Grid>
      </Grid>
    </div>
  );
};

export default Operation;
