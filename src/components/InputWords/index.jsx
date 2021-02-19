import React from 'react';
import { ReactSortable } from 'react-sortablejs';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import InputWord from '../InputWord';
import SortableBox from '../SortableBox';

const InputWords = ({ words = [], onChange }) => (
  <Box>
    <ReactSortable
      list={words}
      setList={(newWords, _, { dragging }) => {
        if (!dragging) {
          return;
        }
        onChange(newWords);
      }}
      tag={SortableBox}
    >
      {words.map((word, index) => (
        <Box key={word.id} width={240} m={2} style={{ display: 'inline-row' }}>
          <InputWord
            header={`#P${index + 1}`}
            word={word}
            onChange={(newWord) => {
              const newWords = [...words];
              newWords[index] = newWord;
              onChange(newWords);
            }}
          />
        </Box>
      ))}
    </ReactSortable>
  </Box>
);

InputWords.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
  })).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputWords;
