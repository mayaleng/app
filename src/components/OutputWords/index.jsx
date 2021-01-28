import {
  Box, Fab,
} from '@material-ui/core';
import styled from 'styled-components';
import React, { forwardRef } from 'react';
import PropTypes from 'prop-types';
import { ReactSortable } from 'react-sortablejs';

import { Add } from '@material-ui/icons';
import OutputWord from '../OutputWord';

const CustomBox = forwardRef((incomingProps, ref) => {
  const { children } = incomingProps;
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" ref={ref}>
      {children}
    </Box>
  );
});

const RightFab = styled(Fab)`
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

const SubFab = styled(Fab)`
  position: fixed;
  right: 20px;
  bottom: ${({ index }) => (index * 40) + 30}px;
`;

const OutputWords = ({ words = [], onChange }) => (
  <Box>
    <ReactSortable list={words} setList={onChange} tag={CustomBox}>
      {words.map((word) => (
        <Box key={word.id} width={240} m={2} style={{ display: 'inline-row' }}>
          <OutputWord words={words} />
        </Box>
      ))}
    </ReactSortable>
    <RightFab color="primary" size="large">
      <Add />
    </RightFab>
    <SubFab color="primary" size="small" variant="extended" index={1}>
      <Add />
      Input word
    </SubFab>
    <SubFab color="primary" size="small" variant="extended" index={2}>
      <Add />
      Output word
    </SubFab>
  </Box>
);

OutputWords.propTypes = {
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onChange: PropTypes.func.isRequired,
};

export default OutputWords;
