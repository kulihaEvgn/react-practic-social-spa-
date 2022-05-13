import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { PrtofileType } from '../../../../types/profile/Profile';
import s from './ProfileInfo.module.css';

type PropsType = {
    profile: PrtofileType
}

const ProfileDescription: FC<PropsType> = ({ profile }) => {
    const contacts = Object.entries(profile.contacts)
        .filter(([name, url]) => url !== null)
        .map(([name, url]) => {
            return (
                <li key={url}>
                    <Link to={String(url)}>{name}</Link>
                </li>

            )
        })
    return (
        <div>
            <span>{profile.lookingForAJob ? 'in searc' : null}</span>

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
        </div>
    )
}

export default ProfileDescription;