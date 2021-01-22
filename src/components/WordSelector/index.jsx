import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, MenuItem, Select,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const WordSelector = ({ words = [], onChange, value }) => {
  const { t } = useTranslation();

  return (
    <FormControl fullWidth>
      <Select value={value} onChange={onChange} fullWidth>
        {words.map((word, index) => {
          const key = `w${index}`;
          const tag = word.tag.toLowerCase();

          return (
            <MenuItem
              key={key}
              value={key}
            >
              {`${t('WordSelector.word')} #${index + 1} (${t(`WordSelector.tag.${tag}`)})`}
            </MenuItem>
          );
        }, [])}
      </Select>
    </FormControl>
  );
};

WordSelector.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WordSelector;
