import { createSlice } from "@reduxjs/toolkit"


const initialState = {
    firstname: "",
    lastname: "",
    gender: "",
    email: "",
    mobilenum: "",
}

const userInfoSlice = createSlice({
    name: 'userInfo',
    initialState,
    reducers: {
        updateUserInfo: (state, action) => {
            state.firstname = action.payload.firstname
            state.lastname = action.payload.lastname
            state.gender = action.payload.gender
            state.email = action.payload.email
            state.mobilenum = action.payload.mobilenum
        },
    }
})

export default userInfoSlice.reducer
export const { updateUserInfo } = userInfoSlice.actions