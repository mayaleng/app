import { Button, Grid } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import IfCondition from '../IfCondition';

const IfAnd = ({ words = [] }) => {
  const [operands, setOperands] = React.useState([]);

  return (
    <Grid container>
      {operands.map((operand, index) => {
        const key = `op${index}`;
        return <IfCondition key={key} words={words} onDelete={() => {}} />;
      })}
      <Grid item={12}>
        <Button variant="contained" color="primary" onClick={() => { setOperands([...operands, 1]); }}>AND +</Button>
      </Grid>
    </Grid>
  );
};

IfAnd.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default IfAnd;
