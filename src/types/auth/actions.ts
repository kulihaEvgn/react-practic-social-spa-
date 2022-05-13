import { AuthType } from "./Ayth";

export const SET_USER_DATA = 'SET_USER_DATA';
export const LOG_IN = 'LOG_IN';
export const GET_CAPTCA_URL_SUCCSESS = 'GET_CAPTCA_URL_SUCCSESS';
export const SET_STATUS = 'SET_STATUS';
export const RESET_CAPTCHA = 'RESET_CAPTCHA';


export type SetUserDataType = { type: typeof SET_USER_DATA, data: AuthType };
export type LoginedType = { type: typeof LOG_IN, isLogined: boolean };
export type GetCaptcaUrlSuccsess = { type: typeof GET_CAPTCA_URL_SUCCSESS, url: string };
export type ResetCaptha = { type: typeof RESET_CAPTCHA }

export type AuthActionType
    = SetUserDataType
    | LoginedType
    | GetCaptcaUrlSuccsess
    | ResetCaptha
