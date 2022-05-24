import React from "react";
import './main.components.css';
import Header from "../../components/header/header.component";
import Banner from "../../components/banner/banner.component"
import Slider from "../../components/slider/slider.component"
import AdditionalInfo from "../../components/additional_info/additional_info.component";
import Footer from "../../components/footer/footer.component"


const MainPage = () => {
   return <div className="main">
      <Header />
      <Banner />
      <Slider />
      <AdditionalInfo />
      <Footer />
   </div>
}


export default MainPage