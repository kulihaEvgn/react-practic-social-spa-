import React from 'react';
import s from './ProfileInfo.module.css';

import { Link } from 'react-router-dom';
import profilePhoto from '../../../../asets/profilePhoto.jpeg'
import ProfileStatus from './ProfileStatus';


const ProfileInfo = (props) => {

    const contacts = Object.entries(props.profile.contacts)
        .filter(([name, url]) => url !== null)
        .map(([name, url]) => {
            return (
                <li key={url}>
                    <Link to={url}>{name}</Link>
                </li>

            )
        })

    return (
        <div className={s.profileData}>
            <span>{props.profile.lookingForAJob ? 'in sarch' : null}</span>
            <img src={props.profile.photos.large ? props.profile.photos.large : profilePhoto} alt="" />

            <div className={s.name}>
                <h2>{props.profile.fullName}</h2>
                <p>{props.profile.aboutMe}</p>
            </div>
            <div className={s.skilz}>
                <h3>Contacts:</h3>
                <ul>
                    {contacts}
                </ul>
            </div>
            <div>
                <div>
                    <ProfileStatus status={props.status} updateStatusProfile={props.updateStatusProfile} />
                </div>
            </div>
        </div>
    )


}

export default ProfileInfo