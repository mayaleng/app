import React from 'react';
import { Box } from '@material-ui/core';
import Constraint from './Constraint';

const reorder = (list, startIndex, endIndex) => {
  const result = Array.from(list);
  const [removed] = result.splice(startIndex, 1);
  result.splice(endIndex, 0, removed);

  return result;
};

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
      ],
    };
    this.onDragEnd = this.onDragEnd.bind(this);
  }

  onDragEnd(result) {
    // dropped outside the list
    if (!result.destination) {
      return;
    }

    const items = reorder(
      this.state.items,
      result.source.index,
      result.destination.index,
    );

    this.setState({
      items,
    });
  }

  render() {
    return (
      <Box display="flex" flexWrap="wrap" justifyContent="center" >
        {this.state.words.map((item, index) => (
          <Box key={index} style={{ width: '200px' }} m={1}>
            <Constraint {...item} ></Constraint>
          </Box>
        ))}
      </Box>
    );
  }
}

export default ConstraintsContainer;
