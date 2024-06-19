import React, { useContext, useState, useEffect } from 'react';
import '../../css/Schedule.css'
import { SlideContext } from '../SlideContext';
import { useParams } from 'react-router';
import { scrollToDay } from '../../modules/main';
import { connect } from 'react-redux';

const Schedule3 = ({currentDay, scrollToDay}) => {
    const {id} = useParams();
    const {slides} = useContext(SlideContext);
    const [slide, setSlide] = useState(null);
    const [selectedDay, setSelectedDay] = useState(0)

    const handleButtonClick = (dayNumber) => {
        setSelectedDay(dayNumber); // 선택된 날짜 업데이트
    };
    useEffect(() => {
        // 선택된 날짜의 div 요소를 찾아서 스크롤
        const dayDiv = document.getElementById(`day${selectedDay}`);
        if (dayDiv) {
            dayDiv.scrollIntoView({ behavior: 'auto', block: 'start', inline:'start' });
        }
    }, [selectedDay]);

    useEffect(() => {
        const foundSlide = slides.find(slide => slide.id === parseInt(id));
        setSlide(foundSlide);
        // console.log(foundSlide);
    }, [id, slides]);

    // console.log(slide)
    return (
        <div className='Schedule-container'>
            <ul className='schedule-navi'>
                <div>|</div>
                <li onClick={() => handleButtonClick(1)}>1일차</li>
                <div>|</div>
                <li onClick={() => handleButtonClick(2)}>2일차</li>
                <div>|</div>
                <li onClick={() => handleButtonClick(3)}>3일차</li>
                <div>|</div>
                <li onClick={() => handleButtonClick(4)}>4일차</li>
                <div>|</div>
                <li onClick={() => handleButtonClick(5)}>5일차</li>
                <div>|</div>
                <li onClick={() => handleButtonClick(6)}>6일차</li>
                <div>|</div>
                <li onClick={() => handleButtonClick(7)}>7일차</li>
                <div>|</div>
            </ul>
            <div className='first-box'>
                <div><img src='/src/assets/free-icon-location-10420089.png'></img></div>
                <div className='first-box-info'>
                    <div>미팅일시 | <span>현지미팅 예정입니다.</span></div>
                    <div>미팅장소 | <span>SNS를 통해 안내드리겠습니다.</span></div>
                </div>
            </div>
            <div className='second-box'>
                <div id="day1" className='day1'>
                    <div className='day1-title'>
                        <h1>1일차</h1>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-05-01 (수)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>인천 - 런던</div>
                    </div>
                    <div className='day1-flight'>
                        <div>인천 출발</div>
                        <hr style={{width:"70%", borderWidth:"2px"}}></hr>
                        <div style={{color:"#7048e8", border:"1px solid #7048e8", padding:"20px", zIndex:"80", position:"absolute", backgroundColor:"white"}}>해당 상품은 항공 미포함 상품입니다</div>
                        <div>런던 도착</div>
                    </div>
                    <div className='day1-detail'>
                        <div className='day1-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem"}}>인천</div>                            
                            <div className='day1-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>개별 체크인 & 입국수속</div>
                                <div>인천국제공항 출발</div>
                            </div>
                        </div>
                        <div className='day1-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem"}}>런던</div>                            
                            <div className='day1-detail-info'>
                                <div style={{fontSize:"1rem", color:"black" }}>런던 도착</div>
                                <div>차량으로 호텔 이동 / 호텔 체크인 및 휴식</div>
                            </div>
                        </div>
                        <div className='day1-detail-content'>
                            <div className='day1-detail-hotel'>
                                <img src='/src/assets/free-icon-hotel-5451846.png'></img>
                                <div className='day1-detail-hotel-info'>
                                    <div>본 여행 상품의 숙박시설은 현재 미정입니다.</div>
                                    <div>출발 전까지 홈페이지 또는 SMS를 통해 안내드리겠습니다.</div>
                                    <div style={{height:"20px"}}></div>
                                    <div>숙박은 기본 2인 1실로 배정되며, 1인실을 원할 시 문의 바랍니다.</div>
                                </div>
                            </div>
                            <div className='day1-detail-restaurant'>
                                <img src='/src/assets/free-icon-restaurant-12259416.png'></img>
                                <div className='day1-detail-meal'>
                                    <div style={{color:"#7048e8"}}>[조식]</div>
                                    <div style={{marginLeft:"20px"}}>-</div>
                                    <div style={{color:"#7048e8"}}>[중식]</div>
                                    <div style={{marginLeft:"20px"}}>기내식</div>
                                    <div style={{color:"#7048e8"}}>[석식]</div>
                                    <div style={{marginLeft:"20px"}}>기내식</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="day2" className='day2'>
                    <div className='day2-title'>
                        <h1>2일차</h1>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-05-02 (목)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>런던</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>런던</div>                            
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>울버햄튼으로 이동</div>
                                <div>전용 차량으로 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프리미어리그 경기 관람</div>
                                <div>울버햄튼 VS 루턴 타운 FC</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-football-ball-6796454.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프리미어리그 1경기 관람</div>
                                <div className='day2-detail-match1'>
                                    {slide && slide.matchups && slide.matchups.length > 0 && (
                                        <div>
                                            <img style={{width:"50px"}} src='/src/assets/740.png'/>
                                            {slide.matchups[0].team1}
                                            <img src='/src/assets/DPBEUFEuro2024FootballBannerDecoration.jpg'/>
                                            {slide.matchups[0].team2}
                                            <img style={{width:"50px"}} src='/src/assets/677.png'/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>호텔 이동 및 휴식</div>
                            </div>
                        </div>
                        <div className='day2-detail-content'>
                            <div className='day2-detail-hotel'>
                                <img src='/src/assets/free-icon-hotel-5451846.png'></img>
                                <div className='day2-detail-hotel-info'>
                                    <div>본 여행 상품의 숙박시설은 현재 미정입니다.</div>
                                    <div>출발 전까지 홈페이지 또는 SMS를 통해 안내드리겠습니다.</div>
                                    <div style={{height:"20px"}}></div>
                                    <div>숙박은 기본 2인 1실로 배정되며, 1인실을 원할 시 문의 바랍니다.</div>
                                </div>
                            </div>
                            <div className='day2-detail-restaurant'>
                                <img src='/src/assets/free-icon-restaurant-12259416.png'></img>
                                <div className='day2-detail-meal'>
                                    <div style={{color:"#7048e8"}}>[조식]</div>
                                    <div style={{marginLeft:"20px"}}>호텔식</div>
                                    <div style={{color:"#7048e8"}}>[중식]</div>
                                    <div style={{marginLeft:"20px"}}>자유식</div>
                                    <div style={{color:"#7048e8"}}>[석식]</div>
                                    <div style={{marginLeft:"20px"}}>자유식</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="day3" className='day3'>
                    <div className='day2-title'>
                        <h1>3일차</h1>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-05-03 (금)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>런던</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>런던</div>                            
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>토트넘 경기장으로 이동</div>
                                <div>현지 교통으로 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프리미어리그 경기 관람</div>
                                <div>토트넘 훗스퍼 VS 아스널FC</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-football-ball-6796454.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프리미어리그 2경기 관람</div>
                                <div className='day2-detail-match1'>
                                    {slide && slide.matchups && slide.matchups.length > 0 && (
                                        <div>
                                            <img style={{width:"50px"}} src='/src/assets/728.png'/>
                                            {slide.matchups[1].team1}
                                            <img src='/src/assets/DPBEUFEuro2024FootballBannerDecoration.jpg'/>
                                            {slide.matchups[1].team2}
                                            <img style={{width:"50px"}} src='/src/assets/602.png'/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>호텔 이동 및 휴식</div>
                            </div>
                        </div>
                        <div className='day1-detail-content'>
                            <div className='day1-detail-hotel'>
                                <img src='/src/assets/free-icon-hotel-5451846.png'></img>
                                <div className='day1-detail-hotel-info'>
                                    <div>본 여행 상품의 숙박시설은 현재 미정입니다.</div>
                                    <div>출발 전까지 홈페이지 또는 SMS를 통해 안내드리겠습니다.</div>
                                    <div style={{height:"20px"}}></div>
                                    <div>숙박은 기본 2인 1실로 배정되며, 1인실을 원할 시 문의 바랍니다.</div>
                                </div>
                            </div>
                            <div className='day1-detail-restaurant'>
                                <img src='/src/assets/free-icon-restaurant-12259416.png'></img>
                                <div className='day1-detail-meal'>
                                    <div style={{color:"#7048e8"}}>[조식]</div>
                                    <div style={{marginLeft:"20px"}}>호텔식</div>
                                    <div style={{color:"#7048e8"}}>[중식]</div>
                                    <div style={{marginLeft:"20px"}}>자유식</div>
                                    <div style={{color:"#7048e8"}}>[석식]</div>
                                    <div style={{marginLeft:"20px"}}>자유식</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="day4" className='day4'>
                    <div className='day2-title'>
                        <h1>4일차</h1>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-05-04 (토)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>런던-뮌헨</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>런던</div>                            
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>런던 도심투어</div>
                                <div>아스널 경기 관람시 '런던 도심투어'</div>
                                <div>의회 민주주의의 산실 '국회의사당&빅벤'</div>
                                <div>영국왕실과 시작을 함께한 '웨스터민스터사원'</div>
                                <div>런던의 랜드마크 '타워 브릿지'</div>
                            </div>
                        </div>
                        <div className='day2-detail-title-sub' style={{marginBottom:"50px"}}>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                    국회의사당&빅벤 (Houses of Parliament)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/117e351e03f4287b242b85cb31610ea7.webp' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/f1ec833364e8ff59fac8718fd0af1c5c.webp' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                빅 벤(Big Ben)은 영국 런던의 웨스트민스터 궁전 북쪽 흔히 종뿐만 아니라 시계탑 자체도 빅 벤이라고 부른다. 시계탑의 4면에는 세계에서 가장 큰 자명종 시계가 달려 있고, 시계 자체도 세워진 것들 가운데 세 번째로 높은 것이다. 2009년 5월 31일 건립 150주년을 축하하는 행사가 시계탑에서 있었다. 1859년에 세워진 빅 벤은 수많은 작품에서 런던을 상징하는 장소로 등장한 바 있으며, 매년 약 12,000명의 관광객이 찾는 대표적인 명소이기도 하다.
                                </div>
                        </div>
                        <div className='day2-detail-title-sub'>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                    웨스트민스터사원 (Westminster Abbey)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/c7f7339ad334e013a796a9d90d97b865.webp' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/098d569e-9891-441e-b83c-701967ec37fc.jpg' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                정식으로는 웨스트민스터 세인트 피터 성당 참사회(Collegiate Church of St. Peter in Westminster), 간략하게 웨스트민스터 사원(Westminster Abbey)은 런던 웨스트민스터에 있는 영국고딕 양식의 거대한 성공회 성당이다. 서쪽으로는 웨스트민스터 궁전(영국 국회의사당)과 인접해 있다. 전통적으로 이곳은 영국 왕의 대관식 등 왕실 행사를 거행하거나 매장터로 이용하는 곳이다. 부근에 있는 웨스트민스터 대성당(Westminster Cathedral)은 로마 가톨릭교회 소속으로 이곳 사원과는 전혀 별개의 것이다.
                                </div>
                        </div>
                        <div className='day2-detail-title-sub'>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                    타워브릿지 (Tower Bridge)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/90848-London.avif' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/302378-Tower-Bridge.avif' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                타워 브리지(Tower Bridge)는 영국 런던 시내를 흐르는 템즈 강 위에 도개교와 현수교를 결합한 구조로 지은 다리다. 런던 탑 근처에 있기 때문에 이러한 이름이 붙여졌다. 1886년에 착공을 시작하여 1894년에 완성한 이 다리는 오늘날에는 런던의 대표적인 상징물 가운데 하나가 되었다. 완공된 첫 달에만 655번이나 다리가 들어올려졌다. 현재는 1년에 약 500번 정도 다리가 들어올려진다. 처음에는 수력을 이용해 개폐했지만 오늘날에는 전력을 이용하고 있다.
                                </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>뮌헨</div>                            
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>뮌헨 이동</div>
                                <div>항공으로 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>호텔 이동 및 휴식</div>
                            </div>
                        </div>
                        <div className='day1-detail-content'>
                            <div className='day1-detail-hotel'>
                                <img src='/src/assets/free-icon-hotel-5451846.png'></img>
                                <div className='day1-detail-hotel-info'>
                                    <div>본 여행 상품의 숙박시설은 현재 미정입니다.</div>
                                    <div>출발 전까지 홈페이지 또는 SMS를 통해 안내드리겠습니다.</div>
                                    <div style={{height:"20px"}}></div>
                                    <div>숙박은 기본 2인 1실로 배정되며, 1인실을 원할 시 문의 바랍니다.</div>
                                </div>
                            </div>
                            <div className='day1-detail-restaurant'>
                                <img src='/src/assets/free-icon-restaurant-12259416.png'></img>
                                <div className='day1-detail-meal'>
                                    <div style={{color:"#7048e8"}}>[조식]</div>
                                    <div style={{marginLeft:"20px"}}>호텔식</div>
                                    <div style={{color:"#7048e8"}}>[중식]</div>
                                    <div style={{marginLeft:"20px"}}>자유식</div>
                                    <div style={{color:"#7048e8"}}>[석식]</div>
                                    <div style={{marginLeft:"20px"}}>자유식</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="day5" className='day5'>
                    <div className='day2-title'>
                        <h1>5일차</h1>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-05-05 (일)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>런던-뮌헨</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>런던</div>                            
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>뮌헨</div>                            
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>챔피언스 리그 준결승 관람</div>
                                <div>바이에른 뮌헨 VS 레알마드리드</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-football-ball-6796454.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>챔피언스리그 3경기 관람</div>
                                <div className='day2-detail-match1'>
                                    {slide && slide.matchups && slide.matchups.length > 0 && (
                                        <div>
                                            <img style={{width:"50px"}} src='/src/assets/915.png'/>
                                            {slide.matchups[2].team1}
                                            <img src='/src/assets/DPBEUFEuro2024FootballBannerDecoration.jpg'/>
                                            {slide.matchups[2].team2}
                                            <img style={{width:"50px"}} src='/src/assets/1736.png'/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>호텔 이동 및 휴식</div>
                            </div>
                        </div>
                        <div className='day1-detail-content'>
                            <div className='day1-detail-hotel'>
                                <img src='/src/assets/free-icon-hotel-5451846.png'></img>
                                <div className='day1-detail-hotel-info'>
                                    <div>본 여행 상품의 숙박시설은 현재 미정입니다.</div>
                                    <div>출발 전까지 홈페이지 또는 SMS를 통해 안내드리겠습니다.</div>
                                    <div style={{height:"20px"}}></div>
                                    <div>숙박은 기본 2인 1실로 배정되며, 1인실을 원할 시 문의 바랍니다.</div>
                                </div>
                            </div>
                            <div className='day1-detail-restaurant'>
                                <img src='/src/assets/free-icon-restaurant-12259416.png'></img>
                                <div className='day1-detail-meal'>
                                    <div style={{color:"#7048e8"}}>[조식]</div>
                                    <div style={{marginLeft:"20px"}}>호텔식</div>
                                    <div style={{color:"#7048e8"}}>[중식]</div>
                                    <div style={{marginLeft:"20px"}}>자유식</div>
                                    <div style={{color:"#7048e8"}}>[석식]</div>
                                    <div style={{marginLeft:"20px"}}>자유식</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="day6" className='day6'>
                    <div className='day1-title'>
                        <h1>6일차</h1>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-05-06 (월)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>런던- 뮌헨</div>
                    </div>
                    <div className='day1-detail'>
                        <div className='day1-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem"}}>런던</div>                            
                        </div>
                        <div className='day1-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem"}}>뮌헨</div>                            
                            <div className='day1-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>공항으로 이동</div>
                                <div>차량 이동</div>
                                <div>인천행 탑승</div>
                            </div>
                        </div>
                        <div className='day1-detail-content'>
                            <div className='day1-detail-restaurant'>
                                <img src='/src/assets/free-icon-restaurant-12259416.png'></img>
                                <div className='day1-detail-meal'>
                                    <div style={{color:"#7048e8"}}>[조식]</div>
                                    <div style={{marginLeft:"20px"}}>호텔식</div>
                                    <div style={{color:"#7048e8"}}>[중식]</div>
                                    <div style={{marginLeft:"20px"}}>기내식</div>
                                    <div style={{color:"#7048e8"}}>[석식]</div>
                                    <div style={{marginLeft:"20px"}}>기내식</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="day7" className='day7'>
                    <div className='day1-title'>
                        <h1>7일차</h1>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-05-07 (화)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>인천</div>
                    </div>
                    <div className='day1-detail'>
                        <div className='day6-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem"}}>인천</div>                            
                            <div className='day1-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>인천국제공항 도착</div>
                                <div>아쉬운 이별, 따뜻한 집으로!!</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>  
        </div>
    );
};

const mapStateToProps = state => ({
  currentDay: state.currentDay,
});

const mapDispatchToProps = {
  scrollToDay,
};

export default connect(mapStateToProps, mapDispatchToProps)(Schedule3);