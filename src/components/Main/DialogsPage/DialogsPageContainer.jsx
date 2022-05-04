import { connect } from "react-redux";
import { compose } from "redux";
import { withAutnRedirect } from "../../../hoc/withAutnRedirect";
import { addMessageAC, changeTextMessageAC } from "../../../redux/dialogs-reduser";
import DialogsPage from "./DialogsPage";


const DialogPageContainer = (props) => {
    return <DialogsPage {...props} />
}


const mapStateToProps = (state) => {

    return {
        users: state.dialogPage.dialogsUsers,
        messages: state.dialogPage.messages,
        defaultValue: state.dialogPage.defaultTextMessage,
        isLogined: state.auth.isLogined
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        changeValue: (message) => dispatch(changeTextMessageAC(message))
    }
}
export default compose(

    connect(mapStateToProps, mapDispatchToProps),
    withAutnRedirect,

)(DialogPageContainer)

