import { v4 as id } from "uuid";
const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';

const initialState = {
    users: [],
    totalUserCount: 200,
    pageSize: 5,
    currentPage: 2
}
export const usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: true }
                    }
                    return { ...u }
                })]
            }
        case UNFOLLOW:
            return {
                ...state,
                users: [...state.users.map(u => {
                    if (u.id === action.id) {
                        return { ...u, followed: false }
                    }
                    return { ...u }
                })]
            }
        case SET_USERS:
            return {
                ...state,
                users: [...action.users]
            }
        case SET_USERS_COUNT:
            return {
                ...state,
                totalUserCount: action.usersNum
            }
        case SET_CURRENT_PAGE:
            return {
                ...state,
                currentPage: action.page
            }
        default: return state;
    }
}



export const followAC = (id) => {
    return { type: FOLLOW, id: id }
}
export const unFollowAC = (id) => {
    return { type: UNFOLLOW, id: id }
}
export const setUsersAC = (users) => {
    return { type: SET_USERS, users: users }
}
export const setTotlaUsersCountAC = (usersNum) => {
    return { type: SET_USERS_COUNT, usersNum: usersNum }
}
export const setCurrentPageAC = (page) => {
    return { type: SET_CURRENT_PAGE, page: page }
}