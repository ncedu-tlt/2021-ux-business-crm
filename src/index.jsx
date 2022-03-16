import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';


const Banner = (
  <div className="Banner_body">
    <div className="Banner_wrapper">
      <div className="banner_strokes">
        <div className='banner_str_title'><span>AR</span></div>
        <div className='banner_str_desr'><span>Новое приложение AR уже доступно для покупки!</span></div>
        <div >
        <button className="button-order">Сделать заказ</button>
      </div>
      </div>

      <div className='img_position'>
        <img className='image' src="https://miro.medium.com/max/1000/1*MnP5DPXdh9RJnwtwrVXl6A.jpeg" >
        </img>
      </div>
    </div>


  </div >
    
  

    )



const root = document.getElementById("root");
ReactDOM.render(Banner, root);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals

