import React from 'react';
import { FormControl, MenuItem, Select } from '@material-ui/core';
import PropTypes from 'prop-types';
import { useTranslation } from 'react-i18next';

const OperationSelector = ({ value, onChange }) => {
  const { t } = useTranslation();

  const operations = ['eq', 'startsWith', 'endsWith'];

  return (
    <FormControl fullWidth>
      <Select value={value} onChange={onChange} fullWidth>
        {operations.map((operation) => <MenuItem value={operation}>{t(`OperationSelector.${operation}`)}</MenuItem>)}
      </Select>
    </FormControl>

  );
};

OperationSelector.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default OperationSelector;
