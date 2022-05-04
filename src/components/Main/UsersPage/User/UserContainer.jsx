import React, { useEffect } from "react";
import { connect } from "react-redux";
import { getUsers, setCurrunetPage, followUser, unFollowUser } from "../../../../redux/users-reduser";
import Preloader from "../../../comon/Preloader/Preloader";
import User from "./User";
import profilePhoto from '../../../../asets/profilePhoto.jpeg';
import { withAutnRedirect } from "../../../../hoc/withAutnRedirect";
import { compose } from "redux";



const UserContainer = (props) => {
    const { setCurrunetPage, currentPage, pageSize, getUsers } = props;
    useEffect(() => getUsers(currentPage, pageSize), [currentPage, pageSize, getUsers]);
    const setPage = (p) => setCurrunetPage(p, pageSize);


    return (
        <>
            {props.isFetching
                ? <Preloader />
                : <User {...props} profilePhoto={profilePhoto} setPage={setPage} />
            }
        </>
    )
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalaUsersCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching,
        isFollowingUsersId: state.usersPage.isFollowingUsersId,
        isLogined: state.auth.isLogined,
        portionSize: state.usersPage.portionSize
    }
}
export default compose(
    connect(mapStateToProps, { getUsers, setCurrunetPage, followUser, unFollowUser }),
    withAutnRedirect
)(UserContainer)

