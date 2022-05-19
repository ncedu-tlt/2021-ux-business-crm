import React from 'react';
import * as ReactDOM from 'react-dom';
import './additional_info.component.css';
import Header from "../header/header.component.jsx";
import MainPage from "../../pages/main/main.components.jsx"
import NewsPage from "../../pages/news/news.components.jsx";

const Additional_info = () => {
    return (
       <div className='wrapper'>
           <div className='info'>
                <h1>О дополненной реальности пару слов</h1>
           </div>
           <div className='video'>
               <video width="920" height="480" controls> </video>
           </div>
           <div className='description'>
               <div className='description_1'>Примерчик и его описание пару слов</div>
               <div className='description_2'>Примерчик и его описание пару слов</div>
               <div className='description_3'>Примерчик и его описание пару слов</div>
               <div className='description_4'>Примерчик и его описание пару слов</div>
           </div>
       </div>
    )
 }
 
 export default Additional_info