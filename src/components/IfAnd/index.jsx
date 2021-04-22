import { Button, Box, Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
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
        onDelete={() => (onChange(operands.filter((w) => w.id !== operand.id)))}
      />
    ))}
    <Grid item xs={12} md={12}>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            return onChange([...operands, { id: uuidv4() }]);
          }}
        >
          AND +
        </Button>
      </Box>
    </Grid>
  </Grid>
);

IfAnd.propTypes = {
  inputWords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  operands: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default IfAnd;
