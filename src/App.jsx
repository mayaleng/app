import React from 'react';

import WordSelector from './components/WordSelector';

function App() {
  const [value, setValue] = React.useState('');

  const words = [{
    tag: 'verb',
    type: 'M',
    properties: {
      tense: 's',
      person: '3',
    },
  }, {
    tag: 'noun',
    type: 'c',
    properties: {
      type: 'c',
    },
  }];

  return (
    // <Provider store={store}>
    //   <BrowserRouter>
    //     <Layout>
    //       <Switch>
    //         <Route exact path="/" component={Home} />
    //         <Route exact path="/rules" component={Rules} />
    //         <Route component={NotFound} />
    //       </Switch>
    //     </Layout>
    //   </BrowserRouter>
    // </Provider>
    <WordSelector
      words={words}
      value={value}
      onChange={(e) => {
        if (!e.target.value) {
          return;
        }

        setValue(e.target.value);
      }}
    />
  );
}

export default App;
