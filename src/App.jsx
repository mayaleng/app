import React from 'react';
import OutputWords from './components/OutputWords';

const words = [
  {
    tag: 'NOUN',
    type: 'C',
    properties: {
      type: 'C',
    },
  },
  {
    tag: 'NOUN',
    type: 'P',
    properties: {
      type: 'P',
    },
  },
];

const App = () => (
  <OutputWords words={words} />
);

export default App;
