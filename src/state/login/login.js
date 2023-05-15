import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    mobileNumber: null,
    officialNumber: null,
    name: 'Flipkart',
    isLogin: !(!localStorage.getItem("token"))
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        updateLoginNumber: (state, action) => {
            state.mobileNumber = action.payload.mobileNumber
            state.officialNumber = action.payload.officialNumber
        },
        updateLoginIslogin: (state) => {
            state.isLogin = !(!localStorage.getItem("token"))   
        }
    }
})

export default loginSlice.reducer
export const { updateLoginNumber, updateLoginIslogin } = loginSlice.actions