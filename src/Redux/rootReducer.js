import { combineReducers } from "redux";
import cartLoginRouteReducer from "./CartLoginRoute/cartLoginRoute";
import UpdateUserInfoReducer from "./ProfilePopup/ProfilePopupOtp";
import DeleteAddressPopupReducer from "./DeleteAddressPopup/deleteAddress";


const rootReducer = combineReducers({
    cartLoginPath: cartLoginRouteReducer,
    updateUserInfo: UpdateUserInfoReducer,
    deleteAddressPopup: DeleteAddressPopupReducer
})

export default rootReducer