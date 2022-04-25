import React from 'react';
import Post from './Post/Post';
import s from './MyPosts.module.css';
import { useFormik } from 'formik';


const MyPosts = (props) => {
    const formik = useFormik({
        initialValues: {
            post: ''
        },
        onSubmit() {
            props.updateValue(formik.values.post)
            props.addNewPost();
        }
    })


    return (
        <div>
            <form onSubmit={formik.handleSubmit} className={s.form_posts} >
                <input name='post' {...formik.getFieldProps('post')} />
                <button type='submit'>Send</button>
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