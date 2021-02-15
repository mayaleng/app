import React from 'react';
import {
  MenuItem, FormControl, Select, InputLabel,
} from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import knownTags from '../../lib/known-tags';

const InputWordFeature = ({
  tag = '', feature = '', value = '', onChange,
}) => {
  const { t } = useTranslation();
  const features = knownTags[tag] || {};
  const currentFeature = features[feature] || [];

  return (
    <FormControl fullWidth style={{ margin: '10px' }} key={uuidv4()}>
      <InputLabel>{t(`linguakit.${tag}.features.${feature}`)}</InputLabel>
      <Select
        fullWidth
        value={value}
        onChange={(e) => onChange(e.target.value)}
      >
        <MenuItem value="" key={uuidv4()}>
          <i>Ninguno</i>
        </MenuItem>
        {currentFeature.map((featureValue) => (
          <MenuItem value={featureValue} key={uuidv4()}>
            {t(`linguakit.${tag}.${feature}.${featureValue}`)}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
};

InputWordFeature.propTypes = {
  tag: PropTypes.string.isRequired,
  feature: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputWordFeature;
