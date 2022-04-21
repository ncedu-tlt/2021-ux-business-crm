import React, { useState } from "react";
import ReactDOM from "react-dom";
import Carousel from "react-elastic-carousel";
import Item from "./Item";
import "./styles.css";

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 }
];

function App() {
  const [items] = useState([{item: 1, link: "Название1"}, {item: 2, link: "Название2"}, {item: 3, link: "Название3"}, {item: 4, link: "Название4"}, {item: 5, link: "Название5"}, {item: 6, link: "Название6"}]);
  const links = ["Название1", "Название2", "Название3", "Название4", "Название5", "Название6"];

  return (
    <div className="App">
      <div className="font"> Портфолио </div>
      <hr className="seperator" />
      <div> Пару слов </div>
      <div className="carousel-wrapper">
        <Carousel breakPoints={breakPoints}>
          {items.map((item) => (
            <div style={{width: "100%", display: "flex", flexDirection:"column", alignItems: "center", marginLeft: "10px"}}>
            <Item key={item.item}>{item.item}</Item>
            <a href="/">{item.link}</a>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
