import React from 'react';
import s from './ProfilePage.module.css';
import profileBg from '../../../asets/bg_profile.jpg'
import MyPostsContainer from './MyPosts/MyPostsContainer';


const ProfilePage = () => {
    return (
        <div className={s.profile_wrap}>
            <div className={s.profileData}>
                <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="" />
                <div className={s.name}>
                    <h2>Selena Gomez</h2>
                    <p>Asambler Developer from OnlyFans</p>
                </div>
                <div className={s.skilz}>
                    <h3>Slikz:</h3>
                    <ul>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Perl</li>
                        <li>Harbor</li>
                    </ul>
                </div>

            </div>
            <MyPostsContainer />
        </div>
    );
}

export default ProfilePage;