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
                    return <span key={p} onClick={() => props.setPage(p)} className={props.currentPage === p ? s.selectedPAge : null}>
                        {p}
                    </span>
                })
            }

            {
                props.users.map(u => {
                    const photo = u.photos.large || u.photos.small ? u.photos.small || u.photos.large : props.profilePhoto;
                    return <div key={u.id} className={s.container}>
                        <div className={s.photo_btn} >
                            <NavLink to={`/profile/${u.id}`}>
                                <img width='100px' src={photo} alt="" />
                            </NavLink>

                            {
                                u.followed
                                    ? <button disabled={props.isFollowingUsersId.some(id => id === u.id)}
                                        onClick={() => props.unFollowUser(u.id)}>unFollow</button>
                                    : <button disabled={props.isFollowingUsersId.some(id => id === u.id)}
                                        onClick={() => props.followUser(u.id)}>Follow</button>
                            }

                        </div>
                        <div className={s.name_status}>
                            <h4>{u.name}</h4>
                            <p>{u.status ? u.status : 'Im not status'}</p>
                        </div>

                    </div>
                })
            }

        </div>
    );
}

export default User
