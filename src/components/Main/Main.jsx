import React from 'react';
import { Route, Routes } from 'react-router-dom';
import s from './Main.module.css';

import ProfilePage from './ProfilePage/ProfilePage';
import DialogPageContainer from './DialogsPage/DialogsPageContainer';
import UsersPage from './UsersPage/UsersPage';


const Main = () => {
    return (
        <main className={s.main_wrap}>
            <Routes>
                <Route path='/profile' element={<ProfilePage />} />
                <Route path='/dialogs/*' element={<DialogPageContainer />} />
                <Route path='/users' element={<UsersPage />} />
                <Route path='/news' element={<div>news</div>} />
                <Route path='/music' element={<div>music</div>} />
                <Route path='/setting' element={<div>settings</div>} />
            </Routes>
        </main>
    )
}

export default Main;