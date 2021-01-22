import React from 'react';
import OperationSelector from './components/OperationSelector';

const App = () => {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <OperationSelector
      value={value}
      onChange={handleChange}
    />
  );
};

export default App;
