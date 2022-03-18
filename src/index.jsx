import React from 'react'; //defolt
import * as ReactDOM from 'react-dom'; //defolt
import './index.css'; //defolt

const Footer = ( //defolt
    <footer>
        <div className="footer-cont">
            Связаться с нами
        </div>
        <div className="footer-items">

            <div className="footer-items-case">

                <div className="footer-left-column">
                    <img className="footer-img" src="Img/email.svg" />
                    <div className="footer-left-column-text">salomat56@gmail.com</div>
                </div>
                <div className="footer-left-column">
                    <img className="footer-img" src="Img/telephone-call.svg" />
                    <div className="footer-left-column-text">+7 964 97 04 71</div>
                </div>
                <div className="footer-left-column">
                    <img className="footer-img" src="" />
                    <div className="footer-left-column-text">Имя сайта</div>
                </div>
            </div>
            <div className="footer-items-case">

                <div className="footer-right-column">Наш адрес</div>
                <div className="footer-right-column">ул. Ленина д. 159 оф. 69</div>
                <div className="footer-right-column">
                    <a href="#"><img className="footer-img" src="Img/logo-instagram.svg"></img></a>
                    <a href="#"><img src="https://r58.fss.ru/files/494001/unnamed.jpg"></img></a>
                    <a href="#"><img className="footer-img" src="Img/vk-alt.svg"></img></a>
                    <a href="#"><img className="footer-img" src="Img/tiktok.svg"></img></a>
                </div>
            </div>
        </div>
    </footer>
)

const root = document.getElementById("root"); //defolt
ReactDOM.render(Footer, root); //defolt