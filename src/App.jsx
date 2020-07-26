import React from 'react';
import { Switch, BrowserRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Home from './pages/Home';
import Rules from './pages/Rules';
import NotFound from './pages/NotFound';

import Layout from './components/Layout';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/rules" component={Rules} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
