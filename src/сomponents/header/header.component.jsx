import React from "react";
import './header.component.css';
import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <header>
         <nav className="menu">
            <div className="menu-item"><Link to="/" className="link-item-menu">New Perceprion</Link></div>
            <div className="menu-item"><Link to="../../pages/portfolio/portfolio.component" className="link-item-menu">Портфолио</Link></div>
            <div className="menu-item"><Link to="../../pages/news/news.components" className="link-item-menu">Новости</Link></div>
            <div className="menu-item"><Link to="../../pages/about-company/about-company.component" className="link-item-menu">О компании</Link></div>
            <div className="menu-item"><Link to="../../pages/order/order.component" className="link-item-menu">Заказать</Link></div>
         </nav>
      </header>
   )
}

export default Header
