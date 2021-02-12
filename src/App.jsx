import React from 'react';
import InputWord from './components/InputWord';
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
  const [word, setWord] = React.useState({});

  return (1 === 2
    ? (
      <RuleEditor
        inputWords={defaultWords}
        outputs={outputs}
        onOutputsChange={(newWords) => { setOutputs(newWords); }}
      />
    )
    : (
      <InputWord
        header="Word #n"
        word={word}
        onChange={(newWord) => {
          console.log(newWord);
          setWord(newWord);
        }}
      />
    )
  );
};

export default App;
