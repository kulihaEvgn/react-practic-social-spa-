import axios from "axios"
const instance = axios.create({
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    withCredentials: true,
    headers: { 'API-KEY': 'cbef2697-878e-4bc5-9e12-0d3e3882a3ad' },
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
export const postLoginData = ({ ...values }) => {
    return instance.post('auth/login', { ...values })
}
export const logOut = () => {
    return instance.delete('auth/login')
}
export const updateUserPhoto = (photoFile) => {
    const formaData = new FormData();
    formaData.append('image', photoFile);
    return instance.put(`profile/photo`, formaData, {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
    })
}
export const getCaptcaUrl = () => {
    return instance.get('security/get-captcha-url').then(res => res.data.url)
}