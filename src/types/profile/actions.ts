export const ADD_POST = 'ADD-POST';
export const CHANGE_POST_TEXT = 'CHANGE-POST-TEXT';
export const SET_PROFILE = 'SET_PROFILE';
export const SET_STATUS = 'SET_STATUS';
export const SAVE_PHOTO_SUCCESS = 'SAVE_PHOTO_SUCCESS';
export const CHANGE_IS_LOADING = 'CHANGE_IS_LOADING';

type AddPostAcType = { type: typeof ADD_POST };
type ChangePostTextAcType = { type: typeof CHANGE_POST_TEXT, value: string };
type SetProfileType = { type: typeof SET_PROFILE, profile: any };
type SetStatusType = { type: typeof SET_STATUS, status: string };
type SavePhotoSuccessType = { type: typeof SAVE_PHOTO_SUCCESS, file: string };
type IsLoadingChangeType = { type: typeof CHANGE_IS_LOADING, isLoading: boolean };

export type ProfileActionType
    = AddPostAcType
    | ChangePostTextAcType
    | SetProfileType
    | SetStatusType
    | SavePhotoSuccessType
    | IsLoadingChangeType