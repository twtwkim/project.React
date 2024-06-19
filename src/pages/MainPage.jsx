import React, { useEffect,useState } from 'react';
import Header from "../common/Header";
import Footer from "../common/Footer";
import Main from "../components/Main/Main"
import MainCarousel from "../components/Main/MainCarousel";
import ReviewCarousel from '../components/Main/ReviewCarousel'
import { useDispatch, useSelector } from 'react-redux';
import { setScrollY } from '../modules/main';
import { list_posts } from '../modules/postList';

const MainPage = () => {
    const dispatch = useDispatch();
    const scrollY = useSelector((state) => state.main.scrollY);
    const [isScrolled, setIsScrolled] = useState(false);
    const user = useSelector((state) => state.user.user);
    const posts = useSelector((state) => state.postList.posts);
    const listLoading = useSelector((state) => state.loading.listLoading);

    useEffect(() => {
        const handleScroll = () => {
            const value = window.scrollY;
            dispatch(setScrollY(value));
            if (value > window.innerHeight) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [dispatch, isScrolled]);

    useEffect(() => {
        // 데이터 로드 액션 트리거
        dispatch(list_posts());
    }, [dispatch]);

    useEffect(() => {
        console.log('posts:', posts);
        console.log('user:', user);
    }, [posts, user]);

    if (listLoading) return <div>Loading...</div>;

    return (
        <div className='main-page'>
            <Header isWhiteBackground={false} isScrolled={isScrolled} />
            <MainCarousel />
            <Main />
            <ReviewCarousel posts={posts} user={user} />
            <Footer />
        </div>
    );
};

export default MainPage;