import React from "react";
import './header.component.css';
import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <header>
         <nav className="menu__nav">
            <div className="menu-item__nav"><Link to="/" className="link-item-menu__nav">New Perceprion</Link></div>
            <div className="menu-item__nav"><Link to="/portfolio" className="link-item-menu__nav">Портфолио</Link></div>
            <div className="menu-item__nav"><Link to="/news" className="link-item-menu__nav">Новости</Link></div>
            <div className="menu-item__nav"><Link to="/about-us" className="link-item-menu__nav">О компании</Link></div>
            <div className="menu-item__nav"><Link to="/order" className="link-item-menu__nav">Заказать</Link></div>
         </nav>
      </header>
   )
}

export default Header
