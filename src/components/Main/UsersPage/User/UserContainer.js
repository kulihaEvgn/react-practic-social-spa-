import axios from "axios";
import React from "react";
import { connect } from "react-redux";
import { follow, setCurrentPage, setTotlaUsersCount, setUsers, toggleIsFetching, unFollow } from "../../../../redux/users-reduser";
import Preloader from "../../../comon/Preloader/Preloader";
import User from "./User";
import profilePhoto from '../../../../asets/profilePhoto.jpeg'


class UserApi extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.toggleIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.toggleIsFetching(false)
                this.props.setUsers(res.data.items)

            })
    }

    setPage = (p) => {
        this.props.setCurrentPage(p);
        this.props.toggleIsFetching(true);

        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${p}&count=${this.props.pageSize}`)
            .then(res => {
                this.props.setUsers(res.data.items)
                this.props.toggleIsFetching(false)
            })
    }

    render() {
        return (
            <>
                {this.props.isFetching
                    ? <Preloader />
                    : <User
                        totalaUsersCount={this.props.totalaUsersCount}
                        setPage={this.setPage}
                        urlPhoto={profilePhoto}
                        pageSize={this.props.pageSize}
                        currentPage={this.props.currentPage}
                        users={this.props.users}
                        follow={this.props.follow}
                        unFollow={this.props.unFollow} />
                }


            </>
        )


    }
}

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalaUsersCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isFetching: state.usersPage.isFetching
    }
}

export const UserContainer = connect(mapStateToProps,
    {
        follow, unFollow, setUsers,
        setCurrentPage, toggleIsFetching
    }
)(UserApi);
