import { createStore, combineReducers } from "redux";
import { dialogsReduser } from "./dialogs-reduser";
import { navbarReduser } from "./navbar-reduser";
import { profileReduser } from "./profile-reduser";

const redusers = combineReducers({
    navbar: navbarReduser,
    profilePage: profileReduser,
    dialogPage: dialogsReduser,
})

export const store = createStore(redusers);