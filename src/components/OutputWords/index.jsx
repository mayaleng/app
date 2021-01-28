import {
  Box,
} from '@material-ui/core';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ReactSortable } from 'react-sortablejs';

import OutputWord from '../OutputWord';

const CustomBox = forwardRef((incomingProps, ref) => {
  const { children } = incomingProps;
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" ref={ref}>
      {children}
    </Box>
  );
});

const OutputWords = ({ inputWords = [], words = [], onReorder }) => (
  <Box>
    <ReactSortable list={words} setList={onReorder} tag={CustomBox}>
      {words.map((word) => (
        <Box key={word.id} width={240} m={2} style={{ display: 'inline-row' }}>
          <OutputWord inputWords={inputWords} />
        </Box>
      ))}
    </ReactSortable>
  </Box>
);

OutputWords.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
  inputWords: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onReorder: PropTypes.func.isRequired,
};

export default OutputWords;
