import React from 'react';
import { Box } from '@material-ui/core';
import withWidth, { isWidthDown } from '@material-ui/core/withWidth';
import Constraint from './Constraint';

class ConstraintsContainer extends React.Component {
  constructor() {
    super();
    this.state = {
      pattern: 'DET,NOUN,VERB,ADV',
      words: [
        {
          tag: 'DET',
          lemma: 'el',
          type: 'A',
          properties: {
            gender: 'M',
            lemma: 'el',
            number: 'S',
            person: '0',
            pos: '0',
            possessor: '0',
            token: 'El',
            type: 'A',
          },
        },
        {
          tag: 'NOUN',
          lemma: 'perro',
          type: 'C',
          properties: {
            gender: 'M',
            lemma: 'perro',
            number: 'S',
            person: '3',
            pos: '1',
            token: 'perro',
            type: 'C',
          },
        },
        {
          tag: 'VERB',
          lemma: 'saltar',
          type: 'M',
          properties: {
            gender: '0',
            lemma: 'saltar',
            mode: 'I',
            number: 'S',
            person: '3',
            pos: '2',
            tense: 'P',
            token: 'salta',
            type: 'M',
          },
        },
        {
          tag: 'ADV',
          lemma: 'mucho',
          type: 'G',
          properties: {
            lemma: 'mucho',
            pos: '3',
            token: 'mucho',
            type: 'G',
          },
        },
        {
          tag: 'SENT',
          lemma: '.',
          type: '',
          properties: {
            lemma: '.',
            pos: '4',
            token: '.',
          },
        },
        {
          tag: 'SENT',
          lemma: '.',
          type: '',
          properties: {
            lemma: '.',
            pos: '4',
            token: '.',
          },
        },
        {
          tag: 'SENT',
          lemma: '.',
          type: '',
          properties: {
            lemma: '.',
            pos: '4',
            token: '.',
          },
        },
      ],
    };
  }

  render() {
    let boxWidth = '200px';
    if (isWidthDown('xs', this.props.width)) {
      boxWidth = '240px';
    }

    return (
      <Box display="flex" flexWrap="wrap" justifyContent="center" >
        {this.state.words.map((item, index) => (
          <Box key={index} m={1} width={boxWidth}>
            <Constraint {...item} ></Constraint>
          </Box>
        ))}
      </Box>
    );
  }
}

export default withWidth()(ConstraintsContainer);
