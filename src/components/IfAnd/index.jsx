import { Button, Box, Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import IfOperand from '../IfOperand';

const IfAnd = ({ words = [] }) => {
  const [operands, setOperands] = React.useState([]);

  return (
    <Grid container>
      {operands.map((operand, index) => {
        const key = `op${index}`;
        return <IfOperand key={key} words={words} onDelete={() => {}} />;
      })}
      <Grid item xs={12} md={12}>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={(e) => {
              e.preventDefault();
              setOperands([...operands, 1]);
            }}
          >
            AND +
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

IfAnd.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default IfAnd;
