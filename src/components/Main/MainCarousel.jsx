import React, { useState } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../css/MainCarousel.css'; 
import { ScrollAnimation } from '@lasbe/react-scroll-animation';

const MainCarousel = () => {
    const [activeSlide, setActiveSlide] = useState(0);

    const slides = [
        <div key="1" className='slides-container'>
            <img src="../../src/assets/1.jpg" alt="1" />
            {activeSlide === 0 && (
                <ScrollAnimation
                    startingPoint="left"
                    amount="xl"
                    duration={0.4}
                    delay={0.4}
                    repeat={true}>
                    <div className='carousel-caption'>
                        <div style={{ marginLeft: "50px", marginBottom: "30px", fontSize: "3.5rem" }}>다시 없을 <span style={{ color: "#845ef7" }}>순간</span></div>
                        <div style={{ marginLeft: "50px", fontSize: "2.5rem" }}>그 순간의 <span style={{ color: "#da77f2" }}>즐거움</span></div>
                    </div>
                </ScrollAnimation>
            )}
        </div>,
        <div key="2" className='slides-container'>
            <img src="../../src/assets/2.jpg" alt="2" />
            {activeSlide === 1 && (
                <ScrollAnimation
                    startingPoint="left"
                    amount="xl"
                    duration={0.4}
                    delay={0.4}
                    repeat={true}>
                    <div className='carousel-caption'>
                        <div style={{ marginLeft: "50px", marginBottom: "30px", fontSize: "3.5rem" }}><span style={{ background: "linear-gradient(to top, #845ef7 20%, transparent 50%)", width: "fit-content" }}>버킷리스트</span> 여행 </div>
                        <div style={{ marginLeft: "50px", fontSize: "2.5rem" }}>축구 직관의 <span style={{ color: "#da77f2" }}>시작!</span></div>
                    </div>
                </ScrollAnimation>
            )}
        </div>,
        <div key="3" className='slides-container'>
            <img src="../../src/assets/3.jpg" alt="3" />
            {activeSlide === 2 && (
                <ScrollAnimation
                    startingPoint="left"
                    amount="xl"
                    duration={0.4}
                    delay={0.4}
                    repeat={true}>
                    <div className='carousel-caption'>
                        <div style={{ marginLeft: "50px", marginBottom: "30px", fontSize: "3.5rem" }}>지금 바로 <span style={{ color: "#fa5252", background: "linear-gradient(to top, #ffe3e3 20%, transparent 50%)", width: "fit-content" }}>유럽여행</span>과</div>
                        <div style={{ marginLeft: "50px", fontSize: "2.5rem" }}>세계적인 선수의 <span style={{ color: "#da77f2" }}>축구 경기</span>를 경험하세요!</div>
                    </div>
                </ScrollAnimation>
            )}
        </div>,
        <div key="4" className='slides-container'>
            <img src="../../src/assets/4.jpg" alt="4" />
            {activeSlide === 3 && (
                <ScrollAnimation
                    startingPoint="left"
                    amount="xl"
                    duration={0.4}
                    delay={0.4}
                    repeat={true}>
                    <div className='carousel-caption'>
                        <div style={{ marginLeft: "50px", marginBottom: "30px", fontSize: "3.5rem" }}>눈앞에서 환상적인 플레이를 경험해 보세요!</div>
                    </div>
                </ScrollAnimation>
            )}
        </div>,
        <div key="5" className='slides-container'>
            <img src="../../src/assets/5.jpg" alt="5" />
        </div>,
        <div key="6" className='slides-container'>
            <img src="../../src/assets/6.jpg" alt="6" />
        </div>,
        <div key="7" className='slides-container'>
            <img src="../../src/assets/7.jpg" alt="7" />
        </div>,
        <div key="8" className='slides-container'>
            <img src="../../src/assets/8.jpg" alt="8" />
        </div>,
    ];

    return (
        <div className="main-carousel-container">
            <Slider
                dots
                infinite
                speed={500}
                slidesToShow={1}
                slidesToScroll={1}
                adaptiveHeight
                autoplay
                arrows
                fade
                afterChange={(current) => setActiveSlide(current)}
            >
                {slides.map((slide, index) => (
                    <div key={index}>
                        <TransitionGroup>
                            <CSSTransition
                                key={index}
                                classNames="slide"
                                timeout={{ enter: 500, exit: 500 }}
                            >
                                <div className="slide-container">
                                    {slide}
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                ))}
            </Slider>
        </div>
    );
};

export default MainCarousel;