import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getProfile, setStatusProfile, updateStatusProfile, savePhoto } from '../../../redux/profile-reduser';
import ProfilePage from './ProfilePage';
import { useParams } from "react-router-dom";
import { withAutnRedirect } from '../../../hoc/withAutnRedirect';
import { compose } from 'redux';


const ProfilePageContainer = (props) => {
    const { profile, getProfile, setStatusProfile, status, updateStatusProfile, myId, savePhoto, isLoading } = props;
    const { userId } = useParams();

    useEffect(() => getProfile(userId), [getProfile, userId]);
    useEffect(() => setStatusProfile(userId), [setStatusProfile, userId]);
    const onChangePhoto = (photo) => {
        savePhoto(photo)
    }
    return (
        <ProfilePage
            isLoading={isLoading}
            onChangePhoto={onChangePhoto}
            isOwner={myId == userId}
            {...props} profile={profile}
            status={status} updateStatusProfile={updateStatusProfile}
        />
    );
}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isLogined: state.auth.isLogined,
        status: state.profilePage.userStatus,
        myId: state.auth.id,
        isLoading: state.profilePage.isLoading
    }

}
export default compose(
    connect(mapStateToProps, { getProfile, setStatusProfile, updateStatusProfile, savePhoto }),
    withAutnRedirect
)(ProfilePageContainer)
