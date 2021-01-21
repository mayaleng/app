import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, ListSubheader, MenuItem, Select,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const WordSelector = ({ words = [], onChange, value }) => {
  const { t } = useTranslation();

  return (
    <FormControl fullWidth>
      <Select value={value} onChange={onChange}>
        {words.reduce((acc, word, index) => {
          const prefix = `w${index}`;
          const subTitle = `${t('WordSelector.word')} #${index + 1} (${t(`WordSelector.tag.${word.tag}`)})`;
          const header = (
            <ListSubheader key={prefix}>
              {subTitle}
            </ListSubheader>
          );

          const items = Object.keys(word.properties)
            .map((propertyName) => (
              <MenuItem
                key={`${prefix}${propertyName}`}
                value={propertyName}
              >
                {t(`WordSelector.properties.${propertyName}`)}
              </MenuItem>
            ));

          return [...acc, header, ...items];
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
