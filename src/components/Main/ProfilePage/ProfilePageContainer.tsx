import React, { FC, useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile, setStatusProfile, updateStatusProfile, savePhoto } from '../../../redux/profile-reduser'
import ProfilePage from './ProfilePage';
import { useParams } from "react-router-dom";
import { withAutnRedirect } from '../../../hoc/withAutnRedirect';
import { compose } from 'redux';
import { AppStateType } from '../../../redux/store';
import { OnChangePhoto, PrtofileType } from '../../../types/profile/Profile';

type MapStatePropsType = {
    profile: PrtofileType
    isLogined: boolean
    status: string
    myId: number | null
    isLoading: boolean
}
type MapDispatchPropsType = {
    getProfile: (userId: number) => void
    setStatusProfile: (userId: number) => void
    updateStatusProfile: (status: string) => void
    savePhoto: (photo: string) => void
}

type OwnPropsType = {

}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const ProfilePageContainer: FC<PropsType> = (props) => {
    const {
        profile, getProfile, setStatusProfile,
        status, updateStatusProfile, myId,
        savePhoto, isLoading
    } = props;

    const params = useParams()
    const userId = Number(params.userId)

    useEffect(() => getProfile(userId), [getProfile, userId]);
    useEffect(() => setStatusProfile(userId), [setStatusProfile, userId]);


    const onChangePhoto: OnChangePhoto = (photo) => savePhoto(photo);

    return (
        <ProfilePage
            isLoading={isLoading}
            onChangePhoto={onChangePhoto}
            isOwner={myId === userId}
            profile={profile}
            status={status}
            updateStatusProfile={updateStatusProfile}
        />
    );
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        profile: state.profilePage.profile,
        isLogined: state.auth.isLogined,
        status: state.profilePage.userStatus,
        myId: state.auth.id,
        isLoading: state.profilePage.isLoading
    }

}
export default compose<PropsType>(
    connect(mapStateToProps, { getProfile, setStatusProfile, updateStatusProfile, savePhoto }),
    withAutnRedirect
)(ProfilePageContainer)
