import React from 'react'
import { NavLink } from 'react-router-dom';
import s from './Navbar.module.css';


const Navbar = (props) => {
    return (
        <nav className={s.navbar_wrap}>
            {
                props.links.map(link => {
                    return <NavLink
                        className={(navbar) => navbar.isActive ? s.active : null}
                        key={link.id}
                        to={link.url}
                    >
                        {link.name}
                    </NavLink>
                })
            }
        </nav>
    )
}
export default Navbar