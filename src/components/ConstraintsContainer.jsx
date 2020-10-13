import { Box } from "@material-ui/core";
import withWidth, { isWidthDown } from "@material-ui/core/withWidth";
import React from "react";
import Constraint from "./Constraint";

class ConstraintsContainer extends React.Component {
  render() {
    const { width, constraints } = this.props;
    let boxWidth = "240px";
    if (isWidthDown("xs", width)) {
      boxWidth = "240px";
    }

    return (
      <Box display="flex" flexWrap="wrap" justifyContent="center">
        {constraints.map((item, index) => (
          <Box key={index} m={1} width={boxWidth}>
            <Constraint {...item} index={index + 1}></Constraint>
          </Box>
        ))}
      </Box>
    );
  }
}

export default withWidth()(ConstraintsContainer);
