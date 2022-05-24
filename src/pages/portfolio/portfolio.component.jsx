import React from "react";
import './portfolio.component.css';
import Header from "../../сomponents/header/header.component";
import Slider from "../../сomponents/slider/slider.component";
import Footer from "../../сomponents/footer/footer.component";

const Portfolio = () => {
   return (
      <div className="wrapper">
         <Header />
         <Slider />
         <Footer />
      </div>
   )
}


export default Portfolio