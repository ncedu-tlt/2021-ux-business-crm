import React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/app/app.components';
import { BrowserRouter } from 'react-router-dom'
import Banner from './components/banner/banner.components';

const root = document.getElementById("root");
ReactDOM.render(<BrowserRouter><Banner /></BrowserRouter>, root)
