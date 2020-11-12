import {
  Box,
  Button,
  FormControl,
  Grid,
  IconButton,
  InputBase,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/Edit';
import PropTypes from 'prop-types';
import React from 'react';
import EditConditionalTemplate from './EditConditionalTemplate';

class ConditionalTemplate extends React.Component {
  constructor() {
    super();
    this.state = {
      openedIndex: -1,
    };
  }

  handleCloseEdit() {
    this.setState({
      openedIndex: -1,
    });
  }

  openEditForm(index) {
    this.setState({
      openedIndex: index,
    });
  }

  render() {
    const {
      rule: {
        raw = {
          conditional: {
            or: [],
          },
        },
      },
      words,
    } = this.props;

    const { openedIndex } = this.state;

    const {
      conditional: { or = [] },
    } = raw;

    return (
      <Grid p={0}>
        {or.map((_, index) => (
          <Box display="flex">
            <InputBase
              readOnly
              placeholder={`Path ${index + 1}`}
              style={{ marginLeft: 1 }}
            />
            <IconButton
              style={{ marginRight: 1 }}
              onClick={() => this.openEditForm(index)}
            >
              <EditIcon color="action" />
            </IconButton>
          </Box>
        ))}

        <FormControl>
          <Button variant="outlined">Add new path</Button>
        </FormControl>
        {openedIndex >= 0 && (
          <EditConditionalTemplate
            open
            operand={or[openedIndex]}
            words={words}
            onClose={this.handleCloseEdit}
          />
        )}
      </Grid>
    );
  }
}

ConditionalTemplate.defaultProps = {
  rule: {},
  words: [],
};

ConditionalTemplate.propTypes = {
  rule: PropTypes.shape,
  words: PropTypes.arrayOf(PropTypes.shape),
};

export default ConditionalTemplate;
