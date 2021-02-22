import React from 'react';
import PropTypes from 'prop-types';
import { Button, Grid, Box } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import IfAnd from '../IfAnd';

const IfOr = ({ inputWords = [], operands = [], onChange }) => {
  const { t } = useTranslation();
  return (
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

      <Grid container>
        <Box mt={2}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => { onChange([...operands, []]); }}
          >
            {`${t('IfOr.or')} +`}
          </Button>
        </Box>
      </Grid>
    </Grid>
  );
};

IfOr.propTypes = {
  inputWords: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  operands: PropTypes.arrayOf(PropTypes.shape({})).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default IfOr;
