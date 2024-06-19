import React, { useContext, useEffect, useState } from 'react';
import '../../css/DetailContent.css';
import Header from '../../common/Header.jsx';
import DetailContentCarousel from './DetailContentCarousel.jsx';
import Button from '../../common/Button.jsx';
import Schedule from '../../context/Schedule/Schedule.jsx';
import Inclusions from '../../constants/Detail/Inclusions.jsx';
import Terms from '../../constants/Detail/Terms.jsx';
import Insurance from '../../constants/Detail/Insurance.jsx';
import Footer from '../../common/Footer.jsx';
import { Link, useParams, useNavigate } from 'react-router-dom';
import { SlideContext } from '../../context/SlideContext.jsx';

const DetailContent = () => {
    const { id } = useParams();
    const { slides } = useContext(SlideContext);
    const [slide, setSlide] = useState(null);
    const [numberOfPeople, setNumberOfPeople] = useState(1);
    const navigate = useNavigate();

    const handleReservationClick = () => {
        const price = calculatePrice();
        navigate(`/reservation/${slide.id}`, {
            state: { 
                title: slide.title, 
                sub: slide.sub, 
                days: slide.days,
                numberOfPeople,
                price
            }
        });
    };

    useEffect(() => {
        const foundSlide = slides.find(slide => slide.id === parseInt(id));
        setSlide(foundSlide);
    }, [id, slides]);

    const handleNumberOfPeopleChange = (e) => {
        if (numberOfPeople + e > 0) {
            setNumberOfPeople(prev => prev + e);
        }
    };

    const calculatePrice = () =>{
        if(numberOfPeople <= 0){
            return slide.price;
        }
        return (parseInt(slide.price.replace(/[^0-9]/g, '')) * numberOfPeople).toLocaleString() + '원';
    }
    const [selectedMenu, setSelectedMenu] = useState('schedule');
    const [showFullContent, setShowFullContent] = useState({
        schedule: false,
        inclusions: false,
        terms: false,
        insurance: false
    });

    const productDetails = () => {
        switch (selectedMenu) {
            case 'schedule':
                return slide.schedule;
            case 'inclusions':
                return <Inclusions />;
            case 'terms':
                return <Terms />;
            case 'insurance':
                return <Insurance />;
            default:
                return <Schedule />;
        }
    };

    const toggleContent = (menu) => {
        setShowFullContent(prev => ({
            ...prev,
            [menu]: !prev[menu]
        }));
    };

    if (!slide) return <div>Loading...</div>;

    return (
        <>
            <Header isWhiteBackground />
            <div className="product-page">
                <div className="main-content">
                    <DetailContentCarousel images={slide.additionalImages} />
                    <hr style={{ border: "2px solid black", margin: "20px auto" }} />
                    <div className='tour-days'>
                        <div>여행 기간</div>
                        <div style={{fontSize:"1.5rem", color:"#7048e8"}}>{slide.days}</div>
                    </div>
                    <hr style={{ border: "1px solid gray", margin: "20px auto" }} />
                    <div className='flight-info'>
                        <div>항공 정보</div>
                        <div>
                            <h2 style={{color:"#7048e8"}}>해당 상품은 항공 미포함 상품입니다.</h2>
                            <h5 style={{color:"gray"}}>항공권은 예약 상담 시에 문의해 주실 경우, 추천 항공으로 안내 도와드리겠습니다.</h5>
                        </div>
                    </div>
                    <hr style={{ border: "2px solid black", margin: "20px auto" }} />
                </div>
                <div className="sidebar">
                    <div className='sidebar-title'>
                        <h2 style={{fontSize:"1.45rem"}}>{slide.title}</h2>
                    </div>
                    <div className="cart">
                        <div >
                            <div style={{display:"flex", justifyContent:"space-between"}}>여행 일정: 
                                <div>{slide.sub}</div> 
                            </div>
                        </div>
                        <div className='cart-people'>
                            <div style={{fontSize:"1.2rem"}}>인원수 : </div>
                            <div style={{display:"flex", gap:"20px", alignItems:"center"}}>
                            <Button color="Violet" onClick={() => handleNumberOfPeopleChange(-1)}>-</Button>
                                <div>{numberOfPeople}</div>
                                <Button color="Violet" onClick={() => handleNumberOfPeopleChange(1)}>+</Button>
                            </div>
                        </div>
                        <div>
                            <div style={{color:"#7048e8", fontSize:"1.2rem", margin:"20px auto", textAlign:"center"}}>성인 / 아동 동일한 요금입니다.</div>
                            <div style={{color:"gray", fontSize:"0.8rem"}}>예약시 1인 예약금 500,000원이 발생하며, 출발확정 시 상품가격에서 예약금이 제외된 금액으로 결제 진행됩니다. </div>
                        </div>
                    </div>
                    <div className='sidebar-price'>
                        <h1>정가</h1>
                        <h1 style={{color:"#7048e8"}}>{calculatePrice()}</h1>
                    </div>
                    
                <Button onClick={handleReservationClick} fullWidth color="Violet">예약하기</Button>
            
                </div>
                <div className='product-detail'>
                    <h2>상품안내</h2>
                    <div className='product-detail-menu'>
                        <button className={selectedMenu === 'schedule' ? 'active' : ''} onClick={() => setSelectedMenu('schedule')}>여행일정</button>
                        <button className={selectedMenu === 'inclusions' ? 'active' : ''} onClick={() => setSelectedMenu('inclusions')}>포함 및 불포함사항</button>
                        <button className={selectedMenu === 'terms' ? 'active' : ''} onClick={() => setSelectedMenu('terms')}>여행약관</button>
                        <button className={selectedMenu === 'insurance' ? 'active' : ''} onClick={() => setSelectedMenu('insurance')}>여행자보험</button>
                    </div>
                    <div className={`product-detail-content ${showFullContent[selectedMenu] ? 'expanded' : ''}`}>
                        {productDetails()}
                        {!showFullContent[selectedMenu] && (
                            <button className="show-more" onClick={() => toggleContent(selectedMenu)}>더보기</button>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default DetailContent;