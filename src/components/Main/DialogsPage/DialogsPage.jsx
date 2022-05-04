import React from 'react'
import Messages from './Messages/Messages';


import s from './DialogsPage.module.css'
import { NavLink } from 'react-router-dom'
import Preloader from "../../comon/Preloader/Preloader"

const DialogsPage = ({ users, messages, defaultValue, addMessage, changeValue, isLogined }) => {
    // if (!isLogined) return <Preloader />
    return (
        <div className={s.container}>
            <div className={s.dialogs_range}>
                <ul className={s.users}>
                    {
                        users.map(u => {
                            return (
                                <li key={u.id}>
                                    <img src={u.photo} alt="" />
                                    <NavLink
                                        className={(nav) => nav.isActive ? s.active : null}
                                        to={'dialogs/' + u.id}>
                                        {u.name}
                                    </NavLink>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
            <div className={s.message_range}>
                <Messages
                    messages={messages}
                    defaultValue={defaultValue}
                    addMessage={addMessage}
                    changeValue={changeValue} />
            </div>
        </div>
    )
}

export default DialogsPage;