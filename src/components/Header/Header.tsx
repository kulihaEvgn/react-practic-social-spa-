import React, { FC, useEffect } from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import { authentication, logOutMyProfile } from '../../redux/auth-reduser';
import { AppStateType } from '../../redux/store';
import { connect } from 'react-redux';

type MapStateType = {
    myId: number | null
    isLogined: boolean
}
type MapDispatchType = {
    logOutMyProfile: () => void
    authentication: () => void
}
type OwnPropsType = { login: string }
type PropsType = MapDispatchType & MapStateType & OwnPropsType




const Header: FC<PropsType> = (props) => {
    const { myId, isLogined, logOutMyProfile, authentication } = props;

    useEffect(() => authentication(), [authentication]);

    return (
        <header className={s.header_wrap}>
            <div>LogoTipe</div>
            <div>
                {isLogined ?
                    (
                        <div className={s.container}>
                            <button onClick={() => logOutMyProfile()} >logOut</button>
                            <NavLink className={s.link_login} to={`profile/${myId}`} />
                        </div>
                    )
                    : <NavLink to={'/login'}>LogIn</NavLink>
                }
            </div>
        </header>
    )
}

const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        myId: state.auth.id,
        isLogined: state.auth.isLogined,
    }
}


export default connect<MapStateType, MapDispatchType, OwnPropsType, AppStateType>(mapStateToProps, { authentication, logOutMyProfile })(Header)