import 'babel-polyfill';
import React from 'react';
import axios from 'axios';
import ReactDOM from 'react-dom';
import {wixAxiosConfig} from 'wix-axios-config';
import App from './components/App';

const baseUrl = window.__BASEURL__;

wixAxiosConfig(axios, {baseURL: baseUrl});

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);

if (module.hot) {
  module.hot.accept('./components/App', () => {
    const NextApp = require('./components/App').default;
    ReactDOM.render(
      <NextApp/>,
      document.getElementById('root')
    );
  });
}
