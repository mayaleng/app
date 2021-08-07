import { Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import AndOperand from '../AndOperand';

const IfAnd = ({ inputWords = [], operands = [], onChange }) => (
  <Grid container>
    {operands.map((operand, index) => (
      <AndOperand
        key={operand.id}
        inputWords={inputWords}
        onChange={(newValue) => {
          const clonedOperands = [...operands];
          clonedOperands[index] = newValue;
          return onChange(clonedOperands);
        }}
        value={operand}
        onDelete={(id) => {
          const newOperands = [...operands];
          onChange(newOperands.filter((e) => e.id !== id));
        }}
      />
    ))}
  </Grid>
);

IfAnd.propTypes = {
  inputWords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  operands: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default IfAnd;
