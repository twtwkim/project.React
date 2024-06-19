import React, {useCallback, useState, useEffect} from 'react';
import Header from '../common/Header';
import WriteReview from '../components/WriteReview/WriteReview';
import { connect } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { read_post, set_post } from '../modules/post';
import { change_field, reset_write, write_post, update_post } from '../modules/write';
import TagBox from '../components/WriteReview/TagBox';
import WriteActionButton from '../components/WriteReview/WriteActionButton';

const WriteReviewPage = (props) => {
    const {writer, writerError, writeLoading, title, body, tags, postId} = props;
    const {reset_write, change_field, write_post, update_post, read_post, set_post} = props;
    const navigate = useNavigate();

    const onWrite = ()=>{
        if(postId){
            //api update 실행
            update_post(postId, title, body, tags)            
            read_post(postId)
            return;
        }
        write_post(title, body, tags)
    }
    

    const onCancel = useCallback(()=>{
        navigate(-1) // 전 페이지로 이동
    },[navigate])

    useEffect(()=>{
        if(!writer){
            return;
        }
        if(writer&&writer.user.username){
            set_post(writer); 
            navigate('/review')
        }
        if(writerError){
            console.log(writerError)
            return;
        }
    },[navigate, writer, writerError])

    useEffect(()=>{
        return()=>{
            reset_write();
        }
    },[reset_write])

    if(writeLoading) return <div>loading...</div>


    return (
        <div >
            <Header isWhiteBackground/>
            <WriteReview
                title={title}
                body={body}
                change_field={change_field}
            />
            <TagBox
                tagList={tags}
                change_field={change_field}
            />
            <WriteActionButton onWrite={onWrite} onCancel={onCancel} isEdit={postId}/>
        </div>
    );
};

export default connect(
    (state) => ({        
        title: state.write.title,
        body: state.write.body,
        tags: state.write.tags,
        postId: state.write.postId,
        writer: state.write.writer,
        writerError: state.write.writerError,
        writeLoading: state.loading.writeLoading
    }),
    {
        reset_write,
        change_field,
        write_post,
        update_post,
        read_post,
        set_post
    }
)(WriteReviewPage)