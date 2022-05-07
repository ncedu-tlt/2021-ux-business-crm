import React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/app/app.component';
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById("root");
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, root)
