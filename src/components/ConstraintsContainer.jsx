import { Box } from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import React from 'react';
import PropTypes from 'prop-types';
import Constraint from './Constraint';

const ConstraintsContainer = (props) => {
  const { width, constraints } = props;
  let boxWidth = '240px';
  if (isWidthDown('xs', width)) {
    boxWidth = '240px';
  }

  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center">
      {constraints.map((item, index) => (
        <Box key={item.id} m={1} width={boxWidth}>
          <Constraint
            properties={item.properties}
            filteredProperties={item.filteredProperties}
            tag={item.tag}
            index={index + 1}
          />
        </Box>
      ))}
    </Box>
  );
};

ConstraintsContainer.defaultProps = {
  constraints: [],
};

ConstraintsContainer.propTypes = {
  width: PropTypes.number.isRequired,
  constraints: PropTypes.arrayOf(PropTypes.shape),
};

export default withWidth()(ConstraintsContainer);
