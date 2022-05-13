import React, { useState } from 'react'
import Preloader from '../../../comon/Preloader/Preloader';
import profilePhoto from '../../../../asets/profilePhoto.jpeg'
import s from './ProfileInfo.module.css'
import { PrtofileType } from '../../../../types/profile/Profile';

type PropsType = {
    profile: PrtofileType
    isOwner: boolean
    onChangePhoto: (file: string) => void
    isLoading: boolean
}

const ProfilePhoto = (props: PropsType) => {
    const { profile, isOwner, onChangePhoto, isLoading } = props;

    const [editMode, setEditMode] = useState(false);

    const handelChange = (e: any) => {
        onChangePhoto(e.target.files[0]);
        setEditMode(false)
    }


    return (
        <>
            {
                isLoading
                    ? <Preloader />
                    : <img src={profile.photos?.large || profile.photos?.small || profilePhoto} alt="" />
            }
            {
                isOwner
                    ? editMode
                        ? <input className={s.loadFile} type="file" onChange={handelChange} />
                        : <button className={s.edit_btn} onClick={() => setEditMode(true)}>Change Photo</button>
                    : null
            }
        </>

    )
}

export default ProfilePhoto