import { handleActions } from 'redux-actions';
import * as api from '../modules/api/post'
import { start_loading, finish_loading } from './loading';

const READ_POST_SUCCESS = 'post/READ_POST_SUCCESS';
const READ_POST_FAILURE = 'post/READ_POST_FAILURE';
const READ_LOADING = 'readLoading';
const SET_POST = 'post/SET_POST';

export const set_post = (post) =>{
    console.log(post);
    return { type: SET_POST, post}
}

export const read_post = (id) => async (dispatch) => {
    start_loading(READ_LOADING)
    try {
        const response = await api.read_post(id);
        console.log(response.data)
        dispatch({type: READ_POST_SUCCESS, payload: response.data});
    } catch (error) {
        dispatch({type: READ_POST_FAILURE, payload:error})
    }finally{
        finish_loading(READ_LOADING)
    }
}

const initialState = {
    post: null,
    postError: null
}

const post = handleActions({
    [READ_POST_SUCCESS] : (state, {payload:post}) => ({
        ...state,
        post,
        postError: null
    }),
    [READ_POST_FAILURE] : (state, {payload:postError}) => ({
        ...state,
        post: null,
        postError
    }),
    [SET_POST]: (state, {post}) => ({
        ...state,
        post,
        postError: null
    })
}, initialState);

export default post;