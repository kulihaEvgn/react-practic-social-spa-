import React from 'react';
import s from './ProfilePage.module.css';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import Preloader from '../../comon/Preloader/Preloader'

const ProfilePage = (props) => {
    if (!props.profile) return <Preloader />;
    return (
        <div className={s.profile_wrap}>
            <ProfileInfo profile={props.profile} />
            <MyPostsContainer photo={props.profile.photos.small} name={props.profile.fullName} />
        </div>
    );
}

export default ProfilePage;