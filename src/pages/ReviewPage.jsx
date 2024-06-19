import React, { useEffect } from 'react';
import Header from "../common/Header";
import Review from "../components/Review/Review";
import ReviewPagination from "../components/Review/ReviewPagination";
import Footer from "../common/Footer";
import { useParams, useSearchParams } from 'react-router-dom';
import { connect } from 'react-redux';
import { list_posts } from '../modules/postList';

const ReviewPage = (props) => {
    const [searchParams] = useSearchParams();
    const {username} = useParams(); // 이렇게 하면 useeffect에서 username만 받을 수 있다.
    const {user, posts, postsError, listLoading, lastPage} = props;
    const {list_posts} = props;

    const tag = searchParams.get('tag')||''; // tag에 아무것도 없다면 ''
    const page = Number(searchParams.get('page'))||1; // page에 아무것도 없다면 1

    useEffect(()=>{
        // if(!username) return;
        list_posts(page, username, tag);
    },[list_posts, username, user, page, tag, searchParams])

    // console.log(page, username, tag, lastPage)

    if(listLoading) return <div>loading...</div>

    return (
        <>
            <Header isWhiteBackground/>
            <Review
                user={user} 
                posts={posts} 
                postsError={postsError}
                listLoading={listLoading}
            />
            <ReviewPagination
                page={Number(page)} 
                lastPage={Number(lastPage)} 
                username={username} 
                tag={tag}
            />
            <Footer/>
        </>
    );
};

export default connect(
    (state) => ({
        user: state.user.user,
        posts: state.postList.posts,
        postsError: state.postList.postsError,
        listLoading: state.loading.listLoading,
        lastPage: state.postList.lastPage,
    }),
    {
        list_posts,
    }
)(ReviewPage);