import React from 'react';
import * as ReactDOM from 'react-dom';
import './banner.component.css';
import NPr from '../../img/new_product.jpg'

const Banner = () => {

  return (
    <div className="banner_body">
      <div className="banner_insider_box">
        <div className="banner_row">
          <div className='banner_title'><span>AR</span></div>
          <div className='banner_desr'><span>Новое приложение AR уже доступно для покупки!</span></div>
          <div >
            <button className="button_order">Сделать заказ</button>
          </div>
        </div>
        <div className='banner_position'>
          <img className='image' src={NPr} >
          </img>
        </div>
      </div>
    </div >
  )
}

export default Banner;