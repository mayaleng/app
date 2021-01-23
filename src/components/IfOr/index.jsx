import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Box } from '@material-ui/core';
import IfAnd from '../IfAnd';

const IfOr = ({ words = [] }) => {
  const [operands, setOperands] = React.useState([]);
  return (
    <Grid container>
      {operands.map((operand, index) => {
        const key = `or${index}`;
        return <IfAnd words={words} key={key} />;
      })}

      <Grid container>
        <Box mt={2}>
          <Button variant="contained" color="primary" onClick={() => { setOperands([...operands, 1]); }}>
            OR +
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

IfOr.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default IfOr;
