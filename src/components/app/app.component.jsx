import React from "react";
import { Routes, Route } from 'react-router-dom'
import Header from "../header/header.component.jsx";
import MainPage from "../../pages/main/main.components.jsx"
import NewsPage from "../../pages/news/news.components.jsx";



const App = () => {
   return (
      <div>
         <Header />
         <Routes>
            <Route to={"../../pages/main/main.components.jsx"} element={<MainPage />}></Route>
            <Route to={"../../pages/news/news.components.jsx"} element={<NewsPage />}></Route>
         </Routes>
      </div>
   )
}

export default App