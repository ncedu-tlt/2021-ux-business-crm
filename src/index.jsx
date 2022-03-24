import React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.css';
/*import Header from './components/Header/Header.components';*/
import App from './components/app/app.component.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from "react-redux";

const root = document.getElementById("root");
/*ReactDOM.render(<Header />, root);*/
ReactDOM.render
   (<BrowserRouter>
      <Provider store={store}>
         <App />
      </Provider>
   </BrowserRouter>
      , root)