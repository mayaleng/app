import React from 'react';
import RuleEditor from './components/RuleEditor';

const App = () => {
  const [inputs, setInputs] = React.useState([]);
  const [ouputs, setOutputs] = React.useState([]);

  const onInputUpdate = React.useCallback((word) => {
    setInputs((prevInputs) => {
      const newInputs = [...prevInputs];
      const { id } = word;
      const index = prevInputs.findIndex((w) => w.id === id);
      newInputs[index] = word;
      return newInputs;
    });
  }, []);

  const onInputRemove = React.useCallback((word) => {
    setInputs((prevInputs) => {
      const { id } = word;
      return prevInputs.filter((w) => w.id !== id);
    });
  }, []);

  const onOutputUpdate = React.useCallback((word) => {
    setOutputs((preValues) => {
      const newInputs = [...preValues];
      const { id } = word;
      const index = preValues.findIndex((w) => w.id === id);
      newInputs[index] = word;
      return newInputs;
    });
  }, []);

  const onOutputRemove = React.useCallback((word) => {
    setOutputs((preValues) => {
      const { id } = word;
      return preValues.filter((w) => w.id !== id);
    });
  }, []);

  return (
    <RuleEditor
      inputs={inputs}
      setInputs={setInputs}
      onInputRemove={onInputRemove}
      onInputUpdate={onInputUpdate}
      outputs={ouputs}
      setOutputs={setOutputs}
      onOutputUpdate={onOutputUpdate}
      onOutputRemove={onOutputRemove}
    />
  );
};

export default App;
