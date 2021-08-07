import React from 'react';
import PropTypes from 'prop-types';
import { Grid } from '@material-ui/core';
import IfAnd from '../IfAnd';

const IfOr = ({ inputWords = [], operands = [], onChange }) => (
  <Grid container>
    {operands.map((operand, index) => {
      const key = `or${index}`;
      return (
        <IfAnd
          inputWords={inputWords}
          key={key}
          operands={operand}
          onChange={(newOperands) => {
            const clonedOperands = [...operands];
            clonedOperands[index] = newOperands;
            onChange(clonedOperands);
          }}
        />
      );
    })}
  </Grid>
);

IfOr.propTypes = {
  inputWords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  operands: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default IfOr;
