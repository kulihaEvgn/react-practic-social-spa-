import React, { FC } from 'react'
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';

type PropsType = {
    userId: number | null
}

const Navbar: FC<PropsType> = ({ userId }) => {
    return (
        <nav className={s.navbar_wrap}>
            <NavLink className={({ isActive }) => isActive ? s.active : ''} to={`/profile/${userId}`}>Profile</NavLink>
            <NavLink className={({ isActive }) => isActive ? s.active : ''} to={`/dialogs`}>Massages</NavLink>
            <NavLink className={({ isActive }) => isActive ? s.active : ''} to={`/users`}>Users</NavLink>
            <NavLink className={({ isActive }) => isActive ? s.active : ''} to={`/music`}>Music</NavLink>
            <NavLink className={({ isActive }) => isActive ? s.active : ''} to={`/news`}>News</NavLink>
            <NavLink className={({ isActive }) => isActive ? s.active : ''} to={`/setting`}>Settings</NavLink>

        </nav>
    )
}
export default Navbar
