import React, { FC, useEffect } from "react";
import { connect } from "react-redux";
import { getUsers, setCurrunetPage, followUser, unFollowUser } from "../../../../redux/users-reduser";
import Preloader from "../../../comon/Preloader/Preloader";
import User from "./User";
import profilePhoto from '../../../../asets/profilePhoto.jpeg';
import { withAutnRedirect } from "../../../../hoc/withAutnRedirect";
import { compose } from "redux";
import { AppStateType } from "../../../../redux/store";
import { UserType } from "../../../../types/users/Users";


type MapStatePropsType = {
    users: UserType[]
    totalaUsersCount: number
    pageSize: number
    currentPage: number
    isFetching: boolean
    isFollowingUsersId: number[]
    isLogined: boolean
    portionSize: number
}
type MapDispatchPropsType = {
    getUsers: (currentPage: number, pageSize: number) => void
    setCurrunetPage: (p: number, pageSize: number) => void
    followUser: (id: number) => void
    unFollowUser: (id: number) => void
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const UserContainer: FC<PropsType> = (props) => {
    const { setCurrunetPage, currentPage, pageSize, getUsers } = props;
    useEffect(() => getUsers(currentPage, pageSize), [currentPage, pageSize, getUsers]);
    const setPage = (p: number) => setCurrunetPage(p, pageSize);


    return (
        <>
            {props.isFetching
                ? <Preloader />
                : <User {...props} profilePhoto={profilePhoto} setPage={setPage} />
            }
        </>
    )
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
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
export default compose<PropsType>(
    connect(mapStateToProps, { getUsers, setCurrunetPage, followUser, unFollowUser }),
    withAutnRedirect
)(UserContainer)

