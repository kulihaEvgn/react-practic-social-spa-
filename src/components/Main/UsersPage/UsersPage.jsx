import React from 'react';
import UserContainer from './User/UserContainer';
import s from './UsersPage.module.css';


const UsersPage = (props) => {
    return (
        <div className={s.container}>
            <UserContainer />
        </div>
    );
}

export default UsersPage;