import React from "react";
import './header.component.css';
import { Link } from 'react-router-dom'

const Header = () => {
   return (
      <header>
         <nav className="menu">
            <div className="menu-item"><Link to="/AdditionalInfo" className="link-item-menu">New Perceprion</Link></div>
            <div className="menu-item"><Link to="/" className="link-item-menu">Портфолио</Link></div>
            <div className="menu-item"><Link to="/" className="link-item-menu">Новости</Link></div>
            <div className="menu-item"><Link to="/" className="link-item-menu">О компании</Link></div>
            <div className="menu-item"><Link to="/" className="link-item-menu">Заказать</Link></div>
         </nav>
      </header>
   )
}

export default Header
