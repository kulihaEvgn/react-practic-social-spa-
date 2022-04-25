import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import ava from '../../asets/profilePhoto.jpeg'

const Header = (props) => {
    const { myId, login, isLogined, logOutMyProfile } = props;
    return (
        <header className={s.header_wrap}>
            <div>LogoTipe</div>
            <div>
                {
                    isLogined
                        ? (
                            <>
                                <div style={{ display: 'flex' }}>
                                    <button onClick={() => logOutMyProfile()} >logOut</button>
                                    <NavLink to={`profile/${myId}`} style={{ display: 'flex', }}>
                                        <img style={{
                                            width: '30px',
                                            marginRight: '10px',
                                            marginLeft: '10px',
                                            borderRadius: '50%',
                                        }} src={ava} alt="" />
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

export default Header