import React from 'react';
import InputWords from './components/InputWords';

const App = () => {
  const [words, setWords] = React.useState([
    { id: 'a' },
    { id: 'b' },
  ]);

  return <InputWords words={words} onChange={(newWords) => { setWords(newWords); }} />;
};

export default App;
