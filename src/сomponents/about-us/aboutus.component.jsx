import React from "react";
import './aboutus.component.css';
import Personal from '../../img/us.jpg';
import Maxim from '../../img/slide1.jpg'
import Bochka from '../../img/slide2.jpg'
import Andrew from '../../img/slide3.jpg'
import Pavlyuk from '../../img/slide4.jpg'
import Abdunami from '../../img/slide5.jpg'
import Vladik from '../../img/slide6.jpg'

const AboutUs = () => {
   return (
      <div className="wrapper">
         <div className="title">Про нашу компанию</div>
         <img src={Personal} className='aboutus__img' alt="it's me" />
         <div className="text">
            <span className="important__text">Наша компания</span> занимается разработкой VR/AR приложений. Мы являемся <span className="important__text">лидером</span> на региональном рынке.<br />
            <span className="important__text">Наша миссия:</span> внедрять технологии дополненной реальности в <span className="important__text">бизнес-процессы</span> организаций.<br />
            <span className="important__text">Наши принципы:</span> популяризация сферы дополненной реальности для бизнеса.
            Быстро и качественно выполнять свои <span className="important__text">обязательства</span> перед клиентом.
            <span className="important__text"> Командная организация</span> рабочей деятельности.<br />
            <span className="important__text">Деятельность компании: </span>
            внедрение AR технологий в бизнес и их сопровождение. Выявление сферы бизнеса. Анализ заказа. Выявление подробностей.
            Выбор шаблона для сферы заказчика. Выявление срока работ. Распределение обязанностей. Сдача заказа и его установка.
         </div>
         <div className="title">Наша команда</div>
         <div className="gallery">
            <div class="block">
               <div>
                  <img src={Maxim} alt="Maxim Yumakov" /><br />
                  <span>Максим Юмаков</span><br />
                  <span>Дизайнер, Frontend</span>
               </div>
               <div>
                  <img src={Bochka} alt="Artem Bochkarev" />
                  <span>Артём Бочкарёв</span><br />
                  <span>Бизнес-аналитик, Backend</span>
               </div>
               <div>
                  <img src={Andrew} alt="Andrew Schevchenko" />
                  <span>Андрей Шевченко</span><br />
                  <span>Тестировщик, Backend</span>
               </div>
               <div>
                  <img src={Pavlyuk} alt="Artem Pavlenko" />
                  <span>Артём Павленко</span><br />
                  <span>Тестировщик, Frontend</span>
               </div>
               <div>
                  <img src={Abdunami} alt="Abdunaim Hazratkulov" />
                  <span>Абдунаим Хазраткулов</span><br />
                  <span>Дизайнер, Frontend</span>
               </div>
               <div>
                  <img src={Vladik} alt="Vladislav Kudashov" />
                  <span>Владислав Кудашов</span><br />
                  <span>Бизнес-аналитик, Backend</span>
               </div>
            </div>
         </div>
      </div >
   )
}

export default AboutUs