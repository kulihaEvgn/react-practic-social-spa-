import axios from "axios"
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': '224be7b6-fc7c-4d93-8b03-7d5e223d2bfe' },
})


export const getUsersApi = (currentPage, pageSize) => {
    return instance.get(`users?page=${currentPage}&count=${pageSize}`).then(res => res.data)
}
export const followedUser = (id) => {
    return instance.post(`follow/${id}`, {}).then(res => res.data);
}
export const unFollowedUser = (id) => {
    return instance.delete(`follow/${id}`).then(res => res.data);
}
export const signIn = () => {
    return instance.get(`auth/me`).then(res => res.data);
}
export const getUserProfile = (userId) => {
    return instance.get(`profile/${userId}`)
}
export const getUserStatus = (userId) => {
    return instance.get(`profile/status/${userId}`).then(res => res.data)
}
export const updateStatus = (status) => {
    return instance.put('profile/status/', { status })
};