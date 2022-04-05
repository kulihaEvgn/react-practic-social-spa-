import { createStore, combineReducers } from "redux";
import { dialogsReduser } from "./dialogs-reduser";
import { navbarReduser } from "./navbar-reduser";
import { profileReduser } from "./profile-reduser";
import { usersReduser } from "./users-reduser";

const redusers = combineReducers({
    navbar: navbarReduser,
    profilePage: profileReduser,
    dialogPage: dialogsReduser,
    usersPage: usersReduser,
})

export const store = createStore(redusers);
window.store = store;