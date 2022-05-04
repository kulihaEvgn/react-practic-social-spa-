import { getUsersApi, followedUser, unFollowedUser } from "../api/api";

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET-USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';


const initialState = {
    users: [],
    totalUserCount: 200,
    portionSize: 10,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: false,
    isFollowingUsersId: [],
}

const toggleFollowing = (state, action, isFollowed) => ({
    ...state,
    users: [...state.users.map(u => {
        if (u.id === action.id) {
            return { ...u, followed: isFollowed }
        }
        return { ...u }
    })]
})

export const usersReduser = (state = initialState, action) => {

    switch (action.type) {
        case FOLLOW:
            return toggleFollowing(state, action, true)
        case UNFOLLOW:
            return toggleFollowing(state, action, false)
        case SET_USERS:
            return { ...state, users: [...action.users] }
        case SET_CURRENT_PAGE:
            return { ...state, currentPage: action.page }
        case TOGGLE_IS_FETCHING:
            return { ...state, isFetching: action.isFetching }
        case SET_TOTAL_USERS_COUNT:
            return { ...state, totalUserCount: action.count }
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
export const setCurrentPage = (page) => {
    return { type: SET_CURRENT_PAGE, page }
}
export const toggleIsFetching = (isFetching) => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}
export const toggleFollowingProgress = (isProgress, id) => {
    return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isProgress, id }
}
const setTotalUsersCount = (count) => {
    return { type: SET_TOTAL_USERS_COUNT, count }
}

// this thunk 
export const getUsers = (currentPage, pageSize) => async (dispatch) => {
    dispatch(toggleIsFetching(true));
    const data = await getUsersApi(currentPage, pageSize);
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))

}
export const setCurrunetPage = (p, pageSize) => async (dispatch) => {
    dispatch(setCurrentPage(p));
    dispatch(toggleIsFetching(true));
    const data = await getUsersApi(p, pageSize);
    dispatch(setUsers(data.items));
    dispatch(toggleIsFetching(false));
}
export const followUser = (id) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));

    const data = await followedUser(id)
    if (data.resultCode === 0) {
        dispatch(follow(id));
    }

    dispatch(toggleFollowingProgress(false, id));
}
export const unFollowUser = (id) => async (dispatch) => {
    dispatch(toggleFollowingProgress(true, id));

    const data = await unFollowedUser(id)
    if (data.resultCode === 0) {
        dispatch(unFollow(id));
    }

    dispatch(toggleFollowingProgress(false, id));
}