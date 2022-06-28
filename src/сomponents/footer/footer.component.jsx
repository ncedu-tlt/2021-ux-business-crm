import React from 'react';
import * as ReactDOM from 'react-dom';
import { ReactComponent as EmailIcon } from '../../img/email.svg';
import { ReactComponent as TelephoneIcon } from '../../img/telephone-call.svg';
import { ReactComponent as InstagramIcon } from '../../img/instagram.svg';
import { ReactComponent as TelegramIcon } from '../../img/telegram.svg';
import { ReactComponent as VKIcon } from '../../img/vk-alt.svg';
import { ReactComponent as TikTiokIcon } from '../../img/tiktok.svg';
import './footer.component.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-cont">
                Связаться с нами
            </div>
            <div className="footer-items">

                <div className="footer-items-case">

                    <div className="footer-left-column">
                        <EmailIcon className='footer-img' />
                        <div className="footer-left-column-text">salomat56@gmail.com</div>
                    </div>
                    <div className="footer-left-column">
                        <TelephoneIcon className='footer-img' />
                        <div className="footer-left-column-text">+7 964 97 04 71</div>
                    </div>
                    <div className="footer-left-column">
                        <div className="footer-left-column-text">New Perception</div>
                    </div>
                </div>
                <div className="footer-items-case">

                    <div className="footer-right-column">Наш адрес</div>
                    <div className="footer-right-column">ул. Ленина д. 159 оф. 69</div>
                    <div className="footer-right-column">
                        <a href="#"><TelegramIcon className='footer-img' /></a>
                        <a href="#"><VKIcon className='footer-img' /></a>
                        <a href="#"><TikTiokIcon className='footer-img' /></a>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;