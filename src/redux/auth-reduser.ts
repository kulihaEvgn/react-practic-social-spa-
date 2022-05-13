import { Dispatch } from "redux";
import { ThunkDispatch } from "redux-thunk";
import { getCaptcaUrl, logOut, postLoginData, signIn } from "../api/api";
import { AuthActionType, GET_CAPTCA_URL_SUCCSESS, LOG_IN, RESET_CAPTCHA, SET_STATUS, SET_USER_DATA } from "../types/auth/actions";
import { AuthData, AuthType } from "../types/auth/Ayth";
import { AppStateType } from "./store";

const initialState: AuthType = {
    email: null,
    id: null,
    login: null,
    isLogined: false,
    errorMessage: '',
    captcha: null
}

export const authReduser = (state = initialState, action: AuthActionType): AuthType => {
    switch (action.type) {
        case SET_USER_DATA: return { ...state, ...action.data };
        case LOG_IN: return { ...state, isLogined: action.isLogined };
        case GET_CAPTCA_URL_SUCCSESS: return { ...state, captcha: action.url };
        case RESET_CAPTCHA: return { ...state, captcha: null };
        default: return state;
    }
}

export const setUserData = (data: AuthType): AuthActionType => {
    return { type: SET_USER_DATA, data }
}
export const logined = (isLogined: boolean): AuthActionType => {
    return { type: LOG_IN, isLogined }
}
const getCaptcaUrlSuccsess = (url: string): AuthActionType => {
    return { type: GET_CAPTCA_URL_SUCCSESS, url }
}
const resetCaptha = (): AuthActionType => {
    return { type: RESET_CAPTCHA }
}

// this thunk 
export const authentication = () =>
    async (dispatch: Dispatch<AuthActionType>) => {
        const data = await signIn();
        if (data.resultCode === 0) {
            dispatch(setUserData(data.data));
        }
    }

export const logInToMyProfile =
    ({ ...valuse }: AuthData, setStatus: (status: string) => void) =>
        async (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionType>) => {
            const res = await postLoginData({ ...valuse })
            console.log({ ...valuse });

            if (res.data.resultCode === 0) {
                dispatch(authentication())
                dispatch(logined(true))
                dispatch(resetCaptha())
            } else if (res.data.resultCode === 10) {
                dispatch(getCaptha())
            }
            else {
                setStatus('Не правильный логин или пароль')
            }

        }
export const logOutMyProfile = () =>
    async (dispatch: ThunkDispatch<AppStateType, unknown, AuthActionType>) => {
        const res = await logOut()
        if (res.data.resultCode === 0) {
            dispatch(logined(false))
            dispatch(setUserData({
                email: null,
                id: null,
                login: null,
                isLogined: false,
                captcha: null
            }))
        }
    }
export const getCaptha = () =>
    async (dispatch: Dispatch<AuthActionType>) => {
        const res = await getCaptcaUrl();
        dispatch(getCaptcaUrlSuccsess(res))
    }

