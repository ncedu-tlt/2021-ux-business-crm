import React from "react";
import { Route, Routes } from 'react-router-dom'
import Header from "../header/header.component.jsx";
import MainPage from "../../pages/main/main.components.jsx"
import AboutCompany from "../../pages/about-company/about-company.component.jsx";
import NewsPage from "../../pages/news/news.components";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route to={"../../pages/main/main.components.jsx"} element={<MainPage />}></Route>
                <Route to={"../../pages/news/news.components.jsx"} element={<NewsPage />}></Route>
                <Route to={"../../pages/about-company/about-company.component.jsx"} element={<AboutCompany />}></Route>
            </Routes>
        </div>
    )
}

export default App
