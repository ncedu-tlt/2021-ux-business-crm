import React from "react";
import './about-company.component.css';
import AboutUs from "../../сomponents/about-us/aboutus.component";
import Header from "../../сomponents/header/header.component";
import Footer from "../../сomponents/footer/footer.component";


const AboutCompany = () => {
   return (
      <div className="aboutus">
         <Header />
         <AboutUs />
         <Footer />
      </div>
   )
}


export default AboutCompany
