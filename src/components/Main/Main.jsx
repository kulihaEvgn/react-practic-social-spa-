import React from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './Main.module.css';

import DialogPageContainer from './DialogsPage/DialogsPageContainer';
import UsersPage from './UsersPage/UsersPage';
import ProfilePageContainer from './ProfilePage/ProfilePageContainer';
import { connect } from 'react-redux';
import Login from '../Login/Login';


const Main = (props) => {
    return (
        <main className={s.main_wrap}>
            <Routes>
                <Route path='/login' element={<Login />} />
                <Route path='/profile/:userId' element={<ProfilePageContainer />} />
                <Route path='/dialogs/*' element={<DialogPageContainer />} />
                <Route path='/users' element={<UsersPage />} />
                <Route path='/news' element={<div>news</div>} />
                <Route path='/music' element={<div>music</div>} />
                <Route path='/setting' element={<div>settings</div>} />
            </Routes>
        </main>
    )
}
const mapStateToProps = (state) => {
    return {

    }
}

export default connect(mapStateToProps, {})(Main);