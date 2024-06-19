import React, { useState, useEffect } from 'react';
import '../../css/Review.css';
import styled from 'styled-components';
import Responsive from '../../common/Responsive';
import Button from '../../common/Button';
import PostItem from '../Post/PostItem';
import { useNavigate } from 'react-router';

const StyledHr = styled.hr`
    width: 100%;
    border: 2px solid black;
    border-radius: 30%;
    margin: 2rem auto;
`;

const PostListResponsive = styled(Responsive)`
    margin-top: 3rem;
`;

const PostListDiv = styled.div`
    display: flex;
    justify-content: flex-end;
    margin-bottom: 3rem;
`;

const StyledButton = styled(Button)`
    text-decoration: none;
    display: flex;
    align-items: center;
    margin-left: 10px;
`;

const Review = (props) => {
    const { user, posts, postsError, listLoading } = props;
    const [buttonText, setButtonText] = useState('내가 쓴 후기');
    const [searchOption, setSearchOption] = useState('제목');
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredPosts, setFilteredPosts] = useState(posts);
    const navigate = useNavigate();

    const handlePostsClick = () => {
        if (window.location.pathname === `/${user.username}`) {
            navigate('/review');
            setButtonText('내가 쓴 후기');
        } else {
            navigate(`/${user.username}`);
            setButtonText('전체 후기 보기');
        }
    };

    const handleSearchOptionChange = (e) => {
        setSearchOption(e.target.value);
    };

    const handleSearchTermChange = (e) => {
        setSearchTerm(e.target.value);
    };

    useEffect(() => {
        if (posts) {
            const filtered = posts.filter((post) => {
                if (searchOption === '제목') {
                    return post.title.toLowerCase().includes(searchTerm.toLowerCase());
                } else if (searchOption === '내용') {
                    return post.body.toLowerCase().includes(searchTerm.toLowerCase());
                } else if (searchOption === '작성자') {
                    return post.user.username.toLowerCase().includes(searchTerm.toLowerCase());
                }
                return false;
            });
            setFilteredPosts(filtered);
        }
    }, [searchTerm, searchOption, posts]);

    return (
        <div className='ReviewPage-container'>
            <div className='ReviewPage-title'>
                <h2>여행후기</h2>
                <h1>직관의 맛과 즐거웠던 추억을 함께하세요!</h1>
            </div>
            <StyledHr />
            <div className='Review-search'>
                <select value={searchOption} onChange={handleSearchOptionChange}>
                    <option value="제목">제목</option>
                    <option value="내용">내용</option>
                    <option value="작성자">작성자</option>
                </select>
                <input className='Review-search-input' value={searchTerm} onChange={handleSearchTermChange} />
            </div>
            <PostListResponsive>
                {
                    user && <PostListDiv>
                        <Button onClick={handlePostsClick}>
                            {buttonText}
                        </Button>
                        <StyledButton to='/writeReview' color="Violet">후기 작성</StyledButton>
                    </PostListDiv>
                }
                {
                    !listLoading && filteredPosts && <div>
                        {filteredPosts.map((post) => (
                            <PostItem user={user} post={post} key={post._id} />
                        ))}
                    </div>
                }
            </PostListResponsive>
        </div>
    );
};

export default Review;