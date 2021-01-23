import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, MenuItem, Select,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const WordPropSelector = ({ wordProps = {}, onChange, value }) => {
  const { t } = useTranslation();
  const propertiesArray = Object.keys(wordProps);
  return (
    <FormControl fullWidth>
      <Select value={value} onChange={onChange} fullWidth>
        {propertiesArray.map((wordProp, index) => {
          const key = `p${index}`;
          return (
            <MenuItem key={key} value={key}>
              {t(`WordSelector.properties.${wordProp}`)}
            </MenuItem>
          );
        }, [])}
      </Select>
    </FormControl>
  );
};

WordPropSelector.propTypes = {
  wordProps: PropTypes.shape({}).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WordPropSelector;
