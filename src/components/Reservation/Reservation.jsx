import React, { useState, useEffect } from 'react';
import '../../css/Reservation.css';
import styled from 'styled-components';
import Header from '../../common/Header';
import Button from '../../common/Button';
import { termsOfService, privacyPolicy, travelTerms } from '../../constants/termsContent';
import TermsModal from '../../common/Modal/TermsModal';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const StyledHr = styled.hr`
    width: 100%;
    border: 2px solid black;
    border-radius: 30%; 
    margin: 2rem auto;
`;

const Reservation = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });
    const [reservationCompleteModalIsOpen, setReservationCompleteModalIsOpen] = useState(false);
    const location = useLocation();
    const navigate = useNavigate();
    const { title, sub, numberOfPeople: initialNumberOfPeople, price: initialPrice, days } = location.state || {};
    const [numberOfPeople, setNumberOfPeople] = useState(initialNumberOfPeople);
    const [price, setPrice] = useState(initialPrice);
    const depositPerPerson = 500000; // Deposit amount per person in 원
    const [depositAmount, setDepositAmount] = useState(initialNumberOfPeople * depositPerPerson);

    useEffect(() => {
        // 초기 가격 및 예약금 설정
        const { totalPrice, depositPrice } = calculatePrice(initialNumberOfPeople);
        setPrice(totalPrice);
        setDepositAmount(depositPrice);
    }, [initialNumberOfPeople]);

    const openModal = (title, content) => {
        setModalContent({ title, content });
        setModalIsOpen(true);
    };

    const closeModal = () => setModalIsOpen(false);

    const parsePrice = (priceString) => {
        return parseInt(priceString.replace(/[^0-9]/g, ''));
    };

    const calculateBasePrice = () => {
        return parsePrice(initialPrice);
    };

    const calculatePrice = (numberOfPeople) => {
        const basePrice = calculateBasePrice();
        const totalPrice = ((basePrice / initialNumberOfPeople) * numberOfPeople);
        const depositPrice = numberOfPeople * depositPerPerson;
        return {
            totalPrice: totalPrice.toLocaleString() + '원',
            depositPrice: depositPrice.toLocaleString() + '원'
        };
    };

    const handleNumberOfPeopleChange = (delta) => {
        const newNumberOfPeople = numberOfPeople + delta;
        if (newNumberOfPeople > 0) {
            setNumberOfPeople(newNumberOfPeople);
            const { totalPrice, depositPrice } = calculatePrice(newNumberOfPeople);
            setPrice(totalPrice);
            setDepositAmount(depositPrice);
        }
    };

    const handleReservation = () => {
        setReservationCompleteModalIsOpen(true);
    };

    const closeReservationCompleteModal = () => {
        setReservationCompleteModalIsOpen(false);
        navigate('/main');
    };

    return (
        <>
            <Header isWhiteBackground/>
            <div className='Reservation-container'>
                <div className='Reservation-title'>
                    <h2>상품 예약하기</h2>
                    <h1>예약하시면 빠른시간내 연락드리겠습니다!</h1>
                </div>
                <StyledHr/>
                <div className='Reservation-content'>
                    <div className='Reservation-content-middle'>
                        <div className='Reservation-content-info'>
                            <h2>예약 정보</h2>
                        </div>
                        <hr style={{ border: "2px solid black", margin: "20px auto" }} />
                        <div className='Reservation-content-detailInfo'>
                            <div><h3>상품명:</h3><div>{title}</div></div>
                            <hr style={{ border: "1px solid gray", margin: "20px auto" }} />
                            <div><h3>이용항공:</h3> <div style={{color:"#7048e8"}}>항공 미포함 상품</div></div>
                            <hr style={{ border: "1px solid gray", margin: "20px auto" }} />
                            <div><h3>여행기간:</h3> <div>{sub}({days})</div></div>
                            <hr style={{ border: "1px solid gray", margin: "20px auto" }} />
                            <div><h3>요금:</h3> <div>{price}</div></div>
                            <hr style={{ border: "2px solid black", margin: "20px auto" }} />
                        </div>
                    </div>
                    <div className='Reservation-content-bottom'>
                        <div className='Reservation-content-info'>
                            <h2>여행자 정보</h2>
                        </div>
                        <div className='Reservation-price-info'>
                            <div className='Reservation-content-price'>
                                <h1 style={{marginTop:"40px"}}>인원</h1>
                                <h4>성인/아동 동일요금</h4>
                                <div className='Reservation-content-price-div'>
                                    <Button color="Violet" onClick={() => handleNumberOfPeopleChange(-1)}>-</Button>
                                    <h3>{numberOfPeople}</h3>
                                    <Button color="Violet" onClick={() => handleNumberOfPeopleChange(1)}>+</Button>
                                </div>
                            </div>
                            <div className='Reservation-content-total'>
                                <h2 style={{marginTop:"40px"}}>최종 합계금액</h2>
                                <h1 style={{color:"#7048e8"}}>{price}</h1>
                                <h4>예약금</h4>
                                <h3 style={{color:"#7048e8"}}>{depositAmount}</h3>
                            </div>
                        </div>
                    </div>
                <div className='Reservation-content-below'>
                    <div className='Reservation-content-below-info'>
                        <h2>예약자 정보</h2>
                    </div>
                    <hr style={{ border: "2px solid black", margin: "20px auto" }} />
                    <div className='Reservation-client-Info'>
                        <div className='Reservation-client-DetailInfo'>
                            <div>대표 예약자명</div>
                            <input className='Reservation-client-name' placeholder='예약자명을 입력해주세요'/>
                        </div>
                        <hr style={{ width:"100%", border: "1px solid gray", margin: "20px auto" }} />
                        <div className='Reservation-client-DetailInfo'>
                            <div>연락처</div>
                            <input className='Reservation-client-number' placeholder='수신가능한 연락처를 입력해주세요'/>
                        </div>
                        <hr style={{ width:"100%", border: "1px solid gray", margin: "20px auto" }} />
                        <div className='Reservation-client-DetailInfo'>
                            <div>이메일</div>
                            <input className='Reservation-client-email' placeholder='수신가능한 이메일 주소를 입력해주세요'/>
                        </div>
                        <hr style={{ width:"100%", border: "2px solid black", margin: "20px auto" }} />
                    </div>
                </div>
                <div className='Reservation-Terms-container'>
                    <div className='Reservation-content-below-info'>
                        <h2>약관 동의</h2>
                    </div>
                    <hr style={{ width:"100%", border: "2px solid black", margin: "20px auto" }} />
                    <div className='Reservation-Terms'>
                        <input type='checkbox' onClick={()=>openModal('이용약관', termsOfService)}></input>
                        <div>약관동의<span style={{color:"red", fontSize:"0.8rem"}}>(필수)</span></div>
                        {/* <div style={{marginLeft:"76%", fontSize:"0.9rem", textDecoration:"underline"}}>내용보기</div> */}
                    </div>
                    <hr style={{ width:"100%", border: "1px solid gray", margin: "20px auto" }} />
                    <div className='Reservation-Terms'>
                        <input type='checkbox' onClick={() => openModal('개인정보처리방침', privacyPolicy)}></input>
                        <div>개인정보처리약관<span style={{color:"red", fontSize:"0.8rem"}}>(필수)</span></div>
                        {/* <div style={{marginLeft:"70%", fontSize:"0.9rem", textDecoration:"underline"}}>내용보기</div> */}
                    </div>
                    <hr style={{ width:"100%", border: "1px solid gray", margin: "20px auto" }} />
                    <div className='Reservation-Terms'>
                        <input type='checkbox' onClick={() => openModal('해외여행약관', travelTerms)}></input>
                        <div>해외여행약관<span style={{color:"red", fontSize:"0.8rem"}}>(필수)</span></div>
                        {/* <div style={{marginLeft:"70%", fontSize:"0.9rem", textDecoration:"underline"}}>내용보기</div> */}
                    </div>
                    <hr style={{ width:"100%", border: "2px solid black", margin: "20px auto" }} />
                </div>
                <div className='Reservation-Terms-footer'>
                    <div className='Reservation-content-below-info'>
                        <h2>기타 요청사항</h2>
                    </div>
                    <textarea placeholder='1000자 이내로 입력해 주시기 바랍니다.' style={{width:"100%", height:"30vh"}}></textarea>
                    <ul style={{color:"gray", fontSize:"0.8rem", display:"flex", flexDirection:"column", gap:"10px", marginBottom:"50px"}}>
                        <li>예약하시기 전에 해외여행 약관 및 소비자 피해보상 규정을 미리 확인해주세요.</li>
                        <li>고객정보는 신분증 및 여권상 표기된 생년월일/성별/영문이름과 같아야 합니다.(만약 여권과 다른 영문 이름일 경우, 비행기 탑승에 제한을 받을 수 있습니다.)</li>
                        <li>여권은 출국일 기준 만료일이 6개월 이상 남아 있어야 합니다.</li>
                    </ul>
                    <div className='Reservation-content-below-info'>
                        <h2>취소 위약금 및 동의사항</h2>
                    </div>
                    <ul style={{color:"gray", fontSize:"0.8rem", display:"flex", flexDirection:"column", gap:"10px"}}>
                        <li>결제완료 후 예약확정 시 취소 시점에 따라 위약금이 발생할 수 있습니다.</li>
                        <li>취소료 규정은 각 상품 상세 페이지에서 확인 가능합니다.</li>
                        <li>예약이 완료되면 담당자가 전화로 추가 안내 및 확인 절차를 거칩니다.</li>
                        <li>여행상품의 특성 상 경우에 따라 예약이 완료된 후에도 처리가 불가능할 수 있습니다.</li>
                        <li>본 여행상품의 세부 약관 규정은 재경부 고시 소비자 피해보상 규정을 바탕으로 합니다.</li>
                    </ul>
                </div>
                <div style={{margin:"50px auto", display:"flex", gap:"30px"}}>
                    <Link to='/content'><Button>취소</Button></Link>
                    <Button color="Violet" onClick={handleReservation}>예약하기</Button>
                </div>
            </div>
        </div>
        <TermsModal 
            isOpen={modalIsOpen} 
            onRequestClose={closeModal} 
            title={modalContent.title} 
            content={modalContent.content}
        />
        <TermsModal 
            isOpen={reservationCompleteModalIsOpen} 
            onRequestClose={closeReservationCompleteModal} 
            title="예약 완료" 
            content="예약이 완료되었습니다. 연락드리겠습니다!" 
        />
        </>
    );
};

export default Reservation;