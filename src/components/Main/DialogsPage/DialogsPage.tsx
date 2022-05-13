import React, { FC } from 'react'
import Messages from './Messages/Messages';


import s from './DialogsPage.module.css'
import { NavLink } from 'react-router-dom'
import { MessageType, UserDialogType } from '../../../types/dialogs/Dialogs';


type PropsType = {
    users: Array<UserDialogType>
    messages: Array<MessageType>
    defaultValue: string
    addMessage: () => void
    changeValue: (message: string) => void
}

const DialogsPage: FC<PropsType> = ({ users, messages, defaultValue, addMessage, changeValue }) => {
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
                    defaultValue={defaultValue}
                    messages={messages}
                    addMessage={addMessage}
                    changeValue={changeValue} />
            </div>
        </div>
    )
}

export default DialogsPage;