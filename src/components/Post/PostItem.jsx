import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../common/palette';

const PostItemDiv = styled.div`
    padding-top: 3rem;
    padding-bottom: 3rem;
    &:first-child{
        padding-top:0;
    }
    &+&{
        border-top: 1px solid ${palette.Gray[2]};
    }
    h2{
        font-size: 2rem;
        margin-bottom: 0;
        margin-top:0;
        &:hover{
            color: ${palette.Gray[6]};
        }
    }
    p{
        margin-top:2rem;
    }
    .Title{
        color: ${palette.Gray[9]};
        &:hover{
            color: ${palette.Violet[4]};
        }
    }
;
`

const SubInfo = styled.div`
    color: ${palette.Gray[6]};
    span+span:before{
        color: ${palette.Gray[4]};
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

const PostItem = ({post}) => {
    const {title, body, publishDate, tags, user, _id} = post;
    
    return (
        <PostItemDiv>
            <Link 
                className='Title'
                style={{fontSize:'2.5rem', fontWeight:'bold', marginBottom:"10px", textDecoration:"none"}} to={`/${user.username}/${_id}`}>{title}</Link>
            <SubInfo  style={{marginTop:"20px"}}>
                <span style={{fontSize:"1.3rem"}}>
                    <b>
                        <span style={{color:"purple"}}>직관러:</span> <Link to={`/${user.username}`} style={{textDecoration:"none"}}>{user.username}</Link>
                    </b>
                </span>
                <span style={{fontSize:"0.8rem"}}>{new Date(publishDate).toLocaleString()} 작성</span>
            </SubInfo>
            <TagDiv style={{marginTop:"20px"}}>
            {tags.map(tag=><Link className='tag' to={`/review/?tag=${tag}`}>#{tag}</Link>)}
            </TagDiv>
            <div style={{width:"60%", textOverflow:"ellipsis"}} dangerouslySetInnerHTML={{__html: body}}/>
        </PostItemDiv>
    );
};

export default PostItem;
