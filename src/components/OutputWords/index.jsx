import { Box } from '@material-ui/core';
import React from 'react';
import PropTypes from 'prop-types';
import OutputWord from '../OutputWord';

const OutputWords = ({ words = [] }) => (
  <Box display="flex" flexWrap="wrap" justifyContent="center">
    {[...Array(10).keys()].map(() => (
      <Box width={240} m={2} style={{ display: 'inline-row' }}>
        <OutputWord words={words} />
      </Box>
    ))}
  </Box>
);

OutputWords.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default OutputWords;
