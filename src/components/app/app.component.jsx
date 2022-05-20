import React from "react";
import { Routes, Route } from 'react-router-dom'
import AdditionalInfo from "../../pages/additional_info/additional_info.component";
import Header from "../header/header.component.jsx";
import MainPage from "../../pages/main/main.components.jsx"
import NewsPage from "../../pages/news/news.components.jsx";



const App = () => {
   return (
      <div>
         <Header />
         <Routes>
            <Route path="../../pages/main/main.components.jsx" element={<MainPage />}></Route>
            <Route path="../../pages/news/news.components.jsx" element={<NewsPage />}></Route>
            <Route path="/additional_info" element={<AdditionalInfo/>}></Route>
         </Routes>
      </div>
   )
}

export default App