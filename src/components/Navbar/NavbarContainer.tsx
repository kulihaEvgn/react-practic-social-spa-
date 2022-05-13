import { FC } from "react";
import { connect } from "react-redux";
import { AppStateType } from "../../redux/store";
import Navbar from "./Navbar";

type MapStateType = {
    userId: number | null
}


const mapStateToProps = (state: AppStateType): MapStateType => {
    return {
        userId: state.auth.id
    }
}

const NavbarContainer: FC = connect(mapStateToProps)(Navbar)

export default NavbarContainer;