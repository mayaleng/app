import React from 'react';
import PropTypes from 'prop-types';
import {
  FormControl, MenuItem, Select,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';

const WordFeatureSelector = ({ word = {}, value = {}, onChange }) => {
  const { t } = useTranslation();
  const {
    features = {},
    tag,
  } = word;

  const featureKeys = Object.keys(features);

  return (
    <FormControl fullWidth>
      <Select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        fullWidth
      >
        {featureKeys.map((featureKey) => (
          <MenuItem key={featureKey} value={featureKey}>
            {t(`linguakit.${tag}.features.${featureKey}`)}
          </MenuItem>
        ), [])}
      </Select>
    </FormControl>
  );
};

WordFeatureSelector.propTypes = {
  word: PropTypes.shape({
    id: PropTypes.string.isRequired,
    tag: PropTypes.string.isRequired,
    features: PropTypes.shape().isRequired,
  }).isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default WordFeatureSelector;
