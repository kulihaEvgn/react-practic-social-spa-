import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import ava from '../../asets/profilePhoto.jpeg'

const Header = (props) => {
    const { myId, login, isLogined, logined } = props;
    return (
        <header className={s.header_wrap}>
            <div>LogoTipe</div>
            <div>
                {
                    isLogined
                        ? (
                            <>
                                <div style={{ display: 'flex' }}>
                                    <button onClick={() => logined(false)}>logOut</button>
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
                        : <button onClick={() => logined(true)}>LogIn</button>
                }
            </div>

        </header>
    )
}

export default Header