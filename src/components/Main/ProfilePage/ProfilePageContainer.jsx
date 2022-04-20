import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getProfile, setStatusProfile, updateStatusProfile } from '../../../redux/profile-reduser';
import ProfilePage from './ProfilePage';
import { useParams } from "react-router-dom";
import { withAutnRedirect } from '../../../hoc/withAutnRedirect';
import { compose } from 'redux';


const ProfilePageContainer = (props) => {
    const { profile, getProfile, setStatusProfile, status, updateStatusProfile } = props;
    const { userId } = useParams();

    useEffect(() => getProfile(userId), [getProfile, userId]);
    useEffect(() => setStatusProfile(userId), [userId]);

    return (
        <ProfilePage {...props} profile={profile} status={status} updateStatusProfile={updateStatusProfile} />
    );

}

const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile,
        isLogined: state.auth.isLogined,
        status: state.profilePage.userStatus
    }

}
export default compose(
    connect(mapStateToProps, { getProfile, setStatusProfile, updateStatusProfile }),
    // withAutnRedirect 
)(ProfilePageContainer)
