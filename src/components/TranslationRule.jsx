import React from 'react';
import {
  Grid, Link, Breadcrumbs, Typography,
} from '@material-ui/core';
import { withTranslation } from 'react-i18next';
import ConstraintsContainer from './ConstraintsContainer';
import OutputRulesContainer from './OutputRulesContainer';

const TranslationRule = ({ t }) => (
  <React.Fragment>
    <Typography variant="h1">{t('rules.new')}</Typography>
    <Typography variant="h2">{t('rules.new')}</Typography>
    <Typography variant="h3">{t('rules.new')}</Typography>
    <Typography variant="h4">{t('rules.new')}</Typography>
    <Typography variant="h5">{t('rules.new')}</Typography>
    <Typography variant="h6">{t('rules.new')}</Typography>
    <Typography>Normal</Typography>

    <Breadcrumbs aria-label="breadcrumb">
      <Link color="inherit" href="/" >Material-UI</Link>
      <Link color="inherit" href="/getting-started/installation/" >Core</Link>
      <Typography color="textPrimary">Breadcrumb</Typography>
    </Breadcrumbs>
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

export default withTranslation()(TranslationRule);
