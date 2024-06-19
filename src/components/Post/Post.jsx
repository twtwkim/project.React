import React from 'react';
import Responsive from '../../common/Responsive'
import styled from 'styled-components';
import palette from '../../common/palette';

const PostResponsive = styled(Responsive)`
    margin-top: 4rem;
;
`
const PostHeadDiv = styled.div`
    border-bottom: 1px solid ${palette.Gray[2]};
    padding-bottom: 3rem;
    margin-bottom: 3rem;
    h1{
        font-size: 3rem;
        line-height: 1.5;
        margin: 0;
    }
;
`
const SubInfo = styled.div`
    margin-top: 1rem;
    color: ${palette.Gray[6]};
    span+span:before{
        color: ${palette.Gray[5]};
        padding-left: 0.25rem;
        padding-right: 0.25rem;
        content: '\\B7';
    }
;
`
const TagDiv = styled.div`
    margin-top: 0.5rem;
    .tag{
        display: inline-block;
        color: ${palette.Orange[7]};
        text-decoration: none;
        margin-right: 0.5rem;
        &:hover{
            color: ${palette.Orange[6]};
        }
    }
;
`
const Post = (props) => {
    const {post, postError, readLoading, actionButtons} = props;
    
    if(postError){ // 오류가 발생했을 경우들
        // console.log(postError)
        if(postError.response && postError.response.status === 404){
            //postid를 잘못던졌을 경우
            return <PostResponsive>존재하지 않는 포스트입니다.</PostResponsive>
        }
        return <PostResponsive>오류가 발생했습니다. 다시 시도해주세요.</PostResponsive>
    }

    if(readLoading) return <div>loading...</div>

    if(!post) return null; //포스트가 없을경우인 에러인데, null 안주면 사이트 멈춤

    const {title, body, user, publishDate, tags} = post;
    console.log(post.title)
    return ( // tolocaleDateString()은 날짜를 넣는다!!
        <PostResponsive>
            <PostHeadDiv>
                <h1>{title}</h1>
                <SubInfo>
                    <span>
                        <b>{user.username}</b>
                    </span>
                    <span>{new Date(publishDate).toLocaleString()}</span> 
                </SubInfo>
                <TagDiv>
                    {tags.map(tag=><div className='tag'>#{tag}</div>)}
                </TagDiv>
            </PostHeadDiv>  
            {actionButtons}
            <div dangerouslySetInnerHTML={{__html: body}}/> 
        </PostResponsive>
    );
};

export default Post;