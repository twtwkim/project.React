import React from 'react';
import styled from 'styled-components';
import palette from '../../common/palette';

const TagDiv = styled.div`
    margin-right: 0.5rem;
    color: ${palette.Gray[8]};
    cursor: pointer;
    &:hover{
        opacity: 0.5;
    }
;
`
const TagListDiv = styled.div`
    display: flex;
    margin-top: 0.5rem;
`

const TagItem = ({tag, onRemove}) => <TagDiv onDoubleClick={()=>onRemove(tag)}>#{tag}</TagDiv>

const TagList = (props) => {
    const {tags} = props;
    const {onRemove} = props;
    return (
        <TagListDiv>
            {tags.map(tag=>
            <TagItem 
                key={tag} 
                tag={tag}
                onRemove={onRemove}
            />)}
        </TagListDiv>
    );
};

export default TagList;