import React from 'react';
import { Grid } from '@material-ui/core';
import ConstraintsContainer from './ConstraintsContainer';
import OutputRulesContainer from './OutputRulesContainer';

const TranslationRule = () => (
  <React.Fragment>
    <Grid container spacing={0}>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <center>
          <h3 >Constraints</h3>
          <ConstraintsContainer></ConstraintsContainer>
        </center>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={12}>
        <center>
          <h3>Output</h3>
          <OutputRulesContainer></OutputRulesContainer>
        </center>
      </Grid>
    </Grid>
  </React.Fragment>
);

export default TranslationRule;
