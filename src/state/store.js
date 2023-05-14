import { configureStore } from "@reduxjs/toolkit";
import cartLoginRouteReducer from './cartLoginRoute/CartLoginRoute'
import deleteAddressReducer from './deleteAddress/DeleteAddress'
import profilePopupReducer from './profilePopupOtp/ProfilePopupOtp'

const store = configureStore({
    reducer: {
        cartLoginPath: cartLoginRouteReducer,
        deleteAddressPopup: deleteAddressReducer,
        updateUserInfo: profilePopupReducer

    }
})

export default store