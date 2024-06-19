import { handleActions } from "redux-actions";
import * as api from "./api/auth"
import { start_loading, finish_loading } from "./loading";

// 모드 정의
const CHANGE_MODE = 'auth/CHANGE_MODE'
const RESET_FORM = 'auth/RESET_FORM'

export const change_mode = (form, key, value) => ({type:CHANGE_MODE, form, key, value});
export const reset_form = (form) => ({type: RESET_FORM, form});

// 로그인
const LOGIN_LOADING = 'loginLoading';
const LOGIN_SUCCESS = 'auth/LOGIN_SUCCESS';
const LOGIN_FAILURE = 'auth/LOGIN_FAILURE';

export const login = (username, password) => async dispatch =>{
    start_loading(LOGIN_LOADING)
    try{
        const response = await api.login(username, password)
        dispatch({type:LOGIN_SUCCESS, payload:response.data})
    }catch(error){
        dispatch({type:LOGIN_FAILURE, payload:error})
    }finally{
        finish_loading(LOGIN_FAILURE)
        
    }
    return;
}

//회원가입
const REGISTER_LOADING = 'registerLoading';
const REGISTER_SUCCESS = 'auth/REGISTER_SUCCESS';
const REGISTER_FAILURE = 'auth/REGISTER_FAILURE';

export const register = (username, password, telNumber) => async dispatch =>{
    start_loading(REGISTER_LOADING);
    try{
        const response = await api.register(username, password, telNumber);
        dispatch({type:REGISTER_SUCCESS, payload:response.data})
    }catch(error){
        dispatch({type:REGISTER_FAILURE, payload:error})
    }finally{
        finish_loading(REGISTER_FAILURE)
        
    }
    return;
}

const initialState = {
    login:{
        username:'',
        password:'',
    },
    register:{
        username:'',
        password:'',
        passwordConfirm:'',
        telNumber:''        
    },
    auth: null,
    authError: null
}

const auth = handleActions({
    [CHANGE_MODE]: (state, {form, key, value}) => ({    
        ...state,
        [form]: {
            ...state[form], 
            [key]: value 
        }
    }),
    [RESET_FORM]: (state, {form}) => ({
        ...state,
        [form]: initialState[form],
        auth:null,
        authError:null
    }),
    [LOGIN_SUCCESS]: (state, {payload:auth}) => ({
        ...state,
        auth,
        authError: null 
    }),
    [LOGIN_FAILURE]: (state, {payload:authError}) => ({
        ...state,
        auth: null,
        authError
    }),
    [REGISTER_SUCCESS]: (state, {payload:auth}) => ({
        ...state,
        auth,
        authError: null 
    }),
    [REGISTER_FAILURE]: (state, {payload:authError}) => ({
        ...state,
        auth: null,
        authError
    })
}, initialState)

export default auth;