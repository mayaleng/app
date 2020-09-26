import React from "react";
import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Collapse,
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import ConstraintProperties from "./ConstraintProperties";

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

  onChangeProperty = (e) => {
    const { filteredProperties = {} } = this.state;
    const { name, value } = e.target;

    this.setState({
      filteredProperties: {
        ...filteredProperties,
        [name]: value,
      },
    });
  };

  componentDidMount() {
    const filteredProperties = this.filterProperties(this.props.properties);
    this.setState({ filteredProperties });
  }

  filterProperties(properties = []) {
    const filtered = Object.keys(properties).reduce((acc, key) => {
      if (!ALLOWED_FEATURES[key]) {
        return acc;
      }

      const value = this.props.properties[key];

      if (value === "0") {
        return acc;
      }

      acc[key] = value;

      return acc;
    }, {});

    return filtered;
  }

  render() {
    const { propertiesExpanded } = this.state;

    return (
      <Card>
        <CardContent style={{ paddingBottom: "0px" }}>
          <Typography gutterBottom color="textSecondary">
            # word{this.props.index}
          </Typography>
          <Typography variant="h3" style={{ textTransform: "capitalize" }}>
            {this.props.tag}
          </Typography>
        </CardContent>
        <CardActions style={{ paddingTop: "0px" }}>
          <IconButton
            onClick={() => {
              this.setState({ propertiesExpanded: !propertiesExpanded });
            }}
            aria-expanded={propertiesExpanded}
            aria-label="show more"
            style={{ marginLeft: "auto" }}
          >
            <ExpandMoreIcon />
          </IconButton>
        </CardActions>

        <Collapse in={propertiesExpanded} tiemout="auto" unmountOnExit>
          <ConstraintProperties
            properties={this.state.filteredProperties}
            onChange={this.onChangeProperty}
          />
        </Collapse>
      </Card>
    );
  }
}

export default Constraint;
