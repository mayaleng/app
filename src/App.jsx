import React from 'react';

import EditConditionalTemplate from './components/EditConditionalTemplate';

function App() {
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
    <EditConditionalTemplate
      onClose={() => {}}
      operand={{
        or: [
          {
            or: [
              {
                and: [
                  {
                    operation: 'eq',
                    operands: [
                      {
                        word: 1,
                        property: 'type',
                      },
                      {
                        literal: 'Alex',
                      },
                    ],
                  },
                  {
                    operation: 'eq',
                    operands: [
                      {
                        word: 1,
                        property: 'type',
                      },
                      {
                        literal: 'Alex',
                      },
                    ],
                  },
                ],
              },
              {
                and: [
                  {
                    operation: 'eq',
                    operands: [
                      {
                        word: 1,
                        property: 'type',
                      },
                      {
                        literal: 'Alex',
                      },
                    ],
                  },
                  {
                    operation: 'eq',
                    operands: [
                      {
                        word: 1,
                        property: 'type',
                      },
                      {
                        literal: 'Alex',
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      }}
      words={[
        {
          tag: 'NOUN',
          type: 'C',
          properties: {
            type: 'C',
          },
        },
        {
          tag: 'NOUN',
          type: 'P',
          properties: {
            type: 'P',
          },
        },
        {
          tag: 'VERB',
          type: 'M',
          properties: {
            tense: 'S',
            person: '3',
          },
        },
        {
          tag: 'DET',
          type: 'I',
          properties: {
            type: 'I',
          },
        },
        {
          tag: 'NOUN',
          type: 'C',
          properties: {
            type: 'C',
          },
        },
      ]}
      open
    />
  );
}

export default App;
