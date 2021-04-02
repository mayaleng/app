import React from 'react';
import InputEditor from './components/InputEditor';

const inputWords = [
  {
    tag: 'NOUN',
    type: 'C',
    properties: {
      type: 'C',
    },
    name: 'word1',
  },
  {
    tag: 'NOUN',
    type: 'P',
    properties: {
      type: 'P',
    },
    name: 'word2',
  },
  {
    tag: 'VERB',
    type: 'M',
    properties: {
      tense: 'S',
      person: '3',
    },
    name: 'word3',
  },
  {
    tag: 'DET',
    type: 'I',
    properties: {
      type: 'I',
    },
    name: 'word4',
  },
  {
    tag: 'NOUN',
    type: 'C',
    properties: {
      type: 'C',
    },
    name: 'word5',
  },
];

const App = () => {
  const [content, setContent] = React.useState({
    blocks: [{
      key: 'bbds0',
      text: "ok ok @word1 a word1 word2 word1' ab c word2 ",
      type: 'unstyled',
      depth: 0,
      inlineStyleRanges: [],
      entityRanges: [
        {
          offset: 15,
          length: 5,
          key: 0,
        },
        {
          offset: 21,
          length: 5,
          key: 1,
        },
        {
          offset: 27,
          length: 5,
          key: 2,
        },
        {
          offset: 39,
          length: 5,
          key: 3,
        }],
      data: {},
    }],
    entityMap: {
      0: {
        type: 'mention',
        mutability: 'SEGMENTED',
        data: {
          mention: {
            tag: 'NOUN', type: 'C', properties: { type: 'C' }, name: 'word1',
          },
        },
      },
      1: {
        type: 'mention',
        mutability: 'SEGMENTED',
        data: {
          mention: {
            tag: 'NOUN', type: 'P', properties: { type: 'P' }, name: 'word2',
          },
        },
      },
      2: {
        type: 'mention',
        mutability: 'SEGMENTED',
        data: {
          mention: {
            tag: 'NOUN', type: 'C', properties: { type: 'C' }, name: 'word1',
          },
        },
      },
      3: {
        type: 'mention',
        mutability: 'SEGMENTED',
        data: {
          mention: {
            tag: 'NOUN', type: 'P', properties: { type: 'P' }, name: 'word2',
          },
        },
      },
    },
  });

  return <InputEditor inputWords={inputWords} content={content} onChange={setContent} />;
};

export default App;
