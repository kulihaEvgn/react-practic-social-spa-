import { useFormik } from 'formik'
import React, { FC } from 'react'
import { MessageType } from '../../../../types/dialogs/Dialogs'
import Message from './Message/Message'
import s from './Messages.module.css'

type PropsType = {
    changeValue: (value: string) => void
    addMessage: () => void
    messages: Array<MessageType>
    defaultValue: string
}

const Messages: FC<PropsType> = ({ changeValue, addMessage, messages, defaultValue }) => {

    const formik = useFormik({
        initialValues: {
            message: defaultValue
        },
        onSubmit() {
            changeValue(formik.values.message);
            addMessage()
        }
    })

    return (
        <div className={s.container}>

            <div className={s.messages_wrap}>
                <ul className={s.messages}>
                    {
                        messages.map(m => {
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

            <form onSubmit={formik.handleSubmit} className={s.message_form}>
                <input id='message' {...formik.getFieldProps('message')} />
                <button type='submit'>send</button>
            </form>

        </div>
    )
}

export default Messages;