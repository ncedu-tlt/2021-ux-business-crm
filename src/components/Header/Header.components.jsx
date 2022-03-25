import React from "react";
import './index.css';
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
   return (
      <header>
         <nav className="menu">
            <div className="menu-item"><Link to="/" className="link-item-menu">New Perceprion</Link></div>
            <div className="menu-item"><Link to="/" className="link-item-menu">New Perceprion</Link></div>
            {/* Some JS Code 

            <div className="menu-item"><a href="Port/port.jsx" className="link-item-menu">Портфолио</a></div>
            <div className="menu-item"><a href="News/news.jsx" className="link-item-menu">Новости</a></div>
            <div className="menu-item"><a href="About/about.jsx" className="link-item-menu">О компании</a></div>
            <div className="menu-item"><a href="Order/order.jsx" className="link-item-menu">Заказать</a></div>
            */}
         </nav>
      </header>
   )
}

export default Header