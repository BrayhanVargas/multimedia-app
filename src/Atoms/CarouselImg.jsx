import React, { useState } from "react";
import { Carousel } from 'react-bootstrap';

export const CarouselImg = () => {
    const [index, setIndex] = useState(0);
    const handleSelect = (selectedIndex) => {
        setIndex(selectedIndex);
    };
    return (
        <div>
        <Carousel className="d-block w-50" activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={require('../Assests/react.png')}
                alt="First slide"
                width="300" 
                height="200"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={require('../Assests/nodejs.png')}
                alt="Second slide"
                width="300" 
                height="200"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={require('../Assests/js.png')}
                alt="Third slide"
                width="300" 
                height="200"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={require('../Assests/css.png')}
                alt="Four slide"
                width="300" 
                height="200"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={require('../Assests/bootstrap.png')}
                alt="Five slide"
                width="300" 
                height="200"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={require('../Assests/html.png')}
                alt="Six slide"
                width="300" 
                height="200"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={require('../Assests/web.png')}
                alt="Seven slide"
                width="300" 
                height="200"
            />
            </Carousel.Item>
            <Carousel.Item>
            <img
                className="d-block w-100"
                src={require('../Assests/atomic.png')}
                alt="Eight slide"
                width="300" 
                height="200"
            />
            </Carousel.Item>
        </Carousel>
        </div>
    );
}