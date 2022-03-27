import { connect } from "react-redux";
import { addMessageAC, changeTextMessageAC } from "../../../redux/dialogs-reduser";
import DialogsPage from "./DialogsPage";


const mapStateToProps = (state) => {

    return {
        users: state.dialogPage.dialogsUsers,
        messages: state.dialogPage.messages,
        defaultValue: state.dialogPage.defaultTextMessage
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        addMessage: () => dispatch(addMessageAC()),
        changeValue: (message) => dispatch(changeTextMessageAC(message))
    }
}
const DialogPageContainer = connect(mapStateToProps, mapDispatchToProps)(DialogsPage);
export default DialogPageContainer;