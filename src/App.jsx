import React from 'react';
import Conditional from './components/Conditional';

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
  <Conditional words={words} />
);

export default App;
