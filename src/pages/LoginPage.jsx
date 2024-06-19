import { connect } from "react-redux";
import Header from "../common/Header";
import Login from "../components/Login/Login";
import { change_mode, login, reset_form } from "../modules/auth";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { check } from "../modules/user";

const LoginPage = (props) => {
    const {form, auth, authError, loginLoading, user, checkLoading} = props;
    const {change_mode, login, reset_form, check} = props;
    const [error, setError] = useState(null);
    const navigate = useNavigate();

    const onChange = (e) => {
        const {name, value} = e.target;
        change_mode('login', name, value);
    }

    const onSubmit = (e) => {
        e.preventDefault();
        const {username, password} = form;
        login(username, password);
    }

    useEffect(()=>{
        reset_form('login');
    },[reset_form])

    useEffect(()=>{
        if(authError){
            console.log(authError);
            setError("로그인 실패");
            return;
        }
        if(auth){
            console.log(auth);
            check();
        }
    },[auth, authError, setError, check])

    useEffect(()=>{
        if(user){
            navigate('/main');
            try { 
                localStorage.setItem('user', JSON.stringify(user)) 
            } catch (e) {
                console.log('localStorage is not working')
            }
            alert("로그인 되었습니다!");
        }
    },[user, navigate])

    if(loginLoading) return <div>loading...</div>
    if(checkLoading) return <div>loading...</div>
    return (
        <>
            <Header isWhiteBackground/>
            <Login
                mode='login'
                form={form}
                onChange={onChange}
                onSubmit={onSubmit}
                error={error}
            />
        </>
    );
};

export default connect(
    (state) => ({
        form: state.auth.login,
        auth: state.auth.auth,
        authError: state.auth.authError,
        loginLoading: state.loading.loginLoading,
        user: state.user.user,
        checkLoading: state.loading.checkLoading,
    }),
    {
        change_mode,
        reset_form,
        login,
        check
    }
)(LoginPage);