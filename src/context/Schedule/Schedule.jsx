import React, { useContext, useState, useEffect } from 'react';
import '../../css/Schedule.css'
import { SlideContext } from '../SlideContext';
import { useParams } from 'react-router';
import { scrollToDay } from '../../modules/main';
import { connect } from 'react-redux';

const Schedule = ({currentDay, scrollToDay}) => {
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-06-14 (금)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>인천 - 베를린</div>
                    </div>
                    <div className='day1-flight'>
                        <div>인천 출발</div>
                        <hr style={{width:"70%", borderWidth:"2px"}}></hr>
                        <div style={{color:"#7048e8", border:"1px solid #7048e8", padding:"20px", zIndex:"80", position:"absolute", backgroundColor:"white"}}>해당 상품은 항공 미포함 상품입니다</div>
                        <div>베를린 도착</div>
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
                            <div style={{fontSize:"1.4rem"}}>베를린</div>                            
                            <div className='day1-detail-info'>
                                <div style={{fontSize:"1rem", color:"black" }}>베를린 도착</div>
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-06-15 (토)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>베를린</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>베를린</div>                            
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>베를린 도심투어</div>
                                <div>독일의 자존심이자 상징! '브란덴부르크 문'</div>
                                <div>고전적 양식의 외관과 대비되는 투명돔이 인상적인 '독일 국회의사당'</div>
                            </div>
                        </div>
                        <div className='day2-detail-title-sub' style={{marginBottom:"50px"}}>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                        브란덴부르크 문 (Brandenburg Gate)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/Berlin_Brandenburger_Tor_Abend.jpg' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/d4aa093a130ad694919809eacd5f7132.jpg' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                브란덴부르크 문(Brandenburger Tor)은 독일 베를린의 중심부 파리저 플라츠에 위치한 상징적인 역사적 기념물입니다. 이 문은 1788년부터 1791년 사이에 프로이센의 프리드리히 빌헬름 2세의 명령으로 건축되었으며, 고전주의 양식의 도리스 기둥 12개와 승리의 여신 빅토리아가 4두 마차를 몰고 있는 퀴드리가 조각상이 특징입니다. 냉전 시대에는 베를린 장벽 바로 옆에 위치해 동서 베를린을 나누는 경계로 상징적인 역할을 했으며, 1989년 베를린 장벽이 붕괴되면서 독일 통일의 상징으로 다시 자리매김했습니다. 오늘날 브란덴부르크 문은 독일의 평화와 자유를 기리는 기념물로, 전 세계 관광객들이 찾는 명소가 되었습니다.
                                </div>
                        </div>
                        <div className='day2-detail-title-sub'>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                        독일 국회의사당 (Reichstag Building)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/WclR_763CzDEfOrW4jvGtN8Iwld7dGZxko8z5Fsae_NBwbaMCS93MoWw_8RK0tfCmWQMa0IBCo7zlQBQl_un0Q.webp' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/67532655-독일-국회-의사당-deutscher-bundestag-의-독일-의회-reichstag-건물은-독일-베를린의-미테-mitte-지구에.jpg' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                독일 국회의사당(Deutscher Bundestag)은 베를린의 중심부에 위치한 역사적이고 상징적인 건물로, 독일 연방의회가 모이는 장소입니다. 이 건물은 1894년에 완공되어 제국주의 시대에 독일 제국의 의회로 사용되었으며, 이후 다양한 정치적 변화를 겪었습니다. 1933년 화재로 크게 손상된 후, 제2차 세계대전 동안 더 많은 피해를 입었고, 독일이 분단된 시기에는 사용되지 않았습니다. 독일 통일 후인 1990년대에 대대적인 복원 공사를 거쳐 1999년부터 현재의 연방의회 건물로 사용되고 있습니다. 건물의 가장 유명한 특징 중 하나는 노먼 포스터 경(Sir Norman Foster)이 설계한 유리 돔으로, 이는 투명성과 민주주의의 상징으로 여겨지며, 방문객들에게 베를린의 아름다운 전경을 제공합니다.
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
                                <div>스페인 VS 크로아티아</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-football-ball-6796454.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>유로 2024 1경기 관람</div>
                                <div className='day2-detail-match1'>
                                    {slide && slide.matchups && slide.matchups.length > 0 && (
                                        <div>
                                            <img style={{width:"50px"}} src='/src/assets/Bandera_de_España.svg'/>
                                            {slide.matchups[0].team1}
                                            <img src='/src/assets/DPBEUFEuro2024FootballBannerDecoration.jpg'/>
                                            {slide.matchups[0].team2}
                                            <img style={{width:"50px"}} src='/src/assets/다운로드.png'/>
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-06-16 (일)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>베를린-에센</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>베를린</div>                            
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>에센으로 이동</div>
                                <div>전용차량으로 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>에센</div>                            
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>호텔 체크인 및 휴식</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>경기장 이동</div>
                                <div>현지 교통으로 이동</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-loading-7082862.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>유로 2024 경기 관람</div>
                                <div>잉글랜드 VS 세르비아</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-football-ball-6796454.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>유로 2024 2경기 관람</div>
                                <div className='day2-detail-match1'>
                                    {slide && slide.matchups && slide.matchups.length > 0 && (
                                        <div>
                                            <img style={{width:"50px"}} src='/src/assets/england.png'/>
                                            {slide.matchups[1].team1}
                                            <img src='/src/assets/DPBEUFEuro2024FootballBannerDecoration.jpg'/>
                                            {slide.matchups[1].team2}
                                            <img style={{width:"50px"}} src='/src/assets/serbia.png'/>
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-06-17 (월)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>뒤셀도르프</div>
                    </div>
                    <div className='day2-detail'>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem", marginRight:"80px"}}>뒤셀도르프</div>                            
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>뒤셀도르프 도심투어</div>
                                <div>라인 강이 흐르는 뒤셀도르프에서 제일 높은 타워! '라인 타워'</div>
                                <div>뒤셀도르프를 대표하는 구시가지를 대표하는 광장 '부르크 광장'</div>
                            </div>
                        </div>
                        <div className='day2-detail-title-sub' style={{marginBottom:"50px"}}>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                        라인 타워 (Rhine Tower)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/50009868.cms' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/istockphoto-547022042-612x612.jpg' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                라인 타워(Rhine Tower, 독일어로 Rheinturm)는 독일 뒤셀도르프에 위치한 상징적인 건축물로, 라인강의 동쪽 강변에 자리잡고 있습니다. 1981년에 완공된 이 타워는 높이가 240.5미터에 이르며, 뒤셀도르프에서 가장 높은 건물입니다. 타워는 통신과 방송 목적으로 사용되며, 전망대와 회전 레스토랑이 있어 관광객들에게 인기 있는 명소입니다. 전망대에서는 뒤셀도르프 시내와 라인강의 아름다운 풍경을 한눈에 볼 수 있으며, 회전 레스토랑은 식사하면서 360도 파노라마 뷰를 즐길 수 있는 특별한 경험을 제공합니다. 또한 타워 외벽에는 LED 조명이 설치되어 밤에는 다양한 빛의 연출을 보여주며, 이로 인해 라인 타워는 뒤셀도르프의 밤하늘을 수놓는 주요 랜드마크 중 하나로 자리잡고 있습니다.
                                </div>
                        </div>
                        <div className='day2-detail-title-sub'>
                                <div className='day2-detail-title-subMain'>
                                    <div>
                                        부르크 광장 (Burgplatz)
                                    </div>
                                    
                                </div>
                                <hr/>
                                <div className='day2-detail-title-image'>
                                    <img src='/src/assets/mainImage.jpg' style={{width:'50%', marginRight:"10px"}}></img>
                                    <img src='/src/assets/view.jpg' style={{width:'50%'}}></img>
                                </div>
                                <div style={{lineHeight:"20px"}}>
                                부르크플라츠(Burgplatz)는 독일 뒤셀도르프의 구시가지(Altstadt)에 위치한 역사적이고 활기찬 광장입니다. 이곳은 과거 뒤셀도르프 성이 있던 자리로, 현재는 성의 탑(Schlossturm)이 남아 있습니다. 이 탑은 라인강을 따라 자리 잡고 있으며, 시립 해양 박물관으로 사용되고 있어 방문객들에게 도시의 역사와 문화를 소개합니다. 부르크플라츠는 또한 다양한 문화 행사와 시장이 열리는 장소로 유명하며, 특히 크리스마스 마켓 기간에는 화려한 장식과 함께 많은 사람들로 붐빕니다. 주변에는 다양한 카페, 레스토랑, 상점들이 즐비해 있어, 현지인들과 관광객들이 즐겨 찾는 만남의 장소이자 휴식 공간으로 사랑받고 있습니다. 라인강과 인접해 있어 아름다운 강변 산책로를 따라 걷기에 좋은 장소이기도 하며, 뒤셀도르프의 역동적인 도시 분위기를 경험할 수 있는 중요한 명소 중 하나입니다.
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
                                <div>프랑스 VS 오스트리아</div>
                            </div>
                        </div>
                        <div className='day2-detail-title'>
                            <img src='/src/assets/free-icon-football-ball-6796454.png' style={{width:"50px"}}></img>
                            <div className='day2-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>유로 2024 3경기 관람</div>
                                <div className='day2-detail-match1'>
                                    {slide && slide.matchups && slide.matchups.length > 0 && (
                                        <div>
                                            <img style={{width:"50px"}} src='/src/assets/france.png'/>
                                            {slide.matchups[2].team1}
                                            <img src='/src/assets/DPBEUFEuro2024FootballBannerDecoration.jpg'/>
                                            {slide.matchups[2].team2}
                                            <img style={{width:"50px"}} src='/src/assets/austria.svg'/>
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
                    <div className='day1-title'>
                        <h1>5일차</h1>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-06-18 (화)</div>
                        <div/><div/><div/><div/><div/>
                        <div style={{fontSize:"0.8rem", color:"gray"}}>뒤쉘도르프</div>
                    </div>
                    <div className='day1-detail'>
                        <div className='day1-detail-title'>
                            <img src='/src/assets/free-icon-location-14306835.png'></img>
                            <div style={{fontSize:"1.4rem"}}>뒤쉘도르프</div>                            
                            <div className='day1-detail-info'>
                                <div style={{fontSize:"1rem", color:"black"}}>뒤쉘도르프 출발</div>
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
                        <div style={{fontSize:"0.8rem", color:"gray"}}>2024-06-19 (수)</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(Schedule);