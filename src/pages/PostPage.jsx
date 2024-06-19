import React, {useCallback, useState, useEffect} from 'react';
import Header from '../common/Header';
import { connect } from 'react-redux';
import { read_post } from '../modules/post';
import { set_post } from '../modules/write';
import { useNavigate, useParams } from 'react-router';
import { remove_post } from '../modules/api/post';
import AskRemoveModal from '../common/Modal/AskRemoveModal';
import PostActionButton from '../components/Post/postActionButton';
import Post from '../components/Post/Post';

const PostPage = (props) => {
    const {postId} = useParams();
    const {user, post, postError, readLoading} = props;
    const {read_post, set_post} = props;
    const [modal, setModal] = useState(false);
    const navigate = useNavigate();

    const onRemoveClick = () => {
        setModal(true);
    }

    const onRemove = async() => {
        try {
            await remove_post(postId);
            navigate(`/${user.username}`)
            navigate('/review')
        } catch (error) {
            console.log(error);
        }
    }

    const onEdit = useCallback(()=>{
        set_post(post);
        navigate('/writeReview');
    }, [navigate, set_post, post])

    const onCancel = () =>{
        setModal(false);
    }

    const onConfirm = () =>{
        setModal(false);
        onRemove();
    } // 삭제의 확인을 누르면 제거되도록

    const isOwner = (user && user.id) === (post && post.user.id);

    useEffect(()=>{
        read_post(postId);
    },[postId, read_post])

    return (
        <div>
            <Header isWhiteBackground/>
            <Post
                post={post}
                postError={postError}
                readLoading={readLoading}
                actionButtons={
                    isOwner && <PostActionButton
                            onEdit={onEdit}
                            onRemoveClick={onRemoveClick}
                    />
                }
            />
            <AskRemoveModal
                visible={modal}
                onCancel={onCancel}
                onConfirm={onConfirm}
            />
        </div>
    );
};

export default connect(
    state => ({
        user: state.user.user,
        post: state.post.post,
        postError: state.post.postError,
        readLoading: state.loading.readLoading
    }),
    {
        read_post,
        set_post
    }
)(PostPage);