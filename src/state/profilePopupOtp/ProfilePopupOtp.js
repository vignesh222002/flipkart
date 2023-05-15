import { createSlice } from "@reduxjs/toolkit"

let initialState = {
    popup: false,
    purpose: "",
    number1: "",
    number2: ""
}

const profilePopupSlice = createSlice({
    name: 'profilePopup',
    initialState,
    reducers: {
        updateMobileNumber: (state, action) => {
            state.popup = true
            state.purpose = "updateMobile"
            state.number1 = action.payload.prev
            state.number2 = `+91${action.payload.current}`
        },
        updateEmail: (state, action) => {
            state.popup = true
            state.purpose = "updateEmail"
            state.number1 = action.payload.email
            state.number2 = action.payload.mobile  
        },
        didUpdate: (state) => {
            state.popup = false
            state.purpose = ""
            state.number1 = ""
            state.number2 = "" 
        }
    }
})

export default profilePopupSlice.reducer
export const { updateMobileNumber, updateEmail, didUpdate } = profilePopupSlice.actions