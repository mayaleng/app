import React from 'react';
import { v4 as uuidv4 } from 'uuid';
import PropTypes from 'prop-types';
import knownTags from '../../lib/known-tags';
import InputWordFeature from '../InputWordFeature';

const InputWordFeatures = ({
  tag = '', value = {}, onChange,
}) => {
  const features = knownTags[tag] || {};

  return Object.keys(features).map((featureKey) => {
    const currentValue = value[featureKey] || '';
    return (
      <InputWordFeature
        key={uuidv4()}
        tag={tag}
        feature={featureKey}
        value={currentValue}
        onChange={(newValue) => onChange({ ...value, [featureKey]: newValue })}
      />
    );
  });
};

InputWordFeatures.propTypes = {
  tag: PropTypes.string.isRequired,
  value: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
};

export default InputWordFeatures;
