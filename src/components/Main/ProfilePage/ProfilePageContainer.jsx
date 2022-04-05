import axios from 'axios';
import React from 'react';
import { connect } from 'react-redux';
import { setProfile } from '../../../redux/profile-reduser';
import ProfilePage from './ProfilePage';


class ProfilePageContainer extends React.Component {

    componentDidMount() {
        axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
            .then(res => this.props.setProfile(res.data))

    }
    render() {
        return (
            <ProfilePage {...this.props} profile={this.props.profile} />
        );
    }
}
const mapStateToProps = (state) => {
    return {
        profile: state.profilePage.profile
    }

}
export default connect(mapStateToProps, { setProfile })(ProfilePageContainer);