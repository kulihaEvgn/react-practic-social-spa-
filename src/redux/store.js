import { createStore, combineReducers, applyMiddleware } from "redux";
import { authReduser } from "./auth-reduser";
import { dialogsReduser } from "./dialogs-reduser";
import { navbarReduser } from "./navbar-reduser";
import { profileReduser } from "./profile-reduser";
import { usersReduser } from "./users-reduser";
import thunkMiddleWare from 'redux-thunk'

const redusers = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogsReduser,
    usersPage: usersReduser,
    auth: authReduser
})

export const store = createStore(redusers, applyMiddleware(thunkMiddleWare));
window.store = store;