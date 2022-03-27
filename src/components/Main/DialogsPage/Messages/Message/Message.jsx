import React from 'react'
import s from './Message.module.css'

const Message = (props) => {
    return (

        <div className={s.container} >
            <img src={props.photo} alt="" />
            <div className={s.message_blok}>
                <div className={s.name_text}>
                    <span>{props.name}</span>
                    <span>{props.message}</span>
                </div>
            </div>
        </div>

    )
}

export default Message