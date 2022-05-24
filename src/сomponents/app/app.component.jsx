import React from "react";
import {Route, Routes} from 'react-router-dom'
import Header from "../header/header.component.jsx";
import MainPage from "../../pages/main/main.components.jsx"
import AboutCompany from "../../pages/about-company/about-company.component.jsx";
import NewsPage from "../../pages/news/news.components";

const App = () => {
    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" exact element={<MainPage/>}></Route>
                <Route path="/about-us" element={<AboutCompany/>}></Route>
                <Route path="/news" element={<NewsPage/>}></Route>
            </Routes>
        </div>
    )
}

export default App
