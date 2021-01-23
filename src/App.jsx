import React from 'react';
import ConditionalDialog from './components/ConditionalDialog';

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
  <ConditionalDialog words={words} open />
);

export default App;
