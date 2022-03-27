import { connect } from "react-redux";
import Navbar from "./Navbar";

const mapStateToProps = (state) => {
    return {
        links: state.navbar.links
    }
}

const NavbarContainer = connect(mapStateToProps)(Navbar)

export default NavbarContainer;