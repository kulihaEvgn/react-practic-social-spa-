import React, { FC } from 'react'
import s from './Message.module.css'

type PropsType = {
    photo: string
    name: string
    message: string
}

const Message: FC<PropsType> = ({ photo, name, message }) => {
    return (

        <div className={s.container} >
            <img src={photo} alt="" />
            <div className={s.message_blok}>
                <div className={s.name_text}>
                    <span>{name}</span>
                    <span>{message}</span>
                </div>
            </div>
        </div>

    )
}

export default Message