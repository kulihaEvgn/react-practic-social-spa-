import { logOut, postLoginData, signIn } from "../api/api";
const SET_USER_DATA = 'SET_USER_DATA';
const LOG_IN = 'LOG_IN';


const initialState = {
    email: null,
    id: null,
    login: null,
    isLogined: false,
    errorMessage: ''
}

export const authReduser = (state = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return { ...state, ...action.data }
        case LOG_IN:
            return { ...state, isLogined: action.isLogined }
        case 'SET_STATUS':
            return { ...state, errorMessage: action.payload }
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
export const authentication = () => async (dispatch) => {
    const data = await signIn();
    if (data.resultCode === 0) {
        dispatch(setUserData(data.data));
    }
}
export const logInToMyProfile = ({ ...values }, setStatus) => async (dispatch) => {
    const res = await postLoginData({ ...values })
    if (res.data.resultCode === 0) {
        dispatch(authentication())
        dispatch(logined(true))
    } else {
        setStatus('Не правильный логин или пароль')
    }

}
export const logOutMyProfile = () => async (dispatch) => {
    const res = await logOut()
    if (res.data.resultCode === 0) {
        dispatch(logined(false))
        dispatch(setUserData(null, null, null))
    }
}
