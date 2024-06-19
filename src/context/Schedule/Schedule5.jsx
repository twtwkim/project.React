import React, { useContext, useState, useEffect } from 'react';
import '../../css/Schedule.css'
import { SlideContext } from '../SlideContext';
import { useParams } from 'react-router';
import { scrollToDay } from '../../modules/main';
import { connect } from 'react-redux';

const Schedule5 = ({currentDay, scrollToDay}) => {
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-04-06 (토)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>인천 - 맨체스터</div>
                    </div>
                    <div className='day1-flight'>
                        <div>인천 출발</div>
                        <hr style={{width:"70%", borderWidth:"2px"}}></hr>
                        <div style={{color:"#7048e8", border:"1px solid #7048e8", padding:"20px", zIndex:"80", position:"absolute", backgroundColor:"white"}}>해당 상품은 항공 미포함 상품입니다</div>
                        <div>맨체스터 도착</div>
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
                            <div style={{fontSize:"1.4rem"}}>맨체스터</div>                            
                            <div className='day1-detail-info'>
                                <div style={{fontSize:"1rem", color:"black" }}>맨체스터 도착</div>
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-04-07 (일)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>맨체스터</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>맨체스터</div>                            
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>맨체스터 도심투어</div>
                                <div>축구역사를 한눈에 보는 '국립축구박물관'</div>
                                <div>축구덕후라면 반드시 들려봐야할 올드레플천국 '클래식 풋볼 셔츠 샵'</div>
                            </div>
                        </div>
                        <div className='day2-detail-title-sub' style={{marginBottom:"50px"}}>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                    국립축구박물관 (National Football Museum)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/40527-National-Football-Museum.jpg' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/39ec442449bf6458a95cdfdb6241b859.webp' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                축구가 영국인들의 삶의 방식이자 전통의 중요한 부분을 차지하는 대중의 경기가 되기까지의 과정 및 이유와 함께, 영국이 왜 축구의 본고장인지, 그 탄생지에 관해 다루는 박물관으로 영국 잉글랜드 랭커셔 프레스턴에 2001년 개관했다. 이후 재정 문제로 2010년 4월 문을 닫고, 맨체스터 시의회와 유럽 지역 개발 펀드(European Regional Development Fund)의 투자를 받아 맨체스터로 이동, 어비스(Urbis) 전시관을 2년간 개축하여 2012년 7월 6일 재개관했다. 축구화, 축구공, 회화, 엽서, 도자 등 14만 점 이상의 축구 관련 물품을 소장하고 있다.
                                </div>
                        </div>
                        <div className='day2-detail-title-sub'>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                    클래식 풋볼 셔츠 샵 / 맨체스터 (Classic Football Shop)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/store-entrance.jpg' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/0_Classic-Football-Shirts.webp' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                축구와 관련된 다양한 상품을 볼 수 있는 축덕들의 성지이며, 축구를 좋아하는 사람이라면 반드시 들려봐야될 장소이다.
                                </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프리미어리그 경기 관람</div>
                                <div>맨체스터유나이티드 VS 리버풀</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-football-ball-6796454.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프리미어리그 1경기 관람</div>
                                <div className='day2-detail-match1'>
                                    {slide && slide.matchups && slide.matchups.length > 0 && (
                                        <div>
                                            <img style={{width:"50px"}} src='/src/assets/680.png'/>
                                            {slide.matchups[0].team1}
                                            <img src='/src/assets/DPBEUFEuro2024FootballBannerDecoration.jpg'/>
                                            {slide.matchups[0].team2}
                                            <img style={{width:"50px"}} src='/src/assets/676.png'/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>호텔 이동 및 휴식</div>
                                <div>전용 차량으로 이동</div>
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-04-08 (월)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>맨체스터-런던</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>맨체스터</div>                            
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>런던으로 이동</div>
                                <div>기차 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>런던</div>                            
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>런던 도착 및 호텔 체크인</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                        <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>런던 도심투어</div>
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-04-09 (화)</div>
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
                                <div style={{fontSize:"1rem", color:"black"}}>런던 도심투어</div>
                                <div>축구덕후라면 반드시 들려봐야할 올드레플천국 '클래식 풋볼 셔츠 샵'</div>
                            </div>
                        </div>
                        <div className='day2-detail-title-sub' style={{marginBottom:"50px"}}>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                    클래식 풋볼 셔츠 샵 / 런던 (Classic Football Shop)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/x720.jpg' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/classic-football-shirts-shop-in-the-old-truman-brewery-off-brick-lane-east-london-selling-retro-and-vintage-football-shirts-founded-manchester-2006-T99R8N.jpg' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                축구와 관련된 다양한 상품을 볼 수 있는 축덕들의 성지이며, 축구를 좋아하는 사람이라면 반드시 들려봐야될 장소이다.
                                </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>챔피언스리그 경기 관람</div>
                                <div>아스날FC VS 바이에른 뮌헨</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-football-ball-6796454.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>챔피언스리그 2경기 관람</div>
                                <div className='day2-detail-match1'>
                                    {slide && slide.matchups && slide.matchups.length > 0 && (
                                        <div>
                                            <img style={{width:"50px"}} src='/src/assets/602.png'/>
                                            {slide.matchups[1].team1}
                                            <img src='/src/assets/DPBEUFEuro2024FootballBannerDecoration.jpg'/>
                                            {slide.matchups[1].team2}
                                            <img style={{width:"50px"}} src='/src/assets/915.png'/>
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
                <div id="day5" className='day5'>
                    <div className='day2-title'>
                        <h1>5일차</h1>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-04-10 (수)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>런던-파리</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>런던</div>                            
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>파리 이동</div>
                                <div>유로스타 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>파리</div>                            
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>파리 도착 및 호텔 체크인</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>파리 도심투어</div>
                                <div>파리의 상징 ‘에펠탑’</div>
                                <div>낭만을 느낄 수 있는 ‘샹젤리제 거리’</div>
                            </div>
                        </div>
                        <div className='day2-detail-title-sub' style={{marginBottom:"50px"}}>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                    에펠탑 (Eiffel Tower)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/84621-Paris.webp' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/534568-16th-arrondissement.avif' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                에펠탑은 센 강 서쪽 강변에 드넓게 펼쳐진 샹 드 마르스 공원 끄트머리에 있습니다. 1889년 프랑스 혁명 100주년을 기념해 개최된 파리 만국박람회 때 구스타브 에펠의 설계로 세워진 탑입니다. 높이 301m는 당시로서는 세계 최고였습니다. 총 무게는 9700t으로, 철기둥을 잇는 리벳을 약 250만 개나 사용했다고 합니다. 이 탑은 건축가 '에펠'이 1889년에 시민혁명 100주년을 기념하여 세운 것으로, 당시에는 환영받지 못한 건축물이었습니다. 고풍스러운 느낌의 파리에는 '철골 구조물'이 어울리지 않다는 이유였습니다. 많은 지식인과 예술가들에게 '파리의 예술성과 미적 가치를 망치는 혐오스러운 쇳덩이'라는 평가를 받았으나, 시간이 흐를수록 파리 시민들은 에펠탑을 좋아하게 되었고 이에 1991년에는 에펠탑을 포함한 센 강변 전체가 유네스코 세계문화유산에 등재되었습니다. '처음에는 싫어도 자주 보면 좋아진다'라는 뜻의 '에펠탑 효과'도 이렇게 생기게 되었습니다.
                                </div>
                        </div>
                        <div className='day2-detail-title-sub' style={{marginBottom:"50px"}}>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                    샹젤리제 (Champs Élysées)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/474411-Champs-Elysees-Neighborhood.avif' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/20085-Arc-De-Triomphe.avif' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                샹젤리제 거리는 프랑스인들이 세계에서 가장 아름다운 거리로 자부하는 명소이자 파리 시내 최대 번화가입니다. 개선문에서 콩코르드 광장까지 일직선으로 뻗어 있는 이 거리는 프랑스 역사의 흔적을 담고 있습니다. 과거에는 들판과 습지에 불과하던 이 지역이 거리로 정비된 것은 17세기 초의 일이었습니다. 왕비 마리 드 메디시스(Marie de Médicis)가 '여왕의 산책길'인 튈르리 정원에서 이어지는 센 강을 따라 걷는 산책길을 조성하면서 샹젤리제 거리의 역사가 시작되었습니다. 그 후 베르사유 궁전의 정원 조성으로 유명해진 르 노트르가 가로수를 심고 로터리 등을 만들어 보행 도로로 확장했습니다. 이윽고 이 아름다운 가로수 거리는 그리스 신화에서 낙원이라는 의미의 '엘리제'를 따서 샹젤리제(엘리제의 들판이라는 의미)라고 불리게 되었습니다.
                                </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>챔피언스리그 경기 관람</div>
                                <div>파리생제르맹 VS FC바르셀로나</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-football-ball-6796454.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>챔피언스리그 3경기 관람</div>
                                <div className='day2-detail-match1'>
                                    {slide && slide.matchups && slide.matchups.length > 0 && (
                                        <div>
                                            <img style={{width:"50px"}} src='/src/assets/868.png'/>
                                            {slide.matchups[2].team1}
                                            <img src='/src/assets/DPBEUFEuro2024FootballBannerDecoration.jpg'/>
                                            {slide.matchups[2].team2}
                                            <img style={{width:"50px"}} src='/src/assets/1668.png'/>
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-04-11 (목)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>파리</div>
                    </div>
                    <div className='day1-detail'>
                        <div className='day1-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem"}}>파리</div>                            
                            <div className='day1-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>파리 공항으로 이동</div>
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
                                    <div style={{marginLeft:"20px"}}>자유식</div>
                                    <div style={{color:"#7048e8"}}>[석식]</div>
                                    <div style={{marginLeft:"20px"}}>자유식</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="day7" className='day7'>
                    <div className='day1-title'>
                        <h1>7일차</h1>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-04-12 (금)</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Schedule5);