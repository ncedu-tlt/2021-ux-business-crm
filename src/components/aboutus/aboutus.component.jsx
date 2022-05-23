import React from "react";
import './aboutus.components.css';
import { ReactComponent as Us } from '../../Img/us.jpg';

const Aboutus = () => {
   return (
      <div className="wrapper">
         <div className="text">Наша компания занимается разработкой VR/AR приложений. С 2021 года мы являемся лидером в сфере AR</div>
         <div className="image">
            <Us className='aboutus__img' />
         </div>
      </div>
   )
}

export default Aboutus