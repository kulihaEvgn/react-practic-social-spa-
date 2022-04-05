import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './User.module.css';

const User = (props) => {

    const pagesCount = Math.ceil(props.totalaUsersCount / props.pageSize);
    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    return (
        <div className={s.wrap}>
            {
                pages.map(p => {
                    return (
                        <span
                            key={p}
                            className={props.currentPage === p ? s.selectedPAge : null}
                            onClick={() => props.setPage(p)}>
                            {p}
                        </span>
                    )
                })
            }

            {
                props.users.map(u => {
                    const photo = u.photos.large || u.photos.small ? u.photos.small || u.photos.large : props.urlPhoto;
                    return (
                        <div key={u.id} className={s.container}>
                            <div className={s.photo_btn} >
                                <NavLink to='/profile'>
                                    <img width='100px' src={photo} alt="" />
                                </NavLink>
                                {
                                    u.followed
                                        ? <button onClick={() => props.unFollow(u.id)}>unFollow</button>
                                        : <button onClick={() => props.follow(u.id)}>Follow</button>
                                }
                            </div>
                            <div className={s.name_status}>
                                <h4>{u.name}</h4>
                                <p>{u.status ? u.status : 'Im not status'}</p>
                            </div>

                        </div>

                    )
                })
            }

        </div>
    );
}

export default User