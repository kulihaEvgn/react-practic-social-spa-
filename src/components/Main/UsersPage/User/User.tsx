import React, { FC, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { UserType } from '../../../../types/users/Users';
import s from './User.module.css';

type PropsType = {
    pageSize: number
    currentPage: number
    totalaUsersCount: number
    setPage: (p: number) => void
    users: UserType[]
    profilePhoto: string
    isFollowingUsersId: number[]
    unFollowUser: (id: number) => void
    followUser: (id: number) => void
    portionSize: number
}

const User: FC<PropsType> = ({ pageSize, currentPage, totalaUsersCount, setPage, users, profilePhoto, isFollowingUsersId, unFollowUser, followUser, portionSize }) => {

    const pagesCount = Math.ceil(totalaUsersCount / pageSize);

    const pages = [];
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const [portionNumber, setPortionNumber] = useState(1);

    const portionCount = Math.ceil(pagesCount / portionSize);
    const leftPositionPageNumber = (portionNumber - 1) * portionNumber + 1;
    const rightPortionNumber = portionNumber * portionSize;

    return (
        <div className={s.wrap}>
            {
                portionNumber > 1
                && <button onClick={() => setPortionNumber(portionNumber - 1)}>Prev</button>
            }
            {
                pages
                    .filter(p => p >= leftPositionPageNumber && p <= rightPortionNumber)
                    .map(p => {
                        return <span key={p} onClick={() => setPage(p)} className={currentPage === p ? s.selectedPAge : null}>
                            {p}
                        </span>
                    })
            }
            {
                portionCount > portionNumber
                && <button onClick={() => setPortionNumber(portionNumber + 1)}>Next</button>
            }

            {
                users.map(u => {
                    const photo = u.photos.large || u.photos.small ? u.photos.small || u.photos.large : profilePhoto;
                    return <div key={u.id} className={s.container}>
                        <div className={s.photo_btn} >
                            <NavLink to={`/profile/${u.id}`}>
                                <img width='100px' src={String(photo)} alt="" />
                            </NavLink>

                            {
                                u.followed
                                    ? <button disabled={isFollowingUsersId.some(id => id === u.id)}
                                        onClick={() => unFollowUser(u.id)}>unFollow</button>
                                    : <button disabled={isFollowingUsersId.some(id => id === u.id)}
                                        onClick={() => followUser(u.id)}>Follow</button>
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

export default User;
