import React from 'react';
import RuleEditor from './components/RuleEditor';

const App = () => {
  const [inputs, setInputs] = React.useState([]);
  const [ouputs, setOutputs] = React.useState([]);

  return (
    <RuleEditor
      inputs={inputs}
      onInputsChange={setInputs}
      outputs={ouputs}
      onOutputsChange={setOutputs}
    />
  );
};

export default App;
