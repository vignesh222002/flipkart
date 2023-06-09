import { configureStore } from "@reduxjs/toolkit";
import cartLoginRouteReducer from './cartLoginRoute/CartLoginRoute'
import deleteAddressReducer from './deleteAddress/DeleteAddress'
import profilePopupReducer from './profilePopupOtp/ProfilePopupOtp'
import loginReducer from './login/login'
import filterReducer from './filter/Filter'
import sectorReducer from './sector/Sector'
import userInfoReducer from './userInformation/UserInformation'

const store = configureStore({
    reducer: {
        cartLoginPath: cartLoginRouteReducer,
        deleteAddressPopup: deleteAddressReducer,
        updateUserInfo: profilePopupReducer,
        login: loginReducer,
        filter: filterReducer,
        sector: sectorReducer,
        userInfo: userInfoReducer,
    }
})

export default store