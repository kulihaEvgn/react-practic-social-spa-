import React from 'react';
import s from './ProfilePage.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../../comon/Preloader/Preloader'

const ProfilePage = ({ profile, status, updateStatusProfile, isOwner, savePhoto, onChangePhoto, isLoading }) => {
    if (!profile) return <Preloader />;
    return (
        <div className={s.profile_wrap}>
            <ProfileInfo isLoading={isLoading} onChangePhoto={onChangePhoto} savePhoto={savePhoto} isOwner={isOwner} profile={profile} status={status} updateStatusProfile={updateStatusProfile} />
            <MyPostsContainer photo={profile.photos.small} name={profile.fullName} />
        </div>
    );
}

export default ProfilePage;