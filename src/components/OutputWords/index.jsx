import { Box } from '@material-ui/core';
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

const OutputWords = ({ words = [], onChange }) => (
  <ReactSortable list={words} setList={onChange} tag={CustomBox}>
    {words.map((word) => (
      <Box key={word.id} width={240} m={2} style={{ display: 'inline-row' }}>
        <OutputWord words={words} />
      </Box>
    ))}
  </ReactSortable>
);

OutputWords.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default OutputWords;
