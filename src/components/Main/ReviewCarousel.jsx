import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Slider from "react-slick";
import styled from "styled-components";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import PostItem from "../../components/Post/PostItem";
import '../../css/ReviewCarousel.css';

const StyledSlider = styled(Slider)`
  .slick-slide {
    padding: 1rem;
    
    max-height: 500px;
    min-height: 500px;
  }
`;

const ReviewCarousel = ({ posts, user }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: true,
        autoplay: true,
        arrows: true,
        responsive: [
            
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 800,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 500,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };

    if (!posts || posts.length === 0) {
        return <div>Loading...</div>;
    }

    return (
        <div className="Review-main-carousel-container">
            <div className='Rcarousel-title'>
                <h1>고객과 소중한 시간</h1>
                <Link to='/review' className='nav-button'>후기 보러가기</Link>    
            </div> 
            <StyledSlider {...settings}>
                {posts.map((post) => (
                    
                    <div key={post._id}>
                        <img src='/src/assets/free-icon-profile-2919906.png'
                        style={{width:"150px"}}></img>
                        <PostItem post={post} user={user} />
                    </div>
                ))}
            </StyledSlider>
        </div>
    );
};

export default ReviewCarousel;