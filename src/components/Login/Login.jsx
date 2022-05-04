import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './Login.module.css'
import { connect } from 'react-redux';
import { logined, logInToMyProfile } from '../../redux/auth-reduser';
import { Navigate } from 'react-router-dom';
import Preloader from '../comon/Preloader/Preloader';




const Login = ({ logInToMyProfile, myId, isLogined }) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: false
        },
        validationSchema: Yup.object({
            email: Yup.string()
                .email('No correcct')
                .required('Поле должно быть заполненно'),
            password: Yup.string()
                .required('Поле должно быть заполненно'),
        }),
        onSubmit(values, { resetForm, setSubmitting, setStatus }) {
            logInToMyProfile({ ...values }, setStatus)
            setSubmitting(false);
            resetForm();

        },

    })
    if (isLogined) {
        return myId
            ? <Navigate to={`/profile/${myId}`} />
            : <Preloader />
    }
    return (
        <div className={s.container}>

            <h1 className={s.title}>LogIn</h1>
            <form className={s.form} onSubmit={formik.handleSubmit} >
                <div className={s.inputs_wrap}>

                    <label htmlFor="email">Email</label>
                    {formik.touched.email && formik.errors.email && <p className={s.error}>{formik.errors.email}</p>}
                    <input
                        className={s.email} type="email" name='email' placeholder='email'
                        {...formik.getFieldProps('email')} />


                    <label htmlFor="password">Password</label>
                    {formik.touched.password && formik.errors.password && <p className={s.error}>{formik.errors.password}</p>}
                    <input className={s.password} type="password" name='password' placeholder='password' {...formik.getFieldProps("password")} />

                    <div>
                        <input type="checkbox" name='rememberMe'{...formik.getFieldProps("rememberMe")} />
                        <label htmlFor="rememberMe">rememberMe</label>

                    </div>
                    <div>
                        <input type="checkbox" name='captcha'{...formik.getFieldProps("captcha")} />
                        <label htmlFor="captcha">You not Robot</label>
                    </div>
                </div>
                {formik.status ? <p>{formik.status}</p> : null}
                <button disabled={!formik.isValid || formik.isSubmitting} className={s.btn} type='submit'>submit</button>
            </form>
        </div>

    )
}

const mapStateToProps = (state) => {
    return {
        isLogined: state.auth.isLogined,
        myId: state.auth.id,
        errorMessage: state.auth.errorMessage
    }
}
export default connect(mapStateToProps, { logined, logInToMyProfile })(Login)

