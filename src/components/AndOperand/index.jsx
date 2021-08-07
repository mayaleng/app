import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import WordSelector from '../WordSelector';
import OperationSelector from '../OperationSelector';
import WordFeatureSelector from '../WordFeatureSelector';

const AndOperand = ({
  inputWords = [], value = {}, onChange, onDelete,
}) => {
  const {
    id = '',
    operands = [],
    operator,
  } = value;

  const word = inputWords[operands[0].word];

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={3} md={3}>
        <WordSelector
          inputWords={inputWords}
          value={word}
          onChange={(newWord) => {
            const index = inputWords.findIndex((e) => e.id === newWord.id);
            const newOperands = [...operands];
            newOperands[0] = {
              ...newOperands[0],
              word: index,
            };

            onChange({
              ...value,
              operands: newOperands,
            });
          }}
        />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <WordFeatureSelector
          word={word}
          value={operands[0].feature}
          onChange={(newFeature) => {
            const newOperands = [...operands];
            newOperands[0] = {
              ...newOperands[0],
              feature: newFeature,
            };

            onChange({
              ...value,
              operands: newOperands,
            });
          }}
        />
      </Grid>
      <Grid item xs={12} sm={2} md={2}>
        <OperationSelector
          value={operator}
          onChange={(e) => onChange({
            ...value,
            operator: e.target.value,
          })}
        />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <TextField
          value={operands[1].literal}
          onChange={(e) => {
            const newOperands = [...operands];
            newOperands[1] = {
              ...newOperands[1],
              literal: e.target.value,
            };

            onChange({
              ...value,
              operands: newOperands,
            });
          }}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={1} md={1}>
        <center>
          <Button fullWidth onClick={() => { onDelete(id); }}><DeleteOutline color="secondary" /></Button>
        </center>
      </Grid>
    </Grid>
  );
};

AndOperand.propTypes = {
  inputWords: PropTypes.arrayOf(PropTypes.shape).isRequired,
  value: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default AndOperand;
