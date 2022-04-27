import React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactComponent as EmailIcon } from '../../Img/email.svg';
import { ReactComponent as TelephoneIcon } from '../../Img/telephone-call.svg';
import { ReactComponent as InstagramIcon } from '../../Img/logo-instagram.svg';
import { ReactComponent as TelegramIcon } from '../../Img/telegram.svg';
import { ReactComponent as VKIcon } from '../../Img/vk-alt.svg';
import { ReactComponent as TikTiokIcon } from '../../Img/tiktok.svg';
import './index.css'

const Footer = () => { //defolt
    return(
    <footer>
        <div className="footer-cont">
            Связаться с нами
        </div>
        <div className="footer-items">

            <div className="footer-items-case">

                <div className="footer-left-column">
                    <EmailIcon className='footer-img'/>
                    <div className="footer-left-column-text">salomat56@gmail.com</div>
                </div>
                <div className="footer-left-column">
                    <TelephoneIcon className='footer-img'/>
                    <div className="footer-left-column-text">+7 964 97 04 71</div>
                </div>
                <div className="footer-left-column">
                    <div className="footer-left-column-text">Имя сайта</div>
                </div>
            </div>
            <div className="footer-items-case">

                <div className="footer-right-column">Наш адрес</div>
                <div className="footer-right-column">ул. Ленина д. 159 оф. 69</div>
                <div className="footer-right-column">
                    <a href="#"><InstagramIcon className='footer-img'/></a>
                    <a href="#"><TelegramIcon className='footer-img'/></a>
                    <a href="#"><VKIcon className='footer-img'/></a>
                    <a href="#"><TikTiokIcon className='footer-img'/></a>
                </div>
            </div>
        </div>
    </footer>
    )
}

export default Footer;