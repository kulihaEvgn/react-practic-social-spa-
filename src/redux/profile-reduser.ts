import { Dispatch } from "react";
import { ThunkDispatch } from "redux-thunk";
import { v4 as myId } from "uuid";
import { getUserProfile, getUserStatus, updateStatus, updateUserPhoto } from "../api/api";
import { SET_STATUS } from "../types/auth/actions";
import { ADD_POST, CHANGE_IS_LOADING, CHANGE_POST_TEXT, ProfileActionType, SAVE_PHOTO_SUCCESS, SET_PROFILE } from "../types/profile/actions";
import { PostTypes, ProfilePageType, PrtofileType } from "../types/profile/Profile";


const initialState: ProfilePageType = {
    posts: [
        { id: myId(), name: 'Selena Gomez', text: 'Hello im good', date: '22.04.2022' },
        { id: myId(), name: 'Selena Gomez', text: 'I love Jecky Chan s govnom', date: '23.04.2022' },
        { id: myId(), name: 'Selena Gomez', text: 'but my cat gona haite me', date: '23.04.2022' },
    ],
    defaultPostText: '',
    profile: {
        userId: null,
        lookingForAJob: false,
        lookingForAJobDescription: null,
        fullName: null,
        aboutMe: null,
        contacts: {
            github: null,
            vk: null,
            facebook: null,
            instagram: null,
            twitter: null,
            website: null,
            youtube: null,
            mainLink: null,
        },
        photos: {
            small: null,
            large: null
        }
    },
    userStatus: '',
    isLoading: false
}

const createNewPost = (state: ProfilePageType): PostTypes => ({
    id: myId(),
    name: 'Selena Gomez',
    text: state.defaultPostText,
    date: Date.now().toLocaleString(),
})

export const profileReduser = (state = initialState, action: any): ProfilePageType => {
    switch (action.type) {
        case ADD_POST:
            const nPost = createNewPost(state);
            return { ...state, posts: [nPost, ...state.posts], defaultPostText: '' }
        case CHANGE_POST_TEXT:
            return { ...state, defaultPostText: action.value }
        case SET_PROFILE:
            return { ...state, profile: action.profile }
        case SET_STATUS:
            return { ...state, userStatus: action.status }
        case SAVE_PHOTO_SUCCESS:
            return { ...state, profile: { ...state.profile, photos: action.file } }
        case CHANGE_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        default:
            return state;
    }
}


// actionCreators
export const addPostAC = (): ProfileActionType => ({ type: ADD_POST });
export const changePostTextAC = (value: string): ProfileActionType => ({ type: CHANGE_POST_TEXT, value });
const setProfile = (profile: PrtofileType): ProfileActionType => ({ type: SET_PROFILE, profile });
const setStatus = (status: string): ProfileActionType => ({ type: SET_STATUS, status });
const savePhotoSuccess = (file: string): ProfileActionType => ({ type: SAVE_PHOTO_SUCCESS, file });
const isLoadingChange = (isLoading: boolean): ProfileActionType => ({ type: CHANGE_IS_LOADING, isLoading })


// Redux Thunks
export const getProfile = (userId: number) => (dispatch: Dispatch<ProfileActionType>) => {
    getUserProfile(userId).then(res => {
        dispatch(setProfile(res.data))
    })
}
export const setStatusProfile = (userId: number) => (dispatch: Dispatch<ProfileActionType>) => {
    getUserStatus(userId).then(res => dispatch(setStatus(res)))
}
export const updateStatusProfile = (status: string) => (dispatch: Dispatch<ProfileActionType>) => {
    updateStatus(status).then(() => dispatch(setStatus(status)));
}
export const savePhoto = (file: string) => (dispatch: Dispatch<ProfileActionType>) => {
    dispatch(isLoadingChange(true))
    updateUserPhoto(file).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(savePhotoSuccess(res.data.data.photos));
        }
        dispatch(isLoadingChange(false))
    })
}

