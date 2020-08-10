import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import './i18n';
import App from './App';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '3rem',
    },
    h2: {
      fontSize: '2.5rem',
    },
    h3: {
      fontSize: '2.2rem',
    },
    h4: {
      fontSize: '1.8rem',
    },
    h5: {
      fontSize: '1.4rem',
    },
    h6: {
      fontSize: '1.2rem',
    },
  },
});

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root'),
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
