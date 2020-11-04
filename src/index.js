import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.scss';
import App from './App/index';
import GoatCorral from './components/goatCorral/index';

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GoatCorral />
  </React.StrictMode>,
  document.getElementById('root'),
);
