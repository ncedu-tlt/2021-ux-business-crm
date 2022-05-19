import React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.css';
import App from './Components/app/app.component';
import Additional_info from './Components/additional_info/additional_info.component';
import { BrowserRouter } from 'react-router-dom'

const root = document.getElementById("root");
ReactDOM.render(<BrowserRouter><App /></BrowserRouter>, root)
