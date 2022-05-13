import React, { FC } from 'react';
import s from './ProfilePage.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../../comon/Preloader/Preloader'
import { PrtofileType } from '../../../types/profile/Profile';

type PropsType = {
    profile: PrtofileType
    status: string
    updateStatusProfile: (status: string) => void
    isOwner: boolean
    onChangePhoto: (file: string) => void
    isLoading: boolean
}

const ProfilePage: FC<PropsType> = ({ profile, status, updateStatusProfile, isOwner, onChangePhoto, isLoading }) => {
    if (!profile) return <Preloader />;
    return (
        <div className={s.profile_wrap}>
            <ProfileInfo isLoading={isLoading} onChangePhoto={onChangePhoto} isOwner={isOwner}
                profile={profile} status={status} updateStatusProfile={updateStatusProfile} />
            <MyPostsContainer />
        </div>
    );
}

export default ProfilePage;