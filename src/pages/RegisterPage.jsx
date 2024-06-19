import Header from "../common/Header";
import Register from "../components/Register/Register";
import { connect } from "react-redux";
import { change_mode, reset_form, register } from "../modules/auth";
import { useNavigate } from "react-router";
import { useEffect, useState } from "react";
import { check } from "../modules/user";

const RegisterPage = (props) => {
    const{form, auth, authError, registerLoading, user, checkLoading} = props;
    const{change_mode, reset_form, register, check} = props;
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onChange = (e) =>{
        const {name, value} = e.target;
        change_mode('register', name, value);
    }

    const onSubmit = (e) =>{
        e.preventDefault();
        const {username, password, passwordConfirm, telNumber} = form;
        if([username, password, passwordConfirm, telNumber].includes('')){
            setError('모든 항목을 입력해주세요');
            return;
        }
        if(password !== passwordConfirm){
            setError('비밀번호가 일치하지 않습니다');
            change_mode('register', password, '');
            change_mode('register', passwordConfirm, '');
            return;
        }
        register(username, password, telNumber);
    }

    useEffect(()=>{
        reset_form('register');
    },[reset_form])

    useEffect(()=>{
        if(authError&&authError.response.status===400){
            console.log(authError)
            setError("이미 존재하는 아이디입니다.");
            return;
        }
        if(auth){
            console.log(auth)
            check()
        }
    },[authError, auth, check])

    useEffect(()=>{
        if(user){
            try {
                localStorage.setItem('user', JSON.stringify(user))
            } catch (e) {
                console.log('localStorage is not working')
            }
            navigate('/main');
            alert("회원가입 완료! 자동 로그인됩니다.")
        }
    },[user, navigate])

    if(registerLoading) return <div>loading...</div>;
    if(checkLoading) return <div>loading...</div>;

    return (
        <>
            <Header isWhiteBackground/>
            <Register
                mode='register'
                form={form}
                error={error}
                onChange={onChange}
                onSubmit={onSubmit}
            />            
        </>
    );
};

export default connect(
    (state) => ({
        form: state.auth.register,
        auth: state.auth.auth,
        authError: state.auth.authError,
        registerLoading: state.loading.registerLoading,
        user: state.user.user,
        checkLoading: state.loading.checkLoading
    }),
    {
        change_mode,
        reset_form,
        register,
        check
    }
)(RegisterPage);