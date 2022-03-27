import { connect } from "react-redux";
import DialogsPage from "./DialogsPage";


const mapStateToProps = (state) => {

    return {
        users: state.dialogPage.dialogsUsers,
        messages: state.dialogPage.messages,
        defaultValue: state.dialogPage.defaultTextMessage
    }
}
const DialogPageContainer = connect(mapStateToProps)(DialogsPage);
export default DialogPageContainer;