import { v4 as myId } from "uuid";

const ADD_POST = 'ADD-POST';
const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
const SET_PROFILE = 'SET_PROFILE';


const initialState = {
    posts: [
        { id: myId(), name: 'Selena Gomez', text: 'Hello im good', date: '22.04.2022' },
        { id: myId(), name: 'Selena Gomez', text: 'I love Jecky Chan s govnom', date: '23.04.2022' },
        { id: myId(), name: 'Selena Gomez', text: 'but my cat gona haite me', date: '23.04.2022' },
    ],
    defaultPostText: '',
    profile: null,
}

export const profileReduser = (state = initialState, action) => {
    switch (action.type) {
        case ADD_POST:

            const nPost = { id: myId(), name: 'Selena Gomez', text: state.defaultPostText, date: Date.now() };
            return {
                ...state,
                posts: [nPost, ...state.posts],
                defaultPostText: ''

            }
        case CHANGE_POST_TEXT:
            return {
                ...state,
                defaultPostText: action.text
            }
        case SET_PROFILE:
            return {
                ...state,
                profile: action.profile
            }
        default:
            return state;
    }
}


export const addPostAC = () => {
    return { type: ADD_POST }
}
export const changePostTextAC = (value) => {
    return { type: CHANGE_POST_TEXT, text: value }
}
export const setProfile = (profile) => {
    return { type: SET_PROFILE, profile: profile }
}