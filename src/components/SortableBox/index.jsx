import React, { forwardRef } from 'react';
import { Box } from '@material-ui/core';

const SortableBox = forwardRef((incomingProps, ref) => {
  const { children } = incomingProps;
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" ref={ref} onClick={(e) => e.preventDefault()}>
      {children}
    </Box>
  );
});

export default SortableBox;
