import React, { useContext, useState, useEffect } from 'react';
import '../../css/Schedule.css'
import { SlideContext } from '../SlideContext';
import { useParams } from 'react-router';
import { scrollToDay } from '../../modules/main';
import { connect } from 'react-redux';

const Schedule4 = ({currentDay, scrollToDay}) => {
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-05-12 (일)</div>
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-05-13 (월)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>런던</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>런던</div>                            
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>런던 도심투어</div>
                                <div>의회 민주주의의 산실 '국회의사당&빅벤'</div>
                                <div>영국왕실과 시작을 함께한 '웨스터민스터사원'</div>
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
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>첼시 경기장으로 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프리미어리그 경기 관람</div>
                                <div>첼시 VS 토트넘 훗스퍼</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-football-ball-6796454.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프리미어리그 1경기 관람</div>
                                <div className='day2-detail-match1'>
                                    {slide && slide.matchups && slide.matchups.length > 0 && (
                                        <div>
                                            <img style={{width:"50px"}} src='/src/assets/630.png'/>
                                            {slide.matchups[0].team1}
                                            <img src='/src/assets/DPBEUFEuro2024FootballBannerDecoration.jpg'/>
                                            {slide.matchups[0].team2}
                                            <img style={{width:"50px"}} src='/src/assets/728.png'/>
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-05-14 (화)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>런던-맨체스터</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>런던</div>                            
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>토트넘 훗스퍼 구장투어</div>
                                <div>런던에서 가장 큰 축구 클럽 경기장 ‘뉴 화이트 하트레인’</div>
                            </div>
                        </div>
                        <div className='day2-detail-title-sub' style={{marginBottom:"50px"}}>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                    뉴화이트하트레인 (New White Hart Lane)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/new-white-hart-lane.avif' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/0_New-Spurs-stadium-14JPG.webp' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                토트넘 홋스퍼 스타디움(Tottenham Hotspur Stadium)은 잉글랜드의 축구 경기장이다. 노섬벌랜드 디벨롭먼트 프로젝트 (Northumberland Development Project)의 일환으로 건설되었다. 영국의 수도 런던의 북부 지역인 토트넘에 위치해있으며 프리미어리그에 소속되어있는 팀인 토트넘 홋스퍼의 홈구장 으로 사용되고 있다. 2007년 클럽은 홈구장의 수용인원을 늘리기 위한 일환으로 노섬벌랜드 디벨롭먼트 프로젝트 (Northumberland Development Project)를 세웠고, 경기장 신축안을 공개했다. 신축 경기장 수용인원은 56,250명 규모로 계획되어 있었으며 기존구장인 화이트 하트 레인 옆에 건설될 예정이었다. 경기장 신축을 포함해 지역 전반적인 재개발 사업을 뜻하는 프로젝트로 2018-2019 프리미어리그 개막을 목표로 건설하였다. 하지만 배수관 및 전력누수 등으로 인해 안전 진단을 통과하지 못해 언제 개장할지 확신할 수는 없다. 2015년 7월 8일 기존 수용 인원을 62,240 명으로 확대하였다. 2019년 4월 4일 공식 개장하며 잉글랜드 프리미어 리그 크리스탈 펠리스와 첫 경기 가졌다. 첫 경기에서 최초 득점 기록은 손흥민이 가지고있다.
                                </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>맨체스터로 이동</div>
                                <div>현지 기차로 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>맨체스터</div>                            
                        </div>
                        
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>호텔 체크인 및 휴식</div>
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-05-15 (수)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>맨체스터</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>맨체스터</div>                            
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>맨체스터 시티 경기장으로 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title-sub' style={{marginBottom:"50px"}}>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                    에티하드 스타디움 (Etihad Stadium)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/wp10675176.jpg' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/0_GettyImages-1491808783.webp' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                에티하드 스타디움(Etihad Stadium), 시티 오브 맨체스터 스타디움(City of Manchester Stadium, 약어로 COMS, 별칭은 이스트랜즈)는 잉글랜드 맨체스터에 위치한 맨체스터 시티 FC의 홈 구장이다. 처음에는 맨체스터의 2000년 하계 올림픽 유치를 위해 설계되었으며, 2002년 코먼웰스 게임 개최를 위해 건설되었다. 건설 비용은 1억 1천만 £였다. 맨체스터 시티 FC는 2003년에 250년간의 임대 계약을 맺고서는 메인 로드에서 이곳으로 홈 구장을 옮겼다. 이 경기장은 단지(bowl) 모양이다. 경기장 전체 둘레로는 2개 층(two-tier) 관중석이 설치되어 있으며, 양측에는 그 위로 제 3층 관중석이 올라가 있다. 2007년 6월 23일 현재, 영국에서 10번째로 규모가 큰 경기장이며, 프리미어리그 내에서는 5번째로 규모가 큰 스타디움이다. 총 수용인원은 47,726명이었으나 증축으로 2015년 8월 현재 55,097으로 확장되었다. 2006년 1월 4일 이 경기장에서 2008년 UEFA 컵 결승전을 치를 것이라고 언론에 발표되었다. 2012년, 에티하드 항공으로부터 구장 명칭 사용권 계약을 체결하면서 시티 오브 맨체스터 스타디움(City of Manchester Stadium)에서 에티하드 스타디움(ETIHAD Stadium)으로 10년간 사용된다.
                                </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프리미어리그 경기 관람</div>
                                <div>맨체스터시티 VS 울버햄튼</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-football-ball-6796454.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프리미어리그 2경기 관람</div>
                                <div className='day2-detail-match1'>
                                    {slide && slide.matchups && slide.matchups.length > 0 && (
                                        <div>
                                            <img style={{width:"50px"}} src='/src/assets/679.png'/>
                                            {slide.matchups[1].team1}
                                            <img src='/src/assets/DPBEUFEuro2024FootballBannerDecoration.jpg'/>
                                            {slide.matchups[1].team2}
                                            <img style={{width:"50px"}} src='/src/assets/740.png'/>
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-05-16 (목)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>맨체스터-리버풀-맨체스터</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>맨체스터</div>                            
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>리버풀로 이동</div>
                                <div>현지 기차로 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>리버풀</div>                            
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프리미어리그 경기 관람</div>
                                <div>리버풀 VS 토트넘 훗스퍼</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-football-ball-6796454.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프리미어리그 3경기 관람</div>
                                <div className='day2-detail-match1'>
                                    {slide && slide.matchups && slide.matchups.length > 0 && (
                                        <div>
                                            <img style={{width:"50px"}} src='/src/assets/676.png'/>
                                            {slide.matchups[2].team1}
                                            <img src='/src/assets/DPBEUFEuro2024FootballBannerDecoration.jpg'/>
                                            {slide.matchups[2].team2}
                                            <img style={{width:"50px"}} src='/src/assets/728.png'/>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>맨체스터로 이동</div>
                                <div>현지 기차로 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>맨체스터</div>                            
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-05-17 (금)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>맨체스터</div>
                    </div>
                    <div className='day1-detail'>
                        <div className='day1-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem"}}>맨체스터</div>                            
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-05-18 (토)</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Schedule4);