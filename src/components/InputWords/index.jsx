import React from 'react';
import { ReactSortable } from 'react-sortablejs';
import PropTypes from 'prop-types';
import { Box } from '@material-ui/core';
import InputWord from '../InputWord';
import SortableBox from '../SortableBox';

const InputWords = ({
  words = [], onUpdate, onRemove, setList,
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
      tag={SortableBox}
    >
      {words.map((word) => (
        <Box key={word.id} width={240} m={2} style={{ display: 'inline-row' }}>
          <InputWord
            header={`#E${word.id.substring(0, 8).toUpperCase()}`}
            word={word}
            onRemove={onRemove}
            onChange={onUpdate}
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
  onUpdate: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  setList: PropTypes.func.isRequired,
};

export default React.memo(InputWords);
