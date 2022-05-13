import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import { authReduser } from "./auth-reduser";
import { dialogsReduser } from "./dialogs-reduser";
import { profileReduser } from "./profile-reduser";
import { usersReduser } from "./users-reduser";
import thunkMiddleWare from 'redux-thunk'

const rootReduser = combineReducers({
    profilePage: profileReduser,
    dialogPage: dialogsReduser,
    usersPage: usersReduser,
    auth: authReduser
})

type RootReduserType = typeof rootReduser;
export type AppStateType = ReturnType<RootReduserType>

const composeEnhancers =
    (typeof window !== 'undefined' &&
        //@ts-ignore
        window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) ||
    compose;
export const store = createStore(rootReduser, composeEnhancers(applyMiddleware(thunkMiddleWare)));
//@ts-ignore
window.store = store;