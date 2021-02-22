import React from 'react';
import RuleEditor from './components/RuleEditor';

const App = () => {
  const [inputs, setInputs] = React.useState([
    {
      id: 'fd85fcc5-fe1c-4fab-baf7-8dbdba898de3',
      tag: 'verb',
      features: {
        mode: 'i',
      },
    },
  ]);
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
