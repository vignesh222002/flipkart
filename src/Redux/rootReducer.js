import { combineReducers } from "redux";
import loginReducer from "./Login/login";
import cartLoginRouteReducer from "./CartLoginRoute/cartLoginRoute";


const rootReducer = combineReducers({
    login: loginReducer,
    cartLoginPath: cartLoginRouteReducer
})

export default rootReducer