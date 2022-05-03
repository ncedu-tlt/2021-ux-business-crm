import React from 'react';
import * as ReactDOM from 'react-dom';
import './styles/index.css';
import App from './components/app/app.components';
import { BrowserRouter } from 'react-router-dom'
import Slider from './components/slider/slider.components';

const root = document.getElementById("root");
ReactDOM.render(<BrowserRouter><Slider /></BrowserRouter>, root)
