import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './Main.module.css';
import ProfilePageContainer from './ProfilePage/ProfilePageContainer';
import { connect } from 'react-redux';
const DialogPageContainer = React.lazy(() => import('./DialogsPage/DialogsPageContainer'));
const UsersPage = React.lazy(() => import('./UsersPage/UsersPage'));
const Login = React.lazy(() => import('../Login/Login'));



const Main = (props) => {
    return (
        <main className={s.main_wrap}>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes >
                    <Route path='/login' element={<Login />} />
                    <Route path='/profile/:userId' element={<ProfilePageContainer />} />
                    <Route path='/dialogs/*' element={<DialogPageContainer />} />
                    <Route path='/users' element={<UsersPage />} />
                    <Route path='/news' element={<div>news</div>} />
                    <Route path='/music' element={<div>music</div>} />
                    <Route path='/setting' element={<div>settings</div>} />
                </Routes>
            </Suspense>
        </main>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {})(Main);