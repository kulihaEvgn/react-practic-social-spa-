import { connect } from "react-redux"
import { addPostAC, changePostTextAC } from "../../../../redux/profile-reduser";
import MyPosts from "./MyPosts"

const mapStateToProps = (state) => {

    return {
        posts: state.profilePage.posts,
        defaultValue: state.profilePage.defaultPostText
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addNewPost: () => dispatch(addPostAC()),
        updateValue: (value) => dispatch(changePostTextAC(value))
    }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;