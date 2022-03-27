import React from 'react';
import s from './Post.module.css';


const Post = (props) => {
    return (
        <div className={s.post}>
            <img src="https://d2qp0siotla746.cloudfront.net/img/use-cases/profile-picture/template_3.jpg" alt="" />
            <div className={s.post_descr}>
                <div className={s.name}>{props.name}</div>
                <div className={s.text}>{props.text}</div>
                <span className={s.date}>{props.date}</span>
            </div>

        </div>
    )
}

export default Post;