import { Grid, Fab, Zoom } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Add } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import OutputWords from '../OutputWords';

const RightFab = styled(Fab)`
  position: fixed;
  bottom: 10px;
  right: 10px;
`;

const SubFab = styled(Fab)`
  position: fixed;
  right: 20px;
  bottom: ${({ position }) => (position * 40) + 30}px;
`;

const RuleEditor = ({ outputs = [], inputWords = [], onOutputsChange }) => {
  const [showSubmenu, setShowSubmenu] = React.useState(false);

  return (
    <Grid container>
      <Grid container />
      <Grid container>
        <OutputWords
          inputWords={inputWords}
          words={outputs}
          onReorder={onOutputsChange}
        />
      </Grid>
      <Grid container>
        <RightFab color="primary" size="large" onClick={() => { setShowSubmenu(!showSubmenu); }}>
          <Add />
        </RightFab>

        <Zoom in={showSubmenu} style={{ transitionDelay: showSubmenu ? '50ms' : '100ms' }}>
          <SubFab
            color="primary"
            size="small"
            variant="extended"
            position={2}
          >
            <Add />
            Input word
          </SubFab>
        </Zoom>

        <Zoom in={showSubmenu} style={{ transitionDelay: showSubmenu ? '50ms' : '100ms' }}>
          <SubFab
            color="primary"
            size="small"
            variant="extended"
            position={1}
            onClick={() => { onOutputsChange([...outputs, { id: uuidv4() }]); }}
          >
            <Add />
            Output word
          </SubFab>
        </Zoom>
      </Grid>
    </Grid>
  );
};

RuleEditor.propTypes = {
  inputWords: PropTypes.arrayOf(PropTypes.shape).isRequired,
  outputs: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onOutputsChange: PropTypes.func.isRequired,
};

export default RuleEditor;
