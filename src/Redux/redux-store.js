import {createStore, combineReducers, applyMiddleware, compose} from "redux";
import profileReduser from "./profile-reducer";
import dialogsReduser from "./dialogs-reducer";
import sidebarReduser from "./sidebar-reducer";
import usersReduser from "./users-reducer";
import authReduser from "./auth-reducer";
import thunkMiddleware from "redux-thunk"
import {reducer as formReduser }from "redux-form"
import appReduser from "./app-reducer";

let redusers = combineReducers({
    dialogsPage: dialogsReduser,
    profilePage: profileReduser,
    sidebar: sidebarReduser,
    usersPage: usersReduser,
    auth: authReduser,
    form: formReduser,
    app: appReduser
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(redusers, composeEnhancers(applyMiddleware(thunkMiddleware)
));
//Это что бы работало расширение для браузера
export default store;