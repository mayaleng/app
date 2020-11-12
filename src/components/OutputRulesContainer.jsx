import React, { forwardRef } from 'react';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { Box } from '@material-ui/core';
import { ReactSortable } from 'react-sortablejs';
import { CompositeDecorator, ContentState, EditorState } from 'draft-js';
import PropTypes from 'prop-types';
import OuputRule from './OutputRule';

const CustomBox = forwardRef((incomingProps, ref) => {
  const { children } = incomingProps;
  return (
    <Box display="flex" flexWrap="wrap" justifyContent="center" ref={ref}>
      {children}
    </Box>
  );
});

const TEMPLATE_VAR_REGEX = /\{\{ *[a-z0-9.]+ *\}\}/gi;

class OutputRulesContainer extends React.Component {
  static findWithRegex(regex, contentBlock, callback) {
    const text = contentBlock.getText();
    let matchArr;
    let start;

    while (true) {
      matchArr = regex.exec(text);
      if (!matchArr) {
        break;
      }

      start = matchArr.index;
      callback(start, start + matchArr[0].length);
    }
  }

  static getStyledTemplate(props) {
    return (
      <Box
        component="span"
        data-offset-key={props.offsetKey}
        color="secondary.main"
      >
        {props.children}
      </Box>
    );
  }

  static templateStrategy(contentBlock, callback) {
    OutputRulesContainer.findWithRegex(TEMPLATE_VAR_REGEX, contentBlock, callback);
  }

  constructor() {
    super();

    this.state = {
      items: [],
    };

    this.compositeDecorator = new CompositeDecorator([
      {
        strategy: OutputRulesContainer.templateStrategy,
        component: OutputRulesContainer.getStyledTemplate,
      },
    ]);
  }

  componentDidMount() {
    const { outputRules = [] } = this.props;
    const customOutputRules = outputRules.map((rule, index) => {
      const customOutputRule = {
        id: `item-${index}`,
        type: rule.type,
        ...rule,
      };

      if (rule.type === 'literal') {
        customOutputRule.editorState = EditorState.createWithContent(
          ContentState.createFromText(rule.value),
          this.compositeDecorator,
        );
      }
      return customOutputRule;
    });

    this.setState({ items: customOutputRules });
  }

  onChange(index, newValue) {
    const { items } = this.state;
    items[index].editorState = newValue;
    this.setState({ items });
  }

  render() {
    const { width, words } = this.props;

    const { items } = this.state;

    let boxWidth = '240px';
    if (isWidthDown('xs', width)) {
      boxWidth = '240px';
    }

    return (
      <ReactSortable
        tag={CustomBox}
        list={items}
        setList={this.setList}
        animation="200"
      >
        {items.map((item, index) => (
          <Box key={item.id} width={boxWidth} m={1}>
            <OuputRule
              onChange={(editorState) => this.onChange(index, editorState)}
              editorState={item.editorState}
              rule={item}
              type={item.type}
              words={words}
            />
          </Box>
        ))}
      </ReactSortable>
    );
  }
}

OutputRulesContainer.propTypes = {
  width: PropTypes.number.isRequired,
  words: PropTypes.arrayOf(PropTypes.shape).isRequired,
  outputRules: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default withWidth()(OutputRulesContainer);
