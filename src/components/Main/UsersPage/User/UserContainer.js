import { connect } from "react-redux";
import { followAC, setCurrentPageAC, setTotlaUsersCountAC, setUsersAC, unFollowAC } from "../../../../redux/users-reduser";

import User from "./User";

const mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalaUsersCount: state.usersPage.totalUserCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        follow: (id) => dispatch(followAC(id)),
        unFollow: (id) => dispatch(unFollowAC(id)),
        setUser: (users) => dispatch(setUsersAC(users)),
        setUsersCount: (usersNum) => dispatch(setTotlaUsersCountAC(usersNum)),
        setCurrentPage: (page) => dispatch(setCurrentPageAC(page))
    }
}
export const UserContainer = connect(mapStateToProps, mapDispatchToProps)(User);
