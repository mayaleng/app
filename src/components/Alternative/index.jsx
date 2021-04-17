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
  } = alternative;

  const [operands, setOperands] = React.useState([]);
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

      <Typography>Solo si las siguientes condiciones se cumplen:</Typography>
      <Grid item xs={12} md={12}>
        <IfOr inputWords={inputWords} operands={operands} onChange={setOperands} />
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
