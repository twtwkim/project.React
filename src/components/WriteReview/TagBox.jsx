import React, {useCallback, useEffect, useState} from 'react';
import TagList from './TagList';
import palette from '../../common/palette';
import styled from 'styled-components';

const TagBoxDiv = styled.div`
    width: 100%;
    border-top: 1px solid ${palette.Gray[2]};
    padding-top: 2rem;
    h4{
        color: ${palette.Gray[8]};
        margin-top: 0;
        margin-bottom: 0.5rem;
    }
    display: flex;
    flex-direction:column;
    align-items: center;
;
`
const TagForm = styled.form`
    border-radius: 4px;
    overflow: hidden;
    display: flex;
    width: 256px;
    border: 1px solid ${palette.Gray[9]};
    input, button{
        outline: none;
        border: none;
        font-size: 1rem;
    }
    input{
        padding: 0.5rem;
        flex: 1;
        min-width: 0;
    }
    button{
        cursor: pointer;
        padding-right: 1rem;
        padding-left: 1rem;
        border: none;
        background: ${palette.Gray[8]};
        color: white;
        font-weight: bold;
        &:hover{
            background: ${palette.Gray[6]};
        }
    }
;
`

const TagBox = (props) => {
    const {tagList} = props;
    const {change_field}= props;
    const [input, setInput] = useState('');
    const [tags, setTags] = useState([]);

    const onRemove = useCallback((tag)=>{
        const newTags = tags.filter(item=>item!==tag)
        setTags(newTags);
        change_field('tags', newTags);
    },[tags, change_field]);

    const onChange = useCallback((e)=>{
        const newInput = e.target.value
        setInput(newInput);
    },[])

    const onSubmit = useCallback((e) =>{
        e.preventDefault();
        if(tags.includes(input)) return; // 이미 입력된 태그 방지
        if(!input) return; // 그냥 엔터만 치는 것 방지
        const newTags = [...tags, input]
        console.log(newTags);
        setTags(newTags);
        setInput('');
        change_field('tags', newTags); // 리덕스에도 심기겠즁
    },[input, tags, change_field]);

    useEffect(()=>{
        setTags(tagList)
    },[tagList])

    return (
        <TagBoxDiv>
            <h4>태그</h4>
            <TagForm onSubmit={onSubmit}>
                <input
                    value={input}
                    placeholder='태그를 입력하세요'
                    onChange={onChange}
                />
                <button type='submit'>추가</button>
            </TagForm>
            <TagList 
                tags={tags} 
                onRemove={onRemove}
            />
        </TagBoxDiv>
    );
};

export default TagBox;