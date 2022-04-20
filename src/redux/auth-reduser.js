import { signIn } from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';
const LOG_IN = 'LOG_IN';

const initialState = {
    email: null,
    id: null,
    login: null,
    isLogined: false
}

export const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...state,
                ...action.data
            }
        case LOG_IN:
            return {
                ...state,
                isLogined: action.isLogined
            }
        default: return state;
    }
}

export const setUserData = (data) => {
    return { type: SET_USER_DATA, data: data }
}
export const logined = (isLogined) => {
    return { type: LOG_IN, isLogined: isLogined }
}

// this thunk 
export const authentication = () => (dispatch) => {
    dispatch(logined(false))
    signIn().then(data => {
        dispatch(setUserData(data.data));
    });
}
