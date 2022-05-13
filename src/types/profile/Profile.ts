type ContactsType = {
    facebook: string | null
    github: string | null
    instagram: string | null
    mainLink: string | null
    twitter: string | null
    vk: string | null
    website: string | null
    youtube: string | null
}
export type PhotosType = {
    small: string | null
    large: string | null
}
export type PrtofileType = {
    userId: number | null
    lookingForAJob: boolean
    lookingForAJobDescription: string | null
    fullName: string | null
    aboutMe: string | null
    contacts: ContactsType
    photos: PhotosType
}
export type PostTypes = {
    id: string | number
    name: string
    text: string
    date: string
}
export type ProfilePageType = {
    posts: Array<PostTypes>,
    defaultPostText: string,
    profile: PrtofileType
    userStatus: string,
    isLoading: boolean
}

export type OnChangePhoto = (photo: string) => void