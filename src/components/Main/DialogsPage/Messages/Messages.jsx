import React, { useRef } from 'react'
import Message from './Message/Message'
import s from './Messages.module.css'

const Messages = (props) => {

    const inputRef = useRef()
    const addNewMessage = (e) => {
        e.preventDefault();
        props.addMessage()
    }
    const updateValue = () => {
        const value = inputRef.current.value;
        props.changeValue(value);
    }

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

            <form onSubmit={addNewMessage} action="/" className={s.message_form}>
                <input
                    onChange={updateValue}
                    value={props.defaultValue}
                    ref={inputRef} />
                <button>send</button>
            </form>

        </div>
    )
}

export default Messages;