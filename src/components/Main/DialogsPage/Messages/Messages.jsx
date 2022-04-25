import { useFormik } from 'formik'
import React from 'react'
import Message from './Message/Message'
import s from './Messages.module.css'

const Messages = (props) => {

    const formik = useFormik({
        initialValues: {
            message: ''
        },
        onSubmit() {
            props.changeValue(formik.values.message);
            props.addMessage()
        }
    })

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

            <form onSubmit={formik.handleSubmit} className={s.message_form}>
                <input name='message' {...formik.getFieldProps('message')} />
                <button type='submit'>send</button>
            </form>

        </div>
    )
}

export default Messages;