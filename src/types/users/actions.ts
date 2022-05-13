import { UserType } from "./Users";

export const FOLLOW = 'FOLLOW';
export const UNFOLLOW = 'UNFOLLOW';
export const TOGGLE_FOLLOW = 'TOGGLE_FOLLOW';
export const SET_USERS = 'SET-USERS';
export const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
export const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT'
export const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
export const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

export type ToggleFollowType = { type: typeof TOGGLE_FOLLOW, id: number, isFollowed: boolean }
type SetUsersType = { type: typeof SET_USERS, users: UserType[] }
type SetCurrentPageType = { type: typeof SET_CURRENT_PAGE, page: number }
type ToggleIsFetchingType = { type: typeof TOGGLE_IS_FETCHING, isFetching: boolean }
type ToggleFollowingProgressType = { type: typeof TOGGLE_IS_FOLLOWING_PROGRESS, isProgress: boolean, id: number }
type SetTotalUsersCountType = { type: typeof SET_TOTAL_USERS_COUNT, count: number }

export type UsersActionType
    = ToggleFollowType
    | SetUsersType
    | SetCurrentPageType
    | ToggleIsFetchingType
    | ToggleFollowingProgressType
    | SetTotalUsersCountType 