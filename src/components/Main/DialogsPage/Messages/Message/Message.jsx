import React from 'react'
import s from './Message.module.css'

const Message = ({ photo, name, message }) => {
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