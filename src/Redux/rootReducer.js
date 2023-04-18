import { combineReducers } from "redux";
import cartLoginRouteReducer from "./CartLoginRoute/cartLoginRoute";


const rootReducer = combineReducers({
    cartLoginPath: cartLoginRouteReducer
})

export default rootReducer