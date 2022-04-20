import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
    return {
        userId: state.auth.id
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer;