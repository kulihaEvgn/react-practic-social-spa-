import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReduser } from "./auth-reduser";
import { dialogsReduser } from "./dialogs-reduser";
import { profileReduser } from "./profile-reduser";
import { usersReduser } from "./users-reduser";
import thunkMiddleWare from 'redux-thunk'

const redusers = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogsReduser,
    usersPage: usersReduser,
    auth: authReduser
})
const composeEnhancers =
    (typeof window !== 'undefined' &&
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
export const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleWare)));
window.store = store;