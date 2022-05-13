import { FC } from "react";
import { connect } from "react-redux"
import { addPostAC, changePostTextAC } from "../../../../redux/profile-reduser";
import { AppStateType } from "../../../../redux/store";
import { PostTypes } from "../../../../types/profile/Profile";
import MyPosts from "./MyPosts"

type MapStatePropsType = {
    posts: PostTypes[]
    defaultValue: string
    name: string | null,
    photo: any,
}
type MapDispatchPropsType = {
    addNewPost: () => void,
    updateValue: (value: string) => void
}
type OwnPropsType = {}
type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const MyPostsContainer: FC<PropsType> = ({ updateValue, addNewPost, posts, photo, name }) => {
    return <MyPosts updateValue={updateValue}
        addNewPost={addNewPost}
        posts={posts}
        photo={photo}
        name={name} />
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        posts: state.profilePage.posts,
        defaultValue: state.profilePage.defaultPostText,
        name: state.profilePage.profile.fullName,
        photo: state.profilePage.profile.photos?.large
    }
}
const mapDispatchToProps = (dispatch: any): MapDispatchPropsType => {
    return {
        addNewPost: () => dispatch(addPostAC()),
        updateValue: (value) => dispatch(changePostTextAC(value))
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(MyPostsContainer);