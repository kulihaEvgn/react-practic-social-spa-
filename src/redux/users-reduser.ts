import { Dispatch } from "redux";
import { getUsersApi, followedUser, unFollowedUser } from "../api/api";
import { FOLLOW, SET_CURRENT_PAGE, SET_TOTAL_USERS_COUNT, SET_USERS, ToggleFollowType, TOGGLE_FOLLOW, TOGGLE_IS_FETCHING, TOGGLE_IS_FOLLOWING_PROGRESS, UNFOLLOW, UsersActionType } from "../types/users/actions";
import { UsersPageType, UserType } from "../types/users/Users";





const initialState: UsersPageType = {
    users: [],
    totalUserCount: 200,
    portionSize: 10,
    pageSize: 5,
    currentPage: 1,
    isFetching: false,
    isFollowingProgress: false,
    isFollowingUsersId: [],
}

const toggleFollowing = (state: UsersPageType, action: ToggleFollowType): UsersPageType => ({
    ...state,
    users: state.users.map(user => {
        if (user.id === action.id) {
            return { ...user, followed: action.isFollowed }
        }
        return user;
    })
})

export const usersReduser = (state = initialState, action: UsersActionType): UsersPageType => {

    switch (action.type) {
        case TOGGLE_FOLLOW:
            return toggleFollowing(state, action)
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
                    : [...state.isFollowingUsersId.filter(id => id !== action.id)]
            }
        default: return state;
    }
}





export const toggleFollow = (id: number, isFollowed: boolean): ToggleFollowType => {
    return { type: TOGGLE_FOLLOW, id, isFollowed }
}
export const setUsers = (users: UserType[]): UsersActionType => {
    return { type: SET_USERS, users }
}
export const setCurrentPage = (page: number): UsersActionType => {
    return { type: SET_CURRENT_PAGE, page }
}
export const toggleIsFetching = (isFetching: boolean): UsersActionType => {
    return { type: TOGGLE_IS_FETCHING, isFetching }
}
export const toggleFollowingProgress = (isProgress: boolean, id: number): UsersActionType => {
    return { type: TOGGLE_IS_FOLLOWING_PROGRESS, isProgress, id }
}
const setTotalUsersCount = (count: number): UsersActionType => {
    return { type: SET_TOTAL_USERS_COUNT, count }
}

// this thunk 
export const getUsers = (currentPage: number, pageSize: number) => async (dispatch: Dispatch<UsersActionType>) => {
    dispatch(toggleIsFetching(true));
    const data = await getUsersApi(currentPage, pageSize);
    dispatch(setTotalUsersCount(data.totalCount))
    dispatch(toggleIsFetching(false))
    dispatch(setUsers(data.items))

}
export const setCurrunetPage = (p: number, pageSize: number) => async (dispatch: Dispatch<UsersActionType>) => {
    dispatch(setCurrentPage(p));
    dispatch(toggleIsFetching(true));
    const data = await getUsersApi(p, pageSize);
    dispatch(setUsers(data.items));
    dispatch(toggleIsFetching(false));
}
export const followUser = (id: number) => async (dispatch: Dispatch<UsersActionType>) => {
    dispatch(toggleFollowingProgress(true, id));

    const data = await followedUser(id)
    if (data.resultCode === 0) {
        dispatch(toggleFollow(id, true));
    }

    dispatch(toggleFollowingProgress(false, id));
}
export const unFollowUser = (id: number) => async (dispatch: Dispatch<UsersActionType>) => {
    dispatch(toggleFollowingProgress(true, id));

    const data = await unFollowedUser(id)
    if (data.resultCode === 0) {
        dispatch(toggleFollow(id, false));
    }

    dispatch(toggleFollowingProgress(false, id));
}