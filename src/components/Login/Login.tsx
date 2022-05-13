import React, { FC } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import s from './Login.module.css'
import { connect } from 'react-redux';
import { logInToMyProfile } from '../../redux/auth-reduser';
import { Navigate } from 'react-router-dom';
import Preloader from '../comon/Preloader/Preloader';
import { AppStateType } from '../../redux/store';

type ProfileDataType = {
    email: string;
    password: string;
    rememberMe: boolean;
    captcha: string;
}
type MapStatePropsType = {
    isLogined: boolean
    myId: number | null
    captcha: string | null
}
type MapDispatchPropsType = {
    logInToMyProfile: (values: ProfileDataType, setStatus: (status: string) => void) => void
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const Login: FC<PropsType> = ({ logInToMyProfile, myId, isLogined, captcha }) => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            rememberMe: false,
            captcha: ''
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
                        className={s.email} type="email" id='email' placeholder='email'
                        {...formik.getFieldProps('email')} />


                    <label htmlFor="password">Password</label>
                    {formik.touched.password && formik.errors.password && <p className={s.error}>{formik.errors.password}</p>}
                    <input className={s.password} type="password" id='password' placeholder='password' {...formik.getFieldProps("password")} />

                    <div>
                        <input type="checkbox" id='rememberMe'{...formik.getFieldProps("rememberMe")} />
                        <label htmlFor="rememberMe">rememberMe</label>

                    </div>
                    <div>
                        {captcha &&
                            <div>
                                <img className={s.captcha} src={captcha} alt='captcha' />
                                <div>
                                    <label htmlFor="captcha">Введите каптчу</label> <br />
                                    <input className={s.captcha_inp} type="text" id='captcha' {...formik.getFieldProps('captcha')} />
                                    {formik.touched.captcha && formik.errors.captcha && <p className={s.error}>{formik.errors.captcha}</p>}
                                </div>

                            </div>

                        }
                    </div>
                </div>
                {formik.status ? <p>{formik.status}</p> : null}
                <button disabled={!formik.isValid || formik.isSubmitting} className={s.btn} type='submit'>submit</button>
            </form>
        </div>

    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        isLogined: state.auth.isLogined,
        myId: state.auth.id,
        captcha: state.auth.captcha
    }
}
export default connect<MapStatePropsType, MapDispatchPropsType, OwnPropsType, AppStateType>(mapStateToProps, { logInToMyProfile })(Login)

