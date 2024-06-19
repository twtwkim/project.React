import React from 'react';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import '../../css/ContentCarousel.css';
import {Link} from 'react-router-dom';

const ContentCarousel = () => {
    const slides = [
        {
            id: 1,
            title: '[3경기] UEFA 유로 2024 축구직관투어',
            sub: '06월 14일 출발 | 4박 6일',
            price: '4,990,000원',
            imgSrc: '/src/assets/uefa_euro_2024_germany-wallpaper-2880x1800.jpg',
            additionalImages: [
                '', '', ''
            ],
            matchups: [
                {
                    team1: '스페인',
                    team1Logo: '/src/assets/Bandera_de_España.svg',
                    team2: '크로아티아',
                    team2Logo: '/src/assets/다운로드.png'
                }, {
                    team1: '잉글랜드',
                    team1Logo: '/src/assets/england.png',
                    team2: '세르비아',
                    team2Logo: '/src/assets/serbia.png'
                }, {
                    team1: '프랑스',
                    team1Logo: '/src/assets/france.png',
                    team2: '오스트리아',
                    team2Logo: '/src/assets/austria.svg'
                }
            ]
        }, {
            id: 2,
            title: '[2경기] UEFA 유로 2024 축구직관투어',
            sub: '06월 20일 출발 | 4박 6일',
            price: '4,390,000원',
            imgSrc: '/src/assets/uefa_euro_2024_germany-wallpaper-2880x1800.jpg',
            additionalImages: [
                '', '', ''
            ],
            matchups: [
                {
                    team1: '프랑스',
                    team1Logo: '/src/assets/france.png',
                    team2: '네덜란드',
                    team2Logo: '/src/assets/네덜란드.png'
                }, {
                    team1: '독일',
                    team1Logo: '/src/assets/독일.png',
                    team2: '스위스',
                    team2Logo: '/src/assets/스위스.png'
                }
            ]
        }, {
            id: 3,
            title: '[3경기] 챔스 준결승&북런던더비&황희찬 직관',
            sub: '05월 01일 출발 | 5박 7일',
            price: '5,890,000원',
            imgSrc: '/src/assets/uefa-champions-league-star-football-logo-8dv90jbvwwhzp9c0.jpg',
            additionalImages: [
                '', '', ''
            ],
            matchups: [
                {
                    team1: '울버햄튼',
                    team1Logo: '/src/assets/740.png',
                    team2: '루턴타운FC',
                    team2Logo: '/src/assets/677.png'
                }, {
                    team1: '토트넘 훗스퍼',
                    team1Logo: '/src/assets/728.png',
                    team2: '아스날FC',
                    team2Logo: '/src/assets/602.png'
                }, {
                    team1: '바이에른 뮌헨',
                    team1Logo: '/src/assets/915.png',
                    team2: '레알마드리드',
                    team2Logo: '/src/assets/1736.png'
                }
            ]
        }, {
            id: 4,
            title: '[3경기] 손흥민&황희찬&맨시티 축구직관투어',
            sub: '05월 12일 출발 | 5박 7일',
            price: '5,190,000원',
            imgSrc: '/src/assets/2557813-53054975-2560-1440.jpg',
            additionalImages: [
                '', '', ''
            ],
            matchups: [
                {
                    team1: '첼시',
                    team1Logo: '/src/assets/630.png',
                    team2: '토트넘 훗스퍼',
                    team2Logo: '/src/assets/728.png'
                }, {
                    team1: '맨체스터시티',
                    team1Logo: '/src/assets/679.png',
                    team2: '울버햄튼',
                    team2Logo: '/src/assets/740.png'
                }, {
                    team1: '리버풀',
                    team1Logo: '/src/assets/676.png',
                    team2: '토트넘 훗스퍼',
                    team2Logo: '/src/assets/728.png'
                }
            ]
        }, {
            id: 5,
            title: '[3경기] 김민재&이강인 챔스 직관투어',
            sub: '04월 06일 출발 | 5박 7일',
            price: '5,840,000원',
            imgSrc: '/src/assets/allianz_arena2.jpg',
            additionalImages: [
                '', '', ''
            ],
            matchups: [
                {
                    team1: '맨체스터 유나이티드',
                    team1Logo: '/src/assets/680.png',
                    team2: '리버풀',
                    team2Logo: '/src/assets/676.png'
                }, {
                    team1: '아스날FC',
                    team1Logo: '/src/assets/602.png',
                    team2: '바이에른 뮌헨',
                    team2Logo: '/src/assets/915.png'
                }, {
                    team1: '파리생제르망',
                    team1Logo: '/src/assets/868.png',
                    team2: 'FC바르셀로나',
                    team2Logo: '/src/assets/1668.png'
                }
            ]
        },
        // 다른 슬라이드들도 동일한 형식으로 추가
    ];
    
    return (
        <div className="Content-main-carousel-container">
            <div className='Ccarousel-title'>
                <h1 className='Content-h1'>유럽 축구직관투어</h1>
                <h5 className='Content-h3'>직관의 맛과 함께 직관투어를 떠나보세요!</h5>
            </div>
            <Slider
                dots={false}
                infinite={false}
                speed={500}
                slidesToShow={3}
                slidesToScroll={1}
                adaptiveHeight="adaptiveHeight"
                autoplay={false}
                arrows="arrows">
                {
                    slides.map((slide, index) => (
                        <div key={index}>
                            <TransitionGroup>
                                <CSSTransition
                                    key={index}
                                    classNames="slide"
                                    timeout={{
                                        enter: 500,
                                        exit: 500
                                    }}>
                                    <div className="Content-slide-container">
                                        <div className="Content-slides-container">
                                            <img className="Content-image" src={slide.imgSrc} alt={`Slide ${slide.id}`}/>
                                            <div className='Content-carousel-caption'>
                                                <h2>{slide.title}</h2>
                                                <div className='caption-section'>
                                                    <h3>{slide.sub}</h3>
                                                    <h1>{slide.price}</h1>
                                                </div>
                                            </div>
                                            <Link to={`/detail/${slide.id}`}>
                                                <div className="Content-overlay">
                                                    <div className="additional-info">
                                                        {
                                                            slide
                                                                .matchups
                                                                .map((matchup, idx) => (
                                                                    <div key={idx} className="matchup-container">
                                                                        <div className="matchup-content">
                                                                            <img
                                                                                className="team-logo"
                                                                                src={matchup.team1Logo}
                                                                                alt={`${matchup.team1} Logo`}/>
                                                                            <p>{matchup.team1}
                                                                                vs {matchup.team2}</p>
                                                                            <img
                                                                                className="team-logo"
                                                                                src={matchup.team2Logo}
                                                                                alt={`${matchup.team2} Logo`}/>
                                                                        </div>
                                                                    </div>
                                                                ))
                                                        }
                                                    </div>
                                                </div>
                                            </Link>
                                        </div>
                                    </div>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>
                    ))
                }
            </Slider>
        </div>
    );
};

export default ContentCarousel;