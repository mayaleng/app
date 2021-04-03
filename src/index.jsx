import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider, createMuiTheme } from '@material-ui/core';
import './i18n';
import * as serviceWorker from './serviceWorker';
import App from './App';

const theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: '1.9rem',
      fontWeight: '550',
      marginBottom: '0.3rem',
    },
    h2: {
      fontSize: '1.6rem',
      fontWeight: '450',
      marginBottom: '0.2rem',
    },
    h3: {
      fontWeight: '400',
      fontSize: '1.4rem',
      marginBottom: '0.2rem',
    },
    h4: {
      fontSize: '1.3rem',
      fontWeight: '400',
    },
    h5: {
      fontSize: '1rem',
      fontWeight: '400',
    },
    h6: {
      fontSize: '0.9rem',
      fontWeight: '400',
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
