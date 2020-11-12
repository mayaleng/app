import React from 'react';
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Collapse,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import PropTypes from 'prop-types';
import ConstraintProperties from './ConstraintProperties';

const ALLOWED_FEATURES = {
  gender: true,
  number: true,
  person: true,
  tense: true,
  mode: true,
};

class Constraint extends React.Component {
  constructor() {
    super();

    this.state = {
      filteredProperties: [],
      propertiesExpanded: false,
    };
  }

  componentDidMount() {
    const { properties } = this.props;
    const filteredProperties = this.filterProperties(properties);
    this.setState({ filteredProperties });
  }

  onChangeProperty(e) {
    const { filteredProperties = {} } = this.state;
    const { name, value } = e.target;

    this.setState({
      filteredProperties: {
        ...filteredProperties,
        [name]: value,
      },
    });
  }

  filterProperties(propertiesToFilter = []) {
    const filtered = Object.keys(propertiesToFilter).reduce((acc, key) => {
      if (!ALLOWED_FEATURES[key]) {
        return acc;
      }

      const {
        properties,
      } = this.props;

      const value = properties[key];

      if (value === '0') {
        return acc;
      }

      acc[key] = value;

      return acc;
    }, {});

    return filtered;
  }

  render() {
    const { propertiesExpanded } = this.state;
    const { index, tag, filteredProperties } = this.props;
    return (
      <Card>
        <CardContent style={{ paddingBottom: '0px' }}>
          <Typography gutterBottom color="textSecondary">
            # word
            {index}
          </Typography>
          <Typography variant="h3" style={{ textTransform: 'capitalize' }}>
            {tag}
          </Typography>
        </CardContent>
        <CardActions style={{ paddingTop: '0px' }}>
          <IconButton
            onClick={() => {
              this.setState({ propertiesExpanded: !propertiesExpanded });
            }}
            aria-expanded={propertiesExpanded}
            aria-label="show more"
            style={{ marginLeft: 'auto' }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={propertiesExpanded} tiemout="auto" unmountOnExit>
          <ConstraintProperties
            properties={filteredProperties}
            onChange={this.onChangeProperty}
          />
        </Collapse>
      </Card>
    );
  }
}

Constraint.defaultProps = {
  properties: [],
  filteredProperties: [],
  index: -1,
  tag: '',
};

Constraint.propTypes = {
  properties: PropTypes.arrayOf(PropTypes.shape),
  filteredProperties: PropTypes.arrayOf(PropTypes.shape),
  index: PropTypes.number,
  tag: PropTypes.string,
};

export default Constraint;
