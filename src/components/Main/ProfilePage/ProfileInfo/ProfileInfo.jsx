import React from 'react';
import s from './ProfileInfo.module.css';

import { Link } from 'react-router-dom';
import profilePhoto from '../../../../asets/profilePhoto.jpeg'
import ProfileStatus from './ProfileStatus';
import { useEffect } from 'react';
import Preloader from '../../../comon/Preloader/Preloader';


const ProfileInfo = ({ profile, status, updateStatusProfile, isOwner, onChangePhoto, isLoading }) => {

    const contacts = Object.entries(profile.contacts)
        .filter(([name, url]) => url !== null)
        .map(([name, url]) => {
            return (
                <li key={url}>
                    <Link to={url}>{name}</Link>
                </li>

            )
        })
    const handelChange = (e) => onChangePhoto(e.target.files[0]);

    return (
        <div className={s.profileData}>
            <span>{profile.lookingForAJob ? 'in sarch' : null}</span>
            {isLoading ? <Preloader /> : <img src={profile.photos.large || profile.photos.small || profilePhoto} alt="" />}

            {isOwner && <input type="file" onChange={handelChange} />}
            <div className={s.name}>
                <h2>{profile.fullName}</h2>
                <p>{profile.aboutMe}</p>
            </div>
            <div className={s.skilz}>
                <h3>Contacts:</h3>
                <ul>
                    {contacts}
                </ul>
            </div>
            <div>
                <div>
                    <ProfileStatus userStatus={status} updateStatusProfile={updateStatusProfile} />
                </div>
            </div>
        </div>
    )


}

export default ProfileInfo