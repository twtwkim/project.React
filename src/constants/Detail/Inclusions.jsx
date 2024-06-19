import React from 'react';

const Inclusions = () => {
    return (
        <div style={{padding:"20px"}}>
            <div style={{border:"1px solid rgb(209, 209, 209)", borderRadius:"5px", padding:"20px", marginBottom:"50px"}}>
                <h2>공지사항</h2>
                <div style={{display:"flex", flexDirection:"column", gap:"10px", color:"gray"}}>
                    <div>출발일에 따라 인솔자는 현지에서 미팅할 수도 있습니다.</div>
                    <div>일정 및 상품가는 현지 사정에 따라 변경 될 수도 있으며, 예고없이 변경 될 수 있습니다.</div>
                    <div>기상악화, 경기일정 변경, 천재지변 등의 이유로 인한 경기 취소/변경의 경우에는 티켓 환불이 불가능합니다.</div>
                    <div>[유럽 축구 구단들의 정책에 따른 사항]</div>
                    <div>현지합류 또는 조기귀국의 경우 반드시 미리 말씀해주셔야 합니다.</div>
                </div>
            </div>
            <div style={{border:"1px solid rgb(209, 209, 209)", borderRadius:"5px", padding:"20px", marginBottom:"50px"}}>
                <h2>포함사항</h2>
                <div style={{display:"flex", flexDirection:"column", gap:"10px", color:"gray"}}>
                    <div>유럽축구직관 & 단체배낭여행 전문가</div>
                    <div>축구경기티켓</div>
                    <div>공항-호텔 왕복 픽업차량</div>
                    <div>[유럽 축구 구단들의 정책에 따른 사항]</div>
                    <div>호텔 숙박 및 조식</div>
                    <div>여행자보험</div>
                    <div>현지유심</div>
                    <div>변환어댑터</div>
                </div>
            </div>
            <div style={{border:"1px solid rgb(209, 209, 209)", borderRadius:"5px", padding:"20px"}}>
                <h2>불포함사항</h2>
                <div style={{display:"flex", flexDirection:"column", gap:"10px", color:"gray"}}>
                    <div>현지 여행경비 (대중교통, 식비, 관광지 입장료 등 개인경비)</div>
                    <div>왕복 항공권</div>
                    <div>-항공권은 예약 상담 시에 문의해 주실 경우, 추천 항공으로 안내 도와드리겠습니다.</div>
                </div>
            </div>
        </div>
    );
};

export default Inclusions;