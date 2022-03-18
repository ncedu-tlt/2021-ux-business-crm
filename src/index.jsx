import React from 'react';
import * as ReactDOM from 'react-dom';
import './index.css';

const Header = (
   <header>
      <div className="menu"></div>
      <nav className="menu">
         <div className="menu-item"><a href="#" className="link-item-menu">New Perceprion</a></div>
         <div className="menu-item"><a href="Port/Port.html" className="link-item-menu">Портфолио</a></div>
         <div className="menu-item"><a href="News/news.html" className="link-item-menu">Новости</a></div>
         <div className="menu-item"><a href="About/About.html" className="link-item-menu">О компании</a></div>
         <div className="menu-item"><a href="Order/Order.html" className="link-item-menu">Заказать</a></div>
      </nav>
   </header>
)

const root = document.getElementById("root");
ReactDOM.render(Header, root);