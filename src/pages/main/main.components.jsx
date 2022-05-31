import React from "react";
import './main.components.css';
import Banner from "../../сomponents/banner/banner.component";
import Slider from "../../сomponents/slider/slider.component";
import AdditionalInfo from "../../сomponents/additionalinfo/additionalinfo.component";


const MainPage = () => {
   return <div className="main">
      <Banner />
      <Slider />
      <AdditionalInfo />
   </div>
}


export default MainPage