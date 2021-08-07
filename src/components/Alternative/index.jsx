import React from 'react';
import PropTypes from 'prop-types';
import { Grid, Typography } from '@material-ui/core';
import IfOr from '../IfOr';
import InputEditor from '../InputEditor';

const Alternative = ({
  inputWords = [],
  alternative = { },
  onChange,
}) => {
  const {
    value,
    condition,
  } = alternative;

  const {
    operands,
  } = condition;

  return (
    <Grid container>
      <Typography>Usar:</Typography>
      <Grid item xs={12} md={12}>
        <InputEditor
          content={value}
          inputWords={inputWords}
          onChange={(newValue) => {
            onChange({ ...alternative, value: newValue });
          }}
        />
      </Grid>
      <br />
      <br />
      <br />
      <Typography>Si las siguientes condiciones se cumplen:</Typography>
      <br />
      <br />
      <Grid item xs={12} md={12}>
        <IfOr
          inputWords={inputWords}
          operands={operands}
          onChange={(newOperands) => {
            onChange({
              ...alternative,
              condition: {
                ...condition,
                operands: newOperands,
              },
            });
          }}
        />
      </Grid>
    </Grid>
  );
};

Alternative.propTypes = {
  alternative: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
  inputWords: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Alternative;
