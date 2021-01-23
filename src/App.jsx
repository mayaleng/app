import React from 'react';
import PathEditor from './components/PathEditor';

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
  <PathEditor words={words} open />
);

export default App;
