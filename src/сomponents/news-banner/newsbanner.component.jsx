import React, { useState } from 'react';
import * as ReactDOM from 'react-dom';
import './newsbanner.component.css';
import { Container } from "react-bootstrap";

function ReadMore({ children = 0 }) {

    const text = children;

    const [isShow, setIsShowLess] = useState(true)
    const result = isShow ? text.slice(0, 0) : text;

    function toggleIsShow() {
        setIsShowLess((!isShow));
    }

    return (
        <p>
            {result}
            <div className="button_potistion">
                <buttom className="button_show" onClick={toggleIsShow}>
                    {isShow ? "Read More" : "Read Less"}
                </buttom>
            </div>
        </p>
    )
}

const newsbanner = () => {

    return (
        <div className="banners_position">
            <Container className="banner_wrapper">
                <img className="image_news" src="https://www.monnalisa-project.eu/wp-content/uploads/2016/08/meeting.jpg" >
                </img>
                <div>Аннотация новости/статьи</div>
                <ReadMore>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen
                    book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially
                    unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more
                    recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </ReadMore>
            </Container>
        </div>
    )
}

export default newsbanner;