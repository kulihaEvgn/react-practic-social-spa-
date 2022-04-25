import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import Header from './Header'
import { logined, authentication, logOutMyProfile } from '../../redux/auth-reduser';


const HeaderContainer = (props) => {

    const { authentication } = props;
    useEffect(() => authentication(), [authentication])

    return <Header {...props} />
}
const mapStateToProps = (state) => {
    return {
        myId: state.auth.id,
        isLogined: state.auth.isLogined,
    }
}

export default connect(mapStateToProps, { logined, authentication, logOutMyProfile })(HeaderContainer)