import React from "react";
import { Routes, Route } from 'react-router-dom'
import Header from "../header/header.component.jsx";
import MainPage from "../../pages/main/main.components.jsx"
import AboutUs from "../aboutus/aboutus.component.jsx";
import AboutCompany from "../../pages/about-company/about-company.component.jsx";




const App = () => {
   return (
      <div>
         <Header />
         <Routes>
            <Route to={"../../pages/main/main.components.jsx"} element={<MainPage />}></Route>
            <Route to={"../../pages/about-company/about-company.component.jsx"} element={<AboutCompany />}></Route>
         </Routes>
         <AboutUs />
      </div>
   )
}

export default App