import React from 'react';

const Insurance = () => {

    const handelClick = () => {
        const url = 'http://www.hanwhadirect.com/upload/product/FA00045011.pdf';
        window.open(url, '_blank');
    }
    return (
        <div
            style={{
                padding: "20px",
                border: "1px solid rgb(209, 209, 209)"
            }}>
            <h2>보험</h2>
            <div>
                한화손해보험 - 해외여행보험 (1억원 한도)
                <button
                    onClick={handelClick}
                    style={{
                        border: "1px solid black",
                        marginLeft: "10px",
                        backgroundColor: "white",
                        cursor: "pointer"
                    }}>보험약관보기</button>
            </div>
            <div></div>
        </div>
    );
};

export default Insurance;