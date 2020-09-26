import React from "react";

import { withTranslation } from "react-i18next";

import {
  CardContent,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
} from "@material-ui/core";

const ALLOWED_VALUES = {
  gender: ["M", "F"],
  number: ["S", "P"],
  person: ["1", "2", "3"],
  tense: ["P", "F", "S"],
  mode: ["I", "S", "M", "N", "G", "P"],
};

function ConstraintProperties(props) {
  const { onChange, properties = [], t } = props;

  return (
    <CardContent>
      {Object.keys(properties).map((key) => (
        <Box mb={1} key={key}>
          <FormControl fullWidth={true}>
            <InputLabel>{t(`constraints.properties.${key}`)}</InputLabel>
            <Select value={properties[key]} onChange={onChange} name={key}>
              <MenuItem key="" value="">
                &nbsp;
              </MenuItem>
              {(ALLOWED_VALUES[key] || []).map((property) => (
                <MenuItem key={property} value={property}>
                  {t(`constraints.${key}.${property}`)}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      ))}
    </CardContent>
  );
}

export default withTranslation()(ConstraintProperties);
