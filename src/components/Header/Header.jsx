import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import ava from '../../asets/profilePhoto.jpeg'
import { logined, authentication, logOutMyProfile } from '../../redux/auth-reduser';
import { connect } from 'react-redux';


const Header = (props) => {
    const { myId, login, isLogined, logOutMyProfile, authentication, photo } = props;
    // console.log(photo);
    useEffect(() => authentication(), [authentication]);

    return (
        <header className={s.header_wrap}>
            <div>LogoTipe</div>
            <div>
                {
                    isLogined
                        ? (
                            <>
                                <div className={s.container}>
                                    <button onClick={() => logOutMyProfile()} >logOut</button>
                                    <NavLink to={`profile/${myId}`} style={{ display: 'flex', }}>
                                        <img className={s.header_img} src={photo} alt="" />
                                        {login}
                                    </NavLink>
                                </div>
                            </>
                        )
                        : <NavLink to={'/login'}>LogIn</NavLink>
                }
            </div>
        </header>
    )
}

const mapStateToProps = (state) => {
    return {
        myId: state.auth.id,
        isLogined: state.auth.isLogined,
        photo: state.profilePage.profile.photos.large
    }
}

export default connect(mapStateToProps, { logined, authentication, logOutMyProfile })(Header)