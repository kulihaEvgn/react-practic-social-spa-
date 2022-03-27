import React from 'react'
import Message from './Message/Message'
import s from './Messages.module.css'

const Messages = (props) => {
    return (
        <div className={s.container}>

            <div className={s.messages_wrap}>
                <ul className={s.messages}>
                    {
                        props.messages.map(m => {
                            const clas = m.me ? s.left : s.rigth;
                            return (
                                <li key={m.id} className={clas}>
                                    <Message

                                        name={m.name}
                                        message={m.message}
                                        photo={m.avatarUrl} />
                                </li>
                            )
                        })
                    }

                </ul>
            </div>

            <div className={s.input_wrap}>
                <form action="/" className={s.message_form}>
                    <input value={props.defaultValue} type="text" />
                    <button>send</button>
                </form>
            </div>

        </div>
    )
}

export default Messages;