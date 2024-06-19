import React, { useReducer } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../common/palette';
import Button from '../../common/Button';
import { useDispatch } from 'react-redux';
import TermsModal from '../../common/Modal/TermsModal';
import { privacyPolicy } from '../../constants/termsContent';

const FormDiv = styled.div`
    width: 60vw;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20vh auto;
`

const InputStyle = styled.input`
    font-size: 1rem;
    border: none;
    border-bottom: 1px solid ${ palette.Gray[5] };
    padding-bottom: 0.5rem;
    outline: none;
    width: 100%;
    &:focus{
        color:${palette.Violet[7]};
        border-bottom: 1px solid ${palette.Gray[7]};
    }
    &+&{
        margin-top: 1rem;
    }
`

const ButtonStyle= styled(Button)`
    margin-top: 1rem;    
`

const ErrorDiv = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`
const ErrorMessage = styled.div`
    color: red;
    text-align: center;
    font-size: 0.875rem;
    margin-top: 1rem;
`

const textType={
    login:"로그인",
    register:"회원등록"
};

const StyledHr = styled.hr`
    width: 100%;
    max-width: 600px;
    border: 2px solid black;
    border-radius: 30%; 
    margin: 2rem auto;
    
`;

const StyledH2 = styled.h2`
    color: ${palette.Violet[7]};  
    margin-bottom: 0;
`;

const CheckBoxLabel = styled.label`
    display: flex;
    align-items: center;
    margin-top: 1rem;
    width: 100%;
    input {
        margin-right: 0.5rem;
    }
    cursor: pointer;
`;

const Register = (props) => {
    const dispatch = useDispatch();
    const {mode, error, form} = props;
    const {onChange, onSubmit} = props;
    const [modalIsOpen, setModalIsOpen] = useState(false);
    const [modalContent, setModalContent] = useState({ title: '', content: '' });
    console.log(form);
    const openModal = (title, content) => {
        setModalContent({ title, content });
        setModalIsOpen(true);
    };

    const closeModal = () => setModalIsOpen(false);
    
    return (
        <FormDiv>
            <StyledH2>회원가입</StyledH2>
            <h1>즐거운 여행을 함께하세요</h1>
            <StyledHr/>
            <form onSubmit={onSubmit} style={{maxWidth:"485px"}}>
                <InputStyle 
                    autoComplete="username"
                    name="username"
                    placeholder="아이디"
                    onChange={onChange}
                    value={form.username}
                />
                <InputStyle 
                    autoComplete="password"
                    name="password"
                    placeholder="비밀번호"
                    type='password'
                    onChange={onChange}
                    value={form.password}
                />
                <InputStyle 
                    autoComplete="passwordConfirm"
                    name="passwordConfirm"
                    placeholder="비밀번호확인"
                    onChange={onChange}
                    value={form.passwordConfirm}
                    type='password'
                />
                <InputStyle 
                    autoComplete="telNumber"
                    name="telNumber"
                    placeholder="연락처"
                    type='tel'
                    onChange={onChange}
                    value={form.telNumber}
                />
                <CheckBoxLabel onClick={() => openModal('개인정보처리방침', privacyPolicy)}>
                    <input type="checkbox" name="privacy-policy" />
                    개인정보 취급방침에 동의합니다.
                </CheckBoxLabel>
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonStyle fullWidth color="Violet">회원가입</ButtonStyle>
                <hr style={{border:"1.5px solid #ced4da", margin:"20px auto"}}/>
                <h4>이미 직관의 맛 회원이라면</h4>
                <Link to='/login'><ButtonStyle fullWidth color="Cyan">로그인하기</ButtonStyle></Link>
            </form>
            <TermsModal 
                isOpen={modalIsOpen} 
                onRequestClose={closeModal} 
                title={modalContent.title} 
                content={modalContent.content}
            />
            
            

        </FormDiv>
    );
};

export default Register;