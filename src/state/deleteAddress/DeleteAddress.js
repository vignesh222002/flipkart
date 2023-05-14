import { createSlice } from "@reduxjs/toolkit"


let initialState = {
    deletePopup: false,
    id: null
}

const deleteAddressSlice = createSlice({
    name: 'deleteAddress',
    initialState,
    reducers: {
        triggerDeleteAddress: (state, action) => {
            state.deletePopup = true
            state.id = action.payload
        },
        didTriggerDeleteAddress: (state) => {
            state.deletePopup = false
            state.id = null
        }
    }
})

export default deleteAddressSlice.reducer
export const { triggerDeleteAddress, didTriggerDeleteAddress } = deleteAddressSlice.actions