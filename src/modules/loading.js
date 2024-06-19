import { handleActions } from "redux-actions";

const START_LOADING = 'loading/START_LOADING';
const FINISH_LOADING = 'loading/FINISH_LOADING';

export const start_loading = (mode) => ({type:START_LOADING, mode});
export const finish_loading = (mode) => ({type:FINISH_LOADING, mode});

const initialState = {  // 로딩 필요할때마다 넣으면 된다.
    loginLoading: false,
    registerLoading: false,
    checkLoading: false,
    writeLoading: false,
    readLoading: false,
    listLoading: false,
}

export const loading = handleActions({
    [START_LOADING]: (state, {mode})=>({
        ...state,
        [mode]: true
    }),
    [FINISH_LOADING]: (state, {mode})=>({
        ...state,
        [mode]: false
    })
}, initialState)