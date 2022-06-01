import React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.css';
import App from './сomponents/app/app.component';
import { BrowserRouter } from 'react-router-dom'
import Login from './сomponents/login/login.component';

const root = document.getElementById("root");
ReactDOM.render(<BrowserRouter><Login /></BrowserRouter>, root)
