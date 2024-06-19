import React, { useEffect, useState } from 'react';
import { AttentionSeeker } from 'react-awesome-reveal';
import { useNavigate } from 'react-router';
import styled from 'styled-components';

const IntroDiv = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
    width: 100vw;
    background-image: url('../../src/assets/wp6783293-football-fans-wallpapers.jpg');
    background-size: cover;
    background-position: center;
    opacity: 1;
`;

const Intro = () => {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    
    const timeout = () =>{
        setTimeout(() => {
            setLoading(false);
            navigate('/main');
        }, 3000);
    }
    useEffect(()=>{
        timeout();
        return () => {
            clearTimeout(timeout);
        }
    })

    return (
        <IntroDiv>
            <AttentionSeeker>
            <img style={{width:"80px", marginRight:"10px"}} src='/src/assets/free-icon-football-ball-6223745.png'/>
            </AttentionSeeker>
            <div style={{fontSize:"5rem", color:"white"}}>직관의 <span style={{color:"#845ef7"}}>맛</span></div>
        </IntroDiv>
    );
};

export default Intro;