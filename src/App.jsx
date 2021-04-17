import React from 'react';
import RuleEditor from './components/RuleEditor';

const App = () => {
  const [inputs, setInputs] = React.useState([
    {
      id: '8PT',
      tag: 'verb',
      name: 'verbo (#8PT)',
      features: {},
    },
  ]);
  const [ouputs, setOutputs] = React.useState([
    {
      id: 'Z-3',
      type: 'simple',
      value: {
        type: 'literal',
        literal: {
          blocks: [
            {
              key: 'ag0cv',
              text: 'jj adjetivo (#8PT) ks sddsd',
              type: 'unstyled',
              depth: 0,
              inlineStyleRanges: [],
              entityRanges: [
                {
                  offset: 3,
                  length: 15,
                  key: 0,
                },
              ],
              data: {},
            },
          ],
          entityMap: {
            0: {
              type: 'mention',
              mutability: 'IMMUTABLE',
              data: {
                mention: {
                  id: '8PT',
                  tag: 'verb',
                  name: 'verbo (#8PT)',
                  features: {},
                },
              },
            },
          },
        },
      },
    },
  ]);

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
