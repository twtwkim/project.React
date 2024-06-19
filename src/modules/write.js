import { handleActions } from "redux-actions"
import * as api from "./api/post"
import { start_loading, finish_loading } from "./loading";

const RESET_WRITE = 'write/RESET_WRITE';
const CHANGE_FIELD = 'write/CHANGE_FIELD';
const SET_POST = 'write/SET_POST';


export const reset_write = () => ({type: RESET_WRITE});
export const change_field = (key, value) => ({type: CHANGE_FIELD, key, value});
export const set_post = (post) => ({type: SET_POST, post})


const WRITE_POST_SUCCESS = 'write/WRITE_POST_SUCCESS';
const WRITE_POST_FAILURE = 'write/WRITE_POST_FAILURE';
const WRITE_LOADING = 'writeLoading';

export const write_post = (title, body, tags) => async dispatch => {
    start_loading(WRITE_LOADING)
    try {
        const response = await api.write_post(title, body, tags,);
        console.log(response.data);
        dispatch({type: WRITE_POST_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({type: WRITE_POST_FAILURE, payload:error})
    }
    finally{
        finish_loading(WRITE_LOADING)
    }
}

const UPDATE_POST_SUCCESS = 'write/UPDATE_POST_SUCCESS';
const UPDATE_POST_FAILURE = 'write/UPDATE_POST_FAILURE';
const UPDATE_LOADING = 'updateLoading';

export const update_post = (id, title, body, tags) => async dispatch =>{
    start_loading(UPDATE_LOADING)
    try {
        const response = await api.update_post(id, title, body, tags);
        console.log(response.data)
        dispatch({type: UPDATE_POST_SUCCESS, payload:response.data})
    } catch (error) {
        dispatch({type: UPDATE_POST_FAILURE, payload:error})
    }
    finally{
        finish_loading(UPDATE_LOADING)
    }
}

const initialState = {
    title: '',
    body: '',
    tags: [],
    
    writer: null,
    writerError: null,
    postId: null,
    
}

const write = handleActions({
    [RESET_WRITE]:(state)=>initialState,
    [CHANGE_FIELD]:(state, {key, value})=>({
        ...state,
        [key]: value
    }),
    [WRITE_POST_FAILURE]: (state, {payload:writerError}) => ({
        ...state,
        writer:null,
        writerError
    }),
    [WRITE_POST_SUCCESS]: (state, {payload:writer}) => ({
        ...state,
        writer,
        writerError:null
    }),
    [SET_POST]: (state, {post}) =>({
        ...state,
        title: post.title,
        body: post.body,
        tags: post.tags,
        postId: post._id,
    }),
    [UPDATE_POST_SUCCESS]: (state, {payload:writer}) => ({
        ...state,
        writer,
        writerError:null
    }),
    [UPDATE_POST_FAILURE]: (state, {payload:writerError}) => ({
        ...state,
        writer:null,
        writerError
    }),
    
}, initialState)

export default write;
