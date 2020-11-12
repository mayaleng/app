import {
  Box,
  Card,
  CardContent,
  FormControl,
  MenuItem,
  Select,
} from '@material-ui/core';
import React from 'react';
import { withTranslation } from 'react-i18next';
import PropTypes from 'prop-types';
import ConditionalTemplate from './ConditionalTemplate';
import TemplateEditor from './TemplateEditor';

class OuputRule extends React.Component {
  constructor() {
    super();
    this.state = {
      type: 'conditional',
    };
  }

  componentDidMount() {
    const { type } = this.props;
    this.setState({ type });
  }

  onChange(e) {
    const { value, name } = e.target;

    this.setState({
      [name]: value,
    });
  }

  render() {
    const {
      t, onChange, editorState, rule, words,
    } = this.props;

    const { type } = this.state;

    return (
      <Card>
        <CardContent>
          <Box mb={2}>
            <FormControl fullWidth>
              <Select value={type} onChange={this.onChange} name="type">
                <MenuItem value="literal">{t('output.types.literal')}</MenuItem>
                <MenuItem value="conditional">
                  {t('output.types.conditional')}
                </MenuItem>
              </Select>
            </FormControl>
          </Box>
          {type === 'literal' && (
            <TemplateEditor
              onChange={onChange}
              editorState={editorState}
            />
          )}
          {type === 'conditional' && (
            <ConditionalTemplate
              rule={rule}
              words={words}
            />
          )}
        </CardContent>
      </Card>
    );
  }
}

OuputRule.propTypes = {
  type: PropTypes.string.isRequired,
  t: PropTypes.shape().isRequired,
  onChange: PropTypes.func.isRequired,
  editorState: PropTypes.shape().isRequired,
  rule: PropTypes.shape().isRequired,
  words: PropTypes.arrayOf(PropTypes.shape()).isRequired,
};

export default withTranslation()(OuputRule);
