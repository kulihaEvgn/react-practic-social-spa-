import React, { useRef } from 'react';
import Post from '../Post/Post';
import s from './MyPosts.module.css';


const MyPosts = (props) => {
    const textareaValue = useRef();

    const addPost = () => {
        props.addNewPost();
    }
    const changeValue = () => {
        const value = textareaValue.current.value;
        props.updateValue(value)
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                addPost()
            }} className={s.form_posts} action="/">
                <input ref={textareaValue} onChange={changeValue} value={props.defaultValue} />
                <button >Send</button>
            </form>
            <div className={s.posts}>
                {
                    props.posts.map(p => <Post key={p.id} name={p.name} text={p.text} date={p.date} />)
                }
            </div>
        </div>
    )
}

export default MyPosts