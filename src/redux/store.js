import { createStore, combineReducers } from "redux";
import { navbarReduser } from "./navbar-reduser";
import { profileReduser } from "./profile-reduser";

const redusers = combineReducers({
    navbar: navbarReduser,
    profilePage: profileReduser,
})

export const store = createStore(redusers);