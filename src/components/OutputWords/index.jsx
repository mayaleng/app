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

const OutputWords = ({
  inputWords = [], words = [], onUpdate, onRemove, setList,
}) => (
  <Box>
    <ReactSortable
      list={words}
      setList={(newWords, _, { dragging }) => {
        if (!dragging) {
          return;
        }

        setList(newWords);
      }}
      tag={CustomBox}
      delay={200}
    >
      {words.map((word) => (
        <Box key={word.id} width={240} m={2} style={{ display: 'inline-row' }}>
          <OutputWord
            header={`#${word.id.toUpperCase()}`}
            inputWords={inputWords}
            word={word}
            onChange={onUpdate}
            onRemove={onRemove}
          />
        </Box>
      ))}
    </ReactSortable>
  </Box>
);

OutputWords.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
  inputWords: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  setList: PropTypes.func.isRequired,
};

export default React.memo(OutputWords);
