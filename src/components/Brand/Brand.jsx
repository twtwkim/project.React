import React, { useEffect, useState } from 'react';
import '../../css/Brand.css';
import { ScrollAnimation } from '@lasbe/react-scroll-animation';

const Brand = () => {
    const [activeSection, setActiveSection] = useState(0);
    const sectionTexts = ['Brand Story', 'History', "CEO's Message"];

    useEffect(() => {
        const handleScroll = (event) => {
            event.preventDefault();
            if (event.deltaY > 0) {
                // 스크롤 다운
                setActiveSection((prevSection) =>
                    Math.min(prevSection + 1, sectionTexts.length - 1)
                );
            } else {
                // 스크롤 업
                setActiveSection((prevSection) =>
                    Math.max(prevSection - 1, 0)
                );
            }
        };
        window.addEventListener('wheel', handleScroll, { passive: false });
        return () => {
            window.removeEventListener('wheel', handleScroll);
        };
    }, [sectionTexts]);

    useEffect(() => {
        const sections = document.querySelectorAll('.section');
        sections[activeSection].scrollIntoView({ behavior: 'smooth' });
    }, [activeSection]);

    return (
        <div className='mainDiv'>
            <div className='pagination-dots'>
                {sectionTexts.map((text, index) => (
                    <div
                        key={index}
                        className={`dot-container ${activeSection === index ? 'active' : ''}`}>
                        {activeSection === index ? (
                            <span className='pagination-text'>{text}</span>
                        ) : (
                            <div className='dot'></div>
                        )}
                    </div>
                ))}
            </div>
            <div className='section first'>
                <div className='imageWrapper'>
                    <div className='Brand-title-content4'>
                        <ScrollAnimation
                            startingPoint="right"
                            amount="xl"
                            duration={1}
                            delay={0.5}
                            repeat={true}>
                            <div className='Brand-title4'>"이게 바로 축구지"</div>
                        </ScrollAnimation>
                        <ScrollAnimation
                            startingPoint="left"
                            amount="xl"
                            duration={1}
                            delay={0.5}
                            repeat={true}>
                            <div>
                                <div className='Brand-subtitle4' style={{ marginBottom: "10px" }}>
                                    직관의 맛은 꿈꿔왔던 직관을 실현시켜주고
                                </div>
                                <div className='Brand-subtitle4'>
                                    최고의 만족과 행복을 선사하는 브랜드입니다.
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
            <div className='section second'>
                <div className='imageWrapper'>
                    <div className='Brand-title-content5' style={{ color: "black" }}>
                        <ScrollAnimation
                            startingPoint="left"
                            amount="xl"
                            duration={1}
                            delay={0.5}
                            repeat={true}>
                            <div className='Brand-title5' style={{ color: "white" }}>History</div>
                        </ScrollAnimation>
                        <div className='Brand-subtitle5'>
                            <div>
                                <h2 style={{ color: "white" }}>2022년</h2>
                                <h4 style={{ color: "#dee2e6" }}>'직관의 맛' 브랜드 런칭</h4>
                            </div>
                            <div>
                                <h2 style={{ color: "white" }}>2023년</h2>
                                <h4 style={{ color: "#dee2e6" }}>대한민국 브랜드 명예의 전당</h4>
                                <h4 style={{ color: "#dee2e6" }}>여행 서비스부문 1위</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className='section third'>
                <div className='imageWrapper'>
                    <div className='Brand-title-content6' style={{ color: "black" }}>
                        <ScrollAnimation
                            startingPoint="left"
                            amount="xl"
                            duration={1}
                            delay={0.5}
                            repeat={true}>
                            <div className='Brand-title6'>CEO’S message</div>
                        </ScrollAnimation>
                        <ScrollAnimation
                            startingPoint="left"
                            amount="xl"
                            duration={1}
                            delay={0.8}
                            repeat={true}>
                            <div className='Brand-subtitle6'>
                                <div>저희 직관의 맛은 2022년 설립 이래,</div>
                                <div>
                                    급변하는 여행 사업 시장에서 고객 중심의 유연한 사고를 바탕으로 최고의 상품과 서비스를
                                    지속적으로 혁신하며 사업을 영위해 왔습니다.
                                    <div>고객만족경영 이념을 바탕으로, 완전히 새로운 여행사로의 변모를 꿈꾸고 있습니다.</div>
                                    <div>‘직관의 맛’만의 새로운 여행 패러다임을 제시하겠습니다.</div>
                                    <div>앞으로도 직관의 맛의 지속적인 발전과 도약에 고객 여러분들의 많은 관심을 부탁드리며,</div>
                                    <div style={{ marginBottom: "30px" }}>고객 신뢰를 최우선으로 생각하는 직관의 맛이 되도록 노력하겠습니다.</div>
                                    <div>(주)직관의 맛 대표이사 홍길동</div>
                                </div>
                            </div>
                        </ScrollAnimation>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Brand;