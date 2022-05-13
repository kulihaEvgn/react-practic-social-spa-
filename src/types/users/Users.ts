import { PhotosType } from "../profile/Profile";

export type UserType = {
    id: number,
    name: string,
    status: string,
    photos: PhotosType,
    followed: boolean
};

export type UsersPageType = {
    users: Array<UserType>
    totalUserCount: number
    portionSize: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isFollowingProgress: boolean
    isFollowingUsersId: number[]
}