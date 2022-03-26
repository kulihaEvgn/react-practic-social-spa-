import React from 'react';
import Post from './Post/Post';
import s from './ProfilePage.module.css';
import profileBg from '../../../asets/bg_profile.jpg'
import MyPosts from './MyPosts/MyPosts';
import MyPostsContainer from './MyPosts/MyPostsContainer';


const ProfilePage = () => {
    return (
        <div className={s.profile_wrap}>
            <div className={s.profileData}>
                <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="" />
                <div>This bitch lick my bals</div>
            </div>
            <MyPostsContainer />
        </div>
    );
}

export default ProfilePage;