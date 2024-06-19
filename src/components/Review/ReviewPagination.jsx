import React from 'react';
import { Link } from 'react-router-dom';
import Button from '../../common/Button';
import styled from 'styled-components';
import qs from 'qs';
const ButtonStyle= styled(Button)`
    text-decoration: none;
    display: flex;
    align-items: center;  
`

const PaginationDiv = styled.div`
    width: 320px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 3rem;
;
`
const buildLink = ({username, tag, page})=>{
    const query = qs.stringify({tag, page});
    return username? `/${username}?${query}` : `/review/?${query}`
    
}

const ReviewPagination = (props) => {
    const {page, lastPage, username, tag} = props
    
    return (
        <PaginationDiv>
            <ButtonStyle
                disabled={page===1}
                to={
                    page===1? undefined : buildLink({username, tag, page: page-1})
                }>
                이전</ButtonStyle>
            <div>{page}</div>
            <ButtonStyle
                disabled={page>=lastPage}
                to={
                    page>=lastPage? undefined : buildLink({username, tag, page: page+1})
                }>
                다음</ButtonStyle>
        </PaginationDiv>
    );
};

export default ReviewPagination;