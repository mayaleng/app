import React from 'react';
import IfAnd from './components/IfAnd';

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
  <IfAnd words={words} />
);

export default App;
