import { combineReducers } from "redux";
import cartLoginRouteReducer from "./CartLoginRoute/cartLoginRoute";
import UpdateUserInfoReducer from "./ProfilePopup/ProfilePopupOtp";


const rootReducer = combineReducers({
    cartLoginPath: cartLoginRouteReducer,
    updateUserInfo: UpdateUserInfoReducer
})

export default rootReducer