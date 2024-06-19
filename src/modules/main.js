import { createAction, handleActions } from "redux-actions";

const SET_SCROLL_Y = 'main/SET_SCROLL_Y';
const SCROLL_TO_Day = 'main/SCROLL_TO_Day';

export const setScrollY = createAction(SET_SCROLL_Y);
export const scrollToDay = createAction(SCROLL_TO_Day, (dayNumber) => dayNumber);

const initialState = {
    scrollY: 0,
    currentDay: 1,
};

const main = handleActions({
    [SET_SCROLL_Y]: (state, action) =>({
        ...state,
        scrollY: action.payload,
    }),
    [SCROLL_TO_Day]: (state, action) => ({
        ...state,
        currentDay: action.payload,
    })
}, initialState);

export default main;