import React, { useContext, useState, useEffect } from 'react';
import '../../css/Schedule.css'
import { SlideContext } from '../SlideContext';
import { useParams } from 'react-router';
import { scrollToDay } from '../../modules/main';
import { connect } from 'react-redux';

const Schedule2 = ({currentDay, scrollToDay}) => {
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
                {/* <div>|</div>
                <li onClick={() => handleButtonClick(7)}>7일차</li> */}
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-06-20 (목)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>인천 - 라이프치히</div>
                    </div>
                    <div className='day1-flight'>
                        <div>인천 출발</div>
                        <hr style={{width:"70%", borderWidth:"2px"}}></hr>
                        <div style={{color:"#7048e8", border:"1px solid #7048e8", padding:"20px", zIndex:"80", position:"absolute", backgroundColor:"white"}}>해당 상품은 항공 미포함 상품입니다</div>
                        <div>라이프치히 도착</div>
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
                            <div style={{fontSize:"1.4rem"}}>라이프치히</div>                            
                            <div className='day1-detail-info'>
                                <div style={{fontSize:"1rem", color:"black" }}>라이프치히 도착</div>
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-06-21 (금)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>라이프치히</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>라이프치히</div>                            
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>라이프치히 도심투어</div>
                                <div>라이프치히의 역사를 품고 있는 '라이프치히 구 시청사'</div>
                                <div>음악의 거장 바흐를 알고 싶다면? '바흐 박물관'</div>
                            </div>
                        </div>
                        <div className='day2-detail-title-sub' style={{marginBottom:"50px"}}>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                        라이프치히 구 시청사 (Altes Rathaus)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/SGM_Altes-Rathaus_Foto-Markus-Scholz-1100x733-1.webp' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/altes-rathaus-leipzig-mit-stadtgeschichtlichem-museum-museen-in-leipzig.jpg' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                    시내 중심에 있는 마켓 스퀘어(Market Square)의 동쪽에 있다. 높은 지붕을 받치고 있는 이층의 건물과 지붕 사이로 고개를 내밀고 있는 다락방들, 또 왼쪽으로 높이 솟아 있는 시계탑 등으로 이루어진 웅장한 건물이다. 1547년 고딕 양식의 시청사가 파괴되자 당시 시장이었던 히에로니무스 로터(Hieronymus Lotter)는 최대한 빨리 전보다 더 크고 좋은 시청사를 지으라는 명령을 내리게 되고, 시장의 급한 요청을 의식한 건축가들은 기초 공사를 건너뛴 채 전에 있던 건물의 주초 위에 바로 새 건물을 짓기 시작하였다.
                                </div>
                        </div>
                        <div className='day2-detail-title-sub'>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                        바흐 박물관 (Bach Museum)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/166060-Bach-Museum.avif' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/jpg.jpg' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                바흐는 라이프치히의 성 토마스 교회에서 25년 가까이 성가대 지도를 담당하며 일생을 교회 음악 발전에 힘썼다. 바흐와 그의 가족은 교회 옆 건물인 부속 학교 건물에서 살았는데, 이 건물은 1902년 허물어졌다. 다행히 그 건물이 있던 부지의 맞은편에 바흐의 가족과 절친한 사이였던 보제 가족의 집(Bose Haus)이 잘 보존되어 있었고, 1985년에 바흐 박물관을 이 보제 가족의 집에 신설했다.
                                </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>경기장으로 이동</div>
                                <div>현지 교통으로 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>유로 2024 경기 관람</div>
                                <div>프랑스 VS 네덜란드</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-football-ball-6796454.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>유로 2024 1경기 관람</div>
                                <div className='day2-detail-match1'>
                                    {slide && slide.matchups && slide.matchups.length > 0 && (
                                        <div>
                                            <img style={{width:"50px"}} src='/src/assets/france.png'/>
                                            {slide.matchups[0].team1}
                                            <img src='/src/assets/DPBEUFEuro2024FootballBannerDecoration.jpg'/>
                                            {slide.matchups[0].team2}
                                            <img style={{width:"50px"}} src='/src/assets/네덜란드.png'/>
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-06-22 (토)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>라이프치히-프랑크푸르트</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>라이프치히</div>                            
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프랑크푸르트로 이동</div>
                                <div>기차로 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>프랑크푸르트</div>                            
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-06-23 (일)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>프랑크푸르트</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>프랑크푸르트</div>                            
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프랑크푸르트 도심투어</div>
                                <div>프랑크푸르트를 대표하는 '뢰머 광장''</div>
                                <div>신성로마제국 황제들이 대관식을 거행했던 성당 '프랑크푸르트 대성당'</div>
                            </div>
                        </div>
                        <div className='day2-detail-title-sub' style={{marginBottom:"50px"}}>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                    뢰머 광장 (Römerberg)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/217925-Romerplatz.jpg' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/Frankfurt-am-Main-Roemerberg.webp' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                프랑크푸르트암마인의 구시가지 중앙에 위치한 광장이다. '뢰머(로마인)'라는 이름을 가지게 된 것은 고대 로마인들이 이곳에 정착하면서부터인데 15~18세기의 건물들이 몰려 있다. 광장 주변에는 구시청사와 오스트차일레가 있다. 구시청사는 신성로마제국 황제가 대관식이 끝난 후에 화려한 축하연을 베풀었던 유서깊은 곳이며, 프랑크푸르트 최초의 박람회가 열린 곳이기도 하다. 1405년부터 시청사로 사용되었으며 제2차 세계대전 때 파괴되었다가 재건되었다. 구시청사 맞은편에 있는 목조건물들을 통칭 오스트차일레라고 하며, 본래는 15세기에 쾰른의 비단상인들을 위해 지어진 것이라고 한다.
                                </div>
                        </div>
                        <div className='day2-detail-title-sub'>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                    프랑크푸르트 대성당 (Frankfurt Cathedral)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/217545-Hessen-Germany.avif' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/45540-Frankfurt-Cathedral.avif' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                프랑크푸르트 대성당, 정식 명칭은 성 바르톨로메오 대성당(St. Bartholomew's Cathedral)은 교회법상 가톨릭 교구 교회이지만, 그 규모와 독일 내에서의 중요성 때문에 대성당으로 알려져 있다. 사암으로 된 벽 덕분에 독특한 장밋빛으로 빛난다.
                                </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>경기장으로 이동</div>
                                <div>현지 교통으로 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>유로 2024 경기 관람</div>
                                <div>독일 VS 스위스</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-football-ball-6796454.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>유로 2024 2경기 관람</div>
                                <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>유로 2024 2경기 관람</div>
                                <div className='day2-detail-match1'>
                                    {slide && slide.matchups && slide.matchups.length > 0 && (
                                        <div>
                                            <img style={{width:"50px"}} src='/src/assets/독일.png'/>
                                            {slide.matchups[1].team1}
                                            <img src='/src/assets/DPBEUFEuro2024FootballBannerDecoration.jpg'/>
                                            {slide.matchups[1].team2}
                                            <img style={{width:"50px"}} src='/src/assets/스위스.png'/>
                                        </div>
                                    )}
                                </div>
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
                    <div className='day1-title'>
                        <h1>5일차</h1>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-06-24 (월)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>프랑크푸르트</div>
                    </div>
                    <div className='day1-detail'>
                        <div className='day1-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem"}}>프랑크푸르트</div>                            
                            <div className='day1-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>프랑크푸르트 출발</div>
                                <div>차량으로 공항 이동</div>
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
                <div id="day6" className='day6'>
                    <div className='day1-title'>
                        <h1>6일차</h1>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-06-25 (화)</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Schedule2);