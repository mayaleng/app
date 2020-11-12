import React from 'react';
import { Alert, AlertTitle } from '@material-ui/lab';
import { Grid } from '@material-ui/core';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { selectMenu as selectMenuAction } from '../redux/actions/menu';

class NotFound extends React.Component {
  handleGoHome() {
    const { selectMenu } = this.props;
    selectMenu('home');
  }

  render() {
    return (
      <Grid
        container
        spacing={0}
        alignItems="center"
        alignContent="center"
        justify="center"
      >
        <Grid item>
          <Alert severity="warning">
            <AlertTitle>Not found</AlertTitle>
            The path provided does not exist.
            Go to the
            {' '}
            <Link onClick={this.handleGoHome} to="/">home</Link>
            {' '}
            page.
          </Alert>
        </Grid>
      </Grid>
    );
  }
}

NotFound.propTypes = {
  selectMenu: PropTypes.func.isRequired,
};

const mapDispatchToProps = {
  selectMenu: selectMenuAction,
};

export default connect(null, mapDispatchToProps)(NotFound);
