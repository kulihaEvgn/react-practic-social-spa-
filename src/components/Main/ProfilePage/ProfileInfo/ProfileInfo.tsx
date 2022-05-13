import React from 'react';
import s from './ProfileInfo.module.css';
import ProfileStatus from './ProfileStatus';
import ProfilePhoto from './ProfilePhoto';
import ProfileDescription from './ProfileDescription';
import { PrtofileType } from '../../../../types/profile/Profile';

interface PropsType {
    profile: PrtofileType
    status: string
    updateStatusProfile: (status: string) => void
    isOwner: boolean
    isLoading: boolean
    onChangePhoto: (file: string) => void
}
const ProfileInfo = (props: PropsType) => {
    const { profile, status, updateStatusProfile, isOwner, isLoading, onChangePhoto } = props;

    return (
        <div className={s.profileData}>
            <ProfilePhoto profile={profile} isOwner={isOwner} onChangePhoto={onChangePhoto} isLoading={isLoading} />
            <ProfileDescription profile={profile} />
            <ProfileStatus isOwner={isOwner} userStatus={status} updateStatusProfile={updateStatusProfile} />
        </div>
    )

}

export default ProfileInfo