import React from "react";
import { Route, Routes } from 'react-router-dom'
import Header from "../header/header.component.jsx";
import MainPage from "../../pages/main/main.components.jsx"
import AboutCompany from "../../pages/about-company/about-company.component.jsx";
import NewsPage from "../../pages/news/news.components";
import Portfolio from "../../pages/portfolio/portfolio.component";
import Order from "../../pages/order/order.component.jsx";

const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" element={<MainPage />}></Route>
                <Route path="portfolio.components.jsx" element={<Portfolio />}></Route>
                <Route path="news.components" element={<NewsPage />}></Route>
                <Route path="about-company.component" element={<AboutCompany />}></Route>
                <Route path="order.component" element={<Order />}></Route>
            </Routes>
        </div>
    )
}

export default App
