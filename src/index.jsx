import React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.css';
/*import Header from './components/Header/Header.components';*/
/*import App from './components/app/app.component.jsx'*/
import App from './components/app/app.components';
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById("root");
/*ReactDOM.render(<Header />, root);*/
ReactDOM.render
   (<BrowserRouter>
      <App />
   </BrowserRouter>
      , root)