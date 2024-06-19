import React, { useState } from 'react';
import '../css/Footer.css';
import { Link, useLocation } from 'react-router-dom';
import TermsModal from './Modal/TermsModal';
import { termsOfService, privacyPolicy, travelTerms } from '../constants/termsContent';
import { KAKAO_AUTH_URL } from '../modules/kakao';


const Footer = () => {
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });
    const PARAMS = new URL(document.location).searchParams;
    const KAKAO_CODE = PARAMS.get("code");
    console.log(KAKAO_CODE);


    const handleLogin = () =>{
        window.location.href = KAKAO_AUTH_URL;
    }

    const openModal = (title, content) => {
        setModalContent({ title, content });
        setModalIsOpen(true);
    };

    const closeModal = () => setModalIsOpen(false);

    return (
        <div className='footer-container'>
            <div className='footer-upperside'>
                <div className='footer-title'>
                    <h2>직관의 맛 고객센터</h2>
                </div>
                <div className='footer-number'>
                    <img src='../../src/assets/free-icon-call-5909756.png' alt='call'/>
                    <h1>+82-2-8478-0000</h1>
                </div>
                <div className='footer-content'>
                    <h4>상담시간: 10:00 ~ 18:00
                        <span style={{fontSize:"0.9rem"}}> (주말, 공휴일 휴무)</span>
                    </h4>
                </div>
            </div>
            <div className='footer-downside'>
                <div className='footer-info'>
                    <Link to='/brand' className='footer-info-link'><h4>회사소개</h4></Link>
                    <h4 className='footer-info-link' 
                        onClick={() => openModal('이용약관', termsOfService)}
                    >이용약관</h4>
                    <h4 className='footer-info-link' 
                        onClick={() => openModal('개인정보처리방침', privacyPolicy)}
                    >개인정보처리방침</h4>
                    <h4 className='footer-info-link' 
                        onClick={() => openModal('해외여행약관', travelTerms)}
                    >해외여행약관</h4>
                    <Link to='/customer' className='footer-info-link'><h4>고객센터</h4></Link>
                    <div/><div/><div/><div/><div/><div/><div/><div/>
                    <div>
                        <a onClick={handleLogin}><img 
                            src='../../src/assets/free-icon-kakao-talk-3991999.png' 
                            alt='카카오톡'
                            className='footer-link-image'/></a>
                    </div>
                    <div>
                        <img 
                            src='../../src/assets/free-icon-instagram-1409946.png'
                            alt='인스타그램'
                            className='footer-link-image'/>
                    </div>
                    <div>
                        <img src='../../src/assets/naver.jpg'
                            alt='네이버'
                            className='footer-link-image'/>
                    </div>
                    <div/><div/>
                </div>
                <div className="company-info">
                    <div className="company">
                        <h5>(주) 라인아트투어</h5>
                        <p>
                            주소 경기도 안산시 단원구 고잔2길 45 코스모프라자<br/>
                            사업자등록번호 824-91-01215 사업자정보확인<br/>
                            통신판매업신고 2022-경기안산-02180<br/>
                            관광사업증 등록번호 : 제2024-01호<br/>
                            호스팅서비스제공자 (주)라인아트투어｜대표이사 홍길동
                        </p>
                    </div>
                    <div className="eles-info">
                        <h5>전자금융거래 분쟁처리 담당정보</h5>
                        <p>
                            투어1588-1234 티켓1544-1234<br/>
                            팩스02-830-8000 이메일lineart@naver.com<br/>
                            개인정보보호책임자 cpo@naver.com
                        </p>
                    </div>
                </div>
            </div>
            <TermsModal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModal} 
                title={modalContent.title} 
                content={modalContent.content}
            />
        </div>
    );
};

export default Footer;