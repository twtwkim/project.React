import { handleActions } from "redux-actions";
import * as api from "./api/post";
import { start_loading, finish_loading } from "./loading";

const LIST_POSTS_SUCCESS = 'postList/LIST_POSTS_SUCCESS';
const LIST_POSTS_FAILURE = 'postList/LIST_POSTS_FAILURE';
const LIST_LOADING = 'listLoading';

export const list_posts = (page, username, tag) => async(dispatch) =>{
    start_loading(LIST_LOADING);
    try {
        const response = await api.list_posts(page, username, tag);
        dispatch({
            type: LIST_POSTS_SUCCESS,
            payload: [response.data, response.headers["last-page"]]
        })
    } catch (error) {
        dispatch({
            type: LIST_POSTS_FAILURE, 
            payload:error
        })
        throw error;
    }
    finally{
        finish_loading(LIST_LOADING);
    }
}

const initialState = {
    posts: null,
    postsError: null,
    lastPage: 1
}

const postList = handleActions({
    [LIST_POSTS_SUCCESS] : (state, {payload:[posts, lastPage]}) =>({
        ...state,
        posts,
        postsError: null,
        lastPage
    }),
    [LIST_POSTS_FAILURE] : (state, {payload:postsError})=>({
        ...state,
        posts: null,
        postsError,
        
    })
}, initialState)

export default postList;