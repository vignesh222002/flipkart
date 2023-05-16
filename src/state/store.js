import { configureStore } from "@reduxjs/toolkit";
import cartLoginRouteReducer from './cartLoginRoute/CartLoginRoute'
import deleteAddressReducer from './deleteAddress/DeleteAddress'
import profilePopupReducer from './profilePopupOtp/ProfilePopupOtp'
import loginReducer from './login/login'
import filterReducer from './filter/Filter'

const store = configureStore({
    reducer: {
        cartLoginPath: cartLoginRouteReducer,
        deleteAddressPopup: deleteAddressReducer,
        updateUserInfo: profilePopupReducer,
        login: loginReducer,
        filter: filterReducer,
    }
})

export default store