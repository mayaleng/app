import React from 'react';
import RuleEditor from './components/RuleEditor';

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
  const [outputs, setOutputs] = React.useState([]);
  return (
    <RuleEditor
      inputWords={defaultWords}
      outputs={outputs}
      onOutputsChange={(newWords) => { setOutputs(newWords); }}
    />
  );
};

export default App;
