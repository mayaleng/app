import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, MenuItem, Select,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const WordSelector = ({ inputWords = [], onChange, value = {} }) => {
  const { t } = useTranslation();
  const {
    id = '',
  } = value;

  return (
    <FormControl fullWidth>
      <Select
        value={id}
        onChange={(e) => {
          const selectedWord = inputWords.find((word) => word.id === e.target.value);
          onChange(selectedWord);
        }}
        fullWidth
      >
        {inputWords.map((word, index) => (
          <MenuItem
            key={word.id}
            value={word.id}
          >
            {`${t('WordSelector.word')} #${index + 1} (${t(`linguakit.tags.${word.tag}`)})`}
          </MenuItem>
        ), [])}
      </Select>
    </FormControl>
  );
};

WordSelector.propTypes = {
  inputWords: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
  })).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default React.memo(WordSelector);
