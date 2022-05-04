import { v4 as myId } from "uuid";
import { getUserProfile, getUserStatus, updateStatus, updateUserPhoto } from "../api/api";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';
const SET_STATUS = 'SET_STATUS';
const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
const CHANGE_IS_LOADING = 'CHANGE_IS_LOADING'


const initialState = {
    posts: [
        { id: myId(), name: 'Selena Gomez', text: 'Hello im good', date: '22.04.2022' },
        { id: myId(), name: 'Selena Gomez', text: 'I love Jecky Chan s govnom', date: '23.04.2022' },
        { id: myId(), name: 'Selena Gomez', text: 'but my cat gona haite me', date: '23.04.2022' },
    ],
    defaultPostText: '',
    profile: null,
    userStatus: '',
    isLoading: false
}
const createNewPost = (state) => ({
    id: myId(), name: 'Selena Gomez', text: state.defaultPostText, date: Date.now()
})

export const profileReduser = (state = initialState, action) => {
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
export const addPostAC = () => ({ type: ADD_POST });
export const changePostTextAC = (value) => ({ type: CHANGE_POST_TEXT, value });
const setProfile = (profile) => ({ type: SET_PROFILE, profile });
const setStatus = (status) => ({ type: SET_STATUS, status });
const savePhotoSuccess = (file) => ({ type: SAVE_PHOTO_SUCCESS, file });
const isLoadingChange = (isLoading) => ({ type: CHANGE_IS_LOADING, isLoading })


// Redux Thunks
export const getProfile = (userId) => (dispatch) => {
    getUserProfile(userId).then(res => {
        dispatch(setProfile(res.data))
    })
}
export const setStatusProfile = (userId) => (dispatch) => {
    getUserStatus(userId).then(res => dispatch(setStatus(res)))
}
export const updateStatusProfile = (status) => (dispatch) => {
    updateStatus(status).then(dispatch(setStatus(status)));
}
export const savePhoto = (file) => (dispatch) => {
    dispatch(isLoadingChange(true))
    updateUserPhoto(file).then(res => {
        if (res.data.resultCode === 0) {
            dispatch(savePhotoSuccess(res.data.data.photos));
        }
        dispatch(isLoadingChange(false))
    })
}

