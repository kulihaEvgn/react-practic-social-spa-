import React, { useRef } from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';


const MyPosts = (props) => {
    const inputValue = useRef();

    const addPost = () => {
        props.addNewPost();
    }
    const changeValue = () => {
        const value = inputValue.current.value;
        props.updateValue(value)
    }

    return (
        <div>
            <form onSubmit={(e) => {
                e.preventDefault()
                addPost()
            }} className={s.form_posts} action="/">
                <input ref={inputValue} onChange={changeValue} value={props.defaultValue} />
                <button >Send</button>
            </form>
            <div className={s.posts}>
                {
                    props.posts.map(p => <Post key={p.id} name={props.name} text={p.text} date={p.date} photo={props.photo} />)
                }
            </div>
        </div>
    )
}

export default MyPosts