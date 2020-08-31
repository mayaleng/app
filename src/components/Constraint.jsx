import React from 'react';
import {
  Card, CardContent, CardActions, Typography, Chip, Collapse,
} from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const ALLOWED_PROPERTIES = {
  gender: true,
  number: true,
  person: true,
  tense: true,
  mode: true,
};

class Constraint extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      propertiesExpanded: false,
    };
  }

  render() {
    const {
      propertiesExpanded,
    } = this.state;

    const properties = Object.keys(this.props.properties).reduce((acc, key) => {
      if (!ALLOWED_PROPERTIES[key]) {
        return acc;
      }

      const value = this.props.properties[key];

      if (value === '0') {
        return acc;
      }

      acc.push({ key, value });
      return acc;
    }, []);

    return (
      <Card >
        <CardContent style={ { paddingBottom: '0px' } }>
          <Typography gutterBottom color="textSecondary">{this.props.properties.token}</Typography>
          <Typography variant="h3" style={{ textTransform: 'capitalize' }}>{this.props.tag}</Typography>
        </CardContent>
        <CardActions style={ { paddingTop: '0px' } }>
          <IconButton
            onClick={() => { this.setState({ propertiesExpanded: !propertiesExpanded }); }}
            aria-expanded={propertiesExpanded}
            aria-label="show more"
            style={{ marginLeft: 'auto' }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        {properties.length > 0
          && <Collapse in={propertiesExpanded} tiemout="auto" unmountOnExit>
            <CardContent>
              <li style={{ listStyle: 'none' }}>
                {properties.map((pair) => (
                  <Chip style={{ margin: '5px' }} label={`${pair.key}: ${pair.value}`} onDelete={() => (true)} />
                ))}
              </li>
            </CardContent>
          </Collapse>
        }
      </Card>
    );
  }
}

export default Constraint;
