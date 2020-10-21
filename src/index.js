import React from 'react';
import ReactDOM from 'react-dom';
import App from './Components/App';
import 'bootstrap/dist/css/bootstrap.css'
import 'popper.js/dist/umd/popper.js'
import 'jquery/dist/jquery.js'
import 'bootstrap/dist/js/bootstrap.js'
import './index.css';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

