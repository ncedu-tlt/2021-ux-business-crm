import React from "react";
import './aboutus.component.css';
import Personal from '../../img/us.jpg';

const AboutUs = () => {
   return (
      <div className="wrapper">
         <div className="title">Про нашу команду</div>
         <img src={Personal} className='aboutus__img' alt="it's me" />
         <div className="text">
            Наша компания занимается разработкой VR/AR приложений. С 2021 года мы являемся лидером в сфере AR
         </div>
      </div>
   )
}

export default AboutUs