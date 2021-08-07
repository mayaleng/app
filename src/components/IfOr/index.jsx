import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Box, Button } from '@material-ui/core';
import { v4 as uuidv4 } from 'uuid';
import IfAnd from '../IfAnd';

const IfOr = ({ inputWords = [], operands = [], onChange }) => (
  <Grid container>
    {operands.map((operand, index) => {
      const key = `or${index}`;
      return (
        <IfAnd
          inputWords={inputWords}
          key={key}
          operands={operand.operands}
          onChange={(newOperands) => {
            const newOperand = { ...operand };
            const newIfOperands = [...operands];

            newOperand.operands = newOperands;
            newIfOperands[index] = newOperand;

            onChange(newIfOperands);
          }}
        />
      );
    })}
    <Grid item xs={12} md={12}>
      <Box mt={2}>
        <Button
          variant="contained"
          color="primary"
          onClick={(e) => {
            e.preventDefault();
            return onChange([...operands, {
              id: uuidv4(),
              operands: [
                {
                  operator: 'eq',
                  operands: [
                    {
                      word: 0,
                    },
                    {
                      literal: '',
                    },
                  ],
                },
              ],
            }]);
          }}
        >
          AND +
        </Button>
      </Box>
    </Grid>
  </Grid>
);

IfOr.propTypes = {
  inputWords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  operands: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default IfOr;
