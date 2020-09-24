import React, { forwardRef } from 'react';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import { Box } from '@material-ui/core';
import { ReactSortable } from 'react-sortablejs';
import {
  CompositeDecorator,
  ContentState,
  EditorState,
} from 'draft-js';
import OuputRule from './OutputRule';

const CustomBox = forwardRef((props, ref) => (
  <Box display="flex" flexWrap="wrap" justifyContent="center" ref={ref}>{props.children}</Box>
));

const TEMPLATE_VAR_REGEX = /\{\{[a-z0-9.]+\}\}/ig;

class OutputRulesContainer extends React.Component {
  constructor() {
    super();

    const compositeDecorator = new CompositeDecorator([
      {
        strategy: this.templateStrategy,
        component: this.getStyledTemplate,
      },
    ]);

    this.state = {
      items: [
        {
          id: 'item-1',
          value: '',
          editorState: EditorState.createWithContent(ContentState.createFromText('{{a}} b'), compositeDecorator),
        },
        {
          id: 'item-2',
          value: '',
          editorState: EditorState.createWithContent(ContentState.createFromText('{{a}} b'), compositeDecorator),
        },
        {
          id: 'item-3',
          value: '',
          editorState: EditorState.createWithContent(ContentState.createFromText('{{a}} b'), compositeDecorator),
        },
        {
          id: 'item-4',
          value: '',
          editorState: EditorState.createWithContent(ContentState.createFromText('{{a}} b'), compositeDecorator),
        },
        {
          id: 'item-5',
          value: '',
          editorState: EditorState.createWithContent(ContentState.createFromText('{{a}} b'), compositeDecorator),
        },
        {
          id: 'item-6',
          value: '',
          editorState: EditorState.createWithContent(ContentState.createFromText('{{a}} b'), compositeDecorator),
        },
        {
          id: 'item-7',
          value: '',
          editorState: EditorState.createWithContent(ContentState.createFromText('{{a}} b'), compositeDecorator),
        },
      ],
    };
  }

  setList = (items) => {
    this.setState({ items });
  }

  onChange = (index, newValue) => {
    const { items } = this.state;
    items[index].editorState = newValue;
    this.setState({ items });
  }

  getStyledTemplate = (props) => (
    <Box component="span" data-offset-key={props.offsetKey} color="secondary.main">
      {props.children}
    </Box>
  );

  findWithRegex = (regex, contentBlock, callback) => {
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

  templateStrategy = (contentBlock, callback) => {
    this.findWithRegex(TEMPLATE_VAR_REGEX, contentBlock, callback);
  }

  render() {
    let boxWidth = '240px';
    if (isWidthDown('xs', this.props.width)) {
      boxWidth = '240px';
    }

    return (
      <ReactSortable tag={CustomBox} list={this.state.items} setList={this.setList} animation="200">
        {this.state.items.map((item, index) => (<Box key={item.id} width={boxWidth} m={1}>
            <OuputRule
              onChange={(editorState) => (this.onChange(index, editorState))}
              editorState={item.editorState} />
          </Box>))}
      </ReactSortable>
    );
  }
}

export default withWidth()(OutputRulesContainer);
