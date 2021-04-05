import { Grid, Fab, Zoom } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Add } from '@material-ui/icons';
import PropTypes from 'prop-types';
import { v4 as uuidv4 } from 'uuid';
import OutputWords from '../OutputWords';
import InputWords from '../InputWords';

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

const RuleEditor = ({
  inputs = [],
  setInputs,
  onInputUpdate,
  onInputRemove,
  outputs = [],
  setOutputs,
  onOutputUpdate,
  onOutputRemove,
}) => {
  const [showSubmenu, setShowSubmenu] = React.useState(false);

  return (
    <Grid container>
      <Grid container>
        <InputWords
          words={inputs}
          setList={setInputs}
          onRemove={onInputRemove}
          onUpdate={onInputUpdate}
        />
      </Grid>
      <Grid container>
        <OutputWords
          words={outputs}
          setList={setOutputs}
          inputWords={inputs}
          onUpdate={onOutputUpdate}
          onRemove={onOutputRemove}
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
            onClick={() => {
              setInputs([
                ...inputs,
                { id: uuidv4(), tag: 'adj', name: `E${inputs.length + 1}` }]);
            }}
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
            onClick={() => {
              setOutputs([...outputs, {
                id: uuidv4(),
                type: 'simple',
                value: {
                  type: 'literal',
                  literal: '',
                },
              }]);
            }}
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
  inputs: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onInputUpdate: PropTypes.func.isRequired,
  onInputRemove: PropTypes.func.isRequired,
  setInputs: PropTypes.func.isRequired,
  outputs: PropTypes.arrayOf(PropTypes.shape).isRequired,
  onOutputUpdate: PropTypes.func.isRequired,
  onOutputRemove: PropTypes.func.isRequired,
  setOutputs: PropTypes.func.isRequired,
};

export default RuleEditor;
