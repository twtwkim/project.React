import React from 'react';
import styled from 'styled-components';
import palette from '../../common/palette';

const PostActionButtonsDiv = styled.div`
   display: flex;
   justify-content: flex-end;
   margin-bottom: 2rem;
   margin-top: -1.5rem;
;
`
const ActionButton = styled.button`
   padding: 0.25rem 0.5rem;
   border-radius: 4px;
   color: ${palette.Gray[6]};
   font-weight: bold;
   border: none;
   outline: none;
   font-size: 0.875rem;
   cursor: pointer;
&:hover{
       background: ${palette.Gray[1]};
       color: ${palette.Orange[7]}
   }
   &+&{
       margin-left: 0.25rem;
   }
;
`
const PostActionButton = (props) => {
    const {onEdit, onRemoveClick} = props;
    return (
        <PostActionButtonsDiv>
            <ActionButton onClick={onEdit}>수정</ActionButton>
            <ActionButton onClick={onRemoveClick}>삭제</ActionButton>
        </PostActionButtonsDiv>
    );
};

export default PostActionButton;