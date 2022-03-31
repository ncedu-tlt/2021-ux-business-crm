import React from 'react';
import * as ReactDOM from 'react-dom';
import './Banner.components.css';


const Banner = () => {

 return (
    <div className="Banner_body">
      <div className="Banner_insider_box">
        <div className="Banner_row">
          <div className='Banner_title'><span>AR</span></div>
          <div className='Banner_desr'><span>Новое приложение AR уже доступно для покупки!</span></div>
          <div >
            <button className="Button_order">Сделать заказ</button>
          </div>
        </div>
        <div className='Banner_position'>
          <img className='Image' src="https://miro.medium.com/max/1000/1*MnP5DPXdh9RJnwtwrVXl6A.jpeg" >
          </img>
        </div>
      </div>
    </div >
  )
}

export default Banner;