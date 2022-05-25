import React from "react";
import './order.component.css';
import Header from "../../сomponents/header/header.component";
import Footer from "../../сomponents/footer/footer.component";


const OrderPage = () => {
   return (
      <div className="order">
         <Header />
         <div className="text">Тут можно будет сделать заказ</div>
         <Footer />
      </div>
   )
}


export default OrderPage