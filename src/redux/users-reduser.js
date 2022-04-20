import { getUsersApi, followedUser, unFollowedUser } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_USERS_COUNT = 'SET_USERS_COUNT';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


const initialState = {
    users: [],
    totalUserCount: 200,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: false,
    isFollowingUsersId: []
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
            return { ...state, users: [...action.users] }
        case SET_USERS_COUNT:
            return { ...state, totalUserCount: action.usersNum }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case TOGGLE_IS_FOLLOWING_PROGRESS:
            return {
                ...state,
                isFollowingUsersId: action.isProgress
                    ? [...state.isFollowingUsersId, action.id]
                    : [state.isFollowingUsersId.filter(id => id !== action.id)]
            }

        default: return state;
    }
}



export const follow = (id) => {
    return { type: FOLLOW, id }
}
export const unFollow = (id) => {
    return { type: UNFOLLOW, id }
}
export const setUsers = (users) => {
    return { type: SET_USERS, users }
}
export const setTotlaUsersCount = (usersNum) => {
    return { type: SET_USERS_COUNT, usersNum }
}
export const setCurrentPage = (page) => {
    return { type: SET_CURRENT_PAGE, page }
}
export const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}
export const toggleFollowingProgress = (isProgress, id) => {
    return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isProgress, id }
}

// this thunk 
export const getUsers = (currentPage, pageSize) => (dispatch) => {
    dispatch(toggleIsFetching(true));
    getUsersApi(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false))
        dispatch(setUsers(data.items))
    })
}
export const setCurrunetPage = (p, pageSize) => (dispatch) => {
    dispatch(setCurrentPage(p));
    dispatch(toggleIsFetching(true));
    getUsersApi(p, pageSize).then(data => {
        dispatch(setUsers(data.items));
        dispatch(toggleIsFetching(false));
    })
}
export const followUser = (id) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    followedUser(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(follow(id));
        }
        dispatch(toggleFollowingProgress(false, id))
    })
}
export const unFollowUser = (id) => (dispatch) => {
    dispatch(toggleFollowingProgress(true, id))
    unFollowedUser(id).then(data => {
        if (data.resultCode === 0) {
            dispatch(unFollow(id));
        }
        dispatch(toggleFollowingProgress(false, id))
    })
}