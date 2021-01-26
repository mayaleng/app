import React from 'react';
import OutputWords from './components/OutputWords';

const defaultWords = [
  {
    id: '1',
    tag: 'NOUN',
    type: 'C',
    properties: {
      type: 'C',
      tense: 'P',
    },
  },
  {
    id: '2',
    tag: 'NOUN',
    type: 'P',
    properties: {
      type: 'P',
    },
  },
  {
    id: '3',
    tag: 'NOUN',
    type: 'P',
    properties: {
      type: 'P',
    },
  },
  {
    id: '4',
    tag: 'NOUN',
    type: 'P',
    properties: {
      type: 'P',
    },
  },
  {
    id: '5',
    tag: 'NOUN',
    type: 'P',
    properties: {
      type: 'P',
    },
  },
  {
    id: '6',
    tag: 'NOUN',
    type: 'P',
    properties: {
      type: 'P',
    },
  },
  {
    id: '7',
    tag: 'NOUN',
    type: 'P',
    properties: {
      type: 'P',
    },
  },
];

const App = () => {
  const [words, setWords] = React.useState(defaultWords);
  return <OutputWords words={words} onChange={(newWords) => { setWords(newWords); }} />;
};

export default App;
