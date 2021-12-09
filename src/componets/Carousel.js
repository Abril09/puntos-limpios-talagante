import Carousel from "react-material-ui-carousel";
import Quedate from "../assets/quedatejpg.png";
import React from "react";

export function CarouselPuntos(props) {
    return (
        <div style={{height: '500px'}}>
            <Carousel autoPlay={true} fullHeightHover={true}>
                <img style={{width: '200%', height: '500px'}}
                     src={`https://www.penalolen.cl/wp-content/uploads/2016/10/centro-reciclaje1.png`}/>
                <img style={{width: '100%', height: '500px'}}
                     src={Quedate}/>
            </Carousel>
        </div>
    )
}