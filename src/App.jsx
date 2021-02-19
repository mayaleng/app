import React from 'react';
import RuleEditor from './components/RuleEditor';

const App = () => {
  const [inputs, setInputs] = React.useState([]);
  const [outputs, setOutputs] = React.useState([]);

  return (
    <RuleEditor
      inputs={inputs}
      onInputsChange={setInputs}
      outputs={outputs}
      onOutputsChange={setOutputs}
    />
  );
};

export default App;
