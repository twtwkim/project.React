import React from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../css/DetailContentCarousel.css'; 

const DetailContentCarousel = ({ images }) => {
    return (
        <div className="DC-main-carousel-container"> 
            <Slider
                dots
                infinite
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                
                autoplay
                arrows
                fade
            >
                {images.map((image, index) => (
                    <div key={index}>
                        <TransitionGroup>
                            <CSSTransition
                                key={index}
                                classNames="slide"
                                timeout={{ enter: 500, exit: 500 }}
                            >
                                <div className="DC-slide-container">
                                    <div className='DC-slides-container'>
                                        <img src={image} alt={`Slide ${index + 1}`} />
                                    </div>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default DetailContentCarousel;