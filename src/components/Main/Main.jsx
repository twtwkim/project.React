import React, { useEffect, useRef } from 'react';
import '../../css/Main.css';
import { useDispatch, useSelector } from 'react-redux';
import { setScrollY } from '../../modules/main';

const Main = () => {
    const firstTextRef = useRef(null);
    const secondTextRef = useRef(null);
    const thirdTextRef = useRef(null);
    const dispatch = useDispatch();
    const scrollY = useSelector((state) => state.main.scrollY);

    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY;
            dispatch(setScrollY(value));

            if (firstTextRef.current) {
                if (value < 500) {
                    firstTextRef.current.style.animation = "disappear 1s ease-out forwards";
                } else {
                    firstTextRef.current.style.animation = "slide 1s ease-out forwards";
                }
            }

            if (secondTextRef.current) {
                if (value < 1800) {
                    secondTextRef.current.style.animation = "disappear 1s ease-out forwards";
                } else {
                    secondTextRef.current.style.animation = "slide 1s ease-out forwards";
                }
            }

            if (thirdTextRef.current) {
                if (value < 1500) {
                    thirdTextRef.current.style.animation = "disappear 1s ease-out forwards";
                } else {
                    thirdTextRef.current.style.animation = "slide 1s ease-out forwards";
                }
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dispatch]);

    return (
        <div className='MainDiv'>
            <div className='FirstDiv'>
                <div className='ImageWrapper'>
                    <img src='../../src/assets/29VZU50MX2_1.jpg' className='img1' alt='Sonny' />
                    <img src='../../src/assets/611816110013219063_1.jpg' className='img2' alt='Image'  />
                    <div className='Title-content' ref={firstTextRef}>
                        <div className='Subtitle' style={{color:"#845ef7"}}>평생 간직할</div>
                        <div className='Title' >새로운 경험을 느끼다</div>
                        
                    </div>
                </div>
            </div>
            <div className='SecondDiv'>
                <div className='ImageWrapper'>
                    <img src='../../src/assets/2wp-18.jpg' className='img3' alt='Sonny' />
                    <img src='../../src/assets/cd662f36-1d70-4d95-b4a9-e52234ae7c71.webp' className='img4' alt='Image' ref={secondTextRef}/>
                    <div className='Title-content2'>
                        <div className='Title2' >현장에서 느끼는 생생한 <span style={{color:"#845ef7"}}>감동!!</span></div>
                        <div className='Subtitle2' ><span style={{color:"#845ef7"}}>꼭!</span> 가고싶던 축구장에서 추억만들기!</div>
                    </div>
                </div>
            </div>
            <div className='ThirdDiv'>
                <div style={{display:"flex", justifyContent:"space-around", marginBottom:"80px"}}>
                    <div style={{display:"flex", flexDirection:"column", gap:"10px", alignItems:"center"}}>
                        <img src='/src/assets/free-icon-trophy-7586359.png' style={{width:"80px"}}></img>
                        <div style={{fontSize:"1.3rem"}}>국내 최고 ‘여행전문가’의 완벽한 일정</div>
                        <div style={{color:"gray"}}>단순한 여행 가이드가 아닌 스포츠를</div>
                        <div style={{color:"gray"}}>사랑하고 직접 배우며 다년간 노하우를 쌓은</div>
                        <div style={{color:"gray"}}>최고의 여행 전문가 & 가이드와 함께 여행</div>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", gap:"10px", alignItems:"center"}}>
                        <img src='/src/assets/free-icon-hotel-9201025.png' style={{width:"80px"}}></img>
                        <div style={{fontSize:"1.3rem"}}>불편한 숙박은 NO! 3-5성급 호텔 숙박</div>
                        <div style={{color:"gray"}}>타 여행사와 비교불가 !</div>
                        <div style={{color:"gray"}}>깔끔한 숙소 분위기, 관광 시간과</div>
                        <div style={{color:"gray"}}>여행 동선을 고려한 편리한 숙소위치</div>
                    </div>
                </div>
                <div style={{display:"flex", justifyContent:"space-around"}}>
                <div style={{display:"flex", flexDirection:"column", gap:"10px", alignItems:"center"}}>
                        <img src='/src/assets/free-icon-museum-8288192.png' style={{width:"80px"}}></img>
                        <div style={{fontSize:"1.3rem"}}>두 마리 토끼를 다 잡는 여행</div>
                        <div style={{color:"gray"}}>스포츠직관 뿐만이 아닌 역사 및 예술과</div>
                        <div style={{color:"gray"}}>현지문화도 함께 체험하고 배울 수 있는</div>
                        <div style={{color:"gray"}}>두 마리 토끼를 다잡는 여행</div>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", gap:"10px", alignItems:"center"}}>
                        <img src='/src/assets/free-icon-soccer-10809126.png' style={{width:"80px"}}></img>
                        <div style={{fontSize:"1.3rem"}}>티켓 걱정은 NO!</div>
                        <div style={{color:"gray"}}>수 년간의 노하우를 통해 갖춰진</div>
                        <div style={{color:"gray"}}>최고의 인프라로 좋은 좌석 보장!</div>
                    </div>
                    <div style={{display:"flex", flexDirection:"column", gap:"10px", alignItems:"center"}}>
                        <img src='/src/assets/free-icon-backpacking-7058150.png' style={{width:"80px"}}></img>
                        <div style={{fontSize:"1.3rem"}}>자유 일정 패키지</div>
                        <div style={{color:"gray"}}>단체배낭여행을 기반으로 언제든 본인이</div>
                        <div style={{color:"gray"}}>원하는 일정은 자유롭게 즐길 수 있는</div>
                        <div style={{color:"gray"}}>프리 투어 패키지</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
0
export default Main;