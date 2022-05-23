import React from "react";
import './aboutus.component.css';
import Personal from '../../Img/us.jpg';

const AboutUs = () => {
   return (
      <div className="wrapper">
         <div className="title">Про нашу команду</div>
         <div className="text">Наша компания занимается разработкой VR/AR приложений.</div>
         <div className="text">С 2021 года мы являемся лидером в сфере AR</div>
         <div className="image">
            <img src={Personal} className='aboutus__img' alt="it's me" />
         </div>
      </div>
   )
}

export default AboutUs