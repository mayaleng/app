import React from 'react';
import { Grid } from '@material-ui/core';
import ArrowForward from '@material-ui/icons/ArrowForward';
import ConstraintsContainer from './ConstraintsContainer';
import OutputRulesContainer from './OutputRulesContainer';

const TranslationRule = () => (
  <div >
    <Grid container spacing={3}>
      <Grid item xs={12} sm={12} md={12} lg={5}>
        <center>
          <h3 >Constraints</h3>
          <ConstraintsContainer></ConstraintsContainer>
        </center>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={2}>
        <center>
          <ArrowForward fontSize="large"></ArrowForward>
        </center>
      </Grid>
      <Grid item xs={12} sm={12} md={12} lg={5}>
        <center>
          <h3>Output</h3>
          <OutputRulesContainer></OutputRulesContainer>
        </center>
      </Grid>
    </Grid>
  </div>
);

export default TranslationRule;
