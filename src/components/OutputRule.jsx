import {
  Box,
  Card,
  CardContent,
  FormControl,
  MenuItem,
  Select,
} from "@material-ui/core";
import React from "react";
import { withTranslation } from "react-i18next";
import ConditionalTemplate from "./ConditionalTemplate";
import TemplateEditor from "./TemplateEditor";

class OuputRule extends React.Component {
  constructor() {
    super();
    this.state = {
      type: "conditional",
    };
  }

  onChange = (e) => {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  };

  render() {
    const { t } = this.props;

    const { type } = this.state;

    return (
      <Card>
        <CardContent>
          <Box mb={2}>
            <FormControl fullWidth={true}>
              <Select value={type} onChange={this.onChange} name="type">
                <MenuItem value="literal">{t("output.types.literal")}</MenuItem>
                <MenuItem value="conditional">
                  {t("output.types.conditional")}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          {type === "literal" && (
            <TemplateEditor
              onChange={this.props.onChange}
              editorState={this.props.editorState}
            />
          )}
          {type === "conditional" && <ConditionalTemplate />}
        </CardContent>
      </Card>
    );
  }
}

export default withTranslation()(OuputRule);
