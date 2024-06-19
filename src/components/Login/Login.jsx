import React, { useReducer } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import palette from '../../common/palette';
import Button from '../../common/Button';
import { useDispatch } from 'react-redux';

const FormDiv = styled.div`
    width: 60vw;
    text-align: center;
    display:flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20vh auto;
    // border: 1px solid #ccc;
    // border-radius: 8px;
    // box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    // background-color: #fff;
    // padding: 20px;
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

const textType={
    login:"로그인",
    register:"회원등록"
}

const Login = (props) => {
    const dispatch = useDispatch();
    const {mode, error, form} = props;
    const {onChange, onSubmit} = props;
    // console.log(form);
    return (
        <FormDiv>
            <StyledH2>로그인</StyledH2>
            <h1>여행 떠날 준비 되셨나요?</h1>
            <StyledHr/>
            <form onSubmit={onSubmit}>
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
                {error && <ErrorMessage>{error}</ErrorMessage>}
                <ButtonStyle fullWidth color="Violet">로그인</ButtonStyle>
                <hr style={{border:"1.5px solid #ced4da", margin:"20px auto"}}/>
                <h4>아직 회원가입을 하지 않았다면</h4>
                <Link to='/register'><ButtonStyle fullWidth color="Cyan">간편 회원가입하기</ButtonStyle></Link>
            </form>
            
            
            
                
            
        </FormDiv>
    );
};

export default Login;