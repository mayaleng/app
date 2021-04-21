import React from 'react';
import { Button, Grid, TextField } from '@material-ui/core';
import { DeleteOutline } from '@material-ui/icons';
import PropTypes from 'prop-types';
import WordSelector from '../WordSelector';
import OperationSelector from '../OperationSelector';
import WordFeatureSelector from '../WordFeatureSelector';

const AndOperand = ({
  operand = '', inputWords = [], value = {}, onChange, onDelete,
}) => {
  const {
    operator = '',
    operandA = '',
    operandB = '',
  } = value;

  const [selectedWord, setSelectedWord] = React.useState({});

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={3} md={3}>
        <WordSelector
          inputWords={inputWords}
          value={selectedWord}
          onChange={setSelectedWord}
        />
      </Grid>
      <Grid item xs={12} sm={12} md={3}>
        <WordFeatureSelector
          word={selectedWord}
          value={operandA}
          onChange={(newFeature) => onChange({ ...value, operandA: newFeature })}
        />
      </Grid>
      <Grid item xs={12} sm={2} md={2}>
        <OperationSelector
          value={operator}
          onChange={(e) => onChange({ ...value, operator: e.target.value })}
        />
      </Grid>
      <Grid item xs={12} sm={3} md={3}>
        <TextField
          value={operandB}
          onChange={(e) => onChange({ ...value, operandB: e.target.value })}
          fullWidth
        />
      </Grid>
      <Grid item xs={12} sm={1} md={1}>
        <center>
          <Button fullWidth onClick={() => { onDelete(operand); }}><DeleteOutline color="secondary" /></Button>
        </center>
      </Grid>
    </Grid>
  );
};

AndOperand.propTypes = {
  inputWords: PropTypes.arrayOf(PropTypes.shape).isRequired,
  value: PropTypes.shape({
    operandA: PropTypes.string.isRequired,
    operandB: PropTypes.string.isRequired,
    operator: PropTypes.string.isRequired,
  }).isRequired,
  onChange: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  operand: PropTypes.string.isRequired,
};

export default AndOperand;
