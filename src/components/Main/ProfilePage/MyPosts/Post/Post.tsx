import React, { FC } from 'react';
import s from './Post.module.css';
import profilePhoto from '../../../../../asets/profilePhoto.jpeg'

type PropsType = {
    photo: string
    name: string | null
    text: string
    date: string
}
const Post: FC<PropsType> = ({ photo, name, text, date }) => {
    return (
        <div className={s.post}>
            <img src={photo ? photo : profilePhoto} alt="" />
            <div className={s.post_descr}>
                <div className={s.name}>{name}</div>
                <div className={s.text}>{text}</div>
                <span className={s.date}>{date}</span>
            </div>

        </div>
    )
}

export default Post;