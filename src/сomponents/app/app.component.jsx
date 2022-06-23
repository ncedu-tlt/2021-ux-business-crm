import React from "react";
import { Route, Routes } from 'react-router-dom'
import Header from "../header/header.component.jsx";
import MainPage from "../../pages/main/main.components.jsx"
import AboutCompany from "../../pages/about-company/about-company.component.jsx";
import NewsPage from "../../pages/news/news.components";
import Portfolio from "../../pages/portfolio/portfolio.component";
import OrderPage from "../../pages/order/order.component.jsx";
import Footer from "../footer/footer.component.jsx";
import Login from "../login/login.component";
const App = () => {
    return (
        <div>
            <Header />
            <Routes>
                <Route path="/" exact element={<MainPage />}></Route>
                <Route path="/portfolio" element={<Portfolio />}></Route>
                <Route path="/news" element={<NewsPage />}></Route>
                <Route path="/about-us" element={<AboutCompany />}></Route>
                <Route path="/order" element={<OrderPage />}></Route>
                <Route path="/login" element={<Login />}></Route>
            </Routes>
            <Footer />
        </div>
    )
}

export default App
