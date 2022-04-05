import React from 'react';
import s from './Post.module.css';
import profilePhoto from '../../../../../asets/profilePhoto.jpeg'


const Post = (props) => {
    return (
        <div className={s.post}>
            <img src={props.photo ? props.photo : profilePhoto} alt="" />
            <div className={s.post_descr}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.text}</div>
                <span className={s.date}>{props.date}</span>
            </div>

        </div>
    )
}

export default Post;