import { connect } from "react-redux";
import { compose } from "redux";
import { withAutnRedirect } from "../../../hoc/withAutnRedirect";
import { addMessageAC, changeTextMessageAC } from "../../../redux/dialogs-reduser";
import DialogsPage from "./DialogsPage";
import { FC } from "react";
import { AppStateType } from "../../../redux/store";
import { MessageType, UserDialogType } from "../../../types/dialogs/Dialogs";

type MapStatePropsType = {
    users: Array<UserDialogType>
    messages: MessageType[]
    defaultValue: string
    isLogined: boolean
}
type MapDispatchPropsType = {
    addMessage: () => void
    changeValue: (message: string) => void
}
type OwnPropsType = {}

type PropsType = MapStatePropsType & MapDispatchPropsType & OwnPropsType;

const DialogPageContainer: FC<PropsType> = (props) => {
    return <DialogsPage {...props} />
}


const mapStateToProps = (state: AppStateType): MapStatePropsType => {
    return {
        users: state.dialogPage.dialogsUsers,
        messages: state.dialogPage.messages,
        defaultValue: state.dialogPage.defaultTextMessage,
        isLogined: state.auth.isLogined
    }
}
const mapDispatchToProps = (dispatch: any): MapDispatchPropsType => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        changeValue: (message) => dispatch(changeTextMessageAC(message))
    }
}
export default compose<PropsType>(

    connect
        (mapStateToProps, mapDispatchToProps),
    withAutnRedirect,

)(DialogPageContainer)

