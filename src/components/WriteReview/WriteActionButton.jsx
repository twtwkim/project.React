import React from 'react';
import Button from '../../common/Button';
import styled from 'styled-components';

const WriteActionButtonDiv = styled.div`
    margin-top: 1rem;
    margin-bottom: 3rem;
    button+button{
        margin-left: 0.5rem;
    }
    display: flex;
    flex-direction: row;
    align-items:center;
    justify-content:center;
;
`
const StyledButton = styled(Button)`
    height: 2.125rem;
    &+&{
        margin-left: 0.5rem;
    }
`

const WriteActionButton = (props) => { 
    const {onWrite, onCancel, isEdit} = props;
    return (
        <WriteActionButtonDiv>
            <StyledButton onClick={onWrite}>
                포스트 {isEdit ? "수정":"등록"}</StyledButton>            
            <StyledButton onClick={onCancel}>취소</StyledButton>            
        </WriteActionButtonDiv>
    );
};

export default WriteActionButton;