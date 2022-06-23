import React from "react";
import './news.components.css';
import Newsbanner from "../../сomponents/news-banner/newsbanner.component";

const NewsPage = () => {
   return (
      <div className="news">
         <div className="text">Новости</div>
         <Newsbanner/>
      </div>
   )
}


export default NewsPage
